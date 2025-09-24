

import LoanSummaryDetails from "../organisms/LoanSummaryCard";

import DocumentsGroupCard from "../organisms/DocumentsGroupCard";
import BankCorrespondence from "../molecules/BankCorrespondence";
import { loanSummaryDummy } from "@/data/loanSummaryDummy";
import ButtonGroup from "../molecules/ButtonGroup";

const documents = loanSummaryDummy.uploadedDocuments;

const LoanSummaryTemplate = () => {
  return (
    <div className="flex flex-col gap-6 px-2 py-5">
      <LoanSummaryDetails />

      <ButtonGroup/>
      <DocumentsGroupCard documents={documents} />
      <BankCorrespondence />
    </div>
  );
};

export default LoanSummaryTemplate;
