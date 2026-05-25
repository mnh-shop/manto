
"use client";
import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import { Lock, CreditCard } from "lucide-react";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "wompi" | "crypto">("stripe");
  const shipping = total() >= 50 ? 0 : 5.99;
  const grandTotal = total() + shipping;

  if (items.length === 0 && step !== "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-manto-white mb-4">Your cart is empty</h1>
        <a href="/products"><Button>Browse Products</Button></a>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 text-3xl">OK</div>
        <h1 className="text-2xl font-bold text-manto-white mb-4">Order Confirmed!</h1>
        <p className="text-manto-gray mb-8">Thank you for your order. You will receive a confirmation email shortly.</p>
        <a href="/products"><Button>Continue Shopping</Button></a>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-manto-white mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3 space-y-8">
          {step === "shipping" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-manto-white">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Email" type="email" placeholder="john@example.com" />
              <Input label="Phone" placeholder="+57 300 123 4567" />
              <Input label="Address" placeholder="Calle 123 #45-67" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="City" placeholder="Bogota" />
                <Input label="Postal Code" placeholder="110111" />
              </div>
              <Button size="lg" className="w-full" onClick={() => setStep("payment")}>Continue to Payment</Button>
            </div>
          )}
          {step === "payment" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-manto-white">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: "stripe", label: "Credit / Debit Card (Stripe)", desc: "Visa, Mastercard, Amex" },
                  { id: "wompi", label: "Wompi (Colombia)", desc: "PSE, Nequi, local cards" },
                  { id: "crypto", label: "Cryptocurrency", desc: "BTC, ETH, USDC, USDT, SOL" },
                ].map((m) => (
                  <button key={m.id} onClick={() => setPaymentMethod(m.id as any)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      paymentMethod === m.id ? "border-manto-gold bg-manto-gold/5" : "border-manto-border hover:border-manto-neon/30"
                    }`}>
                    <div className="font-semibold text-manto-white">{m.label}</div>
                    <div className="text-sm text-manto-gray">{m.desc}</div>
                  </button>
                ))}
              </div>
              {paymentMethod === "stripe" && (
                <div className="p-4 rounded-xl bg-manto-dark border border-manto-border space-y-4">
                  <Input label="Card Number" placeholder="4242 4242 4242 4242" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Expiry" placeholder="MM/YY" />
                    <Input label="CVC" placeholder="123" />
                  </div>
                </div>
              )}
              {paymentMethod === "wompi" && (
                <div className="p-4 rounded-xl bg-manto-dark border border-manto-border">
                  <p className="text-sm text-manto-gray">You will be redirected to Wompi to complete your payment securely via PSE, Nequi, or card.</p>
                </div>
              )}
              {paymentMethod === "crypto" && (
                <div className="p-4 rounded-xl bg-manto-dark border border-manto-border">
                  <p className="text-sm text-manto-gray">You will be shown a crypto payment address. Send the exact amount and your order will be confirmed automatically.</p>
                </div>
              )}
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("shipping")}>Back</Button>
                <Button size="lg" className="flex-1" onClick={() => { clearCart(); setStep("success"); }}>
                  <Lock className="w-4 h-4 mr-2" /> Pay ${grandTotal.toFixed(2)}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-manto-dark rounded-2xl p-6 sticky top-24">
            <h3 className="font-semibold text-manto-white mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-lg bg-manto-card overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-manto-white truncate">{item.name}</p>
                    <p className="text-xs text-manto-gray">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-manto-white">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-manto-border pt-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-manto-gray">Subtotal</span><span>${total().toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-manto-gray">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between font-bold pt-2 border-t border-manto-border"><span>Total</span><span>${grandTotal.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
