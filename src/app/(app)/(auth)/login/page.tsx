import { ServerSession } from "../../../../services/auth/auth.service";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthLoginForm";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function Login(): Promise<JSX.Element> {
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
      <AuthForm />
      <p className="px-8 text-center text-sm  text-opacity-80 hover:underline hover:underline-offset-4">
        <Link href="/register">Don&apos;t have an account? Sign Up</Link>
      </p>{" "}
      <p className="px-8 text-center text-sm  text-opacity-80 hover:underline hover:underline-offset-4">
        <Link href="/register">Reset Password</Link>
      </p>
    </main>
  );
}
