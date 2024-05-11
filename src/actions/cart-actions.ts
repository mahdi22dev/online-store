"use server";
import { prisma } from "@/lib/prisma";
import { UserServerSession, cartType } from "@/lib/types";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

export const addToCartAction = async (
  productId: string,
  price: number,
  device: string,
  quantity?: number,
) => {
  try {
    const session: UserServerSession = await getServerSession(authOptions);
    const cookieStore = cookies();
    const hasCartCookie = cookieStore.get("cart");
    let cart;
    if (hasCartCookie) {
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
          quantity: quantity
            ? quantity + itemtExists.quantity
            : itemtExists.quantity + 1,
          device: device,
        },
      });
    } else {
      await prisma.productItem.create({
        data: {
          productId: productId,
          quantity: quantity ? quantity : 1,
          price: price,
          device: device,
          Cart: { connect: { id: cart?.id } },
        },
      });
    }
  } catch (error: any) {
    throw new Error("Error Adding item to cart");
  } finally {
    await prisma.$disconnect();
  }
};

export const fetchCartData = async () => {
  const cookieStore = cookies();
  const hasCartCookie = cookieStore.get("cart");
  try {
    if (hasCartCookie) {
      const cart = await prisma.cart.findUnique({
        where: { id: hasCartCookie.value },
        include: { ProductItems: true },
      });
      return cart;
    } else {
      const cart = await prisma.cart.create({
        data: {},
      });
      if (cart)
        cookies().set({
          name: "cart",
          value: cart.id,
          httpOnly: true,
          path: "/",
        });
      return cart;
    }
  } catch (error: any) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
export const getCartLength: () => Promise<number> = async () => {
  const cookieStore = cookies();
  const hasCartCookie = cookieStore.get("cart");
  try {
    if (hasCartCookie) {
      const cart = await prisma.cart.findUnique({
        where: { id: hasCartCookie.value },
        include: { ProductItems: true },
      });

      if (cart && cart.ProductItems) {
        return cart?.ProductItems.length;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } catch (error) {
    throw new Error("Error getting cart length");
  } finally {
    await prisma.$disconnect();
  }
};
export const adjustProductQuantity = async (id: string, n: number) => {
  try {
    let adjustedproduct = await prisma.productItem.findUnique({
      where: { id: id },
    });
    if (adjustedproduct) {
      adjustedproduct = await prisma.productItem.update({
        where: { id: adjustedproduct.id },
        data: {
          quantity: adjustedproduct.quantity + n,
        },
      });
      return adjustedproduct;
    } else {
      throw new Error("item not found");
    }
  } catch (error) {
    throw new Error("Could't adjust item quantity");
  } finally {
    await prisma.$disconnect();
  }
};
export const reomveProductfromcart = async (productId: string) => {
  try {
    await prisma.productItem.delete({
      where: { id: productId },
    });
  } catch (error) {
    throw new Error("can't remove the cart");
  } finally {
    await prisma.$disconnect();
  }
};
