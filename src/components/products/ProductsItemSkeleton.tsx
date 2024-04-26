import { Skeleton } from "@/components/ui/skeleton";

export function ProductsItemSkeleton() {
  return (
    <div className="flex  h-full flex-col items-center gap-3 space-x-4 rounded-xl border-4 bg-white p-5 hover:shadow-md">
      <Skeleton className="h-96 w-full p-5" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-8 w-[90%]" />
      <Skeleton className="h-12 w-[90%]" />
    </div>
  );
}
