
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Bogotá, Colombia",
    text: "The gua sha tool is insane. My jawline looks more defined after just 2 weeks. Actually worth every penny.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Jake R.",
    location: "Miami, FL",
    text: "I was skeptical about men's skincare but this starter kit changed my mind. Simple routine, great results.",
    rating: 5,
    initials: "JR",
  },
  {
    name: "Andrés P.",
    location: "Medellín, Colombia",
    text: "Fast shipping to Colombia and the quality is top-notch. The retinol cream is legit — my skin is smoother already.",
    rating: 5,
    initials: "AP",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Real results from real people</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-black leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200/10 flex items-center justify-center text-sm font-bold text-gray-900">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-black">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
