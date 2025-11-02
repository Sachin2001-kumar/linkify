"use client";

import AnimationContainer from "@/components/global/AnimationContainer";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";
import React from "react";

const ChangeLog = () => {
  return (
    <>
      <MaxwidthWrapper>
        <AnimationContainer delay={0.3} className="w-full">
          <div
            className="relative flex flex-col items-center justify-center text-center rounded-2xl p-8 h-[220px] mt-10 overflow-hidden
            bg-gradient-to-br from-[#1a0033]/70 via-black/70 to-[#000d33]/70 
            border border-purple-700/50 shadow-[0_0_30px_rgba(124,58,237,0.3)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 opacity-20 blur-[80px] animate-pulse-slow"></div>

            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                No Changes Yet!
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                If there are any{" "}
                <span className="text-purple-400 font-medium">new updates</span>
                , we’ll notify you here.
              </p>
            </div>
          </div>
        </AnimationContainer>
      </MaxwidthWrapper>
    </>
  );
};

export default ChangeLog;
