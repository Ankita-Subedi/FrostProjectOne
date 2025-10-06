import { SkeletonRow } from './SkeletonRow'

const SkeletonRowList = ({ count }: { count: number }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
  {[...Array(count)].map((_, index) => (
    <SkeletonRow key={index} />
  ))}
</div>

  )
}

export default SkeletonRowList
