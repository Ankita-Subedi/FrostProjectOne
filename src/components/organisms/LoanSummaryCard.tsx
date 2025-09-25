import { loanSummaryDummy } from "@/data/loanSummaryDummy";
import FormItemsOrganizationLayout from "../layouts/FormItemsOrganizationLayout";
import ValueDisplay from "../atoms/ValueDisplay";
import LoanSummaryWrapper from "../molecules/LoanSummaryWrapper";
import DropDownFrost from "../molecules/DropDown";
import ButtonGroup from "../molecules/ButtonGroup";

interface LoanDetailsFormProps {
  data?: typeof loanSummaryDummy;
  viewOnly?: boolean;
  handleEditClick?: (value: number) => void;
  detailTitle: string;
}
const options = [{ label: "Loan Details", value: "Loan Details" }];

export default function LoanSummaryDetails({
  data = loanSummaryDummy,
  viewOnly,
  handleEditClick,
  detailTitle,
}: LoanDetailsFormProps) {
  const handleEdit = (section: number) => {
    handleEditClick?.(section);
  };

  return (
    <div className="space-y-4 pb-12  flex flex-col w-full ">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <span className="text-xl font-semibold">{detailTitle}</span>
        <div className="flex items-center">
          <span>Filter by detail:</span>
          <DropDownFrost label="Loan Details" options={options}></DropDownFrost>
        </div>
      </div>

      {/* Product Details Section */}
      <LoanSummaryWrapper viewOnly={viewOnly} onClick={() => handleEdit(2)}>
        <FormItemsOrganizationLayout>
          <FormItemsOrganizationLayout.Left>
            <ValueDisplay
              title="Form of Credit"
              value={data.applicationDetail.formofcredit}
            />
            <ValueDisplay
              title="Date of Issue"
              value={data.applicationDetail.dateofissue}
            />
            <ValueDisplay
              title="Type of LC"
              value={data.applicationDetail.typeofLC}
            />
            <ValueDisplay
              title="LC Transferred TO ( Bank Name )"
              value={data.applicationDetail.bankname}
            />
            <ValueDisplay
              title="Transfering Bank (Swift)"
              value={data.applicationDetail.transferbank}
            />
            <ValueDisplay
              title="Amount"
              value={data.applicationDetail.amount}
            />
            <ValueDisplay
              title="Additional Amount Covered"
              value={data.applicationDetail.additionalamount}
            />
          </FormItemsOrganizationLayout.Left>
          <FormItemsOrganizationLayout.Right>
            <ValueDisplay
              title="Applicable Rules"
              value={data.applicationDetail.applicationrules}
            />
            <ValueDisplay
              title="Reference to Pre-advice"
              value={data.applicationDetail.reference}
            />
            <ValueDisplay
              title="Revolving LC"
              value={data.applicationDetail.revolvingLC}
            />
            <ValueDisplay
              title="Expiry Date"
              value={data.applicationDetail.expirydate}
            />
            <ValueDisplay
              title="Expiry Place"
              value={data.applicationDetail.expiryplace}
            />
            <ValueDisplay
              title="Tolerance in (%)"
              value={data.applicationDetail.tolerance}
            />
          </FormItemsOrganizationLayout.Right>
        </FormItemsOrganizationLayout>
      </LoanSummaryWrapper>
      <ButtonGroup></ButtonGroup>
    </div>
  );
}
