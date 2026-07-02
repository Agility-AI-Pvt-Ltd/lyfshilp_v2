"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface JourneyStep {
  phase: string;
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    phase: "Month 1 · Discovery",
    title: "Find Your Problem",
    description: "Identify a real problem worth solving using the Harvard Case Method. Study existing businesses, analyse markets, and land on a compelling opportunity. Use the Research Workspace to generate feasibility briefs powered by AI.",
  },
  {
    phase: "Month 2 · Validation",
    title: "Talk to Real Users",
    description: "Get out of the classroom. Conduct user interviews, test assumptions, and validate demand. Build your first prototype using no-code AI tools in the AI Playground.",
  },
  {
    phase: "Month 3 · Prototype",
    title: "Build Your First Version",
    description: "Turn validated ideas into an early working prototype. Use AI tools, no-code builders, and prompt engineering to make the first usable version of your product.",
  },
  {
    phase: "Month 4 · Build",
    title: "Ship Your Product",
    description: "Build a working product using free platforms — no coding required. Learn prompt engineering, AI ethics, and how to leverage AI as a co-builder. Earn XP for every milestone hit.",
  },
  {
    phase: "Month 5 · Growth",
    title: "Find Your First Users",
    description: "Launch to real users. Build a pitch deck, craft your narrative, and practise presenting. Share your progress with the fellowship community and collect feedback.",
  },
  {
    phase: "Month 6 · Demo Day",
    title: "Pitch to the World",
    description: "Present your startup to investors, mentors, and peers. This is the real thing — a culmination of 6 months of work, learning, and growth. Top fellows earn recognition and opportunities beyond the programme.",
  },
];

export function FutureXTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative lg:sticky lg:top-0 z-20 bg-[#fffaf4] px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-32px_80px_rgba(0,0,0,0.06)] border-t border-[#e6e8ef]">
      <div className="mx-auto max-w-5xl">
        {/* Header Block */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-[42px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[56px]">
              The 6-Month Journey
            </h2>
            <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#747b8f] sm:text-[20px] font-medium">
              From idea to Demo Day. A structured path that mirrors how real
              startups are built — discovery, validation, building, and launch.
            </p>
          </motion.div>
        </div>

        {/* Timeline body wrapper */}
        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Animated Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-[#ebdcd0] md:left-1/2 md:-ml-0.5">
            <motion.div
              className="w-full rounded-full bg-[#10b981]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="relative z-10 space-y-12">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex w-full flex-col md:flex-row ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative w-full md:w-[45%] pl-12 md:pl-0 ${
                      isEven ? "md:pr-10 md:text-right animate-left" : "md:pl-10 md:text-left animate-right"
                    }`}
                  >
                    {/* Node Dot for Mobile */}
                    <div className="absolute left-[11px] top-4 size-5 -translate-x-1/2 rounded-full border-4 border-[#fffaf4] bg-[#ebdcd0] shadow-sm md:hidden" />
                    
                    {/* Node Dot for Desktop */}
                    <div
                      className={`absolute top-4 hidden size-5 rounded-full border-4 border-[#fffaf4] bg-[#ebdcd0] shadow-sm md:block ${
                        isEven ? "-right-[21px]" : "-left-[21px]"
                      }`}
                    />

                    {/* Content Card */}
                    <div className="group relative rounded-[22px] border border-[#efe7da] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10b981]/50 hover:shadow-md">
                      <span className="mb-3 block text-[13px] font-bold uppercase tracking-[0.2em] text-[#8a90a3]">
                        {step.phase}
                      </span>
                      <h3 className="mb-3 text-[22px] font-black tracking-tight text-[#272835] transition-colors group-hover:text-[#10b981]">
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#747b8f] font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
