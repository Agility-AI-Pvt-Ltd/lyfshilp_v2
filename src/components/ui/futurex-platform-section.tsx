"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const platformFeatures = [
  {
    icon: "🤖",
    title: "AI Playground",
    description:
      "Chat with any AI model directly — no coding needed. Powered by OpenRouter's free tier, so you can experiment with prompt engineering and build AI-powered prototypes hands-on.",
    accent: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    icon: "🔬",
    title: "Research Workspace",
    description:
      "Submit a startup idea and get an AI-generated feasibility brief. Define your ideal customer, the problem you solve, and iterate on your analysis. Save and revisit your research anytime.",
    accent: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    icon: "⚡",
    title: "XP & Leaderboard",
    description:
      "Earn experience points for completing missions, lessons, and milestones. Track your rank against your cohort on a live leaderboard — the top 30 are displayed with a podium for the top 3.",
    accent: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
  },
  {
    icon: "📣",
    title: "Community Feed",
    description:
      "Post your pitches, share progress, get upvotes and feedback from fellow students. Tagged under Lessons & Missions, your work is visible to the entire fellowship community.",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    icon: "📊",
    title: "Harvard Case Studies",
    description:
      "Real business cases used at the world's top institutions, adapted for young founders. Analyse decisions, debate strategies, and apply lessons to your own venture.",
    accent: "from-red-500/20 to-rose-500/20",
    border: "border-red-500/30",
  },
  {
    icon: "🎓",
    title: "International Certification",
    description:
      "Complete the fellowship and receive an internationally recognised certification — a credential that validates your entrepreneurial skills and AI literacy to universities and employers.",
    accent: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/30",
  },
];

export function FutureXPlatformSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a 400vh container to give plenty of scroll distance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to card index (0 to 5)
  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, platformFeatures.length - 1]
  );

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0a0f1c]">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[120px]" />
        </div>

        {/* Header Text */}
        <div className="relative z-50 w-full px-6 text-center mb-8 sm:mb-12">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
            Inside the Platform
          </p>
          <h2 className="mb-4 text-[36px] font-black leading-tight tracking-tight text-white sm:text-[48px] md:text-[56px]">
            Built for student founders.
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-gray-400 sm:text-[19px]">
            Every tool a young entrepreneur needs, integrated into one seamless learning platform.
          </p>
        </div>

        {/* Carousel / Coverflow */}
        <div
          className="relative z-10 flex h-[450px] w-full items-center justify-center sm:h-[500px]"
          style={{ perspective: "1200px" }}
        >
          {platformFeatures.map((feature, index) => (
            <CarouselCard
              key={index}
              feature={feature}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="relative z-50 mt-8 sm:mt-12 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest text-white font-semibold">Scroll to explore</span>
          <div className="h-10 w-[2px] overflow-hidden rounded-full bg-white/20">
             <motion.div 
               className="w-full h-1/2 bg-white rounded-full"
               animate={{ y: [0, 20, 0] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
             />
          </div>
        </div>

      </div>
    </section>
  );
}

function CarouselCard({
  feature,
  index,
  currentIndex,
}: {
  feature: typeof platformFeatures[0];
  index: number;
  currentIndex: MotionValue<number>;
}) {
  // Distance from center:
  // index - 2: Card is 2 steps to the right
  // index - 1: Card is 1 step to the right
  // index: Card is centered
  // index + 1: Card is 1 step to the left
  // index + 2: Card is 2 steps to the left

  // Position X
  const x = useTransform(
    currentIndex,
    [index - 2, index - 1, index, index + 1, index + 2],
    ["130%", "65%", "0%", "-65%", "-130%"],
    { clamp: true }
  );

  // Scale (Center is largest)
  const scale = useTransform(
    currentIndex,
    [index - 2, index - 1, index, index + 1, index + 2],
    [0.7, 0.85, 1, 0.85, 0.7],
    { clamp: true }
  );

  // Opacity (Fades out at the edges)
  const opacity = useTransform(
    currentIndex,
    [index - 2, index - 1, index, index + 1, index + 2],
    [0, 0.5, 1, 0.5, 0],
    { clamp: true }
  );

  // 3D Rotation Y
  // Card on the right -> faces left (positive rotation)
  // Card on the left -> faces right (negative rotation)
  const rotateY = useTransform(
    currentIndex,
    [index - 2, index - 1, index, index + 1, index + 2],
    [40, 25, 0, -25, -40],
    { clamp: true }
  );

  // Z-index: Center card must be on top
  const zIndex = useTransform(currentIndex, (v) => {
    return 100 - Math.abs(v - index) * 10;
  });

  // Blur effect for cards in the background
  const blurValue = useTransform(
    currentIndex,
    [index - 2, index - 1, index, index + 1, index + 2],
    [8, 4, 0, 4, 8],
    { clamp: true }
  );
  const filter = useTransform(blurValue, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
        rotateY,
        zIndex,
        filter,
      }}
      className={`absolute flex h-[380px] w-[300px] sm:h-[450px] sm:w-[350px] flex-col justify-between overflow-hidden rounded-[32px] border bg-[#111827]/80 p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl ${feature.border}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-50 ${feature.accent}`}
        aria-hidden="true"
      />
      
      {/* Shine effect for 3D realism */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full pt-4">
        <div className="mt-auto">
          <h3 className="mb-4 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-white drop-shadow-md">
            {feature.title}
          </h3>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-300 drop-shadow-sm">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
