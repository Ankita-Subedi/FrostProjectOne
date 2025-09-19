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
};

export function SelectInputField<T extends FieldValues = FieldValues>({
  name,
  label,
  placeholder = 'Select an option',
  control,
  options
}: FrostSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-0 flex flex-col gap-2 whitespace-nowrap  min-w-[300px] flex-1">
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
              <SelectTrigger id={name} className="w-full" key={name}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
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
 