"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type WhatYouWillDoItem = {
  title: string;
  description: string;
  iconBg: string;
  topRight: string;
  label: string;
  subtitle: string;
  bottomLeft: string;
  icon: React.ReactNode;
  graphic: (id: string) => React.ReactNode;
};

const whatYouWillDo: WhatYouWillDoItem[] = [
  {
    title: "Harvard Case Method",
    description:
      "Learn from real business cases used at the world's top institutions. Analyse decisions, debate strategies, and apply lessons directly to your own startup.",
    iconBg: "bg-[#9333ea]",
    topRight: "01 / Case Method",
    label: "Strategic Core",
    subtitle: "Analysis & Debates",
    bottomLeft: "Case study series",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    graphic: (id) => (
      <svg
        className="absolute bottom-0 right-0 h-36 w-36 opacity-80 transition-all duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 30 C 85 45, 75 25, 60 50 C 45 75, 30 65, 0 100 L 100 100 Z"
          fill={`url(#purpleGrad-${id})`}
          opacity="0.15"
        />
        <path
          d="M100 40 C 80 55, 70 35, 55 60 C 40 85, 25 75, 0 100"
          stroke="#9333ea"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M100 48 C 82 60, 72 42, 58 65 C 44 88, 28 78, 0 100"
          stroke="#a855f7"
          strokeWidth="1"
        />
        <path
          d="M100 56 C 84 65, 74 49, 61 70 C 48 91, 31 81, 0 100"
          stroke="#c084fc"
          strokeWidth="0.8"
          opacity="0.8"
        />
        <defs>
          <linearGradient
            id={`purpleGrad-${id}`}
            x1="100"
            y1="30"
            x2="50"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9333ea" />
            <stop offset="1" stopColor="#9333ea" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Build a Real Startup",
    description:
      "From problem validation to product development — you'll ship something real. Not a simulation, not a hypothetical. A product with real users.",
    iconBg: "bg-[#2563eb]",
    topRight: "02 / Build",
    label: "Hands-on Venture",
    subtitle: "Launch & Validate",
    bottomLeft: "Vercel Deployment",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 4.57a6 6 0 0 1 5.95 9.8Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.86 17.29A6.002 6.002 0 0 1 4.57 9.64A14.98 14.98 0 0 0 12 21a14.98 14.98 0 0 0-1.14-3.71Z"
        />
      </svg>
    ),
    graphic: () => (
      <svg
        className="absolute bottom-0 right-0 h-36 w-36 opacity-80 transition-all duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 C 85 35, 75 15, 60 40 C 45 65, 30 55, 0 90"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeDasharray="1 4"
          strokeLinecap="round"
        />
        <path
          d="M100 28 C 85 43, 75 23, 60 48 C 45 73, 30 63, 0 98"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="1 4"
          strokeLinecap="round"
        />
        <path
          d="M100 36 C 85 51, 75 31, 60 56 C 45 81, 30 71, 0 106"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeDasharray="1 4"
          strokeLinecap="round"
        />
        <path
          d="M100 44 C 85 59, 75 39, 60 64 C 45 89, 30 79, 0 114"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeDasharray="1 4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Pitch to Investors",
    description:
      "Culminates in Demo Day, where you present your venture to a panel of investors, mentors, and industry professionals — just like a real accelerator.",
    iconBg: "bg-[#d97706]",
    topRight: "03 / Demo Day",
    label: "Accelerator Pitch",
    subtitle: "Demo Day Venture",
    bottomLeft: "Active Founders",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0V3m7.5 13.5v3.75m0-3.75H12m3 3.75H9"
        />
      </svg>
    ),
    graphic: () => (
      <svg
        className="absolute bottom-0 right-0 h-36 w-36 opacity-80 transition-all duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 100 L70 70 L100 100"
          stroke="#d97706"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M50 100 L75 75 L100 100"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M60 100 L80 80 L100 100"
          stroke="#fbbf24"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M70 100 L85 85 L100 100"
          stroke="#fcd34d"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Earn XP & Certification",
    description:
      "A gamified XP system tracks your progress across missions, lessons, and milestones. Top performers are recognised on a live leaderboard.",
    iconBg: "bg-[#059669]",
    topRight: "04 / Gamified",
    label: "XP Pathway",
    subtitle: "Live Leaderboard",
    bottomLeft: "Top 30 Cohort",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.75A3.75 3.75 0 0 0 10.5 6a3.75 3.75 0 0 0-3.75 3.75v5.625c0 .621.504 1.125 1.125 1.125h5.007ZM10.5 6V3.75m0 2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        />
      </svg>
    ),
    graphic: () => (
      <svg
        className="absolute bottom-0 right-0 h-36 w-36 opacity-80 transition-all duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="90" cy="90" r="8" fill="#059669" />
        <circle cx="70" cy="85" r="5" fill="#10b981" />
        <circle cx="85" cy="70" r="6" fill="#10b981" />
        <circle cx="60" cy="90" r="4" fill="#059669" />
        <circle cx="75" cy="60" r="3" fill="#34d399" />
        <circle cx="95" cy="55" r="5" fill="#34d399" />
        <circle cx="50" cy="75" r="4" fill="#059669" />
        <circle cx="65" cy="50" r="3" fill="#6ee7b7" />
        <circle cx="80" cy="40" r="2" fill="#6ee7b7" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Tools",
    description:
      "Access a built-in AI Playground and Research Workspace to prototype ideas, analyse feasibility, and experiment with prompt engineering.",
    iconBg: "bg-[#d97706]",
    topRight: "05 / AI Stack",
    label: "AI Playground",
    subtitle: "Research Workspace",
    bottomLeft: "Next.js & LLMs",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 9h8.25L9.75 21.75 12 15H3.75z"
        />
      </svg>
    ),
    graphic: (id) => (
      <svg
        className="absolute bottom-0 right-0 h-36 w-36 opacity-80 transition-all duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id={`circleMaskStripes-${id}`}>
          <circle cx="90" cy="90" r="45" fill="white" />
        </mask>
        <g mask={`url(#circleMaskStripes-${id})`}>
          <line
            x1="30"
            y1="130"
            x2="130"
            y2="30"
            stroke="#d97706"
            strokeWidth="4"
          />
          <line
            x1="40"
            y1="140"
            x2="140"
            y2="40"
            stroke="#f59e0b"
            strokeWidth="4"
          />
          <line
            x1="50"
            y1="150"
            x2="150"
            y2="50"
            stroke="#d97706"
            strokeWidth="4"
          />
          <line
            x1="60"
            y1="160"
            x2="160"
            y2="60"
            stroke="#f59e0b"
            strokeWidth="4"
          />
          <line
            x1="70"
            y1="170"
            x2="170"
            y2="70"
            stroke="#d97706"
            strokeWidth="4"
          />
          <line
            x1="80"
            y1="180"
            x2="180"
            y2="80"
            stroke="#f59e0b"
            strokeWidth="4"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "International Certification",
    description:
      "Graduates receive an internationally recognised certification validating their entrepreneurial and AI-building readiness.",
    iconBg: "bg-[#dc2626]",
    topRight: "06 / Graduation",
    label: "Credential",
    subtitle: "Industry Readiness",
    bottomLeft: "Lyfshilp Academy",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    graphic: () => (
      <svg
        className="absolute bottom-0 right-0 h-36 w-36 opacity-80 transition-all duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="85"
          y1="75"
          x2="95"
          y2="60"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="85"
          x2="75"
          y2="70"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="90"
          x2="90"
          y2="80"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="80"
          x2="55"
          y2="65"
          stroke="#f87171"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="60"
          x2="75"
          y2="45"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="85"
          y1="45"
          x2="95"
          y2="35"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function CarouselNavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-[#10b981]/50 hover:bg-[#10b981]/15 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={direction === "next" ? "rotate-180" : undefined}
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

function WhatYouWillDoCard({
  item,
  index,
}: {
  item: WhatYouWillDoItem;
  index: number;
}) {
  const cardId = `wyd-${index}`;

  return (
    <div className="group relative flex h-[240px] w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#121212] p-5 text-left transition-all duration-300 hover:border-[#444444] hover:shadow-[0_16px_32px_rgba(0,0,0,0.8)] sm:h-[260px] lg:h-[280px]">
      <div className="z-10 flex items-center justify-between gap-2">
        <div
          className={`grid size-9 shrink-0 place-items-center rounded-lg text-white ${item.iconBg}`}
        >
          <span className="scale-90">{item.icon}</span>
        </div>
        <span className="truncate font-mono text-[10px] font-medium tracking-wider text-white/40">
          {item.topRight}
        </span>
      </div>

      <div className="z-10 mt-3 flex flex-1 flex-col justify-center">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-white/40">
          {item.label}
        </span>
        <h3 className="text-[17px] font-black leading-tight tracking-tight text-white sm:text-[18px]">
          {item.title}
        </h3>
        <span className="mt-1 block text-[12px] font-medium text-white/30">
          {item.subtitle}
        </span>
      </div>

      <div className="z-10 mt-auto">
        <span className="text-[11px] font-medium tracking-wide text-white/40">
          {item.bottomLeft}
        </span>
      </div>

      <span className="pointer-events-none absolute bottom-0 right-0 scale-75 opacity-70">
        {item.graphic(cardId)}
      </span>

      <div className="absolute inset-0 z-20 flex flex-col justify-between rounded-xl bg-[#121212]/95 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div>
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#10b981]">
            About this module
          </span>
          <h4 className="mb-3 text-[17px] font-black leading-tight text-white">
            {item.title}
          </h4>
          <p className="text-[13px] font-medium leading-relaxed text-white/70">
            {item.description}
          </p>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-white/35">
          Hover to close
        </div>
      </div>
    </div>
  );
}

function chunkItems<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

export function FutureXWhatYouWillDoSection() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setCardsPerView(media.matches ? 3 : 1);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const pages = useMemo(
    () => chunkItems(whatYouWillDo, cardsPerView),
    [cardsPerView],
  );
  const totalPages = pages.length;

  useEffect(() => {
    setActivePage((current) => Math.min(current, totalPages - 1));
  }, [totalPages]);

  const goToPage = (page: number) => {
    setActivePage(Math.max(0, Math.min(page, totalPages - 1)));
  };

  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-t border-white/5 bg-[#0a0b0d] px-6 text-white sm:px-8 lg:px-14">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr] gap-8 py-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:grid-rows-1 lg:items-center lg:gap-12 lg:py-0">
        {/* Left — section copy + controls */}
        <div className="flex flex-col justify-center">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#10b981]">
            What You&apos;ll Do
          </p>
          <h2 className="mt-4 text-[28px] font-black leading-tight tracking-tight sm:text-[36px] lg:text-[44px]">
            Not a course.{" "}
            <span className="text-[#CFFD53]">A startup incubator.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-white/70 sm:text-[16px]">
            Fellows don&apos;t just learn entrepreneurship — they live it. Every
            concept is applied to a venture you build across 9 months.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <CarouselNavButton
              direction="prev"
              onClick={() => goToPage(activePage - 1)}
              disabled={activePage === 0}
            />
            <CarouselNavButton
              direction="next"
              onClick={() => goToPage(activePage + 1)}
              disabled={activePage === totalPages - 1}
            />
            <span className="ml-1 font-mono text-[12px] font-medium text-white/45">
              {String(activePage + 1).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activePage === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "w-8 bg-[#10b981]"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right — 3-card carousel */}
        <div className="relative flex min-h-0 min-w-0 flex-col justify-center">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activePage * 100}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`grid w-full shrink-0 gap-3 sm:gap-4 ${
                    cardsPerView === 3 ? "grid-cols-3" : "grid-cols-1"
                  }`}
                >
                  {page.map((item) => {
                    const index = whatYouWillDo.indexOf(item);
                    return (
                      <WhatYouWillDoCard
                        key={item.title}
                        item={item}
                        index={index}
                      />
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
