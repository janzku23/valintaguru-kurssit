// Public seller information confirmed by the owner on 3 November 2026.
export const SHOP_SELLER = {
  name: "ValintaGuru Oy",
  businessId: "3573013-4",
  email: "info@valintaguru.com",
  // Same sender fallback as the existing inquiries and admin reply integrations.
  emailFrom: "ValintaGuru <info@valintaguru.fi>",
  postalAddress: "Purolantie 3, 65300 Vaasa",
} as const;

export function shopSender(override?: string) {
  return override?.trim() || SHOP_SELLER.emailFrom;
}
