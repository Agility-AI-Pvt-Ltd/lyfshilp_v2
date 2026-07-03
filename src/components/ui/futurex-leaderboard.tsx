"use client";

import React from "react";
import { motion } from "framer-motion";

const winners = [
  {
    place: 2,
    name: "Gulika Agrawal",
    username: "@gulika",
    xp: 207,
    avatarColor: "bg-[#8b5cf6]",
    medalColors: "from-[#e2e8f0] to-[#94a3b8]",
    height: 180,
    width: 115,
    depth: 45,
    delay: 0.2,
    zIndex: 20,
    marginRight: 10,
    fontSize: "text-[90px]",
  },
  {
    place: 1,
    name: "Priyansh Agarwal",
    username: "@und_priyansh26",
    xp: 222,
    avatarColor: "bg-[#ef4444]",
    medalColors: "from-[#fcd34d] to-[#d97706]",
    height: 270,
    width: 145,
    depth: 45,
    delay: 0.4,
    zIndex: 30,
    marginRight: 10,
    fontSize: "text-[110px]",
  },
  {
    place: 3,
    name: "Kiyansh",
    username: "@kiyansh",
    xp: 196,
    avatarColor: "bg-[#eab308]",
    medalColors: "from-[#fdba74] to-[#b45309]",
    height: 120,
    width: 115,
    depth: 45,
    delay: 0.6,
    zIndex: 10,
    marginRight: 0,
    fontSize: "text-[90px]",
  },
];

function Podium({ data }: { data: any }) {
  return (
    <div
      className="relative flex flex-col items-center justify-end"
      style={{ width: data.width }}
    >
      {/* Podium Block */}
      <motion.div
        className="relative bg-[#0f2c30] flex items-end justify-center overflow-visible"
        style={{ width: "100%" }}
        initial={{ height: 0 }}
        whileInView={{ height: data.height }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          delay: data.delay,
          type: "spring",
          bounce: 0.25,
        }}
      >
        {/* Front Number */}
        <span
          className={`${data.fontSize} font-black text-[#174349] leading-[0.85] absolute bottom-2 select-none`}
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 80%)",
          }}
        >
          {data.place}
        </span>

        {/* Top Face */}
        <div
          className="absolute left-0 w-full bg-[#84cc16]"
          style={{
            height: `${data.depth}px`,
            top: 0,
            transformOrigin: "bottom left",
            transform: "translateY(-100%) skewX(-45deg)",
          }}
        />

        {/* Right Face */}
        <div
          className="absolute right-0 h-full bg-[#081a1d]"
          style={{
            width: `${data.depth}px`,
            top: 0,
            transformOrigin: "top left",
            transform: "translateX(100%) skewY(-45deg)",
          }}
        />

        {/* Avatar & Info Wrapper */}
        <div
          className="absolute w-[180px]"
          style={{
            bottom: "100%",
            left: "50%",
            transform: `translate(calc(-50% + ${data.depth / 2}px), -${data.depth / 2 + 24}px)`,
          }}
        >
          {/* Avatar Animation */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: data.delay + 0.4,
              type: "spring",
            }}
          >
            {/* Avatar Circle */}
            <div className="relative size-[85px] rounded-full shadow-2xl">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-black text-white ${data.avatarColor} border-[4px] border-[#0a0b0d]`}
              >
                {data.name.charAt(0)}
              </div>
              {/* Medal */}
              <div
                className={`absolute -top-1 -right-2 size-9 rounded-full bg-gradient-to-br ${data.medalColors} border-2 border-[#0a0b0d] flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.4)]`}
              >
                <span className="text-[14px]">⭐</span>
              </div>
            </div>

            {/* Name */}
            <h3 className="mt-3 text-white font-bold text-[15px] whitespace-nowrap drop-shadow-md">
              {data.name}
            </h3>

            {/* Coins */}
            <div className="mt-2 flex items-center gap-2 bg-[#1a1b1e]/90 border border-white/5 rounded-lg px-3.5 py-1.5 shadow-xl backdrop-blur-sm">
              <span className="text-[15px]">🪙</span>
              <span className="text-white font-black text-[14px] tracking-wide">
                {data.xp}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function FutureXLeaderboardSection() {
  return (
    <section className="relative bg-[#0a0b0d] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 border-t border-white/5 overflow-hidden">
      {/* Sunburst Background Effects */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.15]"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 15%, rgba(255,200,150,1) 0deg 2deg, transparent 2deg 6deg)",
          maskImage:
            "radial-gradient(circle at 50% 15%, black 10%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 15%, black 10%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% -10%, rgba(120, 30, 10, 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header Block */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981] mb-4">
              Gamified Learning
            </p>
            <h2 className="text-[42px] font-black leading-tight tracking-tight text-white sm:text-[56px] mb-6">
              Climb the XP Leaderboard
            </h2>
            <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-white/60 sm:text-[18px] font-medium">
              Every cohort has a live ranking. Complete missions, ship
              milestones, and earn your place on the podium.
            </p>
          </motion.div>
        </div>

        {/* Podium Layout */}
        <div className="w-full overflow-x-auto pb-10 hide-scrollbar flex justify-center">
          <div className="flex items-end justify-center min-w-[500px] h-[480px] pt-32">
            {winners.map((winner) => (
              <div
                key={winner.place}
                className="relative"
                style={{
                  zIndex: winner.zIndex,
                  marginRight: winner.marginRight
                    ? `${winner.marginRight}px`
                    : "0px",
                }}
              >
                <Podium data={winner} />
              </div>
            ))}
          </div>
        </div>

        {/* Subtext info */}
        <div className="mt-8 text-center">
          <p className="text-[14px] text-white/40 font-semibold tracking-normal leading-relaxed">
            From cohort{" "}
            <span className="text-[#10b981] font-bold">26JUNSILVER</span> • Top
            30 ranked by total experience points
          </p>
        </div>
      </div>
    </section>
  );
}
