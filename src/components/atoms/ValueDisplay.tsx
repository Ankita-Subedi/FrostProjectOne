import { cn } from "@/lib/utils";

interface IValueDisplay {
  title: string;
  value: string;
  className?: string;
  isSum?: boolean;
}

export default function ValueDisplay({
  title,
  value,
  className,
  isSum,
}: IValueDisplay) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="text-body-4">{title}</div>
      <div
        className={cn("text-body-3 font-medium text-primary1", {
          "!text-heading-7 text-secondary3 font-bold ": isSum,
        })}>
        {value}
      </div>
    </div>
  );
}
