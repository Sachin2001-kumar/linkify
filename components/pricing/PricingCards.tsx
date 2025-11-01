"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import { PLANS } from "@/lib/Constants/pricing";
import { Card } from "../ui/card";

type Tab = "Monthly" | "Yearly";

const PrcingCard = () => {
  const MotionTabTrigger = motion(TabsTrigger);
  const [ActiveTab, SetActiveTab] = useState<Tab>("Monthly");
  return (
    <>
      <Tabs>
        <TabsList
          defaultValue="Monthly"
          className="w-full flex flex-col items-center justify-center"
        >
          <MotionTabTrigger
            value="Monthly"
            onClick={() => SetActiveTab("Monthly")}
            className="relative"
          >
            {ActiveTab === "Monthly" && (
              <motion.div
                layoutId="active-tab-indicator"
                transition={{
                  type: "spring",
                  bounce: 0.5,
                }}
                className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
              >
                <span className="z-20">Monthly</span>
              </motion.div>
            )}
          </MotionTabTrigger>
          <MotionTabTrigger
            value="Yearly"
            onClick={() => SetActiveTab("Yearly")}
            className="relative"
          >
            {ActiveTab === "Yearly" && (
              <motion.div
                layoutId="active-tab-indicator"
                transition={{
                  type: "spring",
                  bounce: 0.5,
                }}
                className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
              >
                <span className="z-20">Yearly</span>
              </motion.div>
            )}
          </MotionTabTrigger>
        </TabsList>
        <TabsContent
          value="Monthly"
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6"
        >
          {PLANS.map((plan) => (
            <Card></Card>
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
};
