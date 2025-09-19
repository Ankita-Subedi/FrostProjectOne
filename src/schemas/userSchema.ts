import * as yup from "yup";

// Base schema for all user fields
export const userSchema = yup.object({
  fullName: yup
    .string()
    .max(30, "Full name must be at most 30 characters")
    .required("Full name is required"),
  dob: yup.string().required("Date of birth is required").test("dob", "Date of birth cannot be in the future", (value) => {
    if (!value) return false;
    const selectedDate = new Date(value);
    const today = new Date();
    return selectedDate <= today;
  }),
  idType: yup.string().required("ID type is required"),
  corporateId: yup.string().required("Corporate ID is required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Mobile number must be numeric")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  emailAddress: yup.string().email("Invalid email").required("Email is required"),
  cid: yup.string().required("Corporate ID (login) is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

// Only the fields needed for login
export const loginSchema = userSchema.pick(["cid", "password", "fullName"]);

// Only the fields needed for register
export const registerSchema = userSchema.pick([
  "fullName",
  "dob",
  "idType",
  "corporateId",
  "mobileNumber",
  "emailAddress",
]);
