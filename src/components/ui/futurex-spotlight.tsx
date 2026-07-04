"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const spotlightData = [
  {
    initials: "AG",
    username: "adrija_gupta",
    xp: "1,511 XP",
    tags: ["Lessons & Missions", "Pitch"],
    tagColors: ["default", "green"],
    title: "SafeHer — A Message That Should Never Be Necessary",
    description:
      "A women's safety app for Delhi-NCR that combines instant SOS alerts, safe route navigation, AI-powered health assistance, and community-driven unsafe area reporting — built by a student who saw a problem and decided to solve it.",
    features: [
      { icon: "🆘", label: "Instant Live Location Share" },
      { icon: "🗺️", label: "Safe Routes to Police & Metro" },
      { icon: "🤖", label: "AI Health Assistant" },
      { icon: "📍", label: "Community Unsafe Area Reports" },
    ],
    upvotes: 148,
    comments: 14,
    avatarColor: "bg-[#10b981]/15 border-[#10b981]/30",
  },
  {
    initials: "RV",
    username: "rohan_verma",
    xp: "2,340 XP",
    tags: ["Build", "Pitch"],
    tagColors: ["default", "green"],
    title: "FarmAI — Empowering Small Farmers with Smart Predictions",
    description:
      "An AI-driven crop advisory platform that helps small-scale farmers in rural India predict weather patterns, detect crop diseases via camera, and access government scheme eligibility — built by a first-generation tech learner from UP.",
    features: [
      { icon: "🌾", label: "AI Crop Disease Detection" },
      { icon: "🌦️", label: "Hyperlocal Weather Forecasts" },
      { icon: "📋", label: "Govt Scheme Eligibility Checker" },
      { icon: "📡", label: "Works on 2G Networks" },
    ],
    upvotes: 213,
    comments: 28,
    avatarColor: "bg-[#6366f1]/15 border-[#6366f1]/30",
  },
  {
    initials: "PS",
    username: "priya_sharma",
    xp: "1,880 XP",
    tags: ["Mission", "Impact"],
    tagColors: ["default", "green"],
    title: "MindBridge — Mental Health Support for College Students",
    description:
      "A peer-support and AI journaling app that helps Indian college students manage stress, anxiety, and burnout — with anonymous chat rooms, guided breathing exercises, and a mood tracker that connects to a counselor when needed.",
    features: [
      { icon: "🧠", label: "AI Mood Journal & Insights" },
      { icon: "🫂", label: "Anonymous Peer Support Rooms" },
      { icon: "🧘", label: "Guided Breathing Exercises" },
      { icon: "🔔", label: "Crisis Alert to Counselor" },
    ],
    upvotes: 187,
    comments: 31,
    avatarColor: "bg-[#ec4899]/15 border-[#ec4899]/30",
  },
  {
    initials: "AK",
    username: "arjun_khatri",
    xp: "3,050 XP",
    tags: ["Build", "Pitch"],
    tagColors: ["default", "green"],
    title: "SkillBridge — Vernacular Skill Training for Tier-3 Youth",
    description:
      "A micro-learning platform delivering job-ready skill courses in Hindi, Tamil, and Bengali — designed for youth in Tier-3 cities without reliable internet, featuring offline downloads, WhatsApp quizzes, and placement assistance.",
    features: [
      { icon: "📱", label: "Offline-First Course Downloads" },
      { icon: "🌐", label: "Multi-Language Support" },
      { icon: "💼", label: "Job Placement Network" },
      { icon: "✅", label: "WhatsApp Quiz Assessments" },
    ],
    upvotes: 302,
    comments: 47,
    avatarColor: "bg-[#f59e0b]/15 border-[#f59e0b]/30",
  },
];

// Duplicate the list so we can loop seamlessly in one direction
const CARD_WIDTH = 560;   // px — matches w-[min(560px,85vw)]
const CARD_GAP   = 24;    // px — gap-6 = 1.5rem = 24px
const AUTO_DELAY = 4000;  // ms between each card advance

