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
import { LucideIcon } from "lucide-react";

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
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxwidthWrapper className="flex items-center justify-center">
          <div className="flex items-center space-x-12">
            <Link href="/#home">
              <span className="text-lg text-white font-bold font-heading !leading-none">
                Linkify
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
                              <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                <NavigationMenuLink asChild>
                                  <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
