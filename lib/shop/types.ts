export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  content: string;
  audience: string;
  price_cents: number;
  sale_price_cents: number | null;
  currency: "EUR";
  vat_percentage: number | null;
  course_ids: string[];
  access_days: number | null;
  legal_kind: "digital_content" | "service" | null;
  published: boolean;
  visible: boolean;
  archived: boolean;
  reviewed: boolean;
  sort_order: number;
  image_url: string | null;
  created_at: string;
  updated_at: string;
};
export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  name: string;
  price_cents: number;
  discount_cents: number;
  total_cents: number;
  vat_percentage: number;
  course_ids: string[];
  access_days: number | null;
  legal_kind: "digital_content" | "service";
  description: string;
};
export type Quote = {
  items: OrderItem[];
  subtotal_cents: number;
  discount_cents: number;
  amount_cents: number;
  currency: "EUR";
};
export type PaymentStatus =
  "creating" | "unknown" | "new" | "ok" | "fail" | "pending" | "delayed";
export type Payment = {
  id: string;
  order_id: string;
  transaction_id: string | null;
  stamp: string;
  status: PaymentStatus;
  href: string | null;
  provider: string | null;
  request_id: string | null;
  created_at: string;
};
export type Order = {
  id: string;
  number: number;
  email: string;
  customer_name: string;
  access_hash: string;
  mode: "test" | "production";
  merchant_id: string;
  status: "unpaid" | "paid" | "partially_refunded" | "refunded";
  amount_cents: number;
  discount_cents: number;
  currency: "EUR";
  user_id: string | null;
  fulfillment_status: "pending" | "delivered";
  paid_at: string | null;
  created_at: string;
  cancellation_requested_at: string | null;
  new_user: boolean;
  terms_version: string;
  terms_snapshot: {
    version: string;
    paragraphs: string[];
    checkout_consents?: string[];
  };
  immediate_consent: boolean;
  withdrawal_ack: boolean;
};
export type Refund = {
  id: string;
  order_id: string;
  payment_id: string;
  transaction_id: string | null;
  amount_cents: number;
  revoke_item_ids: string[];
  status: "creating" | "unknown" | "pending" | "ok" | "fail";
  created_at: string;
};
export type Job = {
  id: string;
  order_id: string;
  kind: "fulfill" | "receipt" | "access" | "pending" | "refund" | "cancel";
  refund_id: string | null;
  attempts: number;
  lease_token: string;
  status: string;
};
export type Discount = {
  id: string;
  code: string;
  kind: "percent" | "fixed";
  value: number;
  active: boolean;
  starts_at: string;
  ends_at: string | null;
  max_uses: number | null;
  product_ids: string[];
};
export type PublicOrder = {
  id: string;
  number: number;
  status: Order["status"];
  amount_cents: number;
  fulfillment_status: Order["fulfillment_status"];
  payment_status: PaymentStatus | null;
  items: Pick<
    OrderItem,
    "product_id" | "name" | "total_cents" | "access_days"
  >[];
  access_email_sent: boolean;
  cancellation_requested: boolean;
  mode: Order["mode"];
};
export function money(cents: number) {
  return new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

export function accessDuration(days: number | null) {
  return days === null ? "toistaiseksi" : `${days} päivää`;
}
