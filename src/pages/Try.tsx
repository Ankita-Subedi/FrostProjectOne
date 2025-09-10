import { AuthCard } from "./AuthCard";

const Try = () => {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden">
      {/* Left Amber Section */}
      <div className="hidden lg:block w-full h-full relative z-0">
        {/* Optional left-side image */}
        <img
          src="/mainBG.png"
          alt="Left"
          className="absolute top-1/2 left-0 -translate-y-1/2 object-cover z-10 h-screen w-screen"
        />
      </div>

      {/* Right Container */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 absolute top-0 right-0  bg-white rounded-l-[40px] overflow-auto z-20  h-screen">
        {/* Right background image */}
        {/* <img
          src="/rightBG.png"
          alt="Right Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        /> */}

        {/* Right content */}
        <div className="flex flex-col items-center gap-6 my-[20px]">
          <div>
            <img src="./logo.png" alt="logo" />
          </div>
          <p className="text-heading-6 font-bold text-brand-primary">
            Welcome to NPPF Loan Portal
          </p>
          <div className="py-6">
            <AuthCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Try;
