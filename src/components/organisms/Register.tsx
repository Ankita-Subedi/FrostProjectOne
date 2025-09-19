import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FrostInput } from "@/components/atoms/FrostInputTest";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schemas/userSchema";
import AppButton from "../atoms/AppButton";

type RegisterFormValues = {
  fullName: string;
  dob: string; // YYYY-MM-DD
  idType: string;
  corporateId: string;
  mobileNumber: string;
  emailAddress: string;
};

export function Register() {
  const methods = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullName: "",
      dob: "",
      idType: "",
      corporateId: "",
      mobileNumber: "",
      emailAddress: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Card className="w-[359px] font-urbanist bg-white ">
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <FrostInput
                name="fullName"
                label="Full Name"
                control={control}
                placeholder="Enter your full name"
              />

              <FrostInput
                name="dob"
                label="Date of Birth"
                type="date"
                control={control}
              />

              <div className="grid gap-2">
                <label htmlFor="idType">ID Type</label>
                <select
                  id="idType"
                  {...methods.register("idType")}
                  className="border rounded p-2"
                >
                  <option value="">Select ID Type</option>
                  <option value="passport">Passport</option>
                  <option value="driver_license">Driver License</option>
                  <option value="nid">National ID</option>
                </select>
              </div>

              <FrostInput
                name="corporateId"
                label="Corporate ID / Business Registration"
                control={control}
                placeholder="Enter your Corporate ID/Business Registration"
              />

              <FrostInput
                name="mobileNumber"
                label="Mobile Number"
                control={control}
                placeholder="Enter your mobile number"
              />

              <FrostInput
                name="emailAddress"
                label="Email Address"
                control={control}
                placeholder="Enter your email address"
              />
               <AppButton
                type="submit"
                fullWidth
                loading={isSubmitting}
                loadingText="Registering..."
                className="bg-primary1 w-full"
              >
                Register Now
              </AppButton>
               <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-primary1 hover:no-underline"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
