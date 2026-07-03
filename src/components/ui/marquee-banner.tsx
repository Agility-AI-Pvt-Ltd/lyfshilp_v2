"use client";

import React from "react";

const tags = [
  "MIT Sloan",
  "Stanford GSB",
  "Incubated at IIIT Allahabad",
  "DPIIT Recognised",
  "38 Institutions",
  "6,000+ Students",
  "NEP 2020 Aligned",
];

export function MarqueeBanner() {
  // Duplicate tags 3 times to ensure seamless scrolling on all screen sizes
  const duplicatedTags = [...tags, ...tags, ...tags];

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .marquee-container {
          width: 100%;
          overflow: hidden;
          background-color: #000000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          user-select: none;
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-container py-2.5">
        <div className="marquee-inner">
          {duplicatedTags.map((tag, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span className="mx-8 text-[11px] font-black uppercase tracking-[0.18em] whitespace-nowrap text-white">
                {tag}
              </span>
              <span className="text-white/40 text-[9px]" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
