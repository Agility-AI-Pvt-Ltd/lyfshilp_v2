"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SessionStep {
  phase: string;
  title: string;
  description: string;
  shortLabel: string;
  deliverable: string;
}

const sessionSteps: SessionStep[] = [
  {
    phase: "Session 01",
    title: "AI Literacy + Founder Identity Canvas",
    description:
      "Your first real AI conversation. Understand what AI can and can't do, explore your identity as a maker, and map out the problems you care about solving.",
    shortLabel: "Identity",
    deliverable: "Founder Identity Canvas",
  },
  {
    phase: "Session 02",
    title: "Prompt Engineering + Subject Prompt Library",
    description:
      "Master the art of talking to AI. Build a reusable library of prompts tailored to your subjects, from science research to creative writing.",
    shortLabel: "Prompt",
    deliverable: "Subject Prompt Library",
  },
  {
    phase: "Session 03",
    title: "AI Study System - Error Diary + Study Plan",
    description:
      "Use AI to build a personalised study system. Track mistakes with an error diary and generate smart study plans that adapt to your weak spots.",
    shortLabel: "Study",
    deliverable: "Error Diary + Study Plan",
  },
  {
    phase: "Session 04",
    title: "AI Mentor + First Vibe-Coded App",
    description:
      "Build your first working AI application with no coding experience needed. Use vibe-coding to turn an idea into a tool that actually works.",
    shortLabel: "Build",
    deliverable: "First Vibe-Coded App",
  },
  {
    phase: "Session 05",
    title: "AI Writing + Recorded Founder Story",
    description:
      "Learn to use AI as a writing partner. Craft and record your founder story - the narrative of why you built what you built and who it helps.",
    shortLabel: "Story",
    deliverable: "Recorded Founder Story",
  },
  {
    phase: "Session 06",
    title: "Research + Problem Validation Brief",
    description:
      "Validate your idea with real research. Use AI to analyse whether your problem is worth solving, who else has it, and what solutions already exist.",
    shortLabel: "Validate",
    deliverable: "Problem Validation Brief",
  },
  {
    phase: "Session 07",
    title: "Build Day - Working AI Tool",
    description:
      "The big build. Take everything you've learned and ship a polished, working AI-powered tool. This is what you'll showcase on Demo Day.",
    shortLabel: "Ship",
    deliverable: "Working AI Tool",
  },
];

// 7 nodes placed along the wave — alternating high/low y positions
// SVG viewBox: 0 0 1400 320, wave oscillates between y≈170 (peak) and y≈220 (trough)
const waveNodes = [
  { x: "4%",    y: 222 }, // session 1 — low
  { x: "17.5%", y: 178 }, // session 2 — high
  { x: "31%",   y: 222 }, // session 3 — low
  { x: "44.5%", y: 178 }, // session 4 — high
  { x: "58%",   y: 222 }, // session 5 — low
  { x: "71.5%", y: 178 }, // session 6 — high
  { x: "85%",   y: 222 }, // session 7 — low
];

export function SchoolsTimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="sessions"
      className="relative w-full overflow-hidden bg-[#110e11] py-24 border-t border-white/5"
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-14">
        <div className="mb-8 text-center lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[12px] font-black uppercase tracking-[0.24em] text-[#10b981]">
              The Learning Path
            </p>
            <h2 className="mb-3 text-[32px] font-black leading-tight tracking-tight text-[#facc15] sm:text-[44px]">
              Your 7-session journey
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] font-medium leading-relaxed text-white/60 sm:text-[16px]">
              Every session ends with something real that students made. Hover over each milestone to explore the journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrollable wave canvas */}
      <div
        className="no-scrollbar w-full overflow-x-auto pb-4 pt-2"
      >
        <div className="relative mx-auto h-[260px] w-full min-w-[1400px] overflow-hidden">
          {/* SVG Wave */}
          <svg
            className="pointer-events-none absolute inset-0 h-[260px] w-full"
            viewBox="0 0 1400 320"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Gradient fill under wave */}
            <path
              d="M 0 200 C 82 230, 152 230, 234 200 C 316 170, 386 170, 468 200 C 550 230, 620 230, 702 200 C 784 170, 854 170, 936 200 C 1018 230, 1088 230, 1170 200 C 1252 170, 1322 170, 1400 200 L 1400 320 L 0 320 Z"
              fill="url(#schoolWaveFillGrad)"
              opacity="0.8"
            />
            {/* Wave line */}
            <path
              d="M 0 200 C 82 230, 152 230, 234 200 C 316 170, 386 170, 468 200 C 550 230, 620 230, 702 200 C 784 170, 854 170, 936 200 C 1018 230, 1088 230, 1170 200 C 1252 170, 1322 170, 1400 200"
              stroke="url(#schoolWaveLineGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="schoolWaveFillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#110e11" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="schoolWaveLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#eab308" />
                <stop offset="16%"  stopColor="#10b981" />
                <stop offset="33%"  stopColor="#67e8f9" />
                <stop offset="50%"  stopColor="#CFFD53" />
                <stop offset="66%"  stopColor="#a78bfa" />
                <stop offset="83%"  stopColor="#fb923c" />
                <stop offset="100%" stopColor="#ff492c" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Nodes */}
          {sessionSteps.map((step, i) => {
            const node = waveNodes[i];
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{
                  left: node.x,
                  top: 40,
                  height: node.y - 40,
                  width: 80,
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                {/* Vertical stem */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full transition-colors duration-300 ${
                    isActive ? "bg-white/60" : "bg-white/10"
                  }`}
                />

                {/* Top dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-0 size-[8px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] scale-125"
                      : "bg-white/50"
                  }`}
                />

                {/* Label + hover detail */}
                <div className="pointer-events-none absolute left-1/2 top-[-6px] w-[260px] pl-5">
                  <h4 className="text-[16px] font-black text-[#facc15] tracking-wide mb-1">
                    {step.phase}
                  </h4>
                  <div
                    className={`transition-all duration-500 transform ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                  >
                    <span className="text-[14px] font-bold text-white leading-snug block mb-1">
                      {step.title}
                    </span>
                    <p className="text-[12px] leading-relaxed text-white/70 font-medium">
                      {step.description}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#CFFD53]/10 border border-[#CFFD53]/25 px-2.5 py-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#CFFD53]">
                        ↳ {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Wave node dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 size-[20px] rounded-full border-[4px] shadow-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#10b981] scale-110 shadow-[0_0_20px_rgba(16,185,129,0.7)]"
                      : "bg-[#2a2a2a] border-white/30"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase tabs */}
      <div className="relative z-10 mx-auto mt-2 max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 px-6">
          {sessionSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`text-[13px] sm:text-[14px] font-bold transition-all duration-300 pb-1.5 border-b-2 ${
                activeIndex === i
                  ? "text-white border-[#facc15]"
                  : "text-white/30 border-transparent hover:text-white/60"
              }`}
            >
              {step.shortLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
