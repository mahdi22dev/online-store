import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-4 p-12 md:px-12 md:py-5 lg:px-14 xl:px-28">
      <h2>Not Found</h2>
      <p>Product you are looking for not found</p>
      <Button asChild>
        <Link href="/home">Return Home</Link>
      </Button>
    </main>
  );
}
