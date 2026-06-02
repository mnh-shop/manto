"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { AddToCartButton } from "@/components/products/AddToCart";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductClient({ product, related }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : product.images.length - 1));
  const next = () => setActiveIndex((i) => (i < product.images.length - 1 ? i + 1 : 0));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-square rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">
            <Image
              src={product.images[activeIndex]}
              alt={`${product.name} view ${activeIndex + 1}`}
              fill
              className="object-contain p-8 transition-opacity duration-300"
              priority
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <Badge>{product.badge}</Badge>
              </div>
            )}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-16 h-16 rounded-xl border-2 flex-shrink-0 overflow-hidden transition-all cursor-pointer ${
                    i === activeIndex
                      ? "border-manto-blue ring-1 ring-manto-blue/30"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-manto-blue text-manto-blue" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(128 reviews)</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-manto-blue">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <AddToCartButton product={product} />
          <RelatedProducts products={related} />
        </div>
      </div>
    </div>
  );
}
