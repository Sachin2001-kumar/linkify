"use client";

import React from "react";
import { Navbar } from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative min-h-screen flex flex-col">
        {/* 🔹 Background grid behind everything */}
        {/* <div
          id="home"
          className="absolute inset-0 
            dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
            bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]
            bg-[size:6rem_6rem] 
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] 
            h-full w-full z-0"
        /> */}

        {/* 🔹 Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 mt-20">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
