
"use client";

import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-50" onClick={closeCart} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-100 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-black" />
            <h2 className="text-lg font-bold text-black">Your Cart ({itemCount()})</h2>
          </div>
          <button onClick={closeCart} className="p-2 rounded-lg hover:bg-white transition-colors">
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-glow-border mx-auto mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
              <Link href="/products">
                <Button variant="outline" className="mt-4" onClick={closeCart}>Browse Products</Button>
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 rounded-xl bg-white">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-black truncate">{item.name}</h3>
                  <p className="text-sm font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-md hover:bg-gray-200/50 transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-md hover:bg-gray-200/50 transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="ml-auto p-1 text-gray-600 hover:text-red-500 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-black">${total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-black">{total() >= 50 ? "Free" : "$5.99"}</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-200">
              <span className="text-black">Total</span>
              <span className="text-black">${(total() + (total() >= 50 ? 0 : 5.99)).toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <Button className="w-full" size="lg" onClick={closeCart}>
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
