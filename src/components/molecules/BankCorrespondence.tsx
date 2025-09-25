import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MessageBubbleBot, MessageBubblesUser } from "../atoms/ChatBubble";
import { cn } from "@/lib/utils";
import CorrespondenceFooter from "./CorrespondenceFooter";
import React from "react";
import { Icon } from "@iconify/react";
// const message = {
//   id: 1,
//   sender: "user",
//   text: "hello",
//   time: "2025"
// }
const BankCorrespondence = () => {
  const [usermessage, setUsermessage] = React.useState<string>("");
  const [usermess, setUsermess] = React.useState<
    { id: number; text: string }[]
  >([]);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="fixed flex items-center justify-center  bg-primary-one p-2 rounded-t-xl gap-2 bottom-0 right-5 cursor-pointer">
          <Icon icon="fluent:chat-12-regular" fontSize={20} color="white" />
          <span className="text-[14px] text-white">
            Correspondance with bank
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className={cn("w-200 bg-card-background pb-12")}>
        <SheetHeader className={cn("border-b-2")}>
          <SheetTitle>
            <div className="flex items-center gap-2">
              <div className="bg-brand size-10 rounded-full flex text-[11px] text-white items-center justify-center">
                logo
              </div>
              <span className="text-[20px]">Bank Correspondence</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription
          className={cn(
            "relative px-4 py-2 flex flex-col space-y-7 overflow-y-scroll pt-10 "
          )}
        >
          <MessageBubbleBot />
          <MessageBubblesUser usermess={usermess} />
        </SheetDescription>
        <CorrespondenceFooter
          setUsermessage={setUsermessage}
          setUsermess={setUsermess}
          usermess={usermess}
          usermessage={usermessage}
        />
      </SheetContent>
    </Sheet>
  );
};

export default BankCorrespondence;
