"use client";

import AnimationContainer from "../global/AnimationContainer";
import MaxwidthWrapper from "../global/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQ } from "@/lib/Constants/FAQ";

const FAQuestions = () => {
  return (
    <>
      <MaxwidthWrapper>
        <AnimationContainer delay={0.2}>
          <div className="mt-20 w-full">
            <div className="flex flex-col items-center justify-center w-full pt-12">
              <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-lg mt-6 text-center text-neutral-500">
                Here are some of the most common questions we get asked. If you
                have a question that isn&apos;t answered here, feel free to
                reach out to us.
              </p>
            </div>
            <div className="max-w-3xl mx-auto w-full mt-20">
              <Accordion type="single" collapsible>
                {FAQ.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.question}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimationContainer>
      </MaxwidthWrapper>
    </>
  );
};

export default FAQuestions;
