"use client";

import { useCartStore } from "@/lib/store";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    images: string[];
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAdd}
        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all active:scale-[0.98] ${
          added
            ? "bg-green-600 text-black"
            : "bg-yellow-400 text-black hover:bg-yellow-400/90"
        }`}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" /> Added!
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" /> Add to Cart
          </>
        )}
      </button>
      <Link href="/checkout">
        <button className="px-6 py-4 rounded-xl font-semibold border-2 border-manto-neon text-black hover:bg-yellow-400 hover:text-gray-800 transition-all">
          Buy Now
        </button>
      </Link>
    </div>
  );
}
