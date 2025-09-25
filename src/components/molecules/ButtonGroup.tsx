import { CircleX, Download, Mail, RotateCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import AppButton from '../atoms/ButtonFrost'

const ButtonGroup = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-6 w-full">
      {/* Left group */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full lg:w-auto">
        <AppButton className={cn("bg-primary-one cursor-pointer w-full sm:w-auto")}>
          <div className="flex gap-2 items-center justify-center">
            <Download />
            <span>Download LC</span>
          </div>
        </AppButton>

        <AppButton
          className={cn(
            "bg-indigo-50 border border-brand hover:bg-blue-200 cursor-pointer w-full sm:w-auto"
          )}
        >
          <div className="flex gap-2 items-center justify-center text-[#00648A]">
            <Mail />
            <span>Request Amendment</span>
          </div>
        </AppButton>

        {/* <AppButton
          className={cn(
            "bg-indigo-50 border border-brand hover:bg-blue-200 cursor-pointer w-full sm:w-auto"
          )}
        >
          <div className="flex gap-2 items-center justify-center text-[#00648A]">
            <Redo2 />
            <span>Email Copy</span>
          </div>
        </AppButton> */}

        <AppButton
          variant="destructive"
          className={cn("hover:bg-red-500 cursor-pointer w-full sm:w-auto")}
        >
          <div className="flex gap-2 items-center justify-center">
            <CircleX />
            <span>Request Cancellation</span>
          </div>
        </AppButton>
      </div>

      {/* Right button */}
      <AppButton
        className={cn(
          "bg-reapply-button hover:bg-green-800 cursor-pointer w-full lg:w-auto"
        )}
      >
        <div className="flex gap-2 items-center justify-center">
          <RotateCw />
          <span>Reapply with same info</span>
        </div>
      </AppButton>
    </div>
  )
}


export default ButtonGroup
