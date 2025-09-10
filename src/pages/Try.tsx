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
      <div
        className="flex flex-col   w-full lg:w-1/2 absolute top-0 right-0  bg-white rounded-l-[40px] overflow-auto z-20  h-screen"
        style={{
          backgroundImage: "url(/rightBG.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Right background image */}

        <div className="flex flex-col gap-6 items-center border py-10 z-10">
          <img src="./logo.png" alt="logo" />

          <p className="text-heading-6 font-bold text-brand-primary">
            Welcome to NPPF Loan Portal
          </p>

          <AuthCard />
        </div>

        {/* Right content */}
      </div>
    </div>
  );
};

export default Try;
