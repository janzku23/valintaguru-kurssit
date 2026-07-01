import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/utils/supabase/admin";

export const runtime = "nodejs";

const SHOPIFY_COURSE_MAP: Record<string, string> = {
  // Vaihda nämä Shopify-tuotteiden variant ID -arvoihin
  // Esimerkki:
  // "1234567890": "yo-biologia",
  // "2345678901": "yo-kemia",
  // "3456789012": "yo-fysiikka",
  // "4567890123": "oikis",
  // "5678901234": "laakis",
/*
  Oikeustiede kyssäripankki	10586592149768
Oikis Teho – valmennuskurssi	10586685997320
Oikis Super – valmennuskurssi	10586651754760
Oikis Tiivis – Ennakkomateriaalin hallintaan	10586610565384
Valintakoe G tehokurssi	10586546864392
Materiaalipankki + harjoituskokeet 4 kpl	10586517176584
Materiaalipankki	10586421657864
Terveystiedon yo-valmennus	10616174313736
*/
  "SHOPIFY_VARIANT_ID_BIOLOGIA": "yo-biologia",
  "SHOPIFY_VARIANT_ID_KEMIA": "yo-kemia",
  "SHOPIFY_VARIANT_ID_FYSIIKKA": "yo-fysiikka",
  "SHOPIFY_VARIANT_ID_OIKIS": "oikis",
  "SHOPIFY_VARIANT_ID_LAAKIS": "laakis",
};

function verifyShopifyWebhook(rawBody: string, hmacHeader: string | null) {
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET;

  if (!secret || !hmacHeader) {
    return false;
  }

  const generatedHash = crypto
    .createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("base64");

  return crypto.timingSafeEqual(
    Buffer.from(generatedHash, "utf8"),
    Buffer.from(hmacHeader, "utf8")
  );
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  const hmacHeader = request.headers.get("x-shopify-hmac-sha256");
  const isValidWebhook = verifyShopifyWebhook(rawBody, hmacHeader);

  if (!isValidWebhook) {
    return NextResponse.json(
      { error: "Invalid Shopify webhook signature" },
      { status: 401 }
    );
  }

  const order = JSON.parse(rawBody);

  const email =
    order.email ||
    order.contact_email ||
    order.customer?.email ||
    order.billing_address?.email;

  if (!email) {
    return NextResponse.json(
      { error: "Order email missing" },
      { status: 400 }
    );
  }

  const normalizedEmail = normalizeEmail(email);

  const lineItems = order.line_items || [];

  const purchasedCourseSlugs = lineItems
    .map((item: any) => {
      const variantId = String(item.variant_id);
      return SHOPIFY_COURSE_MAP[variantId];
    })
    .filter(Boolean);

  if (purchasedCourseSlugs.length === 0) {
    return NextResponse.json({
      ok: true,
      message: "No matching course products in this order",
    });
  }

  const supabase = createSupabaseAdminClient();

  for (const courseSlug of purchasedCourseSlugs) {
    const lineItem = lineItems.find((item: any) => {
      const variantId = String(item.variant_id);
      return SHOPIFY_COURSE_MAP[variantId] === courseSlug;
    });

    const { error: entitlementError } = await supabase
      .from("course_entitlements")
      .upsert(
        {
          email: normalizedEmail,
          course_slug: courseSlug,
          shopify_order_id: String(order.id),
          shopify_product_id: lineItem?.product_id
            ? String(lineItem.product_id)
            : null,
          shopify_variant_id: lineItem?.variant_id
            ? String(lineItem.variant_id)
            : null,
          status: "active",
        },
        {
          onConflict: "email,course_slug",
        }
      );

    if (entitlementError) {
      return NextResponse.json(
        { error: entitlementError.message },
        { status: 500 }
      );
    }
  }

  const { data: existingUsers, error: listUsersError } =
    await supabase.auth.admin.listUsers();

  if (listUsersError) {
    return NextResponse.json(
      { error: listUsersError.message },
      { status: 500 }
    );
  }

  const userAlreadyExists = existingUsers.users.some(
    (user) => user.email?.toLowerCase() === normalizedEmail
  );

  if (!userAlreadyExists) {
    const { error: inviteError } =
      await supabase.auth.admin.inviteUserByEmail(normalizedEmail, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/aseta-salasana`,
      });

    if (inviteError) {
      return NextResponse.json(
        { error: inviteError.message },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({
    ok: true,
    email: normalizedEmail,
    courses: purchasedCourseSlugs,
    invited: !userAlreadyExists,
  });
}