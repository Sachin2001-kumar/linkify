"use client";

import AnimationContainer from "@/components/global/AnimationContainer";
import MaxwidthWrapper from "@/components/global/max-width-wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import { useState } from "react";

const LinkShorteningPage = () => {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");

  const handleGenerate = async () => {
    const query = `
      mutation($url: String!) {
        createShortLink(originalUrl: $url) {
          shortCode
          originalUrl
        }
      }
    `;

    const res = await fetch("/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { url } }),
    });

    const data = await res.json();
    setShort(data.data.createShortLink.shortCode);
  };

  return (
    <>
      <MaxwidthWrapper>
        <AnimationContainer delay={0.3} className="w-full">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center py-2 max-w-xl mx-auto text-center">
            <MagicBadge title="Simple" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading mt-6 leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Shorten links and track their performance
            </h1>
            <p className="text-base md:text-xl mt-6 text-muted-foreground">
              Simplify your workflow with powerful link management tools. <br />
              Shorten links, track clicks, and optimize your strategy with ease.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 h-[250px] p-6 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a0033]/80 via-[#0a001a]/80 to-[#001133]/80 border-2 border-purple-600/40 shadow-[0_0_40px_rgba(124,58,237,0.35)] backdrop-blur-2xl mt-10 mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 opacity-30 blur-[60px] animate-pulse-slow"></div>

            <div className="absolute inset-0 border-[1px] border-transparent rounded-2xl bg-gradient-to-r from-purple-600/40 via-blue-500/40 to-purple-600/40 [mask-composite:exclude] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Enter your long link"
                className="w-72 sm:w-96 p-3 bg-black/40 text-white placeholder-gray-400 border border-purple-500/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white font-semibold rounded-lg shadow-[0_0_25px_rgba(99,102,241,0.7)] hover:shadow-[0_0_35px_rgba(129,140,248,0.9)] hover:scale-105 transition-all duration-300"
                onClick={handleGenerate}
              >
                Generate
              </button>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Paste your long URL above and get a short, trackable link instantly.
          </p>

          <div>{short && <p>Short URL: /s/{short}</p>}</div>
        </AnimationContainer>
      </MaxwidthWrapper>
    </>
  );
};

export default LinkShorteningPage;
