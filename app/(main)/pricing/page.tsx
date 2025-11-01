"use client";

import AnimationContainer from "@/components/global/AnimationContainer";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";
import React from "react";
import { motion } from "framer-motion";
import MagicBadge from "@/components/ui/magic-badge";
import PricingCard from "@/components/pricing/PricingCards";

const Pricing = () => {
  return (
    <MaxwidthWrapper>
      <AnimationContainer>
        <div className="flex flex-col items-center justify-center py-2 max-w-xl mx-auto text-center">
          <MagicBadge title="Simple" />
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading mt-6 leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Simple And Transparent Pricing
          </h1>
          <p className="text-base md:text-xl mt-6 text-muted-foreground">
            Choose a plan that works for you. No hidden fees.
            <br /> No surprises.
          </p>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.3}>
        <PricingCard />
      </AnimationContainer>
    </MaxwidthWrapper>
  );
};

export default Pricing;
