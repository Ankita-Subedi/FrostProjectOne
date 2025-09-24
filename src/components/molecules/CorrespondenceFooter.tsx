import {  Paperclip } from 'lucide-react'
import ChatInput from '../atoms/ChatInput'
import { Icon } from '@iconify/react';
import AppButton from '../atoms/ButtonFrost';
// type messageProps = {
//    usermessage: string,
//    setUsermessage: React.Dispatch<React.SetStateAction<string>>,
//    setUsermess: React.Dispatch<React.SetStateAction<string>>,
//    usermess: string,
   
   
// }
const CorrespondenceFooter = ({setUsermessage, usermessage, setUsermess, usermess}:messageProps) => {
    const handleUserMessage=({usermessage}:messageProps)=>{

        if(usermessage.trim()==""){
            return;
        }
        const newMesaage ={
            id: Date.now(),
            text: usermessage,
            time: new Date()
        }
        setUsermess([...usermess, newMesaage]);
        setUsermessage("");
        
        
    }
  return (
    <div className='absolute bottom-0 w-full flex bg-card-background gap-5 items-center px-7 py-2 '>
        <Paperclip className='size-5'/>
      <ChatInput setUsermessage={setUsermessage} usermessage={usermessage}/>
     
            <AppButton className='flex items-center p-1 bg-brand rounded' onClick={()=>handleUserMessage({usermessage})}> <Icon icon="teenyicons:send-solid" color="white" width="20" height="20" />
</AppButton>
        
        
      </div>
      
   
  )
}

export default CorrespondenceFooter
