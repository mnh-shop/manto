"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (slug: string) => {
    onClose();
    router.push(`/products/${slug}`);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-xl">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 text-lg bg-transparent border-none outline-none text-black placeholder:text-gray-400"
            />
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {query && (
            <div className="mt-4 space-y-1 max-h-80 overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">No products found.</p>
              ) : (
                results.slice(0, 8).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(p.slug)}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="font-medium text-sm text-black">{p.name}</div>
                    <div className="text-xs text-gray-500">${p.price.toFixed(2)}</div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function Header() {
  const { itemCount, toggleCart } = useCartStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      {/* Accent bar */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-manto-blue via-manto-red to-manto-blue" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-manto-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-black tracking-tight">
              MANTO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black/70 hover:text-manto-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-manto-blue/5 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-black/60 hover:text-manto-blue transition-colors" />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-lg hover:bg-manto-blue/5 transition-colors cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-black/60 hover:text-manto-blue transition-colors" />
              {itemCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-manto-blue text-white text-[10px] font-bold flex items-center justify-center">
                  {itemCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-manto-blue/5 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <Menu className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-black/70 hover:bg-manto-blue/5 hover:text-manto-blue rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
