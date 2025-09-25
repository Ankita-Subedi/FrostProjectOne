
import { Card } from "../ui/card";


type uploadedDocumentsProps={
    children: React.ReactNode;
    filename?: string;
  
}
const UploadedDocumentsCard = ({filename, children}:uploadedDocumentsProps) => {
  return (

    <Card className="text-center  text-[18px] p-[16px] font-medium shadow-none"  data-filename={filename}>
      {children}
    </Card>
    
  )
}

export default UploadedDocumentsCard
