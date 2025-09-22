import { cn } from "@/lib/utils";

interface IFormItemsOrganizationLayout {
  hasDivider?: boolean;
  children: React.ReactNode;
}

export default function FormItemsOrganizationLayout({
  children,
}: IFormItemsOrganizationLayout) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{children}</div>
  );
}

FormItemsOrganizationLayout.Left = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="lg:pr-8 space-y-5">{children}</div>;

FormItemsOrganizationLayout.Right = ({
  children,
  hasDivider = true,
}: {
  children: React.ReactNode;
  hasDivider?: boolean;
}) => (
  <div
    className={cn("lg:pl-8 space-y-5 ", {
      "lg:border-l lg:border-l-grey8": hasDivider,
    })}>
    {children}
  </div>
);
