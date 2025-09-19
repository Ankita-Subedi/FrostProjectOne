import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FrostInput } from "@/components/atoms/FrostInputTest";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/userSchema";
import AppButton from "../atoms/AppButton";

type LoginFormValues = {
  fullName: string;
  cid: string;
  password: string;
};

export function Login() {
  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      fullName: "",
      cid: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    console.log(data);
    // simulate delay for testing
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Card className="w-[359px] font-urbanist bg-white ">
      <CardHeader>
        <CardTitle>Log in to your NPPF Loan Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <FrostInput
                name="fullName"
                label="Full Name"
                control={control}
                maxCharacters={30}
                inputCharacter={watch("fullName")?.length || 0}
                placeholder="Enter your full name:"
              />

              <FrostInput
                name="cid"
                label="Corporate ID / Business Registration"
                control={control}
                placeholder="Enter your Corporate ID/Business Registration"
              />

              <div className="grid gap-2">
                <FrostInput
                  name="password"
                  label="Password"
                  type="password"
                  control={control}
                  placeholder="Enter your password"
                />
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-primary1"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <CardFooter className="flex-col text-[14px] gap-2">
              <AppButton
                type="submit"
                fullWidth
                loading={isSubmitting}
                loadingText="Logging in..."
                className="bg-primary1"
              >
                Login
              </AppButton>

              <p>OR</p>

              <AppButton
                type="button"
                fullWidth
                variant="secondary"
                className="bg-primary1"
                onClick={() => {
                  // navigate to register page
                  window.location.href = "/register";
                }}
              >
                Register a new account
              </AppButton>
            </CardFooter>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
