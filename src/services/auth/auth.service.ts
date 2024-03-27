import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials: any, req) {
        try {
          if (!credentials.email || !credentials.password) {
            return null;
          }
          const userEmail = credentials.email;
          const existingUser = await prisma.user.findUnique({
            where: { email: userEmail },
          });

          if (!existingUser) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (!passwordsMatch) {
            return null;
          }

          return existingUser;
        } catch (error) {
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  pages: {
    signIn: `/login`,
    verifyRequest: `/login/verify`,
    error: "/error/login",
  },
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    jwt({ token, account, user }: any) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id || account?.id;
      }
      return token;
    },
    session({ session, token }: any) {
      session.user = { ...session.user, id: token?.id || null };
      return session;
    },
  },
};

export const ServerSession = async () => {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
      image: string;
    };
  } | null>;
};

export const ClientSession = () => {
  const session: any = useSession();
  return session.data?.user;
};
