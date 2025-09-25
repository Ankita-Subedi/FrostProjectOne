import { useForm, type SubmitHandler } from "react-hook-form"
import { SelectInputField } from "../atoms/SelectDropDown"

import { FormItem,  FormControl, FormMessage, Form } from "@/components/ui/form"

import {  Sparkles } from "lucide-react"


type FormValues = { data: string }

// const options = [
//   { label: "Auto fill from document", value: "From Document" },
//   { label: "Auto fill from history", value: "From History" },
 
// ]
type Option = {
  label: string
  value: string
}

type DropDownFrostProps = {
  label: string
  options: Option[]
}

const DropDownFrost = ({label, options}:DropDownFrostProps) => {
  const form = useForm<FormValues>({ defaultValues: { data: "" } })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Selected Value:", data.data)
  }

  return (
    <div>
     
      <Form{...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem>
           
            <FormControl>
              <SelectInputField
                
                name="data"
                control={form.control}
                options={options}
                placeholder={label}
               label=""
            

              >
              <Sparkles className="w-16 h-16 gradient-stroke-blue" strokeWidth={2} />
                </SelectInputField>
            </FormControl>
            <FormMessage />
          </FormItem>
        </form>
      </Form>
    </div>
  )
}

export default DropDownFrost
