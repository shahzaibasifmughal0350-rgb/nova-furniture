// ---------------------------------------------------------------------------
// Product catalog.
// Each product's `image` points at /public/images/<file>. If the file isn't
// present, <ImagePlaceholder> renders an on-brand placeholder automatically —
// nothing breaks. Drop real photos into public/images using the same names
// to go live.
// ---------------------------------------------------------------------------

export const CATEGORIES = [
  { id: "plastic-chairs", label: "Plastic Chairs" },
  { id: "gaming-chairs", label: "Gaming Chairs" },
  { id: "outdoor", label: "Outdoor Furniture" },
  { id: "office", label: "Office Seating" },
  { id: "other", label: "Other Furniture" },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "NOVA Classic Plastic Chair",
    category: "plastic-chairs",
    price: 2500,
    rating: 4.6,
    reviews: 128,
    availability: "In Stock",
    image: "/images/product-1.jpg",
    shortDescription: "The everyday chair — light, stackable and built for years of daily use.",
    description:
      "The chair that started it all. NOVA Classic is molded from a single piece of high-density polypropylene, giving it a seamless, easy-to-clean surface and a strength-to-weight ratio that holds up to years of daily use at home, in restaurants, or in classrooms. Its curved backrest flexes slightly under load for everyday comfort without any padding to wear out.",
    features: [
      "One-piece polypropylene shell — no screws to loosen over time",
      "Stacks up to 8 high for compact storage",
      "UV-stabilised finish resists fading indoors and out",
      "Wipes clean with soap and water",
      "Rounded edges, no exposed hardware",
    ],
    specs: {
      Material: "High-density polypropylene",
      Dimensions: "82 x 46 x 52 cm (H x W x D)",
      "Weight capacity": "120 kg",
      "Color options": "White, Sand, Charcoal, Signal Orange",
      Warranty: "2-year manufacturer warranty",
      Usage: "Indoor / covered outdoor",
    },
    featured: true,
  },
  {
    id: 2,
    name: "NOVA Premium Plastic Chair",
    category: "plastic-chairs",
    price: 3800,
    rating: 4.8,
    reviews: 94,
    availability: "In Stock",
    image: "/images/product-2.jpg",
    shortDescription: "A contoured seat and reinforced legs for a firmer, more considered sit.",
    description:
      "NOVA Premium takes the everyday plastic chair and adds a contoured seat pan, reinforced double-wall legs, and a slightly reclined backrest angle for longer, more comfortable sitting. It's the chair we recommend for dining rooms and offices that want the practicality of plastic without it looking or feeling basic.",
    features: [
      "Contoured seat pan for better weight distribution",
      "Reinforced double-wall legs for added rigidity",
      "8° recline angle on the backrest",
      "Felt floor pads included",
      "Fade-resistant matte finish",
    ],
    specs: {
      Material: "Reinforced polypropylene composite",
      Dimensions: "84 x 47 x 54 cm (H x W x D)",
      "Weight capacity": "135 kg",
      "Color options": "White, Sand, Sage, Charcoal",
      Warranty: "3-year manufacturer warranty",
      Usage: "Indoor",
    },
    featured: true,
  },
  {
    id: 3,
    name: "NOVA Comfort Chair",
    category: "plastic-chairs",
    price: 3200,
    rating: 4.5,
    reviews: 61,
    availability: "In Stock",
    image: "/images/product-3.jpg",
    shortDescription: "Wide seat, gentle flex, and a low centre of gravity for all-day sitting.",
    description:
      "Built for spaces where people sit for hours — waiting rooms, cafés, home offices. NOVA Comfort has a wider seat base and a backrest engineered to flex under weight, softening the sit without any foam or upholstery to maintain.",
    features: [
      "Widened 46cm seat base",
      "Flex-engineered backrest",
      "Low centre of gravity for stability",
      "Stackable up to 6 high",
    ],
    specs: {
      Material: "High-density polypropylene",
      Dimensions: "80 x 48 x 53 cm (H x W x D)",
      "Weight capacity": "125 kg",
      "Color options": "White, Charcoal, Terracotta",
      Warranty: "2-year manufacturer warranty",
      Usage: "Indoor / covered outdoor",
    },
    featured: false,
  },
  {
    id: 4,
    name: "NOVA Stack Pro Chair",
    category: "plastic-chairs",
    price: 2200,
    rating: 4.4,
    reviews: 203,
    availability: "In Stock",
    image: "/images/product-4.jpg",
    shortDescription: "Our highest-volume chair for events, schools and banquet halls.",
    description:
      "When you need a hundred chairs in a hallway by Friday, this is the one. NOVA Stack Pro is optimised for high-volume storage and transport — stacks 12 high on the included dolly, ships flat-packed in bulk, and is priced for venues that buy in quantity.",
    features: [
      "Stacks 12 high",
      "Optional transport dolly available",
      "Bulk pricing on request",
      "Scuff-resistant textured finish",
    ],
    specs: {
      Material: "Polypropylene",
      Dimensions: "80 x 45 x 50 cm (H x W x D)",
      "Weight capacity": "115 kg",
      "Color options": "White, Black, Navy",
      Warranty: "1-year manufacturer warranty",
      Usage: "Indoor / event use",
    },
    featured: true,
  },
  {
    id: 5,
    name: "NOVA Outdoor Chair",
    category: "outdoor",
    price: 3400,
    rating: 4.7,
    reviews: 77,
    availability: "In Stock",
    image: "/images/product-5.jpg",
    shortDescription: "Weatherproof seating built for sun, rain and salt air.",
    description:
      "Designed for balconies, gardens and poolside dining, NOVA Outdoor is fully weatherproof — UV-inhibited to resist fading, with drainage channels moulded into the seat so it never holds rainwater. No cushions to bring in before a storm.",
    features: [
      "UV-inhibited resin resists fading",
      "Integrated seat drainage",
      "Rust-proof — no metal components",
      "Stackable for winter storage",
    ],
    specs: {
      Material: "UV-stabilised resin",
      Dimensions: "83 x 47 x 55 cm (H x W x D)",
      "Weight capacity": "130 kg",
      "Color options": "White, Sand, Sea Green",
      Warranty: "2-year manufacturer warranty",
      Usage: "Outdoor",
    },
    featured: false,
  },
  {
    id: 6,
    name: "NOVA Dining Chair",
    category: "plastic-chairs",
    price: 4200,
    rating: 4.6,
    reviews: 52,
    availability: "In Stock",
    image: "/images/product-6.jpg",
    shortDescription: "A softer silhouette designed to sit at the table, not just on it.",
    description:
      "NOVA Dining brings a rounder, more upholstery-like silhouette to a fully plastic chair — tapered wooden-effect legs and a shell shaped to sit comfortably through a long dinner. Pairs well with both indoor tables and covered patios.",
    features: [
      "Tapered leg design",
      "Shell shaped for extended sitting",
      "Non-slip leg caps protect flooring",
      "Matches most dining table heights (73–76cm)",
    ],
    specs: {
      Material: "Polypropylene with wood-effect legs",
      Dimensions: "79 x 48 x 55 cm (H x W x D)",
      "Weight capacity": "120 kg",
      "Color options": "White, Mustard, Terracotta, Charcoal",
      Warranty: "2-year manufacturer warranty",
      Usage: "Indoor / covered outdoor",
    },
    featured: false,
  },
  {
    id: 7,
    name: "NOVA Gaming Pro",
    category: "gaming-chairs",
    price: 18500,
    rating: 4.8,
    reviews: 146,
    availability: "In Stock",
    image: "/images/product-7.jpg",
    shortDescription: "Reinforced frame, 4D armrests and a 165° recline for long sessions.",
    description:
      "NOVA Gaming Pro is built for the desk marathon — a steel-reinforced frame under high-density moulded foam, 4D adjustable armrests, and a recline that goes all the way to 165° with a locking tilt mechanism. Comes with a memory-foam lumbar pillow and headrest.",
    features: [
      "Steel-reinforced frame, rated to 150kg",
      "4D adjustable armrests",
      "165° recline with tilt lock",
      "Memory-foam lumbar and headrest pillows included",
      "Class-4 gas lift for smooth height adjustment",
    ],
    specs: {
      Material: "PU leather over moulded foam, steel frame",
      Dimensions: "128–138 x 70 x 55 cm (H x W x D)",
      "Weight capacity": "150 kg",
      "Color options": "Black/Orange, Black/Blue, All Black",
      Warranty: "3-year manufacturer warranty",
      Usage: "Indoor",
    },
    featured: true,
  },
  {
    id: 8,
    name: "NOVA Gaming Elite",
    category: "gaming-chairs",
    price: 24000,
    rating: 4.9,
    reviews: 88,
    availability: "In Stock",
    image: "/images/product-8.jpg",
    shortDescription: "Our flagship gaming chair with cold-cure foam and a magnetic headrest.",
    description:
      "The top of the NOVA gaming range. Cold-cure foam holds its shape through years of daily use, a magnetic headrest adjusts without straps or velcro, and a wider seat pan accommodates a broader range of body types comfortably.",
    features: [
      "Cold-cure foam retains shape over time",
      "Magnetic, strap-free headrest",
      "Extra-wide seat pan",
      "4D armrests with soft-touch caps",
      "Retractable footrest",
    ],
    specs: {
      Material: "Premium PU leather, cold-cure foam, steel frame",
      Dimensions: "130–140 x 72 x 56 cm (H x W x D)",
      "Weight capacity": "160 kg",
      "Color options": "Black/Orange, All Black, White/Grey",
      Warranty: "4-year manufacturer warranty",
      Usage: "Indoor",
    },
    featured: false,
  },
  {
    id: 9,
    name: "NOVA Racing Chair",
    category: "gaming-chairs",
    price: 15500,
    rating: 4.5,
    reviews: 112,
    availability: "In Stock",
    image: "/images/product-9.jpg",
    shortDescription: "A racing-inspired silhouette built for both gaming and desk work.",
    description:
      "Inspired by motorsport bucket seats, NOVA Racing brings bolstered side panels and a snug fit at a more accessible price point — a strong entry chair for a first proper gaming or work setup.",
    features: [
      "Bolstered side panels for lateral support",
      "2D armrests, height and width adjustable",
      "120° tilt-lock recline",
      "Class-3 gas lift",
    ],
    specs: {
      Material: "PU leather over foam, steel frame",
      Dimensions: "122–130 x 68 x 52 cm (H x W x D)",
      "Weight capacity": "130 kg",
      "Color options": "Black/Orange, Black/Red",
      Warranty: "2-year manufacturer warranty",
      Usage: "Indoor",
    },
    featured: true,
  },
  {
    id: 10,
    name: "NOVA Plastic Stool",
    category: "other",
    price: 1400,
    rating: 4.3,
    reviews: 165,
    availability: "In Stock",
    image: "/images/product-10.jpg",
    shortDescription: "A compact, stackable stool for kitchens, stores and workshops.",
    description:
      "Simple, sturdy, and easy to store — NOVA Plastic Stool is the fastest way to add extra seating anywhere. Nests into itself when stacked, so a dozen take up almost no floor space in storage.",
    features: [
      "Nesting stack design",
      "Non-slip textured top",
      "Lightweight — under 2kg",
    ],
    specs: {
      Material: "Polypropylene",
      Dimensions: "45 x 30 x 30 cm (H x W x D)",
      "Weight capacity": "100 kg",
      "Color options": "White, Black, Charcoal",
      Warranty: "1-year manufacturer warranty",
      Usage: "Indoor / covered outdoor",
    },
    featured: false,
  },
  {
    id: 11,
    name: "NOVA Outdoor Stool",
    category: "outdoor",
    price: 1650,
    rating: 4.4,
    reviews: 39,
    availability: "In Stock",
    image: "/images/product-11.jpg",
    shortDescription: "A weatherproof companion stool for the NOVA Outdoor collection.",
    description:
      "Matched to the NOVA Outdoor chair range in both finish and durability. Sits low enough to double as a side table for drinks or plants when not in use as seating.",
    features: [
      "UV-inhibited resin",
      "Doubles as a side table",
      "Integrated drainage",
    ],
    specs: {
      Material: "UV-stabilised resin",
      Dimensions: "46 x 32 x 32 cm (H x W x D)",
      "Weight capacity": "110 kg",
      "Color options": "White, Sand, Sea Green",
      Warranty: "2-year manufacturer warranty",
      Usage: "Outdoor",
    },
    featured: false,
  },
  {
    id: 12,
    name: "NOVA Utility Chair",
    category: "other",
    price: 1900,
    rating: 4.2,
    reviews: 84,
    availability: "Limited Stock",
    image: "/images/product-12.jpg",
    shortDescription: "A no-frills chair for workshops, storerooms and staff areas.",
    description:
      "The chair we put where looks matter less than durability. NOVA Utility trades refinement for raw toughness — thicker walls, a wider base, and a finish that shrugs off scuffs, spills and daily wear in back-of-house spaces.",
    features: [
      "Extra-thick moulded walls",
      "Wide, stable base",
      "Scuff- and stain-resistant finish",
    ],
    specs: {
      Material: "Polypropylene",
      Dimensions: "81 x 46 x 51 cm (H x W x D)",
      "Weight capacity": "140 kg",
      "Color options": "Grey, Black",
      Warranty: "1-year manufacturer warranty",
      Usage: "Indoor",
    },
    featured: false,
  },
];

export const OFFICE_PRODUCTS_NOTE =
  "NOVA Gaming Pro, Gaming Elite and Racing Chair are also popular as everyday office seating.";

export function getProductById(id) {
  return PRODUCTS.find((p) => String(p.id) === String(id));
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

export function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  )
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}
