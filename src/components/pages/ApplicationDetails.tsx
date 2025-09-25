import LoanSummaryTemplate from "../templates/LoanSummaryTemplate";
import { ProgressIndicator } from "../atoms/ProgressIndicator";
import BankCorrespondence from "../molecules/BankCorrespondence";
const steps = [
  { id: 1, title: "LC Review", date: "2025-0-12" },
  { id: 2, title: "LC Issuance", date: "2025-0-12" },
  { id: 3, title: "LC Advise", date: "2025-0-12" },
  { id: 4, title: "Goods Shipment", date: "2025-0-12" },
  { id: 5, title: "Document Submission", date: "2025-0-12" },
  { id: 6, title: "Document Review", date: "2025-0-12" },
  { id: 7, title: "Paymnent Process", date: "2025-0-12" },
  { id: 8, title: "LC Closure", date: "2025-0-12" },
];
const ApplicationDetails = () => {
  return (
    <div className="p-6 flex flex-col gap-8">
      <ProgressIndicator steps={steps} currentStep={2}></ProgressIndicator>
      <LoanSummaryTemplate detailTitle="LC Application Detail" />
      <BankCorrespondence />
    </div>
  );
};

export default ApplicationDetails;
