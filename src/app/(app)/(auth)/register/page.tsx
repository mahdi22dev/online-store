import { ServerSession } from "../../../../services/auth/auth.service";
import AuthRegisterForm from "@/components/auth/AuthRegisterForm";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create new account",
};

export default async function Register(): Promise<JSX.Element> {
  const session = await ServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-5 p-5">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <div className="relative h-[150px] w-[150px]">
          <img
            src="/logo.png"
            className="absolute bottom-0 left-0 right-0 top-0"
            alt="shop logo"
          />
        </div>
      </div>
      <AuthRegisterForm />
      <p className="px-8 text-center text-sm  text-opacity-80 hover:underline hover:underline-offset-4">
        <Link href="/login">You have an account? Sign In</Link>
      </p>{" "}
    </main>
  );
}
