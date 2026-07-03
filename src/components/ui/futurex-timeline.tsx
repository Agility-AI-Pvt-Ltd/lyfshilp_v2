"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface JourneyStep {
  phase: string;
  title: string;
  description: string;
  shortLabel: string;
}

const journeySteps: JourneyStep[] = [
  {
    phase: "Months 1–2",
    title: "Discovery",
    description:
      "Identify a real problem worth solving using the Harvard Case Method. Study existing businesses and analyse markets.",
    shortLabel: "Discovery",
  },
  {
    phase: "Months 3–4",
    title: "Validation",
    description:
      "Conduct user interviews, test assumptions, and validate demand. Build your first prototype using AI tools.",
    shortLabel: "Validation",
  },
  {
    phase: "Months 5–6",
    title: "Build",
    description:
      "Build a working product using free platforms — no coding required. Learn prompt engineering as a co-builder.",
    shortLabel: "Build",
  },
  {
    phase: "Months 7–8",
    title: "Growth",
    description:
      "Launch to real users. Build a pitch deck, craft your narrative, and share your progress with the community.",
    shortLabel: "Growth",
  },
  {
    phase: "Month 9",
    title: "Demo Day",
    description:
      "Present your startup to investors and peers. Top fellows earn recognition and opportunities beyond the programme.",
    shortLabel: "Demo Day",
  },
];

const waveNodes = [
  { x: "8.33%", y: 222 },
  { x: "25%", y: 178 },
  { x: "41.66%", y: 222 },
  { x: "58.33%", y: 178 },
  { x: "75%", y: 222 },
];

export function FutureXTimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#110e11] py-24 border-t border-white/5">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-14">
        <div className="mb-8 text-center lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[12px] font-black uppercase tracking-[0.24em] text-[#10b981]">
              The 9-Month Journey
            </p>
            <h2 className="mb-3 text-[32px] font-black leading-tight tracking-tight text-[#facc15] sm:text-[44px]">
              Roadmap to Demo Day
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] font-medium leading-relaxed text-white/60 sm:text-[16px]">
              From idea to Demo Day. Hover over the milestones to explore your
              9-month journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="hide-scrollbar w-full overflow-x-auto pb-4 pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative mx-auto h-[260px] w-full min-w-[1000px]">
          <svg
            className="pointer-events-none absolute inset-0 h-[260px] w-full"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Gradient Fill under wave */}
            <path
              d="M 0 200 C 70 230, 130 230, 200 200 C 270 170, 330 170, 400 200 C 470 230, 530 230, 600 200 C 670 170, 730 170, 800 200 C 870 230, 930 230, 1000 200 C 1070 170, 1130 170, 1200 200 L 1200 320 L 0 320 Z"
              fill="url(#waveFillGrad)"
              opacity="0.8"
            />
            {/* Wave Line */}
            <path
              d="M 0 200 C 70 230, 130 230, 200 200 C 270 170, 330 170, 400 200 C 470 230, 530 230, 600 200 C 670 170, 730 170, 800 200 C 870 230, 930 230, 1000 200 C 1070 170, 1130 170, 1200 200"
              stroke="url(#waveLineGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="waveFillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#110e11" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="waveLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="20%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="80%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Nodes */}
          {journeySteps.map((step, i) => {
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
              >
                {/* Vertical Line */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full transition-colors duration-300 ${isActive ? "bg-white/60" : "bg-white/10"}`}
                />

                {/* Top Dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-0 size-[8px] rounded-full transition-all duration-300 ${isActive ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] scale-125" : "bg-white/50"}`}
                />

                {/* Text Content */}
                <div className="absolute left-1/2 top-[-6px] w-[260px] pl-5 pointer-events-none">
                  <h4 className="text-[18px] font-black text-[#facc15] tracking-wide mb-1 transition-opacity duration-300">
                    {step.phase}
                  </h4>

                  {/* Hover Description Container */}
                  <div
                    className={`transition-all duration-500 transform ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[15px] font-bold text-white">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-white/70 font-medium drop-shadow-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Wave Node Dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 size-[20px] rounded-full border-[4px] shadow-lg transition-all duration-300 ${isActive ? "bg-white border-[#f59e0b] scale-110 shadow-[0_0_20px_rgba(245,158,11,0.6)]" : "bg-[#2a2a2a] border-white/30"}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Journey phase tabs */}
      <div className="relative z-10 mx-auto mt-2 max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 px-6">
          {journeySteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`text-[14px] sm:text-[15px] font-bold transition-all duration-300 pb-1.5 border-b-2 ${
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
