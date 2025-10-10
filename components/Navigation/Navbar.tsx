import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scroll, setscroll] = useState(false);
  const handlescroll = () => {
    if (window.scrollY > 8) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.addEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 border-b border-transparent z-[99999] inset-x-0 h-14 w-full select-none",
        scroll && "border-background/80 bg-background/40 bakcdrop-blur-md"
      )}
    ></header>
  );
};
