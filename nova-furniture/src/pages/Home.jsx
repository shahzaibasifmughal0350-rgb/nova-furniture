import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Layers, Wallet, Mail } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ProductGrid from "../components/ProductGrid";
import CategoryCard from "../components/CategoryCard";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import BulkOrderBanner from "../components/BulkOrderBanner";
import { getFeaturedProducts } from "../data/products";
import usePageMeta from "../utils/usePageMeta";

const CATEGORY_ITEMS = [
  {
    title: "Plastic Chairs",
    description: "Durable and practical chairs for homes, businesses, events, and everyday use.",
    image: "C:\Users\DELL\Desktop\nova-furniture\public\images",
    to: "/products?category=plastic-chairs",
  },
  {
    title: "Gaming Chairs",
    description: "Comfort-focused gaming chairs designed for long gaming and working sessions.",
    image: "/images/category-gaming-chairs.jpg",
    to: "/products?category=gaming-chairs",
  },
  {
    title: "Outdoor Furniture",
    description: "Weather-friendly furniture designed for outdoor spaces.",
    image: "/images/category-outdoor.jpg",
    to: "/products?category=outdoor",
  },
  {
    title: "Office Seating",
    description: "Comfortable seating solutions for modern workspaces.",
    image: "/images/category-office.jpg",
    to: "/products?category=office",
  },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Durable Construction",
    description: "Built with durable materials for everyday use and long-lasting performance.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Design",
    description: "Thoughtfully designed seating that keeps comfort in mind.",
  },
  {
    icon: Layers,
    title: "Modern Styles",
    description: "Clean and modern designs that fit naturally into different spaces.",
  },
  {
    icon: Wallet,
    title: "Affordable Quality",
    description: "Reliable furniture without unnecessary premium pricing.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Excellent quality and very comfortable chairs. We ordered several for our office and everyone loved them.",
    name: "Ahmed R.",
  },
  {
    quote: "Very good design and strong build quality. The chairs look great in our outdoor area.",
    name: "Usman K.",
  },
  {
    quote: "The gaming chair is comfortable and looks amazing. Great value for the price.",
    name: "Ali M.",
  },
];

export default function Home() {
  usePageMeta(
    "NOVA Furniture — Plastic Chairs & Gaming Chairs",
    "Durable, stylish and affordable plastic chairs, gaming chairs and seating for homes, offices, restaurants, cafés, events, schools and outdoor spaces."
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-soft blur-3xl opacity-60"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-nova relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 py-14 md:py-20 items-center">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-accent-ink"
            >
              Plastic furniture, reimagined
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-4xl sm:text-5xl md:text-6xl font-medium text-ink leading-[1.05] text-balance"
            >
              Comfort. Style. Built to Last.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-lg text-stone-600 max-w-md text-balance"
            >
              Discover durable and stylish plastic furniture designed for modern homes, businesses,
              outdoor spaces, and everyday living.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button to="/products?category=plastic-chairs" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Shop Chairs
              </Button>
              <Button to="/products" variant="outline" size="lg">
                Explore Collection
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-8"
            >
              <Stat value="12k+" label="Chairs delivered" />
              <Stat value="4.7/5" label="Average rating" />
              <Stat value="2–4yr" label="Warranty coverage" />
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 -z-10" />
              <ImagePlaceholder
                src="/images/hero.jpg"
                alt="NOVA Furniture hero chair"
                label="HERO IMAGE PLACEHOLDER"
                aspect="aspect-[4/5] md:aspect-[5/6]"
                rounded="rounded-[2rem]"
                className="w-full shadow-lift"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 md:py-24">
        <div className="container-nova">
          <SectionHeading title="Find the Right Chair for Every Space" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORY_ITEMS.map((item, i) => (
              <CategoryCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container-nova">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading title="Featured Chairs" subtitle="Explore our most popular seating solutions." />
            <Button to="/products" variant="outline" icon={ArrowRight} iconPosition="right" className="shrink-0">
              View All Products
            </Button>
          </div>
          <div className="mt-10">
            <ProductGrid products={getFeaturedProducts()} />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NOVA */}
      <section className="py-16 md:py-24">
        <div className="container-nova">
          <SectionHeading title="Furniture Made for Real Life" align="center" className="mx-auto text-center" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTIONAL SPLIT */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container-nova grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImagePlaceholder
              src="/images/promo.jpg"
              alt="NOVA Furniture promotional collection"
              label="PROMO IMAGE PLACEHOLDER"
              aspect="aspect-[4/3]"
              rounded="rounded-3xl"
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-ink text-balance">
              Upgrade Your Space Without Overspending.
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-md">
              Explore durable, stylish and affordable chairs designed for everyday living.
            </p>
            <Button to="/products" variant="accent" size="lg" className="mt-7" icon={ArrowRight} iconPosition="right">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24">
        <div className="container-nova">
          <SectionHeading title="What Our Customers Say" align="center" className="mx-auto text-center" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BULK ORDER */}
      <section className="pb-16 md:pb-24">
        <div className="container-nova">
          <BulkOrderBanner />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="pb-20 md:pb-28">
        <div className="container-nova">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-stone-200 bg-white px-8 py-12 md:px-16 md:py-16 text-center max-w-2xl mx-auto"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="mt-5 text-2xl md:text-3xl font-medium text-ink">Get Updates & Special Offers</h2>
            <p className="mt-3 text-stone-600">
              Subscribe to receive new product announcements, special offers and furniture
              inspiration.
            </p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{value}</p>
      <p className="text-xs text-stone-500 mt-0.5">{label}</p>
    </div>
  );
}

function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        required
        type="email"
        placeholder="you@email.com"
        className="flex-1 rounded-full border border-stone-300 px-5 py-3 text-sm outline-none focus:border-ink transition-colors placeholder:text-stone-400"
      />
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
    </form>
  );
}
