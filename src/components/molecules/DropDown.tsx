import { useForm, type SubmitHandler } from "react-hook-form"
import { SelectInputField } from "../atoms/SelectDropDown"

import { FormItem,  FormControl, FormMessage, Form } from "@/components/ui/form"

import {  Sparkles } from "lucide-react"


type FormValues = { fruit: string }

const options = [
  { label: "Auto fill from document", value: "From Document" },
  { label: "Auto fill from history", value: "From History" },
 
]

const DropDownFrost = () => {
  const form = useForm<FormValues>({ defaultValues: { fruit: "" } })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Selected Value:", data.fruit)
  }

  return (
    <div>
     
      <Form{...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem>
           
            <FormControl>
              <SelectInputField
                
                name="fruit"
                control={form.control}
                options={options}
                placeholder="Smart Fill with AI"
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
