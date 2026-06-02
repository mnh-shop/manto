import { Suspense, lazy } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | MANTO - Youth Graphic Tees & Streetwear",
  description: "Shop our full collection of graphic tees and streetwear. Premium prints, heavyweight fabrics, fresh designs.",
};

const ProductsContent = lazy(() => import("./ProductsContent"));

function ProductsPageFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-black">All Products</h1>
        <p className="text-gray-600 mt-2">Loading...</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-100" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-100 rounded w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageFallback />}>
      <ProductsContent />
    </Suspense>
  );
}
