"use server";

import { prisma } from "@/lib/prisma";
import { UserServerSession } from "@/lib/types";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import Stripe from "stripe";

export const isUserAdmin = async () => {
  const session: UserServerSession = await getServerSession(authOptions);
  try {
    if (session) {
      const UserExists = await prisma.user.findUnique({
        where: { id: session?.user.id },
      });
      return UserExists?.role;
    }
  } catch (error) {
    throw error;
  }
};

export const fetchRecentorders = async (current: number) => {
  try {
    const recentOrders = await prisma.orders.findMany({
      where: {},
      orderBy: { createdAt: "desc" },
      include: { user: true, ProductItems: true },
      take: 6,
      skip: current * 6,
    });
    return recentOrders;
  } catch (error) {
    throw error;
  }
};

export const getordersLength = async () => {
  try {
    const orderslength = await prisma.orders.count({
      where: {},
    });
    return orderslength;
  } catch (error) {
    throw error;
  }
};

export async function getPaymentsData(
  startDate: number,
  endDate: number,
): Promise<Stripe.PaymentIntent[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const payments = await stripe.paymentIntents.list({
    created: {
      gte: startDate,
      lte: endDate,
    },
  });

  return payments.data;
}

export const fetchSingleOrder = async (id: string) => {
  try {
    const order = await prisma.orders.findFirst({
      where: { orderid: id },
      include: { ProductItems: true, user: true },
    });
    return order;
  } catch (error: any) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
