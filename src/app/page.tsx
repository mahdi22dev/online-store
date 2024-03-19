import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen  p-24">
      <h1 className="capitalize">
        personal starter with next auth prisma shadcn ui
      </h1>
      <Button asChild variant={"default"}>
        <Link href={"/login"}>Sign In</Link>
      </Button>
    </main>
  );
}
