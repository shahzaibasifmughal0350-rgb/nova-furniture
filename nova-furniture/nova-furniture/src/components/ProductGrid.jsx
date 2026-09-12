import ProductCard from "./ProductCard";

export default function ProductGrid({ products, emptyMessage = "No products match your filters." }) {
  if (!products.length) {
    return (
      <div className="py-20 text-center">
        <p className="text-stone-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}
