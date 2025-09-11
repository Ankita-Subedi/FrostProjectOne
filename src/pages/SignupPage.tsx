import { AuthCard } from "./AuthCard";

const Try = () => {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden">
      {/* Left Section */}
      <div className="hidden lg:block w-full h-full relative z-0">
        {/* left-side image */}
        <img
          src="/mainBG.png"
          alt="Left"
          className="absolute top-1/2 left-0 -translate-y-1/2 object-cover z-10 h-screen w-screen"
        />
        {/* Text overlay */}
        <div className="absolute left-10 bottom-20 z-20 text-center text-white">
          <h1 className="text-4xl font-bold">Securing Future Together</h1>
          <p className="mt-4 text-lg w-2xl">
            Join us in building a secure future together with the national loan
            portal, designed to provide financial stability and peace of mind
            for all members.
          </p>
        </div>
      </div>

      {/* Right Container */}
      <div
        className="flex flex-col w-full lg:w-1/2 absolute top-0 right-0  bg-white rounded-l-[40px] overflow-auto z-20  h-screen"
        style={{
          backgroundImage: "url(/rightBG.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Right content */}
        <div className="flex flex-col items-center gap-6 py-10 z-10">
          <div>
            <img src="./logo.png" alt="logo" />
          </div>
          <p className="text-heading-6 font-bold text-brand-primary sm:p-6 md:p-0">
            Welcome to NPPF Loan Portal
          </p>

          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Try;
