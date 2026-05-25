
"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { useState } from "react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { itemCount, toggleCart } = useCartStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-manto-black/80 backdrop-blur-xl border-b border-manto-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-manto-neon flex items-center justify-center">
              <span className="text-manto-neon font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-manto-white tracking-tight">
              MANTO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-manto-white/70 hover:text-manto-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-manto-dark transition-colors">
              <Search className="w-5 h-5 text-manto-white/60" />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-lg hover:bg-manto-dark transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-manto-white/60" />
              {itemCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-glow-gold text-manto-white text-[10px] font-bold flex items-center justify-center">
                  {itemCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-manto-dark transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-manto-white" />
              ) : (
                <Menu className="w-5 h-5 text-manto-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-manto-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-manto-white/70 hover:bg-manto-dark rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
