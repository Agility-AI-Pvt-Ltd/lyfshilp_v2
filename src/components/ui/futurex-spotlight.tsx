"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

type SpotlightItem = {
  id: string;
  time: string;
  author: string;
  initials: string;
  xp?: string;
  bonusXp?: string | null;
  title: string;
  description: string;
  tags: string[];
  image?: {
    src: string;
    alt: string;
  };
  features?: {
    label: string;
    value: string;
  }[];
  upvotes: number;
  comments: number;
  cardClassName?: string;
};

const spotlightItems: SpotlightItem[] = [
  {
    id: "manya-problem-card",
    time: "2 months",
    author: "manya_gupta",
    initials: "MA",
    xp: "70 XP",
    title: "HTML Problem Card - 10 common problems faced in real life (By Manya Gupta)",
    description:
      "I am a FutureX Fellow. Below are 10 real problems I noticed in daily life last week. Long unpredictable work hours, traffic, poor time management, irregular sleep, and skipped meals all became product opportunities.",
    tags: ["#LESSONS & MISSIONS", "#Problem", "#common", "#problems"],
    image: {
      src: "/images/manya-problem-card.png",
      alt: "HTML Problem Card presentation",
    },
    upvotes: 11,
    comments: 10,
    cardClassName: "bg-[#181818]",
  },
  {
    id: "safeher-pitch",
    time: "2 days",
    author: "adrija_gupta",
    initials: "AG",
    xp: "1,511 XP",
    title: "SafeHer - A Message That Should Never Be Necessary",
    description:
      "A women's safety app for Delhi-NCR that combines instant SOS alerts, safe route navigation, AI-powered health assistance, and community-driven unsafe area reporting.",
    tags: ["#LESSONS & MISSIONS", "#Pitch"],
    features: [
      { label: "SOS", value: "Instant Live Location Share" },
      { label: "Map", value: "Safe Routes to Police & Metro" },
      { label: "AI", value: "AI Health Assistant" },
      { label: "Pin", value: "Community Unsafe Area Reports" },
    ],
    upvotes: 148,
    comments: 14,
    cardClassName: "bg-white/5",
  },
  {
    id: "blue-ocean-strategy",
    time: "about 2 months",
    author: "prayan_khowal",
    initials: "PK",
    xp: "1,401 XP",
    title: "20 Companies that used Blue Ocean Strategy - Image - By Prayan Khowal",
    description:
      "A visual strategy breakdown exploring how companies created uncontested markets instead of competing inside crowded categories.",
    tags: ["#LESSONS & MISSIONS", "#Companies", "#Ocean", "#Strategy"],
    image: {
      src: "/images/blue-ocean-strategy.png",
      alt: "Blue Ocean Strategy infographic",
    },
    upvotes: 10,
    comments: 15,
    cardClassName: "bg-[#181818]",
  },
  {
    id: "sai-lekh-life-problems",
    time: "2 months",
    author: "sai_lekh_jammula",
    initials: "SL",
    xp: "116 XP",
    bonusXp: "+13 XP",
    title: "10 problems i noticed in my life last week- Sai Lekh Jammula 8E",
    description:
      "Air pollution, traffic congestion, noise pollution, garbage issues, water problems, overcrowding, potholes, stray animals, extreme weather, and crowded public transport became a sharp problem-discovery exercise.",
    tags: ["#LESSONS & MISSIONS", "#problems", "#noticed", "#week"],
    image: {
      src: "/images/sai-lekh-problems.svg",
      alt: "Ten problems noticed in daily life infographic",
    },
    upvotes: 10,
    comments: 10,
    cardClassName: "bg-[#181818]",
  },
  {
    id: "builder-mission-problem-discovery",
    time: "3 months",
    author: "futurex_admin",
    initials: "FX",
    bonusXp: null,
    title: "Session 1: Builder Mission ??? Problem Discovery",
    description:
      "Your mission: identify 10 real-world problems that you genuinely find interesting, believe are solvable, and think need attention. Then validate your thinking by speaking with people around you.",
    tags: ["#LESSONS & MISSIONS", "#Session", "#Builder", "#Mission"],
    image: {
      src: "/images/builder-mission-problem-discovery.svg",
      alt: "Session 1 Builder Mission Problem Discovery",
    },
    upvotes: 13,
    comments: 10,
    cardClassName: "bg-[#181818]",
  },
];

