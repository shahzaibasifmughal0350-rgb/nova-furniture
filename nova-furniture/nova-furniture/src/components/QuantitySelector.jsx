import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function QuantitySelector({ quantity, onIncrease, onDecrease, size = "md" }) {
  const dims = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 overflow-hidden">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className={`${dims} flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors`}
      >
        <Minus className="h-3.5 w-3.5" />
      </motion.button>
      <span className="w-8 text-center text-sm font-medium tabular-nums">{quantity}</span>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`${dims} flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors`}
      >
        <Plus className="h-3.5 w-3.5" />
      </motion.button>
    </div>
  );
}
