import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="bg-black flex justify-center">
      <div className="flex w-80 h-40 rounded-md overflow-hidden">
        <Skeleton className="w-4/5 bg-grey3 rounded-l-md rounded-none-r" />
        <Skeleton className="w-1/5 bg-grey6 rounded-r-md rounded-none-l" />
      </div>
    </div>
  );
}
