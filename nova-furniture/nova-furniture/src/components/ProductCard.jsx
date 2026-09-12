import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Check } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import STORE from "../config/store";
import { useCart } from "../context/CartContext";
import { CATEGORIES } from "../data/products";

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const categoryLabel = CATEGORIES.find((c) => c.id === product.category)?.label ?? "Furniture";

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-stone-100">
          <div className="overflow-hidden rounded-2xl">
            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <ImagePlaceholder
                src={product.image}
                alt={product.name}
                label={product.name}
                aspect="aspect-[4/5]"
                rounded="rounded-2xl"
                className="w-full"
              />
            </motion.div>
          </div>

          {product.availability !== "In Stock" && (
            <span className="absolute top-3 left-3 rounded-full bg-paper/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-accent-ink">
              {product.availability}
            </span>
          )}

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.9 }}
            aria-label={`Add ${product.name} to cart`}
            className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink shadow-lift opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 focus-visible:opacity-100 focus-visible:translate-y-0 hover:bg-accent hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Check className="h-[18px] w-[18px]" />
                </motion.span>
              ) : (
                <motion.span
                  key="cart"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <div className="mt-4 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-stone-500">{categoryLabel}</p>
            <h3 className="mt-0.5 font-medium text-ink truncate">{product.name}</h3>
            <p className="mt-0.5 text-sm text-stone-500 line-clamp-1">{product.shortDescription}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-lg text-ink">{STORE.currency.format(product.price)}</span>
          <span className="flex items-center gap-1 text-sm text-stone-600">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {product.rating}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
