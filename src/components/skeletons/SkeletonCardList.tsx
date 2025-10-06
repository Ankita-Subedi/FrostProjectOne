import {SkeletonCard} from "./SkeletonCard";

export default function SkeletonCardList({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-4">
      {[...Array(count)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}
