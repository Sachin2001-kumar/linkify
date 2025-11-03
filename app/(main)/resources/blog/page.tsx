"use client";

import Blogs from "@/components/blog/blogs";
import AnimationContainer from "@/components/global/AnimationContainer";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";

const Blog = () => {
  return (
    <>
      <MaxwidthWrapper>
        <AnimationContainer>
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Blogs
            </h1>
            <p className="text-base md:text-xl mt-6 text-muted-foreground">
              Latest news and updates.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2} className="w-full pt-20 mb-20">
          <Blogs />
        </AnimationContainer>
      </MaxwidthWrapper>
    </>
  );
};

export default Blog;
