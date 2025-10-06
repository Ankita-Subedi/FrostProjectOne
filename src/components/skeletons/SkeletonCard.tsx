import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
      <div className="flex w-full h-40 rounded- animate-pulse overflow-hidden">
        <div className="w-4/5 bg-grey3 p-4 flex flex-col justify-center gap-3 rounded-l-md">
          <Skeleton className="size-8 rounded-full bg-grey4" />

          <Skeleton className="h-3 w-[60px] rounded-md bg-grey4" />
          <Skeleton className="h-3 w-[90px] rounded-md bg-grey4" />
        </div>

        <Skeleton className="w-1/5 bg-grey4 rounded-r-md" />
      </div>
    
  );
}
