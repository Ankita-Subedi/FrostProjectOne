import React from "react";
import { AuthCard } from "./AuthCard";

const TestMain = () => {
  return (
    <div className="relative h-[124vh] bg-[url(/mainBG.png)] bg-cover bg-center">
      <div className="absolute bottom-1/10 left-1/4 transform -translate-x-1/2 text-white text-center px-4 flex flex-col items-center">
        <p className="text-heading-2 font-semibold">Securing Future Together</p>
        <p className="mt-2 text-heading-7 w-1/2">
          Join us in building a secure future together with the national loan
          portal, designed to provide financial stability and peace of mind for
          all members.
        </p>
      </div>
      {/* Right panel on top of main BG */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-white rounded-l-[4rem]  overflow-hidden">
        {/* Right background image */}
        <div className="h-full w-full bg-[url(/rightBG.png)] bg-cover bg-center">
          {/* Content centered */}
          <div className="flex flex-col justify-center items-center h-full px-6 gap-6">
            {/* Logo */}
            <img src="/logo.png" className="h-[175px]" alt="Logo" />

            {/* Welcome Text */}
            <p className="text-heading-3 font-bold text-[#004A55] text-center">
              Welcome to NPPF Loan Portal
            </p>

            {/* AuthCard */}
             <AuthCard></AuthCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMain;
