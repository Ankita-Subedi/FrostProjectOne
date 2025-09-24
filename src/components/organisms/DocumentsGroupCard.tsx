
import { useState } from 'react';
import LoanSummaryWrapper from '../molecules/LoanSummaryWrapper'
import UploadedDocumentsWithPreview from '../molecules/UploadedDocumentsWithPreview'

const DocumentsGroupCard = ({documents}) => {
  const [file, setFile] = useState("");
  console.log(file)
  return (

          <LoanSummaryWrapper title="Uploaded Documents">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {documents.map(item=><UploadedDocumentsWithPreview key={item.fileName} setFile={setFile} file={file} filename={item.fileName}></UploadedDocumentsWithPreview>)}

            </div>
            
          </LoanSummaryWrapper>
    

  )
}

export default DocumentsGroupCard
