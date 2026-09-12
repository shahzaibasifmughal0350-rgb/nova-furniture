// ---------------------------------------------------------------------------
// NOVA Furniture — minimal Express API.
//
// The storefront works fully on its own using the local data in
// src/data/products.js — this server is an optional add-on for anyone who
// wants to serve product data from a real backend instead (e.g. to later
// swap in a database). Run it separately from the frontend:
//
//   cd server
//   npm install
//   npm run dev
//
// It listens on PORT (default 4000) and exposes:
//   GET /api/products            -> full catalog
//   GET /api/products/:id        -> single product
//   GET /api/categories          -> category list
// ---------------------------------------------------------------------------

import express from "express";
import cors from "cors";
import { PRODUCTS, CATEGORIES } from "./data.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/products", (req, res) => {
  const { category, search } = req.query;
  let results = PRODUCTS;

  if (category && category !== "all") {
    results = results.filter((p) => p.category === category);
  }
  if (search) {
    const q = String(search).toLowerCase();
    results = results.filter((p) => p.name.toLowerCase().includes(q));
  }

  res.json(results);
});

app.get("/api/products/:id", (req, res) => {
  const product = PRODUCTS.find((p) => String(p.id) === String(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

app.get("/api/categories", (req, res) => {
  res.json(CATEGORIES);
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`NOVA Furniture API running at http://localhost:${PORT}`);
});
