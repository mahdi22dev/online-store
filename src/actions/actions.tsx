"use server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

export const addToCartAction = async (productId: string) => {
  try {
    const session = await getServerSession(authOptions);
    const cookieStore = cookies();
    const hasCartCookie = cookieStore.get("cart");
    const cartId = hasCartCookie?.value;

    if (hasCartCookie) {
      //   const cart = await prisma.productItem.create({
      //     data: {
      //       productId: "popeorewr454fef5",
      //       quantity: 1,
      //       Cart: { connect: { id: "wehfuhwefuweiufiewfhe" } },
      //     },
      //   });
      //   const existingCart = await prisma.cart.findUnique({
      //     where: { id: cartId },
      //     include: { ProductItems: true },
      //   });
      //   console.log(cart);
      //   if (!cart) {
      //     console.log("no cart found");
      //     // create cart and ressign coockies and product
      //   }
      //   //   cookies().set({
      //   //     name: "cart",
      //   //     value: "generated id for cart from response",
      //   //     httpOnly: true,
      //   //     path: "/",
      //   //   });
    } else {
      console.log("no coockie found");
      let cart;

      // if user session exists
      if (session) {
        const userExists = await prisma.user.findUnique({
          // @ts-ignore
          where: { id: session?.user?.id },
          include: { cart: true },
        });

        if (userExists?.cart.length !== 0) {
          cart = userExists?.cart[0];
          console.log(cart);
          // assign coockie
          cookies().set({
            name: "cart",
            // @ts-ignore
            value: userExists?.cart.id,
            httpOnly: true,
            path: "/",
          });
        } else {
          cart = await prisma.cart.create({
            // @ts-ignore
            data: { user: { connect: { id: session?.user?.id } } },
          });
          console.log(cart);
          // assign coockie
          cookies().set({
            name: "cart",
            value: cart.id,
            httpOnly: true,
            path: "/",
          });
        }
      }
      // if no user session exists
      else {
        cart = await prisma.cart.create({
          data: {},
        });
        console.log(cart);

        cookies().set({
          name: "cart",
          value: cart.id,
          httpOnly: true,
          path: "/",
        });
      }

      //   create product and connect to cart
      const proudctExists = await prisma.productItem.findUnique({
        // @ts-ignore
        where: { productId: "refefwef" },
      });
      if (proudctExists) {
        console.log("Product exists");
        await prisma.productItem.update({
          // @ts-ignore
          where: { productId: "refefwef" },
          data: {
            quantity: proudctExists.quantity + 1,
          },
        });
      } else {
        console.log("Product doesn't exists");
        // @ts-ignore
        await prisma.productItem.create({
          data: {
            productId: "refefwef",
            quantity: 1,
            // @ts-ignore
            Cart: { connect: { id: cart.id } },
          },
        });
      }
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
};
