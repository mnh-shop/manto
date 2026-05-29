
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Testimonials } from "@/components/home/Testimonials";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Shipping $50+" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: CreditCard, label: "Stripe - Wompi - Crypto" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 justify-center">
                <item.icon className="w-5 h-5 text-gray-900" />
                <span className="text-sm font-medium text-gray-900">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Streetwear?</h2>
          <p className="text-gray-600 mb-8">Join thousands who upgraded their wardrobe with MANTO pixel art tees.</p>
          <a href="/products">
            <Button size="lg">Shop All Products</Button>
          </a>
        </div>
      </section>
    </>
  );
}
