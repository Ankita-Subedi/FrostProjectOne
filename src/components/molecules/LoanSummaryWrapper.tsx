import type React from "react";
import { Card } from "../ui/card";
// import MyIcon from "../organisms/MyIcon";

interface ILoanSummaryWrapper {
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  viewOnly?: boolean;
}
export default function LoanSummaryWrapper(props: ILoanSummaryWrapper) {
  const { children, title, viewOnly, onClick } = props;
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div className="text-heading-7 font-semibold text-dark dark:text-white">
          {title}
        </div>{" "}
        {!viewOnly && (
          <button
            type="button"
            className="text-heading-9 font-semibold text-secondary3 flex items-center gap-2 cursor-pointer"
            onClick={onClick}>
            {/* <MyIcon icon="lucide:edit" /> Edit Details */}
          </button>
        )}
      </div>
      {children}
    </Card>
  );
}
