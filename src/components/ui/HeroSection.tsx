"use client";

import React from "react";

interface HeroSectionProps {
  columnOneImages: string[];
  columnTwoImages: string[];
  title?: string;
  subtitle?: string;
  rating?: string;
  students?: string;
  trustedText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  columnOneImages,
  columnTwoImages,
  title = "Master Pro\n3D Design",
  subtitle =
    "GET READY TO TRULY ROCK YOUR 3D DESIGN SKILLS WITH FUN PROJECTS, REAL-LIFE WORKFLOWS, AND TRAINING FROM THE PROS. LEARN BY DOING WITH HANDS-ON PROJECTS THAT MIRROR REAL INDUSTRY WORKFLOWS.",
  trustedText = "Trusted by 5,000+ students across 14 Indian cities",
}) => {
  // Duplicate images for seamless infinite loop
  const col1 = [...columnOneImages, ...columnOneImages, ...columnOneImages];
  const col2 = [...columnTwoImages, ...columnTwoImages, ...columnTwoImages];

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

      <section className="hero-bg relative w-full min-h-screen overflow-hidden flex items-end">

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
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-32 pb-8 sm:pb-12 flex flex-col items-start">
          <div className="w-full bg-white/70 backdrop-blur-xl border border-[#272835]/15 rounded-2xl md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col items-start">
            {/* Trusted Text */}
            {trustedText && (
              <span className="inline-flex items-center rounded-full bg-[#CFFD53] px-3.5 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-[0.08em] text-[#272835] shadow-sm mb-6 border border-black/[0.04]">
                {trustedText}
              </span>
            )}

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
              <button className="group relative w-full sm:w-auto overflow-hidden flex items-center justify-between rounded-full bg-[#f8fafb] p-1 transition-colors duration-300 border-0 focus:outline-none">
                {/* #CFFD53 sweep layer — covers whole pill left to right on hover */}
                <span
                  className="absolute inset-0 origin-left scale-x-0 bg-[#CFFD53] transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                  aria-hidden="true"
                />

                {/* Text with slide animation */}
                <span className="relative flex h-[1.4em] items-center overflow-hidden px-5">
                  {/* Original text — slides up out */}
                  <span className="block whitespace-nowrap text-[15px] font-bold text-[#272835] transition-transform duration-300 ease-in-out group-hover:-translate-y-[200%]">
                    Book a Free Counselling Call
                  </span>
                  {/* Incoming text — slides in from below */}
                  <span
                    className="absolute left-5 right-0 flex items-center whitespace-nowrap text-[15px] font-bold text-[#272835] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                    aria-hidden="true"
                  >
                    Book a Free Counselling Call
                  </span>
                </span>

                {/* Arrow circle — #CFFD53 filled */}
                <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-[#CFFD53] text-[#272835] transition-all duration-300">
                  {/* Arrow exits to the right */}
                  <span className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-[150%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  {/* Arrow enters from the left */}
                  <span className="absolute -translate-x-[150%] text-[#272835] transition-all duration-300 ease-in-out group-hover:translate-x-0" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </button>
              <button className="btn-secondary w-full sm:w-auto h-11 px-7 rounded-full text-sm uppercase flex items-center justify-center gap-2.5 !bg-white !border-0 focus:outline-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Program Guide</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;