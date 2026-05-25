"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const ProductCard = dynamic(
  () => import("@/components/products/ProductCard").then((mod) => mod.ProductCard),
  {
    ssr: false,
    loading: () => (
      <div className="bg-manto-black rounded-2xl border border-manto-border overflow-hidden animate-pulse">
        <div className="aspect-square bg-manto-dark" />
        <div className="p-4 space-y-2">
          <div className="h-4 bg-manto-dark rounded" />
          <div className="h-3 bg-manto-dark rounded w-3/4" />
        </div>
      </div>
    ),
  }
);

export function FeaturedProducts() {
  const featured = products.filter((p) => p.badge).slice(0, 4);

  return (
    <section className="py-20 bg-manto-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-manto-white">Trending Now</h2>
            <p className="text-manto-gray mt-2">Our best-selling skincare tools & products</p>
          </div>
          <Link href="/products" className="hidden sm:block">
            <Button variant="ghost">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
