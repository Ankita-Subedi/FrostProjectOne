import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@/components/ui/form";
import { FrostInput } from "./FrostInput";
import { cn } from "@/lib/utils";
import AppButton from "./AppButton";

const formSchema = yup.object({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required(),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required()
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

type FormData = yup.InferType<typeof formSchema>;


export default function ChangePasswordForm({ buttonlabel }: { buttonlabel: string }) {
  const form = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

const onSubmit = async (data: FormData) => {
  console.log("Submitting...", data);
  
  // simulate network delay (e.g. API request)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Password changed:", data);
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="size-20 rounded-full flex items-center bg-cyan-800 justify-center">
            <span className="text-white font-medium">Logo</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-brand">
          Change New Password
        </h2>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FrostInput
                name="newPassword"
                label="Enter your new password"
                control={form.control}
                type="password"
                placeholder="Enter a new password"
              />

              <div className="text-center text-gray-400 text-sm">OR</div>

              <FrostInput
                name="confirmPassword"
                label="Please re-enter your new password"
                control={form.control}
                type="password"
                placeholder="*************"
              />

              <AppButton
                type="submit"
                fullWidth
                className={cn(
                  "mt-6","bg-brand hover:bg-brand-hover"
                )}
                loading={form.formState.isSubmitting}
                loadingText="Changing..."
              >
                <span>{buttonlabel}</span>
              </AppButton>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
