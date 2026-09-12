import { MessageCircle } from "lucide-react";
import Button from "./Button";

/**
 * Generic "chat on WhatsApp" button — opens a plain WhatsApp conversation.
 * For order-specific messages (cart, single product, bulk), use the
 * functions in utils/whatsapp.js directly with onClick instead.
 */
export default function WhatsAppButton({ number, message = "", children = "Chat on WhatsApp", ...props }) {
  const digits = number.replace(/[^\d]/g, "");
  const url = `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <Button href={url} variant="whatsapp" icon={MessageCircle} {...props}>
      {children}
    </Button>
  );
}
