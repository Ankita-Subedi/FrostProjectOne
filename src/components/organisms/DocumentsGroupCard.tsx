import { useState } from "react"

import LoanSummaryWrapper from "../molecules/LoanSummaryWrapper"
import UploadedDocumentsWithPreview from "../molecules/UploadedDocumentsWithPreview"
import DropDownFrost from "../molecules/DropDown"

type DocumentItem = {
  id: number
  fileName: string
}

type DocumentsGroupCardProps = {
  documents: DocumentItem[]
  title: string
}

const options = [
  { label: "Date", value: "date" },
]

const DocumentsGroupCard = ({ documents, title }: DocumentsGroupCardProps) => {

  const [file, setFile] = useState<string | null>(null)



  return (
    <div className="flex flex-col  gap-4 text-center md:text-left">
      {/* Header */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-between items-center">
        <p className="text-xl font-semibold">{title}</p>
        <div className="flex items-center gap-3 ">
          <DropDownFrost label="Date" options={options}  />
          <span>Filter by Detail </span>
        </div>
      </div>
      {/* Documents Grid */}
      <LoanSummaryWrapper >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 -mt-5 h-full">
          {documents.map((item: DocumentItem) => (
            <UploadedDocumentsWithPreview
              key={item.fileName}
              setFile={setFile}  
              file={file}         
              filename={item.fileName}
            />
          ))}
        </div>
      </LoanSummaryWrapper>
    </div>
  )
}

export default DocumentsGroupCard
