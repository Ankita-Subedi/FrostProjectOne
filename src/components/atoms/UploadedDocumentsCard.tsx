import { Card } from "../ui/card";


type uploadedDocumentsProps={
    children: React.ReactNode;
}
const UploadedDocumentsCard = ({children}:uploadedDocumentsProps) => {
  return (

    <Card className="text-center  text-[18px] p-[16px] font-medium shadow-none">{children}</Card>
    
  )
}

export default UploadedDocumentsCard
