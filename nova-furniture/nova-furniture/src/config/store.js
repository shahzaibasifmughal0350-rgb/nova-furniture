// ---------------------------------------------------------------------------
// Central store configuration.
// Edit the values below to connect this storefront to a real business —
// nothing else in the codebase should need to change.
// ---------------------------------------------------------------------------

export const STORE = {
  brandName: "NOVA Furniture",
  brandShort: "NOVA",
  tagline: "Comfort. Style. Built to Last.",

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // Example: Pakistan number 0300 1234567 -> "923001234567"
  whatsappNumber: "923290350453",

  email: "shahzaibasifmughal0350@gmail.com",
  phone: "923290350453",
  address: "Plot 14, Industrial Avenue, Lahore, Pakistan",

  currency: {
    code: "PKR",
    symbol: "Rs.",
    // Formats a number as "Rs. 10,000"
    format(amount) {
      return `${this.symbol} ${Number(amount).toLocaleString("en-PK")}`;
    },
  },

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },

  year: 2026,
};

export default STORE;
