import { createOrderAfterPayment } from "@/actions/cart-actions";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature") as string;
  const rawBody = await req.text();
  let event;
  try {
    event = Stripe.webhooks.constructEvent(
      rawBody,
      sig,
      // change to local for local testing
      process.env.WEBHOOK_SERCRET_KEY as string,
    );
    // Handle the event
    if (event.type === "checkout.session.completed") {
      const paymentIntent = event.data.object;
      const sessionId = paymentIntent.id;
      const cost = Math.round((event.data.object.amount_total as number) / 100);

      const data = paymentIntent.metadata as {
        userid: string;
        orderid: string;
        cartid: string;
        products: string;
      };

      console.log(data.products);

      try {
        await createOrderAfterPayment(
          data.orderid,
          sessionId,
          data.userid,
          cost,
          data.cartid,
          data.products,
        );
      } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 500 });
      }
      return NextResponse.json({ test: "received" }, { status: 200 });
    } else {
      return NextResponse.json({ test: "wrong event" }, { status: 401 });
    }
  } catch (err: any) {
    console.log(err.message);

    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
