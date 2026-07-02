"use client";

import React from "react";
import { motion } from "framer-motion";

export function FutureXLeaderboardSection() {
  return (
    <section className="relative lg:sticky lg:top-0 z-40 bg-[#fffaf4] text-[#272835] min-h-screen px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-32px_80px_rgba(0,0,0,0.06)] border-t border-[#e6e8ef]">
      <div className="mx-auto max-w-5xl">
        {/* Header Block */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981] mb-4">
              Gamified Learning
            </p>
            <h2 className="text-[42px] font-black leading-tight tracking-tight text-[#272835] sm:text-[56px] mb-6">
              Climb the XP Leaderboard
            </h2>
            <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#747b8f] sm:text-[20px] font-medium">
              Every cohort has a live ranking. Complete missions, ship milestones, and earn your place on the podium.
            </p>
          </motion.div>
        </div>

        {/* Podium Layout */}
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-4 mt-16 pt-10">
            
            {/* 2nd Place: Gulika Agrawal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/3 flex flex-col items-center order-2 md:order-1"
            >
              {/* Profile Card */}
              <div className="mb-4 text-center">
                <div className="relative inline-block">
                  <div className="size-20 rounded-full border-4 border-slate-300 bg-[#ebe7df] flex items-center justify-center text-xl font-bold text-[#272835] shadow-sm select-none">
                    GA
                  </div>
                  <span className="absolute -bottom-1 -right-1 size-7 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[13px] font-black text-slate-800 shadow-sm">
                    2
                  </span>
                </div>
                <h3 className="mt-3 text-[18px] font-black text-[#272835]">Gulika Agrawal</h3>
                <p className="text-[14px] text-[#747b8f] font-semibold">@gulika</p>
              </div>
              {/* Podium Block */}
              <div className="w-full h-36 bg-slate-300/40 rounded-t-2xl border-t border-x border-[#bdc3d1]/30 flex flex-col items-center justify-center p-4">
                <span className="text-[28px] font-black text-slate-500">2nd</span>
                <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-slate-400/12 px-3.5 py-1 text-sm font-black text-[#272835]">
                  207 XP
                </span>
              </div>
            </motion.div>

            {/* 1st Place: Priyansh Agarwal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full md:w-1/3 flex flex-col items-center order-1 md:order-2 z-10 -translate-y-4 md:-translate-y-6"
            >
              {/* Crown details */}
              <div className="text-3xl mb-1.5 animate-bounce">👑</div>
              {/* Profile Card */}
              <div className="mb-4 text-center">
                <div className="relative inline-block">
                  <div className="size-24 rounded-full border-4 border-amber-400 bg-[#ebd69d]/40 flex items-center justify-center text-2xl font-bold text-[#272835] shadow-md select-none">
                    PA
                  </div>
                  <span className="absolute -bottom-1 -right-1 size-8 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[14px] font-black text-amber-950 shadow-sm">
                    1
                  </span>
                </div>
                <h3 className="mt-3 text-[20px] font-black text-[#272835]">Priyansh Agarwal</h3>
                <p className="text-[14px] text-[#747b8f] font-semibold">@und_priyansh26</p>
              </div>
              {/* Podium Block */}
              <div className="w-full h-48 bg-amber-400/20 rounded-t-2xl border-t border-x border-amber-400/40 flex flex-col items-center justify-center p-4 shadow-md">
                <span className="text-[34px] font-black text-amber-600">1st</span>
                <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-4 py-1 text-sm font-black text-amber-800">
                  222 XP
                </span>
              </div>
            </motion.div>

            {/* 3rd Place: Kiyansh */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-1/3 flex flex-col items-center order-3"
            >
              {/* Profile Card */}
              <div className="mb-4 text-center">
                <div className="relative inline-block">
                  <div className="size-20 rounded-full border-4 border-amber-600 bg-[#efe7da] flex items-center justify-center text-xl font-bold text-[#272835] shadow-sm select-none">
                    K
                  </div>
                  <span className="absolute -bottom-1 -right-1 size-7 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-[13px] font-black text-white shadow-sm">
                    3
                  </span>
                </div>
                <h3 className="mt-3 text-[18px] font-black text-[#272835]">Kiyansh</h3>
                <p className="text-[14px] text-[#747b8f] font-semibold">@kiyansh</p>
              </div>
              {/* Podium Block */}
              <div className="w-full h-28 bg-amber-600/10 rounded-t-2xl border-t border-x border-amber-600/30 flex flex-col items-center justify-center p-4">
                <span className="text-[24px] font-black text-amber-700">3rd</span>
                <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-amber-700/12 px-3.5 py-1 text-sm font-black text-amber-800">
                  196 XP
                </span>
              </div>
            </motion.div>

          </div>

          {/* Subtext info */}
          <div className="mt-12 text-center">
            <p className="text-[14px] text-[#747b8f] font-semibold tracking-normal leading-relaxed">
              From cohort <span className="text-[#10b981] font-bold">26JUNSILVER</span> • Top 30 ranked by total experience points
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
