"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SessionStep {
  phase: string;
  title: string;
  when: string;
  description: string;
  shortLabel: string;
  deliverables: string[];
}

const sessionSteps: SessionStep[] = [
  {
    phase: "Session 01",
    title: "AI Foundations & the Prompt Superpower",
    when: "Saturday · Week 1 · 2.5 Hours",
    description:
      "How AI actually works — prompt engineering from scratch, Claude vs Gemini vs ChatGPT, and your first AI-written document.",
    shortLabel: "Foundations",
    deliverables: ["Personal Prompt Library", "AI Tools Cheat Sheet", "First AI-Written Document"],
  },
  {
    phase: "Session 02",
    title: "Google AI Studio & Data Intelligence",
    when: "Sunday · Week 1 · 2.5 Hours",
    description:
      "Upload Excel files, find patterns with AI, build a custom assistant tuned to your role, and automate repeat tasks.",
    shortLabel: "Data",
    deliverables: ["Custom AI Assistant", "AI-Analysed Data Report", "Automated Task Template"],
  },
  {
    phase: "Session 03",
    title: "Build Without Code — Your First AI Tool",
    when: "Saturday · Week 2 · 2.5 Hours",
    description:
      "Vibe coding with Antigravity, Claude Artifacts, and Bolt.new. Ship a live, shareable web tool in under 10 minutes.",
    shortLabel: "Build",
    deliverables: ["1 Working AI Tool (Live Link)", "AI + Sheets Workflow", "Peer-Tested Portfolio Build"],
  },
  {
    phase: "Session 04",
    title: "Automate, Showcase & Grow",
    when: "Sunday · Week 2 · 2.5 Hours",
    description:
      "Task automation, a personal AI productivity system, Live Showcase, and your Certificate + Digital Badge awarded.",
    shortLabel: "Showcase",
    deliverables: ["Personal AI Productivity System", "Live Showcase Presentation", "Certificate + Digital Badge"],
  },
];

// 4 nodes along a wave — alternating high/low, spread across viewBox 0 0 1200 320
const waveNodes = [
  { x: "12%",  y: 222 }, // s1 — trough
  { x: "37%",  y: 178 }, // s2 — peak
  { x: "62%",  y: 222 }, // s3 — trough
  { x: "87%",  y: 178 }, // s4 — peak
];

export function BuildWithAITimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="curriculum"
      className="relative w-full overflow-hidden bg-[#110e11] py-24 border-t border-white/5"
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:mb-10"
        >
          <div>
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
              Curriculum — Session by Session
            </p>
            <h2 className="mt-5 text-[32px] font-black leading-tight tracking-tight text-[#facc15] sm:text-[44px]">
              Four sessions. <br />
              <span className="text-white">Four real builds.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-[18px] font-medium leading-8 text-white/60">
            Every session is 2.5 hours of live, hands-on learning. Hover over each milestone to explore what you build.
          </p>
        </motion.div>
      </div>

      {/* Scrollable wave canvas */}
      <div className="no-scrollbar w-full overflow-x-auto pb-4 pt-2">
        <div className="relative mx-auto h-[260px] w-full min-w-[900px] overflow-hidden">
          {/* SVG Wave */}
          <svg
            className="pointer-events-none absolute inset-0 h-[260px] w-full"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Gradient fill under wave */}
            <path
              d="M 0 200 C 100 235, 200 235, 300 200 C 400 165, 500 165, 600 200 C 700 235, 800 235, 900 200 C 1000 165, 1100 165, 1200 200 L 1200 320 L 0 320 Z"
              fill="url(#bwaiFillGrad)"
              opacity="0.8"
            />
            {/* Wave line */}
            <path
              d="M 0 200 C 100 235, 200 235, 300 200 C 400 165, 500 165, 600 200 C 700 235, 800 235, 900 200 C 1000 165, 1100 165, 1200 200"
              stroke="url(#bwaiLineGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="bwaiFillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CFFD53" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#110e11" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="bwaiLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#eab308" />
                <stop offset="33%"  stopColor="#10b981" />
                <stop offset="66%"  stopColor="#CFFD53" />
                <stop offset="100%" stopColor="#eab308" />
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
                className="absolute flex flex-col items-center cursor-pointer"
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
                <div className="pointer-events-none absolute left-1/2 top-[-6px] w-[300px] pl-5">
                  <h4 className="text-[16px] font-black text-[#facc15] tracking-wide mb-1">
                    {step.phase}
                  </h4>
                  <div
                    className={`transition-all duration-500 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                  >
                    <span className="text-[14px] font-bold text-white leading-snug block mb-1">
                      {step.title}
                    </span>
                    <p className="text-[12px] leading-relaxed text-white/65 font-medium mb-2">
                      {step.description}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-wider text-white/35 mb-1">
                      {step.when}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="inline-flex items-center rounded-full bg-[#CFFD53]/10 border border-[#CFFD53]/25 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#CFFD53]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Wave node dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 size-[20px] rounded-full border-[4px] shadow-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#CFFD53] scale-110 shadow-[0_0_20px_rgba(207,253,83,0.6)]"
                      : "bg-[#2a2a2a] border-white/30"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase tabs */}
      <div className="relative z-10 mx-auto mt-2 max-w-3xl">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 px-6">
          {sessionSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`text-[13px] sm:text-[15px] font-bold transition-all duration-300 pb-1.5 border-b-2 ${
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
