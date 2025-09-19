import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FrostInput } from "@/components/atoms/FrostInput";

type FormValues = {
  phone: string;
  email: string;
};

const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    phone: yup
      .string()
      .matches(/^\d*$/, "Phone must be a number")
      .default(""),
    email: yup
      .string()
      .email("Invalid email")
      .default(""),
  })
  .test(
    "phone-or-email",
    "Either phone or email is required",
    (value) => !!value.phone?.trim() || !!value.email?.trim()
  );

export default function ChangePasswordPage() {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { phone: "", email: "" },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form submitted:", values);
  };

  const rootError = form.formState.errors?.root?.message;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        <div className="flex items-center justify-center bg-[#0077a3] text-white w-16 h-16 rounded-full">
          Logo
        </div>

        <h1 className="text-4xl font-semibold text-[#0077a3]">
          Change your password
        </h1>

        <div className="w-full bg-white shadow-md rounded-lg p-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <Controller
                name="phone"
                control={form.control}
                render={({ field }) => {
                  const hasError =
                    !!form.formState.errors.phone || !!rootError;
                  return (
                    <FrostInput<FormValues>
                      {...field}
                      control={form.control}
                      label="Enter your registered phone number"
                      type="text"
                      placeholder="Enter your phone number"
                      hasError={hasError}
                    />
                  );
                }}
              />

              <p className="text-center text-sm text-gray-500 font-medium">OR</p>

              <Controller
                name="email"
                control={form.control}
                render={({ field }) => {
                  const hasError =
                    !!form.formState.errors.email || !!rootError;
                  return (
                    <FrostInput<FormValues>
                      {...field}
                      control={form.control}
                      label="Enter your registered email"
                      type="email"
                      placeholder="Enter your registered email"
                      hasError={hasError}
                    />
                  );
                }}
              />

              {rootError && (
                <p className="text-xs text-red-500 mt-1">{rootError}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-[#0077a3] hover:bg-[#006b94] text-white py-2 rounded mt-2"
              >
                We’ve sent one time OTP! Please Proceed.
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
