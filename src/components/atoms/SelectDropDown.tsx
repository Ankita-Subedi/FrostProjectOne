import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Select } from '@/components/ui/select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import clsx from 'clsx';

type Option = {
  label: string;
  value: string;
};

type FrostSelectProps<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder?: string;
  control: Control<T>;
  options: Option[];
  children: React.ReactNode;
  className?: string; 
};

export function SelectInputField<T extends FieldValues = FieldValues>({
  name,
  label,
  placeholder = 'Select an option',
  control,
  options,
  children,
  className, 
}: FrostSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={clsx(
            'flex gap-2 whitespace-nowrap w-full  h-full',
            className
          )}
        >
          <FormLabel className="whitespace-nowrap" htmlFor={name}>
            {label}
          </FormLabel>
          <FormControl className="shadow-none">
            <Select
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={field.value}
              name={field.name}
            >
              <SelectTrigger
                id={name}
                // className={clsx(
                //   'w-full mx-auto data-[placeholder]:bg-clip-text data-[placeholder]:text-transparent data-[placeholder]:bg-[linear-gradient(266.02deg,#66CD00_-70.07%,#299FE7_105.05%)] bg-[linear-gradient(107.13deg,rgba(41,159,231,0.1)_18.25%,rgba(245,223,41,0.1)_133.7%)]',
                //   className 
                // )}
                 className={clsx(
                  'w-[200px] mx-auto  ',
                  className 
                )}
                key={name}
              >
                <div className="flex items-center gap-1">
                  {children}
                  <SelectValue placeholder={placeholder} />
                </div>
              </SelectTrigger>
              <SelectContent className="w-full">
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-[#3C4144]"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
