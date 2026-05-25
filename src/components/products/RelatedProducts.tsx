"use client";

import { Product } from "@/data/products";
import dynamic from "next/dynamic";

const ProductCard = dynamic(
  () => import("@/components/products/ProductCard").then((mod) => mod.ProductCard),
  {
    ssr: false,
    loading: () => (
      <div className="bg-manto-card rounded-2xl border border-manto-border overflow-hidden animate-pulse">
        <div className="aspect-square bg-manto-card" />
        <div className="p-4 space-y-2">
          <div className="h-4 bg-manto-card rounded" />
          <div className="h-3 bg-manto-card rounded w-3/4" />
        </div>
      </div>
    ),
  }
);

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-manto-white mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
