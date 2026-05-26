
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-manto-neon text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>#1 Men's Skincare Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
              Level Up Your{" "}
              <span className="text-manto-neon">Style</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Premium graphic tees, hoodies, streetwear, and more — designed for men who take their streetwear game seriously. Real results, no BS.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-black">25K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="w-px h-10 border-gray-200" />
              <div>
                <div className="text-2xl font-bold text-black">4.8★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="w-px h-10 border-gray-200" />
              <div>
                <div className="text-2xl font-bold text-black">Free</div>
                <div className="text-sm text-gray-600">Shipping $50+</div>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-manto-neon/20 to-manto-dark overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">✨</div>
                <p className="text-black/60 font-medium">Streetwear Drops</p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-lg">✓</div>
                <div>
                  <div className="font-semibold text-sm text-black">In Stock</div>
                  <div className="text-xs text-gray-600">Ships in 24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
