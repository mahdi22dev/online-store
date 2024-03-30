"use server";
import { prisma } from "@/lib/prisma";
import { UserServerSession } from "@/lib/types";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

export const addToCartAction = async (productId: string) => {
  try {
    const session: UserServerSession = await getServerSession(authOptions);
    const cookieStore = cookies();
    const hasCartCookie = cookieStore.get("cart");
    let cart;

    if (hasCartCookie) {
      console.log("coockie found");
      if (session) {
        const userExists = await prisma.user.findUnique({
          where: { id: session?.user?.id },
          include: { cart: true },
        });

        if (userExists?.cart.length !== 0) {
          cart = userExists?.cart[0];
          if (cart)
            cookies().set({
              name: "cart",
              value: cart.id,
              httpOnly: true,
              path: "/",
            });
        } else {
          cart = await prisma.cart.update({
            where: { id: hasCartCookie.value },
            data: { user: { connect: { id: session?.user?.id } } },
          });
        }
      }
      // if no user session exists
      else {
        cart = await prisma.cart.findUnique({
          where: { id: hasCartCookie?.value },
        });
        if (!cart) {
          cart = await prisma.cart.create({
            data: {},
          });
          if (cart)
            cookies().set({
              name: "cart",
              value: cart.id,
              httpOnly: true,
              path: "/",
            });
        }
      }
    } else {
      console.log("no coockie found");
      if (session) {
        const userExists = await prisma.user.findUnique({
          where: { id: session?.user?.id },
          include: { cart: true },
        });

        if (userExists?.cart.length !== 0) {
          cart = userExists?.cart[0];
          if (cart)
            cookies().set({
              name: "cart",
              value: cart.id,
              httpOnly: true,
              path: "/",
            });
        } else {
          cart = await prisma.cart.create({
            data: { user: { connect: { id: session?.user?.id } } },
          });
          if (cart)
            cookies().set({
              name: "cart",
              value: cart.id,
              httpOnly: true,
              path: "/",
            });
        }
      } else {
        cart = await prisma.cart.create({
          data: {},
        });
        if (cart)
          cookies().set({
            name: "cart",
            value: cart.id,
            httpOnly: true,
            path: "/",
          });
      }
    }

    const itemtExists = await prisma.productItem.findFirst({
      where: { productId: productId, CartId: cart?.id },
    });
    if (itemtExists) {
      await prisma.productItem.update({
        where: { id: itemtExists.id },
        data: {
          quantity: itemtExists.quantity + 1,
        },
      });
    } else {
      await prisma.productItem.create({
        data: {
          productId: productId,
          quantity: 1,
          Cart: { connect: { id: cart?.id } },
        },
      });
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
};
