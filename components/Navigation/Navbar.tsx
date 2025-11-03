"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import AnimationContainer from "../global/AnimationContainer";
import MaxwidthWrapper from "../global/max-width-wrapper";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NAV_LINKS } from "@/utils/constants/nav_links";
import { LucideIcon, ZapIcon } from "lucide-react";
import ModeToggle from "../theme/ModeToggle";
import { Button, buttonVariants } from "../ui/button";

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
        "sticky top-0 border-b border-transparent z-[99999] inset-x-0 h-[60px] w-full select-none backdrop-blur-md mb-0",
        scroll && "border-background/80 bg-background/40 bakcdrop-blur-lg"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxwidthWrapper className="flex items-center justify-between">
          {/* right Side  */}
          <div className="flex items-center space-x-12">
            <Link href="/#home">
              <span className="text-xl text-white font-bold font-heading !leading-none">
                linkify
              </span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.menu ? (
                      <>
                        <NavigationMenuTrigger>
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              "grid gap-1 md:w-[400px] lg:w-[500px] rounded-xl",
                              link.title === "Features"
                                ? "lg:grid-cols-[.75fr_1fr]"
                                : "lg:grid-cols-2"
                            )}
                          >
                            {link.title === "Features" && (
                              <li className="row-span-3">
                                <div className=""></div>
                                <NavigationMenuLink asChild>
                                  <Link
                                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                    href="/"
                                  >
                                    <h6 className="mt-4 mb-2 text-lg font-medium">
                                      All Features
                                    </h6>
                                    <p className="text-muted-foreground text-sm leading-tight">
                                      Manage all our links at one place
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )}
                            {link.menu.map((menuitem) => (
                              <ListItem
                                key={menuitem.title}
                                title={menuitem.title}
                                href={menuitem.href}
                                icon={menuitem.icon}
                              >
                                {menuitem.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href} passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Right side  */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              {/* <div>
                <ModeToggle />
              </div> */}
              <Link href="/" className={buttonVariants({ size: "sm" })}>
                Get Started
                <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
              </Link>
            </div>
          </div>
        </MaxwidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={children! as string}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
