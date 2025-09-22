
import { FaFilePdf } from "react-icons/fa";
import { loanSummaryDummy } from '@/data/loanSummaryDummy'
import UploadedDocumentsCard from '../atoms/UploadedDocumentsCard'
import { BsFiletypePng } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const UploadedDocuments = () => {
    
    const data= loanSummaryDummy
    const fileArray = Object.values(data.uploadedDocuments)
  return (
    <div className='relative grid grid-cols-1  gap-[16px] gap-x-4 items-center justify-center md:grid-cols-4 '>
        <div className="absolute -top-6 -right-5"><HiChatBubbleBottomCenterText className="size-[67px] text-primary-one"/></div>
        <div className="absolute -top-4 -right-5 size-4 rounded-full bg-[#D64545] z-10"></div>
        {fileArray.map((filename)=>
        {
            const isPdf= filename.toLowerCase().endsWith(".pdf");
            const isPng= filename.toLowerCase().endsWith(".png");
            return(
        <UploadedDocumentsCard key={filename}><div className='flex items-center justify-center gap-4'>
              {isPdf &&<FaFilePdf className="size-[35px] text-pdf-icon"/>}
              {isPng &&<BsFiletypePng  className="text-brand size-[35px]"/>}
               <span>{filename}</span>
            </div></UploadedDocumentsCard>)})}
   
    </div>
  )
}

export default UploadedDocuments
