import { Register } from "@/components/organisms/Register"

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-6 py-10 bg-grey10">
      <div>
        <p className="rounded-full size-[93px] text-center flex justify-center items-center bg-secondary1 text-white">Logo</p>
      </div>
      <div>
        <p className="text-primary1 text-3xl font-bold text-center md:text-[36px]">Register your Tradesmart Account</p>
      </div>
      <div>
        <p className="text-cyan-800 text-md font-semibold md:font-medium text-center md:text-[18px]">Fill in your details below to create your NPPF account</p>
      </div>
      <div className="">
        <Register/>
      </div>
    </div>
  )
}

export default RegisterPage
