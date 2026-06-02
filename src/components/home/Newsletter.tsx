"use client";

import { useState } from "react";
import { Mail, Check, Zap } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, send to your email service
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle accent strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-manto-blue via-manto-red to-manto-blue" />
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-manto-blue/20 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-6 h-6 text-manto-blue" />
        </div>
        <h2 className="text-3xl font-bold mb-3">Stay in the Loop</h2>
        <p className="text-gray-400 mb-8">
          New drops, exclusive deals, and early access — straight to your inbox.
        </p>
        {subscribed ? (
          <div className="flex items-center justify-center gap-2 text-manto-blue font-semibold">
            <Check className="w-5 h-5" /> You&apos;re in! Welcome to MANTO.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-manto-blue/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-manto-blue text-white font-semibold hover:bg-manto-blue/90 transition-all active:scale-[0.98] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-gray-500 mt-4">
          No spam, unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </section>
  );
}
