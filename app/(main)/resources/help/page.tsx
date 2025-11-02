"use client";

import ContactForm from "@/components/form/ContactForm";
import AnimationContainer from "@/components/global/AnimationContainer";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";

const Contact = () => {
  return (
    <>
      <MaxwidthWrapper>
        <AnimationContainer delay={0.2}>
          <div className="flex flex-col items-center w-full h-[200px] gap-4">
            <h1 className="flex font-extrabold text-4xl bg-gradient-to-l from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              We are Here to help you!
            </h1>

            <p className="font-bold text-2xl md:text-xl text-muted-foreground">
              Send Message
            </p>
            <div className="w-full mt-4">
              <ContactForm />
            </div>
          </div>
        </AnimationContainer>
      </MaxwidthWrapper>
    </>
  );
};

export default Contact;
