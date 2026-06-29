"use client";

import React from "react";

interface HeroSectionProps {
  columnOneImages: string[];
  columnTwoImages: string[];
  title?: string;
  subtitle?: string;
  rating?: string;
  students?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  columnOneImages,
  columnTwoImages,
  title = "Master Pro\n3D Design",
  subtitle =
    "GET READY TO TRULY ROCK YOUR 3D DESIGN SKILLS WITH FUN PROJECTS, REAL-LIFE WORKFLOWS, AND TRAINING FROM THE PROS. LEARN BY DOING WITH HANDS-ON PROJECTS THAT MIRROR REAL INDUSTRY WORKFLOWS.",
}) => {
  // Duplicate images for seamless infinite loop
  const col1 = [...columnOneImages, ...columnOneImages, ...columnOneImages];
  const col2 = [...columnTwoImages, ...columnTwoImages, ...columnTwoImages];

  const dataTags = [
    "MIT Sloan",
    "Stanford GSB",
    "Incubated at IIIT Allahabad",
    "DPIIT Recognised",
    "38 Institutions",
    "6,000+ Students",
    "NEP 2020 Aligned",
  ];

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .row-scroll-left {
          animation: scrollLeft 24s linear infinite;
        }
        .row-scroll-right {
          animation: scrollRight 24s linear infinite;
        }

        .image-card {
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Skew wrapper — both columns tilt the same direction */
        .columns-skew {
          transform: rotate(-8deg) scale(1.15);
          transform-origin: center center;
        }

        /* Fade edges top & bottom */
        .fade-overlay {
          background: linear-gradient(
            to bottom,
            #ffffff 0%,
            transparent 20%,
            transparent 80%,
            #ffffff 100%
          );
        }


        .hero-bg {
          background-color: #ffffff;
        }

        .btn-primary {
          background: #a3e635;
          color: #0a1a0a;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover {
          background: #bef264;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          border: 1.5px solid rgba(39, 40, 53, 0.4);
          color: #272835;
          font-weight: 700;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, transform 0.15s;
        }
        .btn-secondary:hover {
          border-color: #272835;
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .row-scroll-left,
          .row-scroll-right {
            animation: none;
          }
        }
      `}</style>

      <section className="hero-bg relative w-full min-h-screen overflow-hidden flex items-center">

        {/* ── Background image rows ── */}
        <div className="absolute inset-0 z-0 flex items-center">
          <div className="columns-skew absolute inset-x-0 flex flex-col gap-4 justify-center">

            {/* Row 1 — scrolls left */}
            <div className="relative overflow-hidden w-full" style={{ height: "320px" }}>
              <div className="row-scroll-left flex gap-4 w-max">
                {col1.map((src, i) => (
                  <div key={i} className="image-card" style={{ width: "480px", height: "320px" }}>
                    <img src={src} alt="" draggable={false} />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative overflow-hidden w-full" style={{ height: "320px" }}>
              <div className="row-scroll-right flex gap-4 w-max">
                {col2.map((src, i) => (
                  <div key={i} className="image-card" style={{ width: "480px", height: "320px" }}>
                    <img src={src} alt="" draggable={false} />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Edge fades */}
          <div className="fade-overlay absolute inset-0 z-10 pointer-events-none" />
        </div>

        {/* ── Foreground content ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-20 md:py-24 flex flex-col items-start">
          <div className="w-full bg-white/70 backdrop-blur-xl border border-[#272835]/15 rounded-2xl md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col items-start">
            {/* Data tags badges */}
            <div className="flex flex-wrap gap-2 mb-6 max-w-4xl">
              {dataTags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-black/5 px-3.5 py-1.5 text-[10px] md:text-xs font-bold tracking-normal text-[#272835] border border-black/[0.04] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1
              className="text-[#272835] font-black leading-none mb-6"
              style={{
                fontSize: "clamp(1.75rem, 6vw, 5rem)",
                letterSpacing: "-0.02em",
                whiteSpace: "pre-line",
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-[#747b8f] text-[10px] md:text-xs font-semibold tracking-widest mb-10 max-w-3xl leading-relaxed"
              style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)" }}
            >
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <button className="btn-primary w-full sm:w-auto px-7 py-3 rounded-none text-sm uppercase">
                Get Started
              </button>
              <button className="btn-secondary w-full sm:w-auto px-7 py-3 rounded-full text-sm uppercase flex items-center justify-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                </svg>
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;