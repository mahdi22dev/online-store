import { ServerSession } from "../../../services/auth/auth.service";
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
    <main className="w-full min-h-[100vh] p-5 flex justify-center items-center flex-col gap-5">
      <div className="flex flex-col space-y-2 text-center justify-center items-center">
        <div className="relative w-[150px] h-[150px]">
          <img
            src="/logo.png"
            className="absolute top-0 left-0 right-0 bottom-0"
            alt="shop logo"
          />
        </div>
      </div>
      <AuthRegisterForm />
      <p className="px-8 text-center text-sm  text-opacity-80 hover:underline hover:underline-offset-4">
        <Link href="/login">Don&apos;t have an account? Sign Up</Link>
      </p>{" "}
    </main>
  );
}
