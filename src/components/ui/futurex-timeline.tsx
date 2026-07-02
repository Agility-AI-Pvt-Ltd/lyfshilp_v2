"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const journeySteps = [
  {
    title: "Who Am I & What Problem Do I See?",
    description:
      "Self-discovery, user interviews, problem statement — no idea required on Day 1",
  },
  {
    title: "From Problem to Prototype",
    description:
      "First venture, business model, first customer, optional team formation",
  },
  {
    title: "Go to Market",
    description:
      "SEO, email marketing, first revenue attempt, AI automation tools",
  },
  {
    title: "Scale & Operations",
    description:
      "Analytics, paid advertising, cash flow management, leadership",
  },
  {
    title: "Advanced AI & Investor Readiness",
    description:
      "VC basics, vibe-coded products, Demo Day pitch preparation",
  },
  {
    title: "Demo Day",
    description:
      "Live pitch to industry panel, prize awards, Fellows Cohort induction",
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
    <section className="bg-white px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-5xl">
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
            <p className="mx-auto max-w-2xl text-[19px] leading-relaxed text-[#4b5563] sm:text-[21px]">
              From idea to Demo Day. A structured path that mirrors how real
              startups are built — discovery, validation, building, and launch.
            </p>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Animated Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-[#f0f0f0] md:left-1/2 md:-ml-0.5">
            <motion.div
              className="w-full rounded-full bg-[#1e5237]"
              style={{ height: lineHeight }}
            />
          </div>

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
                      isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    }`}
                  >
                    {/* Node Dot for Mobile */}
                    <div className="absolute left-[11px] top-4 size-5 -translate-x-1/2 rounded-full border-4 border-white bg-[#1e5237] shadow-sm md:hidden" />
                    
                    {/* Node Dot for Desktop */}
                    <div
                      className={`absolute top-4 hidden size-5 rounded-full border-4 border-white bg-[#1e5237] shadow-sm md:block ${
                        isEven ? "-right-[21px]" : "-left-[21px]"
                      }`}
                    />

                    <div className="group relative rounded-[20px] border border-[#f0ebe1] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <span className="mb-3 block text-[13px] font-bold uppercase tracking-[0.2em] text-[#8a90a3]">
                        Month {index + 1}
                      </span>
                      <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#111827] transition-colors group-hover:text-[#1e5237]">
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-relaxed text-[#505a66]">
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
