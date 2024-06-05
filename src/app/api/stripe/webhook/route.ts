import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro";
export async function POST(req: NextRequest) {
  const endpointSecret = "whsec_BSiJDhHU1d9oAzUYkjr4rNhrrTVSnazD";
  const sig = req.headers.get("stripe-signature") as string;
  const rawBody = await req.text();
  let event;
  try {
    event = Stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    // Handle the event
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      console.log("PaymentIntent was successful!");
    }

    return NextResponse.json({ test: "test" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
