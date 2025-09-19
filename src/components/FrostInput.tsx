import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { Control, FieldValues, Path } from "react-hook-form"
import { X } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FrostInputProps<T extends FieldValues = FieldValues> = {
  name: Path<T>
  label: string
  control: Control<T>
  type?: string
  maxItem?: number
  remainingChars?: number
  maxCharacters?: number
  inputCharacter?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">

export function FrostInput<T extends FieldValues = FieldValues>({
  name,
  label,
  control,
  className,
  maxItem,
  maxCharacters,
  inputCharacter,
  ...rest
}: FrostInputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative min-w-[300px] flex-1">
          <FormLabel htmlFor={name}>
            <div className="flex justify-between items-center">
              <p className="font-medium whitespace-nowrap">
                {label}
                {maxItem && <span className="opacity-30 text-[12px]"> {` ( up to ${maxItem} )`}</span>}
              </p>
              {maxCharacters && (
                <p className="opacity-30 text-[12px]">{`${inputCharacter ?? 0}/${maxCharacters}`} Characters</p>
              )}
            </div>
          </FormLabel>

          <FormControl>
            <div className="relative group">
              <Input
                {...field}
                {...rest}
                id={name}
                ref={inputRef}
                className={cn("pr-10 placeholder:text-xs md:placeholder:text-sm", className)}
              />
              {field.value && !rest.disabled && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    field.onChange("")
                    inputRef.current?.focus()
                  }}
                  className="hidden group-focus-within:block absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-1 text-muted-foreground hover:text-foreground hover:bg-gray-200"
                >
                  <X className="size-4" />
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
