
import { CircleX, Download, Mail, Redo2, RotateCw } from 'lucide-react'
import AppButton from '../atoms/ButtonFrost'
import LoanSummaryDetails from '../organisms/LoanSummaryCard'
import { cn } from '@/lib/utils'
const LoanSummaryTemplate = () => {
  return (
    <div className='flex flex-col gap-3 px-2 py-5'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='flex flex-col gap-2 md:flex-row'>
                    <AppButton className={cn('bg-primary-one cursor-pointer')}><div className='flex gap-2 items-center'><span ><Download></Download></span><span>Download LC</span></div></AppButton>
                    <AppButton className={cn('bg-indigo-50 border border-brand  hover:bg-blue-200 cursor-pointer ')}><div className='flex gap-2 items-center text-[#00648A] '><span><Mail></Mail></span><span>Request Amendment</span></div></AppButton>
                    <AppButton className={cn('bg-indigo-50 border border-brand  hover:bg-blue-200 cursor-pointer ')}><div className='flex gap-2 items-center  text-[#00648A] '><span><Redo2/></span><span>Email Copy </span></div></AppButton>
                    <AppButton variant="destructive" className={cn('hover:bg-red-500 cursor-pointer')}><div className='flex gap-2 items-center '><span><CircleX/></span><span>Request Cancellation</span></div></AppButton>
                   

        </div>
        <AppButton className={cn('bg-reapply-button hover:bg-green-800 cursor-pointer')} ><span><RotateCw/></span><span>Reapply with same info</span></AppButton>
      </div>
      <LoanSummaryDetails></LoanSummaryDetails>
    </div>
  )
}

export default LoanSummaryTemplate
