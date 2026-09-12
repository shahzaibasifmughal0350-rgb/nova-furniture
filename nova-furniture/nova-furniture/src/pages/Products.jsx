import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import BulkOrderBanner from "../components/BulkOrderBanner";
import { PRODUCTS, CATEGORIES } from "../data/products";
import usePageMeta from "../utils/usePageMeta";

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
];

const PRICE_BANDS = [
  { id: "all", label: "Any Price" },
  { id: "under-2500", label: "Under Rs. 2,500" },
  { id: "2500-6000", label: "Rs. 2,500 – 6,000" },
  { id: "6000-20000", label: "Rs. 6,000 – 20,000" },
  { id: "over-20000", label: "Over Rs. 20,000" },
];

function inPriceBand(price, band) {
  switch (band) {
    case "under-2500":
      return price < 2500;
    case "2500-6000":
      return price >= 2500 && price <= 6000;
    case "6000-20000":
      return price > 6000 && price <= 20000;
    case "over-20000":
      return price > 20000;
    default:
      return true;
  }
}

export default function Products() {
  usePageMeta(
    "Plastic Chairs & Gaming Chairs — NOVA Furniture",
    "Shop NOVA Furniture's full collection of plastic chairs, gaming chairs, outdoor seating and stools. Search, filter and sort to find the right chair for every space."
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "all");
  const [priceBand, setPriceBand] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (category !== "all") params.category = category;
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const matchesSearch =
        !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      const matchesPrice = inPriceBand(p.price, priceBand);
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [search, category, priceBand, sort]);

  return (
    <div className="container-nova py-12 md:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-medium text-ink">Shop Our Furniture Collection</h1>
        <p className="mt-3 text-lg text-stone-600">
          Explore durable plastic chairs, gaming chairs and modern seating solutions.
        </p>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-full border border-stone-300 bg-white pl-11 pr-4 py-2.5 text-sm outline-none focus:border-ink transition-colors placeholder:text-stone-400"
          />
        </div>

        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="lg:hidden inline-flex items-center gap-2 self-start rounded-full border border-stone-300 px-4 py-2.5 text-sm font-medium text-ink"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters &amp; Sort
        </button>

        <div className="hidden lg:flex items-center gap-3">
          <FilterSelect value={category} onChange={setCategory} label="Category" options={[{ id: "all", label: "All Categories" }, ...CATEGORIES]} />
          <FilterSelect value={priceBand} onChange={setPriceBand} label="Price" options={PRICE_BANDS} />
          <FilterSelect value={sort} onChange={setSort} label="Sort" options={SORT_OPTIONS} />
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-4">
              <FilterSelect value={category} onChange={setCategory} label="Category" options={[{ id: "all", label: "All Categories" }, ...CATEGORIES]} />
              <FilterSelect value={priceBand} onChange={setPriceBand} label="Price" options={PRICE_BANDS} />
              <FilterSelect value={sort} onChange={setSort} label="Sort" options={SORT_OPTIONS} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-sm text-stone-500">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      <motion.div layout className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${search}-${category}-${priceBand}-${sort}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ProductGrid products={filtered} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="mt-20">
        <BulkOrderBanner />
      </div>
    </div>
  );
}

function FilterSelect({ value, onChange, label, options }) {
  return (
    <label className="relative">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full border border-stone-300 bg-white pl-4 pr-9 py-2.5 text-sm text-ink outline-none focus:border-ink transition-colors cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs">▾</span>
    </label>
  );
}
