import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import AppButton from "@/components/atoms/AppButton";
import { cn } from "@/lib/utils";

type FormValues = {
  otp: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
});

type OtpVerificationPageProps = {
  phoneMasked?: string;
  onSubmitOtp: (otp: string) => void;
  onResend?: () => void;
  initialOtp?: string;
};

export default function OtpVerificationPage({
  phoneMasked = "+975 xxx-xx05",
  onSubmitOtp,
  onResend,
  initialOtp = "",
}: OtpVerificationPageProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { otp: initialOtp ?? "" },
  });

  const otpValue = form.watch("otp");

  const submit = async (values: FormValues) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // fake delay
      onSubmitOtp(values.otp);
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
          OTP Verification
        </h1>

        <div className="w-full bg-white shadow-md rounded-lg p-6">
          <p className="text-center text-gray-600 mb-4">
            Your code has been sent to{" "}
            <span className="font-medium">{phoneMasked}</span>
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col items-center">
                <label
                  className={cn(
                    "mb-3",
                    form.formState.errors.otp ? "text-red-500" : "text-gray-400"
                  )}
                >
                  Enter your one-time OTP
                </label>

                <InputOTP
                  maxLength={6}
                  value={otpValue}
                  onChange={(val) =>
                    form.setValue("otp", val, { shouldValidate: true })
                  }
                >
                  <InputOTPGroup>
                    {[...Array(6)].map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                {form.formState.errors.otp && (
                  <p className="text-xs text-red-500 mt-2 self-start">
                    {form.formState.errors.otp.message}
                  </p>
                )}
              </div>

              <AppButton
                type="submit"
                loading={loading}
                loadingText="Verifying..."
                fullWidth
                className="bg-[#0077a3] hover:bg-[#006b94] text-white py-3 rounded mt-2"
              >
                Verify OTP
              </AppButton>
            </form>
          </Form>

          <div
            className="text-center text-gray-400 text-sm mt-4 cursor-pointer"
            onClick={onResend}
          >
            Resend OTP <span className="ml-1">(02:30)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
