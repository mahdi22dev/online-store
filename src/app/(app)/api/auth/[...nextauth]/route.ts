<<<<<<< HEAD
import NextAuth from "next-auth";
import { authOptions } from "@/services/auth/auth.service";
=======
import { authOptions } from "@/services/auth/auth.service";
import NextAuth from "next-auth";
>>>>>>> 50726e06b949c3eb942f138757c3f4c24b51fe01

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
