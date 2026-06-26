"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "STEP 1.",
    title: "Apply &\nGet Matched",
    description:
      "Tell us about your goals, interests, and where you want to grow. We match you with the right programme and mentor cohort.",
  },
  {
    number: "STEP 2.",
    title: "Deep Dive\nLearning",
    description:
      "Join live sessions, workshops, and structured sprints designed by industry builders and educators to sharpen your skills.",
  },
  {
    number: "STEP 3.",
    title: "Build &\nCreate",
    description:
      "Work on real projects — AI tools, startups, or school initiatives — with hands-on guidance from mentors every step of the way.",
  },
  {
    number: "STEP 4.",
    title: "Launch &\nGrow",
    description:
      "Ship your product, join our alumni network, and keep growing with a community of ambitious builders across India.",
  },
];

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Entire track slides left together
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    /* Outer: tall enough to drive the scroll */
    <div ref={containerRef} className="relative h-[300vh] bg-[#0d0d0d]">
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Single moving track for both title and cards */}
        <motion.div
          style={{ x: trackX }}
          className="relative flex h-[55vh] min-h-[500px] w-max items-stretch"
        >
          {/* Left — title section */}
          <div className="relative z-10 flex w-[400px] shrink-0 pl-10 pr-4 pt-10 lg:w-[500px]">
            <h2 className="text-[80px] font-black uppercase leading-[0.85] tracking-tight text-white lg:text-[110px]">
              How We<br />Work
            </h2>
            <span className="ml-4 mt-2 text-[12px] font-medium tracking-widest text-white/50 uppercase">
              (Process)
            </span>
          </div>

          {/* Right — step cards */}
          <div className="flex h-full items-stretch">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex h-full w-[340px] shrink-0 flex-col justify-between border-y border-l border-white/10 px-8 py-10 lg:w-[380px]"
              >
                <div>
                  <p className="text-[14px] font-medium tracking-wide text-white/50">
                    {step.number}
                    <span className="ml-[2px] inline-block h-1 w-1 rounded-full bg-[#f03e3e] align-baseline" />
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 whitespace-pre-line text-[38px] font-bold leading-[1.1] tracking-tight text-white lg:text-[44px]">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
