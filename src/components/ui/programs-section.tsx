"use client";

import Link from "next/link";
import React from "react";

type Program = {
  badge: string;
  title: string;
  audience: string;
  duration: string;
  highlightText: string;
  durationLabel: string;
  benefits: string[];
  cta: string;
  href: string;
  accent: string;
  softAccent: string;
  iconShape: "diamond" | "star" | "pinwheel";
  isHighlighted?: boolean;
};

const programs: Program[] = [
  {
    badge: "Scale & Impact",
    title: "Government Bodies",
    audience: "Public education systems",
    duration: "State-wide implementations",
    highlightText: "Public Sector",
    durationLabel: "Scale-optimized AI & startup programs",
    benefits: [
      "Turnkey curricula for state-wide systems",
      "Scale-ready teacher training models",
      "Vocational & AI literacy alignments",
      "State student showcases and hackathons",
    ],
    cta: "Explore More",
    href: "/govt-bodies",
    accent: "#a3e635",
    softAccent: "rgba(163, 230, 53, 0.1)",
    iconShape: "diamond",
  },
  {
    badge: "Teach & Inspire",
    title: "Educators",
    audience: "Teachers & school leaders",
    duration: "Professional development",
    highlightText: "Pedagogy First",
    durationLabel: "Modern pedagogy, toolkits & mentorship",
    benefits: [
      "AI classroom prompt libraries",
      "Practical project-based frameworks",
      "Global community of future-ready mentors",
      "Classroom-ready teaching guides",
    ],
    cta: "Explore More",
    href: "/educators",
    accent: "#67e8f9",
    softAccent: "rgba(103, 232, 249, 0.1)",
    iconShape: "star",
  },
  {
    badge: "Flagship In-School",
    title: "Schools",
    audience: "Grades 6–12 & all grades",
    duration: "Academic year delivery",
    highlightText: "Incubation",
    durationLabel: "Turnkey programs for academic calendars",
    benefits: [
      "In-school workshops for all grades",
      "Demo Days with industry judges",
      "Internationally recognized fellowships",
      "Zero extra cost for students",
    ],
    cta: "Explore More",
    href: "/for-schools",
    accent: "#ffffff",
    softAccent: "rgba(255, 255, 255, 0.1)",
    iconShape: "pinwheel",
    isHighlighted: true,
  },
  {
    badge: "Enterprise AI",
    title: "Corporates",
    audience: "Modern teams & organizations",
    duration: "Custom corporate sprints",
    highlightText: "Teams",
    durationLabel: "AI enablement & workflow adoption",
    benefits: [
      "Role-specific AI adoption audits",
      "Hands-on workflow transformation",
      "Custom internal builder sprints",
      "Continuous team mentor support",
    ],
    cta: "Explore More",
    href: "/corporate-ai",
    accent: "#CFFD53",
    softAccent: "rgba(207, 253, 83, 0.1)",
    iconShape: "diamond",
  },
];

const pillars = [
  {
    title: "Mentored, not lectured",
    description:
      "Learn directly from founders, builders, and industry mentors who guide every sprint instead of just handing out theory.",
    iconColor: "#a3e635",
    iconPath:
      "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    title: "Build real, shippable work",
    description:
      "Every learner finishes with projects worth showing — AI tools, startups, and initiatives that move from idea to launch.",
    iconColor: "#5fe3ff",
    iconPath:
      "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 4.57a6 6 0 0 1 5.95 9.8Z M10.86 17.29A6.002 6.002 0 0 1 4.57 9.64A14.98 14.98 0 0 0 12 21a14.98 14.98 0 0 0-1.14-3.71Z",
  },
  {
    title: "A nationwide builder community",
    description:
      "Find collaborators, co-founders, and feedback across schools and colleges in cities all over India.",
    iconColor: "#ffd166",
    iconPath:
      "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253",
  },
];

