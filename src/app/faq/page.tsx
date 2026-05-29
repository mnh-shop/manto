"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does shipping take?", a: "US orders: 3-5 business days. Latin America: 7-14 business days. Orders over $50 ship free." },
  { q: "Do you ship to Colombia?", a: "Yes! We ship to all of Colombia via certified carriers. Delivery typically takes 7-10 business days. We accept PSE and Nequi payments through Wompi." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards (via Stripe), Wompi (PSE, Nequi for Colombia), and cryptocurrency (BTC, ETH, USDC, USDT, SOL via NOWPayments)." },
  { q: "What is your return policy?", a: "30-day money-back guarantee. If you are not satisfied, contact us for a full refund. Return shipping is free for defective products." },
  { q: "Are the designs original?", a: "100%. Every MANTO design is created by independent artists. We never use stock templates or AI-generated graphics. Each drop is a limited release." },
  { q: "How do I care for my graphic tee?", a: "Machine wash cold with similar colors, inside out. Tumble dry low or hang dry. Do not bleach. Our 240gsm cotton holds up well, but treating it right will keep the print looking fresh for years." },
  { q: "Can I pay with crypto?", a: "Yes! We accept Bitcoin, Ethereum, USDC, USDT, Solana, and 100+ other cryptocurrencies through NOWPayments." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-black mb-8">Frequently Asked Questions</h1>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
              <span className="font-semibold text-black">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
