"use client";
import React from "react";
import AnimationContainer from "../global/AnimationContainer";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between">
      <AnimationContainer delay={0.2}>
        <div className="">
          <h3 className="">Product</h3>
          <ul className="">
            <li></li>
          </ul>
        </div>
      </AnimationContainer>
    </footer>
  );
};
