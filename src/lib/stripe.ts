import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}

export async function createCheckoutSession(items: { name: string; price: number; quantity: number; image: string }[]) {
  const response = await fetch("/api/stripe/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });

  if (!response.ok) {
    throw new Error("Failed to create checkout session");
  }

  return response.json();
}
