"use client";

import { useCartStore } from "@/lib/store";
import { ShoppingBag, Check, Zap } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    images: string[];
    sizes?: string[];
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { openCart } = useCartStore();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const sizes = product.sizes ?? ["S", "M", "L", "XL", "XXL"];

  const getSize = () => selectedSize || sizes[1] || "M";

  const handleAdd = () => {
    const size = getSize();
    if (!selectedSize) setSelectedSize(size);

    addItem({
      id: product.id + "_" + size,
      name: `${product.name} (${size})`,
      slug: product.slug,
      price: product.price,
      image: product.images[0],
      size,
    });
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    const size = getSize();
    if (!selectedSize) setSelectedSize(size);

    addItem({
      id: product.id + "_" + size,
      name: `${product.name} (${size})`,
      slug: product.slug,
      price: product.price,
      image: product.images[0],
      size,
    });
    router.push("/checkout");
  };

  return (
    <div className="space-y-4">
      {/* Size Selector */}
      <div>
        <p className="text-sm font-semibold text-black mb-2">
          Size {selectedSize && <span className="text-gray-600">— {selectedSize}</span>}
        </p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                selectedSize === size
                  ? "bg-manto-blue text-white border-2 border-manto-blue"
                  : "bg-white text-black border-2 border-gray-200 hover:border-manto-blue/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleAdd}
          className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all active:scale-[0.98] cursor-pointer ${
            added
              ? "bg-manto-blue text-white"
              : "bg-manto-blue/10 text-manto-blue hover:bg-manto-blue/20"
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
        <button
          onClick={handleBuyNow}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold bg-manto-blue text-white hover:bg-manto-blue/90 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Zap className="w-5 h-5" /> Buy Now
        </button>
      </div>
    </div>
  );
}
