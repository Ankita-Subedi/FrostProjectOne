import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Control, FieldValues, Path } from "react-hook-form";
import { X } from "lucide-react";
import { useRef } from "react";
import { cn } from "../../lib/utils";

type FrostInputProps<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  label: string;
  control?: Control<T>;
  type?: string;
  placeholder?: string;
  className?: string;
  hasError?: boolean; 
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;

export function FrostInput<T extends FieldValues = FieldValues>({
  name,
  label,
  control,
  placeholder,
  type,
  className,
  hasError = false,
  ...rest
}: FrostInputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel
            className={cn(
              "text-sm font-medium",
              hasError ? "text-red-500" : "text-gray-700"
            )}
          >
            {label}
          </FormLabel>

          <FormControl>
            <div className="relative group flex items-center w-full">
              <Input
                {...field}
                {...rest}
                ref={inputRef}
                id={name}
                type={type}
                placeholder={placeholder}
                className={cn(
                  "placeholder:text-sm md:placeholder:text-base w-full pr-10",
                  hasError ? "border-red-500" : "border-gray-300",
                  className
                )}
              />

              {field.value && !rest.disabled && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    field.onChange("");
                    inputRef.current?.focus();
                  }}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </FormControl>

          <FormMessage className="text-xs text-red-500 mt-1" />
        </FormItem>
      )}
    />
  );
}