const scrollDistancePerCard = 72;

function UpvoteIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
}

function DownvoteIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.632l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  );
}

function SpotlightCard({
  item,
  votes,
  hasVoted,
  onToggleVote,
}: {
  item: SpotlightItem;
  votes: number;
  hasVoted: boolean;
  onToggleVote: () => void;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-5 text-left shadow-2xl backdrop-blur-md sm:p-6 lg:p-8 ${
        item.cardClassName ?? "bg-[#181818]"
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[#10b981]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 size-48 rounded-full bg-[#5e22ff]/10 blur-3xl" />

      <div className="relative flex flex-wrap items-center justify-between gap-4 text-[12px] font-bold text-white/40 sm:text-[13px]">
        <div className="flex flex-wrap items-center gap-3">
          <span aria-hidden="true">.</span>
          <span>{item.time}</span>
          <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1 text-[#f2c94c]">Discussion</span>
          {item.bonusXp !== null ? (
            <>
              <span aria-hidden="true">.</span>
              <span className="rounded-full bg-[#10b981]/10 px-3 py-1 text-[#34d399]">{item.bonusXp ?? "+18 XP"}</span>
            </>
          ) : null}
        </div>
        <MoreIcon />
      </div>

      <div className="relative mt-5 flex items-center gap-4 lg:mt-6">
        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#3d331a] text-[14px] font-black text-[#f2c94c] sm:size-12 sm:text-[15px]">
          {item.initials}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <strong className="text-[16px] font-black text-white sm:text-[17px]">{item.author}</strong>
          {item.xp ? (
            <span className="flex items-center gap-1.5 rounded-full border border-[#f2c94c]/30 px-3 py-1 text-[12px] font-black text-[#f2c94c]">
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              {item.xp}
            </span>
          ) : null}
        </div>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2 lg:mt-6">
        {item.tags.map((tag, tagIndex) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1.5 text-[11px] font-black tracking-[0.07em] ${
              tagIndex === 0 ? "bg-[#f2c94c]/10 uppercase text-[#f2c94c]" : "bg-white/[0.07] text-white/50"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <h4 className="relative mt-5 text-[21px] font-black leading-snug tracking-tight text-white transition-colors group-hover:text-[#CFFD53] sm:text-[26px] lg:mt-6 lg:text-[30px]">
        {item.title}
      </h4>

      <p className="relative mt-3 line-clamp-3 text-[15px] font-medium leading-relaxed text-white/60 sm:text-[16px] lg:mt-4 lg:text-[18px]">
        {item.description}
      </p>

      {item.image ? (
        <div className="relative mt-5 min-h-0 flex-1 overflow-hidden rounded-[16px] border border-[#f2c94c]/30 bg-[#0a0a0a] lg:mt-6">
          <img src={item.image.src} alt={item.image.alt} className="h-full w-full object-cover object-top" />
        </div>
      ) : null}

      {item.features ? (
        <div className="relative mt-6 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 sm:grid-cols-2 lg:gap-4 lg:pt-6">
          {item.features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-3">
              <span className="text-[15px] font-black text-[#CFFD53]">{feature.label}</span>
              <span className="text-[13px] font-semibold text-white/80 sm:text-[14px]">{feature.value}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="relative mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-white/60 lg:mt-6 lg:pt-6">
        <button
          type="button"
          onClick={onToggleVote}
          aria-pressed={hasVoted}
          aria-label={`Upvote ${item.title}`}
          className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all sm:px-4 ${
            hasVoted
              ? "border-[#CFFD53] bg-[#CFFD53]/20 text-[#CFFD53]"
              : "border-[#f2c94c]/30 bg-white/5 text-white hover:border-[#f2c94c]/50 hover:bg-white/10"
          }`}
        >
          <UpvoteIcon />
          <span className="font-bold text-[#f2c94c]">{votes}</span>
          <DownvoteIcon />
        </button>

        <div className="flex items-center gap-4 sm:gap-5">
          <span className="inline-flex select-none items-center gap-2">
            <CommentIcon />
            <span className="font-bold">{item.comments}</span>
          </span>
          <SaveIcon />
          <ShareIcon />
        </div>
      </div>
    </article>
  );
}

function AnimatedSpotlightCard({
  item,
  index,
  total,
  progress,
  votes,
  hasVoted,
  onToggleVote,
}: {
  item: SpotlightItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  votes: number;
  hasVoted: boolean;
  onToggleVote: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const step = 1 / total;
  const start = index * step;
  const end = Math.min(1, start + step);
  const isLast = index === total - 1;

  const enterStart = Math.max(0, start - step * 0.4);
  const holdEnd = start + step * 0.56;

  const y = useTransform(
    progress,
    index === 0
      ? [0, holdEnd, end]
      : isLast
        ? [enterStart, start, 1]
        : [enterStart, start, holdEnd, end],
    index === 0
      ? ["0%", "0%", "-115%"]
      : isLast
        ? ["115%", "0%", "0%"]
        : ["115%", "0%", "0%", "-115%"],
  );
  const opacity = useTransform(
    progress,
    index === 0
      ? [0, holdEnd, end]
      : isLast
        ? [enterStart, start, 1]
        : [enterStart, start, holdEnd, end],
    index === 0
      ? [1, 1, 0]
      : isLast
        ? [0, 1, 1]
        : [0, 1, 1, 0],
  );
  const scale = useTransform(
    progress,
    index === 0
      ? [0, holdEnd, end]
      : isLast
        ? [enterStart, start, 1]
        : [enterStart, start, holdEnd, end],
    index === 0
      ? [1, 1, 0.96]
      : isLast
        ? [0.96, 1, 1]
        : [0.96, 1, 1, 0.96],
  );
  const blur = useTransform(
    progress,
    index === 0
      ? [0, holdEnd, end]
      : isLast
        ? [enterStart, start, 1]
        : [enterStart, start, holdEnd, end],
    index === 0
      ? ["0px", "0px", "6px"]
      : isLast
        ? ["6px", "0px", "0px"]
        : ["6px", "0px", "0px", "6px"],
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        y: shouldReduceMotion ? 0 : y,
        opacity,
        scale: shouldReduceMotion ? 1 : scale,
        filter: shouldReduceMotion ? "none" : blur,
        zIndex: index + 1,
        transformOrigin: "center bottom",
        willChange: "transform, opacity, filter",
      }}
    >
      <SpotlightCard item={item} votes={votes} hasVoted={hasVoted} onToggleVote={onToggleVote} />
    </motion.div>
  );
}

export function FutureXSpotlightSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const [votes, setVotes] = useState<Record<string, number>>(() =>
    Object.fromEntries(spotlightItems.map((item) => [item.id, item.upvotes])),
  );
  const [votedItems, setVotedItems] = useState<Record<string, boolean>>({});

  const toggleVote = (id: string) => {
    setVotedItems((current) => {
      const nextHasVoted = !current[id];
      setVotes((currentVotes) => ({
        ...currentVotes,
        [id]: currentVotes[id] + (nextHasVoted ? 1 : -1),
      }));
      return {
        ...current,
        [id]: nextHasVoted,
      };
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-50 border-t border-white/5 bg-[#07080a] px-6 text-white shadow-[0_-28px_72px_rgba(0,0,0,0.9)] sm:px-8 lg:px-14"
      style={{ height: `${100 + spotlightItems.length * scrollDistancePerCard}svh` }}
    >
      <div className="sticky top-0 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center gap-6 overflow-hidden py-12 sm:py-16 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:py-0">
        <div className="max-w-4xl">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
            Fellow Spotlight
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
            Real pitches from <br />
            <span className="text-[#CFFD53]">real students.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-[18px] font-medium leading-relaxed text-white/70 sm:text-[20px]">
            Fellows build products that address real-world problems — then pitch them to the community.
          </p>
        </div>

        <div className="relative mx-auto h-[52svh] min-h-[360px] w-full max-w-5xl sm:min-h-[400px] lg:h-[min(700px,calc(100vh-6rem))]">
          {spotlightItems.map((item, index) => (
            <AnimatedSpotlightCard
              key={item.id}
              item={item}
              index={index}
              total={spotlightItems.length}
              progress={scrollYProgress}
              votes={votes[item.id]}
              hasVoted={Boolean(votedItems[item.id])}
              onToggleVote={() => toggleVote(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
