import { ProductICartitemstype } from "@/lib/types";
import { ServerSession } from "@/services/auth/auth.service";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  const user = await ServerSession();
  const productIds = await req.json();
  const orderid = nanoid();

  // data form validation
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: productIds.items.map((item: ProductICartitemstype) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productId,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/cancel`,
      billing_address_collection: "required",
      customer_email: user?.user.email,
      metadata: {
        userid: user?.user.id as string,
        orderid,
      },
    });
    return NextResponse.json(
      { message: "checkout session created", url: session.url },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
