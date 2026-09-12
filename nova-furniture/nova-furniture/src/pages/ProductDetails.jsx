import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, MessageCircle, ShoppingCart, ChevronDown } from "lucide-react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Button from "../components/Button";
import QuantitySelector from "../components/QuantitySelector";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";
import STORE from "../config/store";
import { getProductById, getRelatedProducts, CATEGORIES } from "../data/products";
import { useCart } from "../context/CartContext";
import { sendSingleProductToWhatsApp } from "../utils/whatsapp";
import usePageMeta from "../utils/usePageMeta";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Most orders within major cities are delivered in 3–5 working days after your order is confirmed on WhatsApp. Bulk orders may take slightly longer depending on quantity.",
  },
  {
    q: "Can I request a different color?",
    a: "Yes — color availability varies by product. Send us a message on WhatsApp and we'll confirm what's in stock before you order.",
  },
  {
    q: "Do you offer a warranty?",
    a: "All NOVA products come with a manufacturer warranty covering structural defects. Warranty length is listed in the specifications above.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Yes, within 7 days of delivery for unused items in original condition. Contact us on WhatsApp to arrange a pickup.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  usePageMeta(
    product ? `${product.name} — NOVA Furniture` : "Product — NOVA Furniture",
    product?.shortDescription
  );

  useEffect(() => setQuantity(1), [id]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const categoryLabel = CATEGORIES.find((c) => c.id === product.category)?.label ?? "Furniture";
  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="container-nova py-10 md:py-16">
      <nav className="text-sm text-stone-500 mb-8">
        <Link to="/" className="hover:text-ink transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-ink transition-colors">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImagePlaceholder
            src={product.image}
            alt={product.name}
            label={product.name}
            aspect="aspect-square"
            rounded="rounded-3xl"
            className="w-full sticky top-24"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-wider text-stone-500">{categoryLabel}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-medium text-ink text-balance">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <span className="flex items-center gap-1 text-sm text-stone-700">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {product.rating} <span className="text-stone-400">({product.reviews} reviews)</span>
            </span>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                product.availability === "In Stock"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-accent-soft text-accent-ink"
              }`}
            >
              {product.availability}
            </span>
          </div>

          <p className="mt-5 font-display text-3xl text-ink">{STORE.currency.format(product.price)}</p>
          <p className="mt-4 text-stone-600 leading-relaxed">{product.shortDescription}</p>

          <div className="mt-7 flex items-center gap-4">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
            <span className="text-sm text-stone-500">
              Subtotal: <span className="font-medium text-ink">{STORE.currency.format(product.price * quantity)}</span>
            </span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAddToCart} variant="primary" size="lg" className="flex-1">
              <AnimatePresence mode="wait" initial={false}>
                {added ? (
                  <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Check className="h-4 w-4" /> Added to Cart
                  </motion.span>
                ) : (
                  <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
            <Button
              onClick={() => sendSingleProductToWhatsApp(product, quantity)}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              className="flex-1"
            >
              Order on WhatsApp
            </Button>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-12 border-t border-stone-200 pt-8">
            <h2 className="font-medium text-ink text-lg">Product Description</h2>
            <p className="mt-3 text-stone-600 leading-relaxed">{product.description}</p>
          </div>

          {/* FEATURES */}
          <div className="mt-8">
            <h2 className="font-medium text-ink text-lg">Product Features</h2>
            <ul className="mt-3 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-stone-600">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent-ink" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SPECIFICATIONS */}
          <div className="mt-8">
            <h2 className="font-medium text-ink text-lg">Specifications</h2>
            <dl className="mt-3 divide-y divide-stone-200 border-t border-stone-200">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2.5 text-sm">
                  <dt className="text-stone-500">{key}</dt>
                  <dd className="text-ink font-medium text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* FAQ */}
          <div className="mt-8">
            <h2 className="font-medium text-ink text-lg">Frequently Asked Questions</h2>
            <div className="mt-3 divide-y divide-stone-200 border-t border-b border-stone-200">
              {FAQS.map((faq, i) => (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-ink"
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-4 w-4 text-stone-500" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-sm text-stone-600 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <div className="mt-20 md:mt-28">
          <SectionHeading title="You May Also Like" />
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </div>
      )}
    </div>
  );
}
