import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="capitalize">Phone cases customize page</h1>
      <Button asChild variant={"secondary"}>
        <Link href={"/Home"}>Home</Link>
      </Button>
    </main>
  );
}
