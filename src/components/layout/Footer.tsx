
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/products", label: "All Products" },
    { href: "/products?cat=tools", label: "Sculpting Tools" },
    { href: "/products?cat=skincare", label: "Skincare" },
    { href: "/products?cat=kits", label: "Kits" },
  ],
  company: [
    { href: "/about", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/returns", label: "Returns" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold tracking-tight">MANTO</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Premium skincare tools and products for men who take their routine seriously.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-white hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white hover:bg-white/10 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600/60">
            © {new Date().getFullYear()} MANTO. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600/60">
            <span>Stripe</span>
            <span>•</span>
            <span>Wompi (PSE / Nequi)</span>
            <span>•</span>
            <span>Crypto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
