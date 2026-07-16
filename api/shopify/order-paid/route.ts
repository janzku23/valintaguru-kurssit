import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { provisionStudent } from "@/utils/supabase/provisionStudent";

export const runtime = "nodejs";

/*
 * Avaimena on Shopifyn variant_id.
 * Arvona on data/courses.ts-tiedoston course.id.
 *
 * Tarkista, että oikealla puolella olevat arvot vastaavat
 * täsmälleen courses.ts-tiedoston kurssitunnuksia.
 */
const SHOPIFY_COURSE_MAP: Record<string, string> = {
  /*
   * Oikeustiede kyssäripankki
   */
  "10586592149768": "oikis",

  /*
   * Oikis Teho – valmennuskurssi
   */
  "10586685997320": "oikis",

  /*
   * Oikis Super – valmennuskurssi
   */
  "10586651754760": "oikis",

  /*
   * Oikis Tiivis – Ennakkomateriaalin hallintaan
   */
  "10586610565384": "oikis",

  /*
   * Valintakoe G tehokurssi
   *
   * Vaihda "laakis" oikeaksi course.id-arvoksi,
   * jos data/courses.ts käyttää muuta tunnusta.
   */
  "10586546864392": "laakis",

  /*
   * Materiaalipankki + harjoituskokeet 4 kpl
   */
  "10586517176584": "laakis",

  /*
   * Materiaalipankki
   */
  "10586421657864": "laakis",

  /*
   * Terveystiedon yo-valmennus
   *
   * Vaihda tämä tarvittaessa data/courses.ts-tiedoston
   * oikeaksi tunnukseksi.
   */
  "10616174313736": "terveystieto",
};

type ShopifyLineItem = {
  product_id?: string | number | null;
  variant_id?: string | number | null;
  title?: string | null;
  name?: string | null;
};

type ShopifyOrder = {
  id?: string | number;
  email?: string | null;
  contact_email?: string | null;
  customer?: {
    email?: string | null;
  } | null;
  billing_address?: {
    email?: string | null;
  } | null;
  line_items?: ShopifyLineItem[];
};

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function getSiteUrl(request: NextRequest) {
  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredSiteUrl) {
    return configuredSiteUrl.replace(/\/$/, "");
  }

  return request.nextUrl.origin;
}

function verifyShopifyWebhook(
  rawBody: string,
  hmacHeader: string | null
) {
  const webhookSecret =
    process.env.SHOPIFY_WEBHOOK_SECRET;

  if (!webhookSecret || !hmacHeader) {
    return false;
  }

  const generatedHash = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody, "utf8")
    .digest("base64");

  const generatedBuffer =
    Buffer.from(generatedHash, "utf8");

  const receivedBuffer =
    Buffer.from(hmacHeader, "utf8");

  if (
    generatedBuffer.length !==
    receivedBuffer.length
  ) {
    return false;
  }

  return crypto.timingSafeEqual(
    generatedBuffer,
    receivedBuffer
  );
}

function findOrderEmail(order: ShopifyOrder) {
  const possibleEmail =
    order.email ||
    order.contact_email ||
    order.customer?.email ||
    order.billing_address?.email;

  return typeof possibleEmail === "string"
    ? normalizeEmail(possibleEmail)
    : "";
}

function resolvePurchasedCourseIds(
  lineItems: ShopifyLineItem[]
) {
  return Array.from(
    new Set(
      lineItems
        .map((item) => {
          if (
            item.variant_id === null ||
            item.variant_id === undefined
          ) {
            return null;
          }

          const variantId =
            String(item.variant_id);

          return (
            SHOPIFY_COURSE_MAP[variantId] ??
            null
          );
        })
        .filter(
          (courseId): courseId is string =>
            Boolean(courseId)
        )
    )
  );
}

export async function POST(
  request: NextRequest
) {
  try {
    const rawBody = await request.text();

    const hmacHeader =
      request.headers.get(
        "x-shopify-hmac-sha256"
      );

    const validWebhook =
      verifyShopifyWebhook(
        rawBody,
        hmacHeader
      );

    if (!validWebhook) {
      return NextResponse.json(
        {
          error:
            "Invalid Shopify webhook signature",
        },
        {
          status: 401,
        }
      );
    }

    let order: ShopifyOrder;

    try {
      order =
        JSON.parse(rawBody) as ShopifyOrder;
    } catch {
      return NextResponse.json(
        {
          error:
            "Shopify webhook body is not valid JSON",
        },
        {
          status: 400,
        }
      );
    }

    const email = findOrderEmail(order);

    if (!email) {
      return NextResponse.json(
        {
          error:
            "Order email missing",
        },
        {
          status: 400,
        }
      );
    }

    const lineItems =
      Array.isArray(order.line_items)
        ? order.line_items
        : [];

    const purchasedCourseIds =
      resolvePurchasedCourseIds(lineItems);

    if (purchasedCourseIds.length === 0) {
      return NextResponse.json({
        ok: true,
        message:
          "No matching course products in this order",
        email,
        orderId:
          order.id !== undefined
            ? String(order.id)
            : null,
      });
    }

    /*
     * Käytetään täsmälleen samaa käyttäjänluontipalvelua
     * kuin admin-paneelissa.
     */
    const result = await provisionStudent({
      email,
      courseIds: purchasedCourseIds,
      siteUrl: getSiteUrl(request),
      createdBy: "shopify",
    });

    return NextResponse.json({
      ok: true,
      email: result.email,
      orderId:
        order.id !== undefined
          ? String(order.id)
          : null,
      invited: result.invited,
      user: {
        id: result.user.id,
        email: result.email,
      },
      courses: result.courses,
    });
  } catch (error) {
    console.error(
      "Shopify order-paid webhook epäonnistui:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Tuntematon palvelinvirhe.";

    /*
     * 429 tai 500 aiheuttaa sen, että Shopify voi yrittää
     * webhookia myöhemmin uudelleen.
     */
    const status =
      message
        .toLowerCase()
        .includes("email rate limit exceeded")
        ? 429
        : 500;

    return NextResponse.json(
      {
        error: message,
      },
      {
        status,
      }
    );
  }
}