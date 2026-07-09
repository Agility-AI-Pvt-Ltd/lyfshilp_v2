"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { SchoolsTimelineSection } from "@/src/components/ui/schools-timeline";

function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current transition-transform group-hover:translate-x-1"
    />
  );
}

function SchoolHeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#030508]" />

      {/* Large radial glows */}
      <div className="absolute -right-40 -top-40 size-[700px] rounded-full bg-[#10b981]/[0.08] blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-[#CFFD53]/[0.06] blur-[100px]" />
      <div className="absolute left-1/2 top-1/3 size-[400px] -translate-x-1/2 rounded-full bg-[#5e22ff]/[0.05] blur-[95px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Diagonal scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(16,185,129,0.3) 0px, rgba(16,185,129,0.3) 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Orbit rings */}
      <div className="absolute left-[65%] top-[20%] size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] animate-[spin_32s_linear_infinite]" />
      <div className="absolute left-[65%] top-[20%] size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02] animate-[spin_48s_linear_infinite_reverse]" />
    </div>
  );
}

export default function ForSchoolsPage() {
  const router = useRouter();

  return (
    <div className="bg-[#030508] text-white font-sans antialiased overflow-x-hidden min-h-screen">
      <LyfshilpNavbar />

      <main>
        {/* ── 1. HERO SECTION ────────────────────────────────────────────── */}
        <section className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-white sm:px-8 lg:px-14">
          <SchoolHeroBackground />

          <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col gap-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#10b981]">
                <span className="size-1.5 animate-ping rounded-full bg-[#10b981]" />
                FutureX for Schools
              </div>

              <h1 className="mt-8 text-[44px] font-black leading-[1.08] tracking-tight sm:text-[60px] lg:text-[76px] xl:text-[84px] text-white">
                Two Paths. One Mission: <br />
                <span className="text-[#CFFD53] block mt-2">
                  Raise a Generation That Leads the AI Revolution.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-[16px] sm:text-[18px] leading-relaxed text-white/70 font-medium">
                The world your students will graduate into looks nothing like
                the one their textbooks were written for. Degrees alone are no
                longer enough. FutureX gives every student — from a single
                in-school workshop to a flagship global fellowship — the edge to
                think independently, build with AI, and lead.
              </p>

              {/* Partners / Curricula Highlights */}
              <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  "Integrates MIT Sloan curriculum",
                  "Stanford SEED",
                  "Harvard Case Method",
                  "Grades 6–12",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 px-5 py-2 text-[12px] sm:text-[13px] font-semibold text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="#paths"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#10b981] px-8 text-[14px] font-black text-white transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5 shadow-md shadow-[#10b981]/10"
                >
                  Choose Your Path
                  <ArrowGlyph />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. CHOOSE YOUR PATH SECTION ─────────────────────────────────── */}
        <section
          id="paths"
          className="relative px-6 py-28 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]/50"
        >
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden z-0"
            aria-hidden="true"
          >
            <div className="absolute right-1/4 top-1/4 size-[500px] rounded-full bg-[#10b981]/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl z-10">
            {/* Header Block */}
            <div className="max-w-4xl mb-20 text-left">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                — Choose Your Path
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
                Built for however your <br />
                <span className="text-[#CFFD53]">school wants to start.</span>
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-white/60 max-w-3xl font-medium">
                A focused in-school introduction, or a full flagship fellowship
                where students build a real venture from scratch — both grounded
                in the same core belief: AI is a tool to build with, not fear.
              </p>
            </div>

            {/* Path Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Path 1: AI Scholar Track */}
              <div className="flex flex-col justify-between border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors rounded-[28px] p-8 sm:p-10">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded">
                      In-School · All Grades
                    </span>
                    <span className="text-[14px] font-black text-[#10b981] uppercase tracking-wider">
                      7 Sessions
                    </span>
                  </div>

                  <h3 className="mt-6 text-[32px] font-black text-white leading-tight">
                    AI Scholar Track
                  </h3>
                  <p className="mt-2 text-[14px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">
                    +1 Demo Day · In-School Delivery
                  </p>

                  <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                    {[
                      "Build practical AI literacy during school hours",
                      "Learn prompt engineering through projects",
                      "Understand AI ethics and responsible use",
                      "Create a first working AI tool",
                      "Present finished work in a student showcase",
                    ].map((benefit) => (
                      <li
                        key={benefit}
                        className="grid grid-cols-[auto_1fr] gap-3.5 text-[15px] leading-relaxed text-white/80"
                      >
                        <span className="mt-1 flex size-4 items-center justify-center rounded-full bg-[#10b981]/20 text-[9px] font-black text-[#10b981] shrink-0">
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <Link
                    href="/ai-scholar-track"
                    className="block w-full py-4 px-6 rounded-full text-center text-[15px] font-bold border border-white/20 text-white hover:bg-white/5 hover:border-white/35 transition-all duration-300 shadow-md"
                  >
                    Explore the AI Scholar Track
                  </Link>
                </div>
              </div>

              {/* Path 2: Flagship International Fellowship */}
              <div className="flex flex-col justify-between border border-[#10b981]/30 bg-[#062c1f]/35 shadow-[inset_0_0_40px_rgba(16,185,129,0.06)] rounded-[28px] p-8 sm:p-10 relative overflow-hidden group">
                {/* Glow glow */}
                <div className="absolute -right-20 -top-20 size-48 rounded-full bg-[#CFFD53]/10 blur-3xl pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#CFFD53] bg-[#CFFD53]/10 border border-[#CFFD53]/20 px-3 py-1 rounded">
                      Flagship · Grades 6–12
                    </span>
                    <span className="text-[14px] font-black text-[#CFFD53] uppercase tracking-wider">
                      36 Sessions
                    </span>
                  </div>

                  <h3 className="mt-6 text-[32px] font-black text-white leading-tight">
                    International FutureX Fellowship
                  </h3>
                  <p className="mt-2 text-[14px] font-bold text-[#CFFD53] uppercase tracking-widest leading-relaxed">
                    6 Months / Flagship cohort online
                  </p>

                  <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                    {[
                      "Build and validate a real startup",
                      "Pitch to investors at Demo Day",
                      "Earn an international certification",
                      "Learn through the Harvard Case Method",
                      "Grow with an XP-based progress system",
                    ].map((benefit) => (
                      <li
                        key={benefit}
                        className="grid grid-cols-[auto_1fr] gap-3.5 text-[15px] leading-relaxed text-white/80"
                      >
                        <span className="mt-1 flex size-4 items-center justify-center rounded-full bg-[#CFFD53]/20 text-[9px] font-black text-[#CFFD53] shrink-0">
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <Link
                    href="/futurex-fellowship"
                    className="block w-full py-4 px-6 rounded-full text-center text-[15px] font-bold bg-white text-[#030508] hover:bg-[#CFFD53] transition-all duration-300 shadow-lg shadow-[#10b981]/5 hover:-translate-y-0.5"
                  >
                    Explore the Fellowship
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHY THIS, WHY NOW SECTION ────────────────────────────────── */}
        <section className="relative px-6 py-28 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden z-0"
            aria-hidden="true"
          >
            <div className="absolute left-1/4 bottom-1/4 size-[500px] rounded-full bg-[#CFFD53]/[0.02] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading & Paragraphs */}
              <div className="lg:col-span-5 flex flex-col justify-start text-left">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                  — Why This, Why Now
                </span>
                <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                  Academics alone are <br />
                  no longer enough.
                </h2>
                <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-white/65">
                  AI is already replacing entry-level jobs across industries.
                  The students who thrive won&apos;t be the ones who memorised
                  the most — they&apos;ll be the ones who can build, adapt, and
                  lead in a world that changes faster than any syllabus.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                  FutureX isn&apos;t anti-academics — it&apos;s pro-future. We
                  teach students to use AI as a power tool, see robotics as a
                  career path they can enter today, and treat financial
                  independence as a skill that starts young.
                </p>
              </div>

              {/* Right Column: 2x2 Grid metrics */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pt-4">
                {/* Metric 1 */}
                <div className="p-8 rounded-[22px] border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                  <div className="text-[52px] sm:text-[64px] font-black text-white leading-none tracking-tight flex items-baseline">
                    <StaggeredCountdown
                      value="4"
                      suffix=""
                      color="#ffffff"
                      duration={1.5}
                    />
                  </div>
                  <p className="mt-4 text-[13px] font-bold text-white/50 uppercase tracking-[0.15em] leading-relaxed">
                    Core pillars — AI & Robotics, Finance, Marketing, Business
                    Communication
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-8 rounded-[22px] border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                  <div className="text-[52px] sm:text-[64px] font-black text-[#CFFD53] leading-none tracking-tight flex items-baseline">
                    <StaggeredCountdown
                      value="1:8"
                      suffix=""
                      color="#CFFD53"
                      duration={1.5}
                    />
                  </div>
                  <p className="mt-4 text-[13px] font-bold text-white/50 uppercase tracking-[0.15em] leading-relaxed">
                    Mentor-to-student ratio, drawn from IIT, IIM, BITS Pilani
                    and MICA alumni
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="p-8 rounded-[22px] border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                  <div className="text-[52px] sm:text-[64px] font-black text-white leading-none tracking-tight flex items-baseline">
                    <StaggeredCountdown
                      value="6"
                      suffix=""
                      color="#ffffff"
                      duration={1.5}
                    />
                  </div>
                  <p className="mt-4 text-[13px] font-bold text-white/50 uppercase tracking-[0.15em] leading-relaxed">
                    Months from first problem statement to a live Demo Day pitch
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="p-8 rounded-[22px] border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                  <div className="text-[52px] sm:text-[64px] font-black text-[#10b981] leading-none tracking-tight flex items-baseline">
                    <StaggeredCountdown
                      value="100"
                      suffix="%"
                      color="#10b981"
                      duration={1.5}
                    />
                  </div>
                  <p className="mt-4 text-[13px] font-bold text-white/50 uppercase tracking-[0.15em] leading-relaxed">
                    Free tools throughout — no paid software subscriptions
                    required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SESSIONS LOG TIMELINE (retained for visual richness) ─────── */}
        {/* <SchoolsTimelineSection /> */}

        {/* ── 5. FINAL CTA SECTION ────────────────────────────────────────── */}
        <section className="relative px-6 py-28 sm:px-8 lg:px-14 border-t border-white/10 bg-gradient-to-b from-[#030508] to-[#090d16] overflow-hidden text-center">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-black text-white tracking-tight leading-[1.05] mb-6">
              Bring FutureX to <br />
              <span className="text-[#CFFD53]">your school.</span>
            </h2>
            <p className="max-w-2xl text-[18px] sm:text-[22px] leading-relaxed text-white/70 font-medium mx-auto mb-12">
              Start with a workshop. Grow into a fellowship. Whether your school
              is exploring AI literacy for the first time or ready for a
              flagship global program, there&apos;s a FutureX path built for
              where you are.
            </p>

            <Link
              href="mailto:service.excellence@lyfshilpacademy.com?subject=FutureX%20for%20Schools%20Partnership"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#10b981] px-10 text-[16px] font-black text-white transition-all hover:bg-white hover:text-black hover:-translate-y-0.5 shadow-lg shadow-[#10b981]/15"
            >
              Talk to Our Team
            </Link>
          </div>
        </section>
      </main>

      <LyfshilpFooter />
    </div>
  );
}
