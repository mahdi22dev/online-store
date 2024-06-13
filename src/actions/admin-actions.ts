"use server";

import { prisma } from "@/lib/prisma";
import { UserServerSession } from "@/lib/types";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";

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
