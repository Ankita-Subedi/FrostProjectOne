import { loanSummaryDummy } from "@/data/loanSummaryDummy";
import FormItemsOrganizationLayout from "../layouts/FormItemsOrganizationLayout";
import ValueDisplay from "../atoms/ValueDisplay";
import LoanSummaryWrapper from "../molecules/LoanSummaryWrapper";
import UploadedDocuments from "./UploadedDocuments";

interface LoanDetailsFormProps {
  data?: typeof loanSummaryDummy;
  viewOnly?: boolean;
  handleEditClick?: (value: number) => void;
}

export default function LoanSummaryDetails({
  data = loanSummaryDummy,
  viewOnly,
  handleEditClick,
}: LoanDetailsFormProps) {
  const handleEdit = (section: number) => {
    handleEditClick?.(section);
  };

  return (
    <div className="space-y-4 pb-12">
     

      

      {/* Product Details Section */}
      <LoanSummaryWrapper
        title="Product Details"
        viewOnly={viewOnly}
        onClick={() => handleEdit(2)}>
        <FormItemsOrganizationLayout>
          <FormItemsOrganizationLayout.Left>
            <ValueDisplay
              title="Name"
              value={data.productDetails.name}
            />
            <ValueDisplay
              title="Country"
              value={data.productDetails.country}
            />
            <ValueDisplay
              title="Email"
              value={data.productDetails.email}
            />
            <ValueDisplay
              title="Postal Code"
              value={data.productDetails.postalcode}
            />
            <ValueDisplay
              title="EXIM Code"
              value={data.productDetails.eximcode}
            />
           
          </FormItemsOrganizationLayout.Left>
          <FormItemsOrganizationLayout.Right>
            <ValueDisplay
              title="Address 1"
              value={data.productDetails.address1}
            />
            <ValueDisplay
              title="Address 2"
              value={data.productDetails.address2}
            />
            <ValueDisplay
              title="Address 3"
              value={data.productDetails.address3}
            />
            <ValueDisplay
              title="PAN NO"
              value={data.productDetails.panno}
            />
          
            
           
          </FormItemsOrganizationLayout.Right>
        </FormItemsOrganizationLayout>
      </LoanSummaryWrapper>
      <LoanSummaryWrapper title="Uploaded Documents">
          <UploadedDocuments/>
        
      </LoanSummaryWrapper>
    
    </div>
  );
}
