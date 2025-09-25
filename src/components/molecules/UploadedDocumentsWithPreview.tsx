
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadedDocumentsCard from "../atoms/UploadedDocumentsCard";
import { BsFiletypePng } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {  DownloadIcon } from "lucide-react";
type Props = {
  filename: string;
  file: string | null;
  setFile: (file: string | null) => void;
};
const UploadedDocumentsWithPreview = ({ filename , setFile}:Props) => {
  const isPdf = filename.toLowerCase().endsWith(".pdf");
  const isPng = filename.toLowerCase().endsWith(".png");
 
  return (
    <Dialog>
      <DialogTrigger onClick={()=>setFile(filename)}>
        <UploadedDocumentsCard filename={filename}>
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            {isPdf && <FaFilePdf className="size-[35px] text-pdf-icon" />}
            {isPng && <BsFiletypePng className="text-brand size-[35px]" />}
            <span>{filename}</span>
          </div>
        </UploadedDocumentsCard>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={cn('text-center')}>Preview: {filename}</DialogTitle>
          <DialogDescription className="flex items-center justify-center">
           
          <img src="logo.png" alt={filename} />
  
            <a href="logo.png" download={filename} className="cursor-pointer">
            <DownloadIcon className="w-6 h-6 text-blue-600" />
            </a>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadedDocumentsWithPreview;
