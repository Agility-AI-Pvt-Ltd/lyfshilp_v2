"use client";

import React from "react";

interface FormatItem {
  id: string;
  title: string;
  description: string;
}

const formats: FormatItem[] = [
  {
    id: "01",
    title: "Workshops & Bootcamps",
    description: "Focused, hands-on sessions for teams who need to move fast — built around your actual tools and use-cases, not generic slides.",
  },
  {
    id: "02",
    title: "Certification Programs",
    description: "Structured, credentialed learning paths for individuals or entire cohorts, with assessment built in.",
  },
  {
    id: "03",
    title: "Ongoing L&D Partnership",
    description: "Embedded, continuous upskilling as your tools and processes evolve — not a one-time engagement.",
  },
];

export function CorporateFormats() {
  return (
    <section className="bg-[#030508] px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
            What We Deliver
          </p>
          <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
            Built to fit how your organization actually learns.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
            No single format suits every institution — most engagements combine a short intensive with a longer, structured follow-through.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((format) => (
            <div
              key={format.id}
              className="group border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#CFFD53]/40"
            >
              <div>
                <span className="font-mono text-[14px] font-bold text-[#CFFD53]/80 block mb-6">
                  Format {format.id}
                </span>
                <h3 className="text-[22px] font-black text-white tracking-tight leading-snug group-hover:text-[#CFFD53] transition-colors">
                  {format.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60 font-medium">
                  {format.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
