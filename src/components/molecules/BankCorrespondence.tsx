
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { MessageBubbleBot, MessageBubblesUser } from "../atoms/ChatBubble";
import { cn } from "@/lib/utils";
import CorrespondenceFooter from "./CorrespondenceFooter";
import React from "react";
// const message = {
//   id: 1,
//   sender: "user",
//   text: "hello",
//   time: "2025"
// }
const BankCorrespondence = () => {
  const [usermessage, setUsermessage] = React.useState<string>("");
   const [usermess, setUsermess] = React.useState<{id: number; text: string}[]>([]);

  return (
    <Sheet>
  <SheetTrigger>
    <div className="fixed bottom-10 right-1 cursor-pointer"><HiChatBubbleBottomCenterText className="size-[67px] text-primary-one"/></div>
                <div className="fixed bottom-20 right-1 size-4 rounded-full bg-[#D64545] z-10"></div>
  </SheetTrigger>
  <SheetContent className={cn('w-200 bg-card-background pb-12')}>
    <SheetHeader className={cn('border-b-2')} >
      <SheetTitle ><div className="flex items-center gap-2">
        <div className="bg-brand size-10 rounded-full flex text-[11px] text-white items-center justify-center">logo</div>
        <span className="text-[20px]">Bank Correspondence</span>
        </div></SheetTitle></SheetHeader>
      <SheetDescription className={cn('relative px-4 py-2 flex flex-col space-y-7 overflow-y-scroll pt-10 ')}>
          <MessageBubbleBot/>
         <MessageBubblesUser usermess={usermess}/>
       
          
        
       
      
       
        
      </SheetDescription>
      <CorrespondenceFooter setUsermessage={setUsermessage} setUsermess={setUsermess} usermess={usermess} usermessage={usermessage}/>
    
  </SheetContent>
</Sheet>
  )
}

export default BankCorrespondence
