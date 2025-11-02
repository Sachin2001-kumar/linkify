"use client";

import React from "react";
import { useForm } from "react-hook-form";
import MaxwidthWrapper from "../global/max-width-wrapper";
import AnimationContainer from "../global/AnimationContainer";

type ContactFormData = {
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Data:", data);

    // Simulate sending to API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent successfully!");
    reset();
  };

  return (
    <MaxwidthWrapper>
      <AnimationContainer>
        <div className="flex w-full items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md p-6 rounded-xl flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-fit p-6 bg-gradient-to-l from bg-purple-700 to-blue-500  text-black font-bold text-xl py-2 rounded-md hover:bg-green-500 transition disabled:opacity-50 border-2 border-purple-700"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </AnimationContainer>
    </MaxwidthWrapper>
  );
}
