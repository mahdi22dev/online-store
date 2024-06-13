import { fetchSingleProduct } from "@/actions/products-actions";
import { ProductICartitemstype } from "@/lib/types";
import { ServerSession } from "@/services/auth/auth.service";
import { nanoid } from "nanoid";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  const user = await ServerSession();
  const productIds = await req.json();
  const orderid = nanoid();
  const cookieStore = cookies();
  const hasCartCookie = cookieStore.get("cart");
  // body data validation here

  const ids = productIds.items.map((item: ProductICartitemstype) => {
    return item.id;
  });

  const products = await Promise.all(
    productIds.items.map(async (item: ProductICartitemstype) => {
      const product = await fetchSingleProduct(item.productId);
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }
      return {
        ...item,
        name: product.phoneCasesProduct?.name,
        imageUrl: product.phoneCasesProduct?.imagesCollection?.items[0]?.url,
        unit_amount: Math.round(
          (product.phoneCasesProduct?.price as number) * 100,
        ),
      };
    }),
  );

  const line_items = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        images: [product.imageUrl],
      },
      unit_amount: product.unit_amount,
    },
    quantity: product.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success?orderid=` + orderid,
      cancel_url: `${process.env.NEXTAUTH_URL}/cart`,
      billing_address_collection: "required",
      customer_email: user?.user.email,
      metadata: {
        userid: user?.user.id as string,
        orderid,
        cartid: hasCartCookie?.value as string,
        products: JSON.stringify(ids),
      },
    });
    return NextResponse.json(
      { message: "checkout session created", url: session.url },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
