
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Zap } from "lucide-react";

const heroImages = [
  "/images/designs/design1/mockup_1_black_front.png",
  "/images/designs/design3/mockup_3_black_front.png",
  "/images/designs/design6/plain_mockup_6_black_front.png",
  "/images/designs/design9/plain_mockup_9_black_front.png",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient accent bar at top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-manto-blue via-manto-red to-manto-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-manto-blue/10 text-manto-blue text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Fresh Drops Weekly</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
              Wear Your{" "}
              <span className="text-manto-blue">Attitude</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Bold graphic tees and streetwear for those who don&apos;t follow trends — they set them. Premium prints, heavyweight fabrics, made to stand out.
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
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-black">4.8★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-black">Free</div>
                <div className="text-sm text-gray-600">Shipping $50+</div>
              </div>
            </div>
          </div>

          {/* Right — Product Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {heroImages.map((src, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden relative ${
                    i === 0 ? "row-span-2" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`MANTO design ${i + 1}`}
                    fill
                    className="object-contain p-4 sm:p-6"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-manto-blue/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-manto-blue" />
                </div>
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
