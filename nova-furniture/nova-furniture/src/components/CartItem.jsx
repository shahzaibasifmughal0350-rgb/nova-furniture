import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import QuantitySelector from "./QuantitySelector";
import STORE from "../config/store";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -24, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-4 py-6 border-b border-stone-200"
    >
      <Link to={`/products/${item.id}`} className="shrink-0">
        <ImagePlaceholder
          src={item.image}
          alt={item.name}
          label={item.name}
          aspect="aspect-square"
          rounded="rounded-xl"
          className="w-24 h-24"
        />
      </Link>

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link to={`/products/${item.id}`} className="font-medium text-ink hover:text-accent-ink transition-colors line-clamp-1">
              {item.name}
            </Link>
            <p className="mt-0.5 text-sm text-stone-500">{STORE.currency.format(item.price)}</p>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-400 hover:text-accent-ink hover:bg-stone-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(item.id)}
            onDecrease={() => decreaseQuantity(item.id)}
            size="sm"
          />
          <span className="font-medium text-ink">{STORE.currency.format(item.price * item.quantity)}</span>
        </div>
      </div>
    </motion.div>
  );
}
