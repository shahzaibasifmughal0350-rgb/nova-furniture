import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import CartItem from "../components/CartItem";
import OrderForm from "../components/OrderForm";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import STORE from "../config/store";
import { useCart } from "../context/CartContext";
import { sendCartOrderToWhatsApp } from "../utils/whatsapp";
import usePageMeta from "../utils/usePageMeta";
import { useState } from "react";

export default function Cart() {
  usePageMeta("Your Cart — NOVA Furniture", "Review your NOVA Furniture cart and send your order directly on WhatsApp.");
  const { items, totalQuantity, totalPrice, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);

  const handleOrderSubmit = (customer) => {
    sendCartOrderToWhatsApp(items, customer);
  };

  if (items.length === 0) {
    return (
      <div className="container-nova py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md text-center"
        >
          <ImagePlaceholder
            label="EMPTY CART"
            aspect="aspect-square"
            rounded="rounded-3xl"
            className="w-40 mx-auto"
          />
          <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
            <ShoppingBag className="h-5 w-5 text-stone-500" strokeWidth={1.75} />
          </div>
          <h1 className="mt-4 text-2xl font-medium text-ink">Your cart is empty</h1>
          <p className="mt-2 text-stone-600">
            Browse our collection and add a few chairs to get started.
          </p>
          <Button to="/products" variant="primary" size="lg" className="mt-6" icon={ArrowRight} iconPosition="right">
            Shop Products
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-nova py-10 md:py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-medium text-ink">Your Cart</h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-accent-ink transition-colors"
        >
          <Trash2 className="h-3.5 w-3.5" /> Clear cart
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        <div className="lg:col-span-2">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="font-medium text-ink">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Items ({totalQuantity})</span>
                <span>{STORE.currency.format(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Delivery</span>
                <span>Confirmed on WhatsApp</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between items-baseline">
              <span className="font-medium text-ink">Total</span>
              <span className="font-display text-2xl text-ink">{STORE.currency.format(totalPrice)}</span>
            </div>

            {!showForm ? (
              <Button
                onClick={() => setShowForm(true)}
                variant="whatsapp"
                size="lg"
                className="mt-6 w-full"
              >
                Checkout on WhatsApp
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-stone-200"
              >
                <p className="text-sm text-stone-600 mb-4">
                  Add your delivery details — we'll open WhatsApp with your order filled in.
                </p>
                <OrderForm onSubmit={handleOrderSubmit} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
