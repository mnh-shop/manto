import type { Metadata } from "next";
import { Truck, ShieldCheck, RotateCcw, Clock, Globe, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping Info | MANTO - Youth Graphic Tees & Streetwear",
  description: "Free shipping on orders over $50. Fast delivery to the US, Colombia, and worldwide.",
};

const policies = [
  {
    icon: Truck,
    title: "Free Shipping $50+",
    description: "All orders over $50 ship free. Standard shipping is $5.99 for orders under $50.",
  },
  {
    icon: Clock,
    title: "Processing Time",
    description: "Orders are processed within 1–2 business days. You'll receive a confirmation email with tracking once shipped.",
  },
  {
    icon: Globe,
    title: "Domestic & International",
    description: "We ship to the United States, Colombia, and select international destinations. Delivery times vary by location.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Not happy with your order? You have 30 days to return any unworn item. See our Returns page for details.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Handling",
    description: "Every package is packed with care. We use tracked shipping on all orders so you always know where your order is.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Questions about shipping? Contact our support team and we'll get back to you within 24 hours.",
  },
];

export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-black mb-4">Shipping Information</h1>
      <p className="text-gray-600 mb-12">
        We work hard to get your order to you as fast and reliably as possible.
      </p>

      <div className="grid gap-6">
        {policies.map((item) => (
          <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <h2 className="font-semibold text-black">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gray-100 border border-gray-200">
        <h2 className="font-semibold text-black mb-2">Estimated Delivery Times</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>United States (Standard)</span>
            <span className="font-medium text-black">5–8 business days</span>
          </div>
          <div className="flex justify-between">
            <span>United States (Express)</span>
            <span className="font-medium text-black">2–3 business days</span>
          </div>
          <div className="flex justify-between">
            <span>Colombia (Standard)</span>
            <span className="font-medium text-black">3–6 business days</span>
          </div>
          <div className="flex justify-between">
            <span>International</span>
            <span className="font-medium text-black">7–14 business days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
