import STORE from "../config/store";

/**
 * Builds an official WhatsApp click-to-chat URL.
 * https://wa.me/<number>?text=<url-encoded message>
 */
function buildWhatsAppUrl(message) {
  const digitsOnly = STORE.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a full cart + customer order into the WhatsApp message body,
 * then opens WhatsApp (web or app) with it pre-filled.
 */
export function sendCartOrderToWhatsApp(cartItems, customer) {
  const lines = [];

  lines.push(`Hello ${STORE.brandName},`);
  lines.push("");
  lines.push("I would like to place an order.");
  lines.push("");
  lines.push("Order Details:");
  lines.push("");

  let total = 0;
  cartItems.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    lines.push(`Product: ${item.name}`);
    lines.push(`Quantity: ${item.quantity}`);
    lines.push(`Price: ${STORE.currency.format(item.price)}`);
    lines.push(`Subtotal: ${STORE.currency.format(subtotal)}`);
    lines.push("");
  });

  lines.push("Customer Details:");
  lines.push("");
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`City: ${customer.city}`);
  lines.push(`Address: ${customer.address}`);
  if (customer.notes) {
    lines.push(`Notes: ${customer.notes}`);
  }
  lines.push("");
  lines.push(`Total Amount: ${STORE.currency.format(total)}`);
  lines.push("");
  lines.push("Please confirm my order.");

  const message = lines.join("\n");
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

/** Opens WhatsApp with a single product pre-filled (used from Product Details). */
export function sendSingleProductToWhatsApp(product, quantity) {
  const subtotal = product.price * quantity;
  const lines = [
    `Hello ${STORE.brandName},`,
    "",
    "I would like to place an order.",
    "",
    "Order Details:",
    "",
    `Product: ${product.name}`,
    `Quantity: ${quantity}`,
    `Price: ${STORE.currency.format(product.price)}`,
    `Subtotal: ${STORE.currency.format(subtotal)}`,
    "",
    `Total Amount: ${STORE.currency.format(subtotal)}`,
    "",
    "Please share availability and confirm my order.",
  ];
  window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
}

/** Opens WhatsApp with a generic bulk-order enquiry. */
export function sendBulkOrderEnquiry() {
  const message = `Hello ${STORE.brandName}, I am interested in placing a bulk order. Please share your bulk pricing and available options.`;
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

/** Opens WhatsApp with a general contact message (used on Contact page). */
export function sendGeneralEnquiry(name, message) {
  const text = `Hello ${STORE.brandName}, my name is ${name}. ${message}`;
  window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
}
