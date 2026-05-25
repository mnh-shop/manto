
"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-manto-white mb-4">Contact Us</h1>
      <p className="text-manto-gray mb-8">Have a question? We would love to hear from you.</p>
      {sent ? (
        <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
          <p className="text-green-800 font-semibold">Message sent! We will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Input label="Subject" placeholder="How can we help?" />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-manto-white">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-manto-border bg-manto-card text-manto-white placeholder:text-manto-gray focus:outline-none focus:ring-2 focus:ring-manto-gold/50" placeholder="Tell us more..." />
          </div>
          <Button size="lg">Send Message</Button>
        </form>
      )}
    </div>
  );
}
