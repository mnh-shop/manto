
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const sig = request.headers.get("stripe-signature");

    // In production: verify webhook signature with Stripe SDK
    // const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    console.log("Stripe webhook received");

    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
