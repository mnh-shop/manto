
"use client";
import { useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-manto-white">All Products</h1>
        <p className="text-manto-gray mt-2">Premium streetwear tools and products</p>
      </div>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.id ? "bg-manto-neon text-white" : "bg-manto-dark text-manto-white hover:bg-manto-border/50"
            }`}>
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
      {filtered.length === 0 && <div className="text-center py-20"><p className="text-manto-gray">No products found.</p></div>}
    </div>
  );
}
