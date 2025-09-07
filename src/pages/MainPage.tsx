import { AuthCard } from "./AuthCard";
import logo from "../assets/logo.png";

const MainPage = () => {
  return (
    <div className="relative h-screen w-screen bg-[url('/mainBG.png')] bg-cover bg-center font-urbanist">
      <div className="absolute bottom-1/6 left-1/4 transform -translate-x-1/2 text-white text-center px-4 flex flex-col items-center">
        <p className="text-heading-2 font-semibold font-urbanist">Securing Future Together</p>
        <p className="mt-2 text-heading-7 w-1/2">
          Join us in building a secure future together with the national loan
          portal, designed to provide financial stability and peace of mind for
          all members.
        </p>
      </div>
      {/* Right side (50%) with white background */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-white rounded-l-4xl">
        {/* Overlay with rightBG image */}
        <div className="h-full w-full bg-[url('/rightBG.png')] bg-cover bg-center">
          {/* Centered AuthCard */}
          <div className="flex flex-col items-center justify-center h-full bg-black/30 gap-4">
            <div className="">
              <img className="size-[175px]" src={logo} alt="logo" />
            </div>
            <p className="text-heading-3 font-bold text-brand-primary">
              Welcome to NPPF Loan Portal
            </p>
            <AuthCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
