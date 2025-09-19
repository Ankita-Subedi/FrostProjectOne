import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@/components/ui/form";
import { FrostInput } from "@/components/atoms/FrostInput";
import AppButton from "@/components/atoms/AppButton"; 
import { useState } from "react";

type FormValues = {
  phone?: string;
  email?: string;
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
    (value) => !!value?.phone?.trim() || !!value?.email?.trim()
  );

export default function ChangePasswordPage() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { phone: "", email: "" },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      console.log("Submitting form...", values);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Password change submitted:", values);
    } finally {
      setLoading(false);
    }
  };

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
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-4"
            >
              <FrostInput<FormValues>
                name="phone"
                control={form.control}
                label="Enter your registered phone number"
                type="text"
                placeholder="Enter your phone number"
              />

              <p className="text-center text-sm text-gray-500 font-medium">OR</p>

              <FrostInput<FormValues>
                name="email"
                control={form.control}
                label="Enter your registered email"
                type="email"
                placeholder="Enter your registered email"
              />

              <AppButton
                type="submit"
                loading={loading}
                loadingText="Submitting..."
                fullWidth
                className="bg-[#0077a3] hover:bg-[#006b94] text-white py-2 rounded mt-2"
              >
                We’ve sent one time OTP! Please Proceed.
              </AppButton>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
