"use client";

import React from "react";
import NextImage from "next/image";

interface PlatformFeature {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const platformFeatures: PlatformFeature[] = [
  {
    image: "/images/futurex/platform/ai_playground.png",
    title: "AI Playground",
    description:
      "Chat with any AI model directly — no coding needed. Powered by OpenRouter's free tier, so you can experiment with prompt engineering and build AI-powered prototypes hands-on.",
    tags: ["No Code", "Prompt Engineering"],
  },
  {
    image: "/images/futurex/platform/research_workspace.png",
    title: "Research Workspace",
    description:
      "Submit a startup idea and get an AI-generated feasibility brief. Define your ideal customer, the problem you solve, and iterate on your analysis. Save and revisit your research anytime.",
    tags: ["Feasibility", "Iteration"],
  },
  {
    image: "/images/futurex/platform/xp_leaderboard.png",
    title: "XP & Leaderboard",
    description:
      "Earn experience points for completing missions, lessons, and milestones. Track your rank against your cohort on a live leaderboard — the top 30 are displayed with a podium for the top 3.",
    tags: ["Gamified", "Ranking"],
  },
  {
    image: "/images/futurex/platform/community_feed.png",
    title: "Community Feed",
    description:
      "Post your pitches, share progress, get upvotes and feedback from fellow students. Tagged under Lessons & Missions, your work is visible to the entire fellowship community.",
    tags: ["Feedback", "Network"],
  },
  {
    image: "/images/futurex/platform/harvard_case_studies.png",
    title: "Harvard Case Studies",
    description:
      "Real business cases used at the world's top institutions, adapted for young founders. Analyse decisions, debate strategies, and apply lessons to your own venture.",
    tags: ["Strategy", "Analysis"],
  },
  {
    image: "/images/futurex/platform/international_certification.png",
    title: "International Certification",
    description:
      "Complete the fellowship and receive an internationally recognised certification — a credential that validates your entrepreneurial skills and AI literacy to universities and employers.",
    tags: ["Credential", "Recognition"],
  },
];

export function FutureXPlatformSection() {
  return (
    <section className="relative bg-[#07080a] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-4xl mb-20">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
            Inside the Platform
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
            Built for <br />
            <span className="text-[#CFFD53]">student founders.</span>
          </h2>
          <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-white/70 max-w-3xl font-medium">
            Every tool a young entrepreneur needs, integrated into one learning
            platform.
          </p>
        </div>

        {/* Dashboard Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col overflow-hidden rounded-[32px] bg-[#1a1c18] text-left transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/5"
            >
              {/* Image Container */}
              <div className="relative h-[260px] w-full shrink-0 overflow-hidden">
                <NextImage
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay to fade into card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c18] via-[#1a1c18]/80 to-[#1a1c18]/0" />
              </div>

              {/* Content Container */}
              <div className="relative flex flex-1 flex-col px-8 pb-8 -mt-12 z-10">
                <h3 className="text-[26px] font-medium tracking-tight text-white mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60 font-normal mb-6 flex-1">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/80 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
