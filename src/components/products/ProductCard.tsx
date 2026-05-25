
"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { products, type Product } from "@/data/products";
import { useCartStore } from "@/lib/store";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative bg-manto-card rounded-2xl border border-manto-border overflow-hidden hover:shadow-lg hover:shadow-glow-charcoal/5 transition-all duration-300">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="gold">{product.badge}</Badge>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 space-y-3">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-manto-white hover:text-manto-neon transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-manto-gray line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-manto-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              slug: product.slug,
              price: product.price,
              image: product.images[0],
            })}
            className="p-2.5 rounded-xl bg-manto-neon text-white hover:bg-manto-neon hover:text-manto-white transition-all duration-200 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
