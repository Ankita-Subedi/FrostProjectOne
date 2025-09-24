
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
const MessageBubbleBot = () => {
  return (
  <div className='flex flex-col gap-2 '>
       <Card className={cn('max-w-xs p-3 border-none mr-12 text-left  text-[14px] rounded-tr-2xl self-start  rounded-br-2xl rounded-bl-2xl rounded-tl-none  ')}>Hello John, I'm excited to inform you that your application has been successfully approved! Our team is currently in the process of reviewing it further to ensure everything is in order. We appreciate your patience during this time and will keep you updated on the progress.</Card>
        <span className='pl-2 text-xs' >23-09-2025, 12:33 PM</span>
  </div>
  )
}
const MessageBubblesUser = ({usermess})=>{

  return (
  <div className='flex flex-col gap-2 '>
    {usermess.map(item=>(<>
    <Card className={cn('max-w-xs p-3 ml-12 bg-blue-100 border-none rounded-tr-2xl self-end rounded-br-none rounded-bl-2xl rounded-tl-2xl ')}>{item.text}</Card>
               <span className='pl-2 text-right text-xs' >{item.id}</span>
    </> ))}
      
  </div>
  )
}
export  {MessageBubbleBot, MessageBubblesUser}
