
import { Plus } from 'lucide-react'
import AppButton from '../atoms/ButtonFrost'
import DropDownFrost from '../molecules/DropDown'
import {
  Card,
 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
type LCCardProps={
    title: string,
    description: string,
    topic1: string,
    value1: string,
    topic2: string,
    value2: string;

}
import { cn } from '@/lib/utils'
const LCCard = ({title, description, topic1, value1, topic2, value2}:LCCardProps) => {
  return (
  
     
      <Card className={cn('w-[554px] shadow-xl border-none  py-2')}>
  <CardHeader>
    <CardTitle className={cn('text-primary-one text-[24px]/[28px] font-bold')}> {title}</CardTitle>
    <CardDescription className={cn('text-[14px] text-[#3C4144]')}>{description}</CardDescription>
    
  </CardHeader>
  <CardContent className={cn('flex justify-between text-[#3C4144]')}>
    <p>{topic1}</p>
    <p>{value1}</p>
  </CardContent>
   <CardContent className={cn('flex justify-between text-[#3C4144]')}>
    <p>{topic2}</p>
    <p>{value2}</p>
  </CardContent>
  <CardFooter className={cn('flex flex-col w-full  mx-auto')}>
    <div className='w-full grid  grid-cols-2 gap-1 items-center mx-auto '>
    <div className='flex flex-col'> 
        <AppButton className={cn("bg-brand ")}><div className='flex gap-1 items-center '>
        <Plus/>
        <span className='font-normal text-[18px]'>Apply blank application</span>
        </div></AppButton>
       <span className='text-[12px] text-[#AFAFAF]' >Manually fill out form fields</span>


    </div>
    
    <div className='flex flex-col justify-center '> 
         <DropDownFrost></DropDownFrost>
         <span className='text-[12px] text-[#AFAFAF] ml-3'>Auto fill fields using AI</span>
    </div>
    
   
    </div>
    
   
   
   

  
  </CardFooter>
</Card>
     
  
  )
}

export default LCCard
