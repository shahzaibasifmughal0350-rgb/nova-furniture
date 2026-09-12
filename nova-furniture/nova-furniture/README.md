# NOVA Furniture

A premium, full-stack e-commerce storefront for a plastic furniture brand — plastic chairs, gaming chairs, outdoor seating and stools — with WhatsApp-based ordering instead of a payment gateway.

## Tech stack

- **Frontend:** React 19, React Router, Tailwind CSS v4, Framer Motion, Lucide icons — built with Vite
- **Backend (optional):** Node.js + Express, serving product data as a JSON API
- **State/data:** React state + Context for the cart, `localStorage` for persistence, product data in a local module

## Getting started (frontend)

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`). This is all you need — the storefront runs entirely on local data and does not require the backend below.

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally
```

## Optional backend

A minimal Express API mirrors the product catalog, useful if you want to later swap local data for a real database.

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:4000` with `GET /api/products`, `GET /api/products/:id`, and `GET /api/categories`. The frontend does not call this API by default — it's provided as a starting point.

## Connecting your real business

Everything business-specific lives in **`src/config/store.js`**:

- `whatsappNumber` — your real WhatsApp Business number, digits only (country code, no `+`)
- `email`, `phone`, `address`
- `currency` — symbol and formatting
- `brandName`, `social` links

Nothing else in the codebase needs to change.

## Adding real product photos

Drop images into `public/images/` using the filenames already referenced in `src/data/products.js` (e.g. `product-1.jpg`, `hero.jpg`, `category-plastic-chairs.jpg`). Until a file exists, every image slot automatically renders an on-brand placeholder — the layout never breaks.

## How ordering works

There is no payment gateway. On the Cart page and Product Details page, "Order on WhatsApp" opens WhatsApp with a pre-filled message containing the product, quantity, price and (for cart checkout) the customer's delivery details, using the official `wa.me` click-to-chat link. The business confirms every order manually in WhatsApp.

## Project structure

```
src/
  components/   Reusable UI (Navbar, ProductCard, CartItem, OrderForm, ...)
  pages/        Home, Products, ProductDetails, About, Contact, Cart
  data/         Product catalog
  config/       store.js — brand/WhatsApp/contact/currency config
  utils/        whatsapp.js, cart.js, usePageMeta.js
  context/      CartContext.jsx
  layouts/      MainLayout.jsx
server/         Optional Express API
```