function ShapeIcon({ shape }: { shape: Program["iconShape"] }) {
  if (shape === "diamond") {
    return (
      <svg
        className="size-16 text-white"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <polygon points="50,15 85,50 50,85 15,50" />
      </svg>
    );
  }

  if (shape === "star") {
    return (
      <svg
        className="size-16 text-[#67e8f9]"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M50,15 C50,35 35,50 15,50 C35,50 50,65 50,85 C50,65 65,50 85,50 C65,50 50,35 50,15 Z" />
      </svg>
    );
  }

  return (
    <svg
      className="size-16 text-[#ffd166]"
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50,50 C50,30 65,15 75,25 C85,35 70,50 50,50 Z" />
      <path d="M50,50 C70,50 85,65 75,75 C65,85 50,70 50,50 Z" />
      <path d="M50,50 C50,70 35,85 25,75 C15,65 30,50 50,50 Z" />
      <path d="M50,50 C30,50 15,35 25,25 C35,15 50,30 50,50 Z" />
    </svg>
  );
}

export function ProgramsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#020e0a] via-[#041d14] to-[#010604] px-6 py-24 sm:px-8 lg:px-14 lg:py-28">
      {/* Grid background mask */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Dynamic green glowing center blur */}
      <div
        className="absolute left-1/2 top-12 h-96 w-[80%] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#a3e635]">
            Our Solutions
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-[1.04] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[68px]">
            Tailored pathways. One mission:{" "}
            <span className="text-[#a3e635] block sm:inline">
              build for the future.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-7 text-white/60 sm:text-[19px]">
            Whether you are a government body, educator, school, or corporate organization, Lyfshilp provides project-led AI and building solutions.
          </p>
        </div>

        {/* 4-Column Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-white/10 rounded-[32px] overflow-hidden bg-black/20 backdrop-blur-md shadow-2xl">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 border-white/10 ${
                index > 0 ? "border-t" : ""
              } ${
                index === 1 ? "md:border-t-0 md:border-l" : ""
              } ${
                index === 2 ? "md:border-l-0 xl:border-t-0 xl:border-l" : ""
              } ${
                index === 3 ? "md:border-l xl:border-t-0" : ""
              } ${
                program.isHighlighted
                  ? "bg-[#062c1f]/45 relative z-10 shadow-[inset_0_0_40px_rgba(16,185,129,0.06)]"
                  : "bg-transparent"
              }`}
            >
              <div>
                {/* Icon Shape */}
                <div className="mb-8 flex justify-start">
                  <ShapeIcon shape={program.iconShape} />
                </div>

                {/* Plan Title / Audience */}
                <div>
                  <span className="text-[12px] font-mono uppercase tracking-wider text-white/50">
                    {program.badge}
                  </span>
                  <h3 className="mt-2 text-[24px] font-black text-white tracking-tight">
                    {program.title}
                  </h3>
                </div>

                {/* Price Display / Duration highlight */}
                <div className="mt-8 border-t border-white/10 pt-8">
                  <span className="text-[38px] font-black text-white tracking-tight leading-none">
                    {program.highlightText}
                  </span>
                  <p className="mt-2 text-[14px] text-white/60 font-medium leading-relaxed">
                    {program.durationLabel}
                  </p>
                </div>

                {/* Benefits / Features List */}
                <div className="mt-8 border-t border-white/10 pt-8">
                  <ul className="space-y-4">
                    {program.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="grid grid-cols-[auto_1fr] gap-3 text-[15px] leading-relaxed text-white/80"
                      >
                        <span
                          className="mt-1 flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#041d14] shrink-0"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <Link
                  href={program.href}
                  className={`block w-full py-4 px-6 rounded-full text-center text-[15px] font-bold transition-all duration-300 hover:shadow-lg ${
                    program.isHighlighted
                      ? "bg-white text-[#02180f] hover:bg-[#a3e635] hover:text-black"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {program.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-24 mb-16" />

        {/* Bottom Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col">
              <svg
                className="size-8 mb-6"
                style={{ color: pillar.iconColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={pillar.iconPath}
                />
              </svg>
              <h4 className="text-[18px] font-bold text-white mb-3">
                {pillar.title}
              </h4>
              <p className="text-[15px] leading-relaxed text-white/60">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
