"use server";
import { prisma } from "@/lib/prisma";
import { UserServerSession } from "@/lib/types";
import { authOptions } from "@/services/auth/auth.service";
import { error } from "console";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { sentorderNotifcation } from "./email";

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
    console.log(error.message);
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

export const createOrderAfterPayment = async (
  orderid: string,
  sessionId: string,
  user: string,
  cost: number,
  cartid: string,
  productItemIds: string,
) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: user },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    const orderId = await prisma.orders.create({
      data: {
        orderid: orderid,
        sessionId: sessionId,
        cartId: cartid,
        cost: cost,
        isPaid: true,
        user: { connect: { id: user } },
      },
      select: {
        id: true,
      },
    });

    await sentorderNotifcation({ orderid: orderid, email: existingUser.email });

    // Update ProductItems to link them to the new order
    await prisma.productItem.updateMany({
      where: { id: { in: JSON.parse(productItemIds) } },
      data: { OrderId: orderId.id },
    });
    // empty the cart
    try {
      const existingCart = await prisma.cart.findUnique({
        where: { id: cartid },
      });

      if (!existingCart) {
        throw new Error("Cart not found");
      } else {
        // desconnect cart items instead of deleting them
        await prisma.productItem.updateMany({
          where: { CartId: cartid },
          data: { CartId: null },
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const fetchUserorders = async () => {
  const session: UserServerSession = await getServerSession(authOptions);
  try {
    if (!session) {
      throw Error("user not logged in");
    } else {
      const orders = await prisma.orders.findMany({
        where: { userId: session.user.id },
        include: { ProductItems: true },
      });
      return orders;
    }
  } catch (error: any) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const fetchOrderItemData = async () => {
  const session: UserServerSession = await getServerSession(authOptions);
  try {
    if (!session) {
      throw error("user not logged in");
    } else {
      const orderItem = await prisma.orders.findMany({
        where: { userId: session.user.id },
        include: { ProductItems: true },
      });
      return orderItem;
    }
  } catch (error: any) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
