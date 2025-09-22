
import LCCard from '../organisms/LCCard'
import AppButton from '../atoms/ButtonFrost'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
const CardTemplate = () => {
  return (
    <div className='flex flex-col gap-5 w-full items-center p-5'>
      <div className='flex justify-between items-center w-full '>
        <div>
            <p className='text-[24px] font-bold text-primary-one'>Available Applications</p>
            <p className='text-[14px]'>Choose from a comprehensive range of financial solutions</p>
        </div>
        <div></div>
        <AppButton className={cn('bg-primary-one w-[270px] ')}><div className='flex gap-2 items-center'>
            <Play></Play>
            <span>Resume Last Application</span>
            </div></AppButton>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-5'>
        <LCCard title="Letter of Credit (LC)" description="Payment guarantee for international trade" topic1="Avg. Processing Time" value1="5-7 business days" topic2="Typical use" value2="Import/Export transactions"></LCCard>
        <LCCard title="Back Guarantee (BG) Applicaton" description="Performance or financial guarantee" topic1="Avg. Processing Time" value1="5-7 business days" topic2="Typical use" value2="Import/Export transactions"></LCCard>

      </div>
      
    </div>
  )
}

export default CardTemplate
