"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function FutureXSpotlightSection() {
  const [upvotes, setUpvotes] = useState(148);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = () => {
    if (hasUpvoted) {
      setUpvotes((prev) => prev - 1);
      setHasUpvoted(false);
    } else {
      setUpvotes((prev) => prev + 1);
      setHasUpvoted(true);
    }
  };

  return (
    <section className="relative lg:sticky lg:top-0 z-50 bg-[#07080a] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-28px_72px_rgba(0,0,0,0.9)] border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-4xl mb-20">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
            Fellow Spotlight
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
            Real pitches from <br />
            <span className="text-[#CFFD53]">real students.</span>
          </h2>
          <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-white/70 max-w-3xl font-medium">
            Fellows build products that address real-world problems — then pitch them to the community.
          </p>
        </div>

        {/* Social Feed Post Mockup Card */}
        <div className="mx-auto max-w-2xl mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl overflow-hidden text-left"
          >
            {/* Ambient glows inside card */}
            <div className="absolute -right-20 -top-20 size-48 rounded-full bg-[#10b981]/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 size-48 rounded-full bg-[#5e22ff]/10 blur-3xl pointer-events-none" />

            {/* Author Header Row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-4">
                {/* User avatar bubble */}
                <div className="size-12 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center font-bold text-[#CFFD53] text-lg select-none">
                  AG
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-white leading-none">adrija_gupta</h3>
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#CFFD53]/10 px-2 py-0.5 text-[11px] font-black text-[#CFFD53]">
                    ⚡ 1,511 XP
                  </span>
                </div>
              </div>

              {/* Feed Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/60">
                  Lessons & Missions
                </span>
                <span className="rounded-md border border-[#10b981]/30 bg-[#10b981]/10 px-2.5 py-1 text-[11px] font-semibold text-[#10b981]">
                  Pitch
                </span>
              </div>
            </div>

            {/* Post Title */}
            <h4 className="text-[22px] sm:text-[26px] font-black tracking-tight text-white group-hover:text-[#CFFD53] transition-colors leading-snug">
              SafeHer — A Message That Should Never Be Necessary
            </h4>

            {/* Post Description */}
            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-white/70 font-medium">
              A women&apos;s safety app for Delhi-NCR that combines instant SOS alerts, safe route navigation, AI-powered health assistance, and community-driven unsafe area reporting — built by a student who saw a problem and decided to solve it.
            </p>

            {/* Feature Bullet Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <span className="text-xl">🆘</span>
                <span className="text-[14px] font-semibold text-white/80">Instant Live Location Share</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🗺️</span>
                <span className="text-[14px] font-semibold text-white/80">Safe Routes to Police & Metro</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <span className="text-[14px] font-semibold text-white/80">AI Health Assistant</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span className="text-[14px] font-semibold text-white/80">Community Unsafe Area Reports</span>
              </div>
            </div>

            {/* Interactive Footer (Upvotes & comments mockup) */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-sm text-white/60">
              <button
                onClick={handleUpvote}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  hasUpvoted
                    ? "bg-[#CFFD53]/20 border-[#CFFD53] text-[#CFFD53]"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white"
                }`}
              >
                <span>▲</span>
                <span className="font-bold">{upvotes} Upvotes</span>
              </button>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 select-none">
                <span>💬</span>
                <span className="font-bold">14 comments</span>
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
