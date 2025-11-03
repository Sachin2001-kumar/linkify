"use client";

import React from "react";
import Image from "next/image";
import blogs from "@/lib/Constants/blogs.json";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: Props) => {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return (
      <MaxwidthWrapper>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h2 className="text-2xl font-semibold text-red-500">
            Blog not found!
          </h2>
          <p className="text-muted-foreground mt-4">
            The blog you’re looking for doesn’t exist or has been removed.
          </p>
        </div>
      </MaxwidthWrapper>
    );
  }

  return (
    <MaxwidthWrapper>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto  md:px-2 sm:py-4">
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-md">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1024}
            height={768}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-heading leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {blog.title}
          </h1>
          <p className="text-green-500 text-3xl mt-4 max-w-2xl">
            {blog.description}
          </p>
        </div>

        <div className="mt-10 text-lg leading-relaxed text-foreground/60 whitespace-pre-line ">
          {blog.content}
        </div>
      </div>
    </MaxwidthWrapper>
  );
};

export default BlogPage;
