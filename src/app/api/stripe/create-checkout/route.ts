
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Note: In production, use the Stripe SDK. This is a template.
    const session = {
      id: "cs_test_" + Date.now(),
      url: "/checkout?session_id=cs_test_" + Date.now(),
      payment_status: "unpaid",
    };

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
