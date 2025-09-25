import LoanSummaryDetails from "../organisms/LoanSummaryCard";
import DocumentsGroupCard from "../organisms/DocumentsGroupCard";
import { loanSummaryDummy } from "@/data/loanSummaryDummy";

type LoanSummaryTemplateProps = {
  detailTitle: string;
};

const documents = loanSummaryDummy.uploadedDocuments;
const bills = loanSummaryDummy.billsReceived;

const LoanSummaryTemplate = ({ detailTitle }: LoanSummaryTemplateProps) => {
  return (
    <div className="flex flex-col  ">
      <LoanSummaryDetails detailTitle={detailTitle} />
      <div className="flex flex-col gap-12">
        <DocumentsGroupCard documents={documents} title="Uploaded Documents" />
        <DocumentsGroupCard documents={bills} title="Bills Received" />
      </div>
    </div>
  );
};

export default LoanSummaryTemplate;
