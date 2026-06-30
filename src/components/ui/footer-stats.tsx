"use client";

import React from "react";
import { StaggeredCountdown } from "./staggered-countdown";

const footerStats = [
  { digits: "500", suffix: "+", label: "Student founders" },
  { digits: "50", suffix: "+", label: "Partner schools" },
  { digits: "20", suffix: "+", label: "Mentors and builders" },
  { digits: "10", suffix: "+", label: "Cities represented" },
];

function FooterWave() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-[46%] z-10 h-[330px] w-[1500px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[390px] sm:w-[1900px] lg:h-[480px] lg:w-[2500px]"
      viewBox="0 0 2400 520"
      aria-hidden="true"
    >
      <path
        id="lyfshilp-footer-wave"
        d="M-90 326 C 260 302 440 138 790 182 C 1085 219 1165 362 1468 338 C 1746 316 1840 214 2160 236 C 2294 245 2390 289 2490 340"
        fill="none"
        stroke="#ffeab5"
        strokeWidth="120"
      />
      <text
        className="fill-[#27231f] text-[46px] font-black tracking-normal sm:text-[58px] lg:text-[68px]"
        dominantBaseline="middle"
      >
        <textPath href="#lyfshilp-footer-wave" startOffset="0%">
          <animate
            attributeName="startOffset"
            from="0%"
            to="-100%"
            dur="30s"
            repeatCount="indefinite"
          />
          {Array(4).fill("Build slowly, think deeply, and ship work that matters with Lyfshilp ✦ ").join("")}
        </textPath>
      </text>
    </svg>
  );
}

export function FooterStats() {
  return (
    <section className="relative min-h-[650px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2200&q=80)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a160c]/15 via-[#2a160c]/35 to-[#351808]" />
      <FooterWave />

      <div className="absolute inset-x-0 bottom-0 z-20 grid gap-8 px-6 pb-9 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-14">
        {footerStats.map((stat) => (
          <div key={stat.label}>
            <StaggeredCountdown
              value={stat.digits}
              suffix={stat.suffix}
              color="#fffaf4"
              duration={2}
              className="text-[54px] font-black leading-none tracking-normal sm:text-[64px]"
            />
            <p className="mt-4 text-[18px] font-semibold tracking-normal text-white/90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
