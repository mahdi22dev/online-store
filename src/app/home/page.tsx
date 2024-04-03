import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="capitalize">Online store for phone cases</h1>
      <Button asChild variant={"secondary"}>
        <Link href={"/login"}>Sign In here</Link>
      </Button>
    </main>
  );
}
