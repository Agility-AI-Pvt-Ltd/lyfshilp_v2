"use client";

import React from "react";

interface PlatformFeature {
  emoji: string;
  title: string;
  description: string;
}

const platformFeatures: PlatformFeature[] = [
  {
    emoji: "🤖",
    title: "AI Playground",
    description: "Chat with any AI model directly — no coding needed. Powered by OpenRouter's free tier, so you can experiment with prompt engineering and build AI-powered prototypes hands-on.",
  },
  {
    emoji: "🔬",
    title: "Research Workspace",
    description: "Submit a startup idea and get an AI-generated feasibility brief. Define your ideal customer, the problem you solve, and iterate on your analysis. Save and revisit your research anytime.",
  },
  {
    emoji: "⚡",
    title: "XP & Leaderboard",
    description: "Earn experience points for completing missions, lessons, and milestones. Track your rank against your cohort on a live leaderboard — the top 30 are displayed with a podium for the top 3.",
  },
  {
    emoji: "📣",
    title: "Community Feed",
    description: "Post your pitches, share progress, get upvotes and feedback from fellow students. Tagged under Lessons & Missions, your work is visible to the entire fellowship community.",
  },
  {
    emoji: "📊",
    title: "Harvard Case Studies",
    description: "Real business cases used at the world's top institutions, adapted for young founders. Analyse decisions, debate strategies, and apply lessons to your own venture.",
  },
  {
    emoji: "🎓",
    title: "International Certification",
    description: "Complete the fellowship and receive an internationally recognised certification — a credential that validates your entrepreneurial skills and AI literacy to universities and employers.",
  },
];

export function FutureXPlatformSection() {
  return (
    <section className="relative lg:sticky lg:top-0 z-30 bg-[#07080a] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-28px_72px_rgba(0,0,0,0.9)] border-t border-white/5">
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
            Every tool a young entrepreneur needs, integrated into one learning platform.
          </p>
        </div>

        {/* Dashboard Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#10b981]/50 hover:bg-white/8 hover:shadow-[0_20px_50px_rgba(16,185,129,0.06)] flex flex-col justify-start text-left"
            >
              <div className="grid size-14 place-items-center rounded-xl bg-white/5 text-3xl mb-6 group-hover:bg-[#10b981]/10 group-hover:scale-105 transition-all duration-300">
                {feature.emoji}
              </div>
              <h3 className="text-[20px] font-black text-white group-hover:text-[#CFFD53] transition-colors leading-snug">
                {feature.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60 group-hover:text-white/85 transition-colors font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
