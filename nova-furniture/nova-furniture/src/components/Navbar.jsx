import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import STORE from "../config/store";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [navigate]);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/products${query ? `?search=${encodeURIComponent(query)}` : ""}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-stone-200 shadow-[0_1px_0_rgba(20,23,26,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-nova flex h-[4.5rem] items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper font-display text-lg">
            N
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            {STORE.brandShort} <span className="text-stone-500 font-sans text-sm font-normal">Furniture</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-ink" : "text-stone-700 hover:text-ink"
                } group`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-[2px] bg-accent origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            aria-label="Search products"
            onClick={() => setSearchOpen((s) => !s)}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-stone-700 hover:text-ink hover:bg-stone-100 transition-colors"
          >
            <Search className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <Link
            to="/cart"
            aria-label={`Cart, ${totalQuantity} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-stone-700 hover:text-ink hover:bg-stone-100 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
            <AnimatePresence>
              {totalQuantity > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white"
                >
                  {totalQuantity}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((m) => !m)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-stone-100 transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="hidden sm:block overflow-hidden border-b border-stone-200 bg-paper"
          >
            <form onSubmit={submitSearch} className="container-nova py-4">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search chairs, stools, gaming seats..."
                className="w-full bg-transparent border-b border-stone-300 focus:border-ink pb-2 text-lg outline-none placeholder:text-stone-400"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-stone-200 bg-paper"
          >
            <div className="container-nova py-4 flex flex-col gap-1">
              <form onSubmit={submitSearch} className="mb-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-stone-100 rounded-full px-4 py-2.5 text-sm outline-none placeholder:text-stone-400"
                />
              </form>
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-medium border-b border-stone-100 ${
                        isActive ? "text-accent" : "text-ink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
