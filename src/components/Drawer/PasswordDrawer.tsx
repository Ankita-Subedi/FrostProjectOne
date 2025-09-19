

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog"
import {
  Drawer,

  DrawerContent,
  DrawerDescription,
 
  ShadcnDrawerHeader,
  DrawerTitle,
  
} from "@/components/ui/drawer"
type DrawerProps = {
    title: string,
    subtitle: string,
    buttonlabel: string,
}
import React from "react"
import AppButton from "../atoms/ButtonFrost"
const PasswordDrawer = ({title, subtitle, buttonlabel}:DrawerProps) => {
  const [open, setOpen] = React.useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} >
        
        <DialogContent className={cn("max-w-[574px] md:h-[292px] gap-[10px] rounded-[20px] flex flex-col items-center shadow-s bg-gray-100") }  onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className={cn("text-center text-[36px] font-bold text-primary-one font-mono")}>{title}</DialogTitle>
            <div className="max-w-[464px] h-[156px] border p-[24px] rounded-xl border-grey-200 flex flex-col justify-center gap-[20px] bg-white">
                 <DialogDescription className={cn("text-black text-[20px]/[24px] text-center px-10 max-w-[440px]")}>
              {subtitle}
            </DialogDescription>
            <ProfileForm buttonlabel={buttonlabel} />

            </div>
           
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      
      <DrawerContent className={cn("flex flex-col bg-card-background shadow-s ")}  onInteractOutside={(e) => e.preventDefault()}>
        <ShadcnDrawerHeader>
          <DrawerTitle className="text-brand text-[24px] font-bold text-primary-one">{title}</DrawerTitle>
          <div className="border rounded-xl flex flex-col gap-4 p-4 justify-center bg-white mt-5">
            <DrawerDescription className="text-black text-[14px]">
            {subtitle}
          </DrawerDescription>
          <ProfileForm className="px-4" buttonlabel={buttonlabel} />

          </div>
          
        </ShadcnDrawerHeader>
        
      </DrawerContent>
    </Drawer>
  )
}
type ProfileFormProps = React.ComponentProps<"form"> & {buttonlabel?:string}
function ProfileForm({ className , buttonlabel}: ProfileFormProps) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
     
     
      <AppButton className={cn("bg-primary-one hover:brand-hover cursor-pointer   text-sm lg:text-base md:w-[416px] md:h-[36px]")}><span className="font-normal text-white">{buttonlabel}</span></AppButton>
    </form>
  )
}

export default PasswordDrawer
