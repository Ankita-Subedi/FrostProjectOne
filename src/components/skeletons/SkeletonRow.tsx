// SkeletonRow.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonRow() {
  return (
    <div className="flex items-center w-full h-12 rounded-md p-3 bg-grey3 animate-pulse gap-4">
      
      <Skeleton className="h-8 w-8 rounded-full bg-grey4" />

     
      <Skeleton className="h-4 w-3/4 rounded-md bg-grey4" />
    </div>
  );
}