export function FutureXSpotlightSection() {
  const [upvoteStates, setUpvoteStates] = useState<{ [key: number]: number }>(
    () =>
      spotlightData.reduce((acc, item, idx) => {
        acc[idx] = item.upvotes;
        return acc;
      }, {} as { [key: number]: number })
  );
  const [hasUpvoted, setHasUpvoted]   = useState<{ [key: number]: boolean }>({});
  const [dotIndex, setDotIndex]       = useState(0); // 0‥N-1 for the dot indicator
  const scrollRef   = useRef<HTMLDivElement>(null);
  const stepRef     = useRef(0);          // absolute step counter (never resets)
  const isPausedRef = useRef(false);
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleUpvote = (idx: number) => {
    setUpvoteStates((prev) => ({
      ...prev,
      [idx]: hasUpvoted[idx] ? prev[idx] - 1 : prev[idx] + 1,
    }));
    setHasUpvoted((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Advance one card to the right, silently jump back when we hit the clone boundary
  const advance = () => {
    const el = scrollRef.current;
    if (!el) return;

    stepRef.current += 1;
    const totalCards = spotlightData.length;
    const realIndex  = stepRef.current % totalCards;

    // The scroll container holds 2× the cards (original + clone).
    // Each card slot is CARD_WIDTH + CARD_GAP pixels wide.
    const slotWidth = CARD_WIDTH + CARD_GAP;

    // If we've just entered the clone half, do the animated scroll into the clone,
    // then silently reset to the matching position in the original half.
    const targetScroll = stepRef.current * slotWidth;

    el.scrollTo({ left: targetScroll, behavior: "smooth" });

    // After smooth scroll finishes (~600 ms), if we're in the clone region
    // jump back to the equivalent position in the first copy — no animation.
    setTimeout(() => {
      if (!scrollRef.current) return;
      const halfWidth = totalCards * slotWidth;
      if (scrollRef.current.scrollLeft >= halfWidth) {
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollLeft - halfWidth, behavior: "instant" as ScrollBehavior });
        stepRef.current = realIndex; // re-sync step counter
      }
    }, 650);

    setDotIndex(realIndex);
  };

  // Auto-scroll timer
  useEffect(() => {
    const schedule = () => {
      timerRef.current = setTimeout(() => {
        if (!isPausedRef.current) advance();
        schedule();
      }, AUTO_DELAY);
    };
    schedule();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dot click — jump directly to a card (in the first copy)
  const jumpToCard = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slotWidth = CARD_WIDTH + CARD_GAP;
    el.scrollTo({ left: idx * slotWidth, behavior: "smooth" });
    stepRef.current = idx;
    setDotIndex(idx);
  };

  // Render both the originals AND an invisible clone set for seamless looping
  const allCards = [...spotlightData, ...spotlightData];

  return (
    <section className="relative bg-[#07080a] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-4xl mb-14">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
            Fellow Spotlight
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
            Real pitches from <br />
            <span className="text-[#CFFD53]">real students.</span>
          </h2>
          <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-white/70 max-w-3xl font-medium">
            Fellows build products that address real-world problems — then pitch
            them to the community.
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mb-6">
          {spotlightData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => jumpToCard(idx)}
              aria-label={`Go to card ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === dotIndex
                  ? "w-6 h-2.5 bg-[#CFFD53]"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Horizontal Scroll — pauses on hover */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-6"
          style={{ scrollSnapType: "none" }}   // no snap — we control position precisely
        >
          {allCards.map((item, idx) => {
            const realIdx = idx % spotlightData.length;
            return (
              <div
                key={idx}
                className="flex-none"
                style={{ width: `min(${CARD_WIDTH}px, 85vw)` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % spotlightData.length) * 0.08 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl overflow-hidden text-left h-full"
                >
                  {/* Ambient glows */}
                  <div className="absolute -right-20 -top-20 size-48 rounded-full bg-[#10b981]/10 blur-3xl pointer-events-none" />
                  <div className="absolute -left-20 -bottom-20 size-48 rounded-full bg-[#5e22ff]/10 blur-3xl pointer-events-none" />

                  {/* Author Header Row */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-12 rounded-full ${item.avatarColor} border flex items-center justify-center font-bold text-[#CFFD53] text-lg select-none`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <h3 className="text-[16px] font-bold text-white leading-none">
                          {item.username}
                        </h3>
                        <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#CFFD53]/10 px-2 py-0.5 text-[11px] font-black text-[#CFFD53]">
                          ⚡ {item.xp}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={
                            item.tagColors[tagIdx] === "green"
                              ? "rounded-md border border-[#10b981]/30 bg-[#10b981]/10 px-2.5 py-1 text-[11px] font-semibold text-[#10b981]"
                              : "rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/60"
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Title */}
                  <h4 className="text-[22px] sm:text-[24px] font-black tracking-tight text-white group-hover:text-[#CFFD53] transition-colors leading-snug">
                    {item.title}
                  </h4>

                  {/* Post Description */}
                  <p className="mt-4 text-[15px] leading-relaxed text-white/70 font-medium">
                    {item.description}
                  </p>

                  {/* Feature Bullet Grid */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <span className="text-xl">{feat.icon}</span>
                        <span className="text-[14px] font-semibold text-white/80">
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Footer */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-sm text-white/60">
                    <button
                      onClick={() => handleUpvote(realIdx)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                        hasUpvoted[realIdx]
                          ? "bg-[#CFFD53]/20 border-[#CFFD53] text-[#CFFD53]"
                          : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white"
                      }`}
                    >
                      <span>▲</span>
                      <span className="font-bold">{upvoteStates[realIdx]} Upvotes</span>
                    </button>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 select-none">
                      <span>💬</span>
                      <span className="font-bold">{item.comments} comments</span>
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#CFFD53] rounded-full transition-all duration-500"
            style={{
              width: `${((dotIndex + 1) / spotlightData.length) * 100}%`,
            }}
          />
        </div>
        <p className="mt-3 text-[12px] text-white/40 font-medium text-right">
          {dotIndex + 1} / {spotlightData.length}
        </p>
      </div>
    </section>
  );
}
