
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
const ChatInput = ({setUsermessage, usermessage}) => {
   
  return (
    <Input className={cn('border-gray-400')} value={usermessage} onChange={(e)=>setUsermessage(e.target.value)}/>
  )
} 

export default ChatInput
