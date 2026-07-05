"use client";

import React from "react";
import Link from "next/link";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";

export default function EducatorsPage() {
  return (
    <div className="bg-[#030508] text-white font-sans antialiased overflow-x-hidden min-h-screen">
      <LyfshilpNavbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden px-6 pt-32 pb-24 sm:px-8 lg:px-14 bg-cover bg-center min-h-[90vh] flex flex-col justify-center"
          style={{ backgroundImage: "url('/images/educators/hero.JPG')" }}
        >
          {/* Dark Overlay Layer for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/85 via-[#030508]/65 to-[#030508]/90 z-0" aria-hidden="true" />

          {/* Radial ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
            <div className="absolute -right-40 -top-40 size-[600px] rounded-full bg-[#67e8f9]/[0.08] blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Headings & Subtitle */}
              <div className="lg:col-span-7">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#67e8f9]/35 bg-[#67e8f9]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#67e8f9]">
                  <span className="size-1.5 rounded-full bg-[#67e8f9] animate-pulse" />
                  — For Educators
                </div>

                <h1 className="mt-8 text-[44px] font-black leading-[1.08] tracking-tight text-white sm:text-[64px] lg:text-[76px] xl:text-[84px]">
                  Helping Teachers <br />
                  Reclaim Time to <br />
                  <span className="text-[#67e8f9] block mt-4">
                    Actually Teach.
                  </span>
                </h1>
                
                <p className="mt-8 text-[16px] sm:text-[18px] leading-relaxed text-white/70 font-medium max-w-xl">
                  Hands-on AI sessions run directly in schools — teaching educators to use AI tools for lesson planning, grading, and everyday admin, so more of their energy goes back to the classroom.
                </p>
              </div>

              {/* Right Column: Quote Highlight & Call to Actions */}
              <div className="flex flex-col lg:col-span-5 lg:pt-12">
                {/* Quote Block */}
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl">
                  <div className="text-[44px] text-[#67e8f9]/20 font-serif leading-none select-none absolute left-4 top-4">
                    “
                  </div>
                  <p className="text-[16px] italic leading-relaxed text-white/80 font-medium relative z-10 pl-6">
                    Not another webinar. We show up, sit with teachers, and work through the tools together.
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4 pl-6">
                    <p className="text-[13px] font-bold text-white/60">
                      — Sir
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="mailto:service.excellence@lyfshilpacademy.com?subject=AI%20Training%20for%20Educators"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#67e8f9] px-8 text-[15px] font-black text-[#030508] transition-all hover:bg-white hover:-translate-y-0.5"
                  >
                    Bring Training to Your School
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── THE HONEST TRUTH SECTION ───────────────────────────────────── */}
        <section className="relative px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#67e8f9]/70">
                  — The Honest Truth
                </span>
                <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                  Why now.
                </h2>
                <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-white/65">
                  This isn&apos;t a &quot;someday&quot; skill. The gap between teachers who use AI well and teachers who don&apos;t is widening fast — and it&apos;s widening this year.
                </p>

                {/* Inline Quote Callout */}
                <div className="mt-10 border-l-2 border-[#67e8f9] pl-6 py-2">
                  <p className="text-[17px] italic font-semibold text-white/90">
                    &quot;The teachers who learn this in 2026 will set the curve for the next decade.&quot;
                  </p>
                </div>
              </div>

              {/* Right Column: Large Metrics & Session Stats Image */}
              <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Metric 1 */}
                  <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
                    <div className="text-[54px] sm:text-[68px] font-black text-white leading-none tracking-tight">
                      47 hours
                    </div>
                    <p className="mt-4 text-[14px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">
                      what an average teacher works in a week.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
                    <div className="text-[54px] sm:text-[68px] font-black text-[#67e8f9] leading-none tracking-tight">
                      5×
                    </div>
                    <p className="mt-4 text-[14px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">
                      growth in AI use in classrooms — 2024 to 2026.
                    </p>
                  </div>
                </div>

                {/* Session Stats Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] w-full max-h-80 bg-white/5 group">
                  <img
                    src="/images/educators/whynow.JPG"
                    alt="Trainer presenting AI for Educators session stats"
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                    style={{ objectPosition: "center 30%" }}
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#67e8f9] px-3 py-1.5 rounded border border-white/10">
                    Trainer presenting AI for Educators session stats
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SESSIONS IN THE FIELD SECTION ──────────────────────────────── */}
        <section className="relative px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]/40">
          <div className="mx-auto max-w-7xl">
            
            {/* Section Header */}
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#67e8f9]">
                — Sessions in the Field
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                A running log of schools we&apos;ve visited.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
                Each session is different — some are whole-staff trainings, others are small subject-department sit-downs. Add entries here as sessions happen.
              </p>
            </div>

            {/* Grid of Entries */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Entry 1 */}
              <div className="flex flex-col justify-between border border-white/10 bg-[#080b11] rounded-2xl overflow-hidden group hover:border-[#67e8f9]/50 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                  <img
                    src="/images/educators/staffroom.JPG"
                    alt="Staffroom of the Future"
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#67e8f9] px-2.5 py-1 rounded border border-white/10">
                    ENTRY 01
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                      Full staff cohort · Collaboration with EduManiax
                    </span>
                    <h3 className="mt-2 text-[20px] font-bold text-white leading-tight">
                      Staffroom of the Future
                    </h3>
                    <p className="mt-1 text-[13px] font-semibold text-[#67e8f9]/80 uppercase tracking-wider">
                      Workshop for Bloom&apos;s Taxonomy & CBE
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/60">
                      The teaching staff after a full-day workshop connecting Bloom&apos;s Taxonomy and competency-based education with practical AI tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="flex flex-col justify-between border border-white/10 bg-[#080b11] rounded-2xl overflow-hidden group hover:border-[#67e8f9]/50 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                  <img
                    src="/images/educators/springdales.jpg"
                    alt="Spring Dales School"
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#67e8f9] px-2.5 py-1 rounded border border-white/10">
                    ENTRY 02
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                      Full staff cohort
                    </span>
                    <h3 className="mt-2 text-[20px] font-bold text-white leading-tight">
                      Spring Dales School
                    </h3>
                    <p className="mt-1 text-[13px] font-semibold text-[#67e8f9]/80 uppercase tracking-wider">
                      Hands-on build of a working student app
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/60">
                      The Spring Dales team after building &quot;Spring Dales Competitions&quot; — a real student-facing app — live, during the session.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 3 - Styled Placeholder */}
              <div className="flex flex-col justify-between border border-dashed border-white/15 bg-white/[0.01] rounded-2xl overflow-hidden min-h-80 p-6 sm:p-8 relative">
                <div className="absolute top-6 left-6 bg-white/5 text-[10px] font-mono tracking-widest text-white/30 px-2.5 py-1 rounded border border-dashed border-white/10">
                  ENTRY 03 (PENDING)
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
                  <div className="size-12 rounded-full border border-dashed border-white/20 bg-white/[0.02] flex items-center justify-center text-white/40 mb-4">
                    📷
                  </div>
                  <h4 className="text-[15px] font-bold text-white/40 uppercase tracking-widest">
                    [ School Name ]
                  </h4>
                  <p className="text-[12px] text-white/30 font-semibold tracking-wider mt-1">
                    [ Date ] · [ City ] · [ No. of educators / department ]
                  </p>
                  <p className="mt-4 text-[13px] italic leading-relaxed text-white/30 max-w-xs">
                    [ One line on what was covered in this session ]
                  </p>
                </div>

                <div className="border-t border-dashed border-white/10 pt-4 text-center">
                  <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.15em]">
                    Session Photo intake pending
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── WHAT WE COVER SECTION ──────────────────────────────────────── */}
        <section className="relative px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]">
          <div className="mx-auto max-w-7xl">
            
            {/* Section Header */}
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#67e8f9]">
                — What We Cover
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                Practical AI, for the work teachers actually do.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
                Every session mixes all three — because in practice, teachers don&apos;t separate &quot;planning&quot; from &quot;grading&quot; from &quot;just trying to keep up.&quot;
              </p>
            </div>

            {/* Grid of 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                <div className="size-12 rounded-lg bg-[#67e8f9]/10 text-[#67e8f9] flex items-center justify-center font-bold text-[18px] mb-6">
                  01
                </div>
                <h3 className="text-[20px] font-bold text-white leading-tight">
                  Lesson Planning & Content Creation
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  Using AI to draft lesson plans, worksheets, and classroom materials faster — without losing the teacher&apos;s own voice in them.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                <div className="size-12 rounded-lg bg-[#67e8f9]/10 text-[#67e8f9] flex items-center justify-center font-bold text-[18px] mb-6">
                  02
                </div>
                <h3 className="text-[20px] font-bold text-white leading-tight">
                  Grading & Admin Work
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  Hands-on practice with tools that cut down time spent on grading, reports, and routine paperwork.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                <div className="size-12 rounded-lg bg-[#67e8f9]/10 text-[#67e8f9] flex items-center justify-center font-bold text-[18px] mb-6">
                  03
                </div>
                <h3 className="text-[20px] font-bold text-white leading-tight">
                  Everyday AI Literacy
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  Building confidence and comfort with AI tools in general — so teachers aren&apos;t just following steps, but know how to explore on their own.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── INSIDE A SESSION SECTION ───────────────────────────────────── */}
        <section className="relative px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]/30">
          <div className="mx-auto max-w-7xl">
            
            {/* Section Header */}
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#67e8f9]">
                — Inside a Session
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                What the room looks like.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
                Laptops open, tools live on screen, teachers working through their own real lesson plans and reports — not a demo on a slide.
              </p>
            </div>

            {/* Grid of Room details and Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: "/images/educators/1.JPG", text: "Full staffroom session, working through the material together" },
                { img: "/images/educators/2.JPG", text: "Activity: using an AI music tool to write a lesson-ready song on water conservation" },
                { img: "/images/educators/3.JPG", text: "Walking through an AI-powered budgeting activity teachers can bring straight into class" },
                { img: "/images/educators/4.JPG", text: "\"Three tools, used confidently\" — the promise we open every session with" },
                { img: "/images/educators/5.JPG", text: "Prompts that actually get used on a Monday morning" },
                { img: "/images/educators/6.JPG", text: "A full computer lab, everyone working the tools themselves" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-white/10 bg-[#080b11] rounded-2xl overflow-hidden group hover:border-[#67e8f9]/50 transition-all duration-300 shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#67e8f9] px-2.5 py-1 rounded border border-white/10">
                      ROOM SCENE 0{index + 1}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex gap-3.5 items-start">
                    <span className="mt-1 flex size-5 items-center justify-center rounded-full bg-[#67e8f9]/20 text-[10px] font-extrabold text-[#67e8f9] shrink-0">
                      ✓
                    </span>
                    <p className="text-[14px] sm:text-[15px] font-medium text-white/80 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VOICES FROM THE CLASSROOM SECTION ──────────────────────────── */}
        <section className="relative px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]">
          <div className="mx-auto max-w-7xl">
            
            {/* Section Header */}
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#67e8f9]">
                — Voices from the Classroom
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                Testimonials — intake in progress.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
                Space reserved for feedback from educators. Add quotes with name, subject, and school to complete this section.
              </p>
            </div>

            {/* Testimonials Quote Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "Quote to be added", author: "— Name, Subject, School" },
                { quote: "Quote to be added", author: "— Name, Subject, School" },
                { quote: "Quote to be added", author: "— Name, Subject, School" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative border border-dashed border-white/15 rounded-2xl bg-white/[0.01] p-8 flex flex-col justify-between min-h-56"
                >
                  <div className="text-[44px] text-[#67e8f9]/30 font-serif leading-none select-none">
                    “
                  </div>
                  <p className="text-[16px] italic leading-relaxed text-white/40 font-medium">
                    {item.quote}
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-4">
                    <p className="text-[13px] font-bold text-white/30">
                      {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FINAL CTA SECTION ─────────────────────────────────────────── */}
        <section className="relative px-6 py-28 sm:px-8 lg:px-14 border-t border-white/10 bg-gradient-to-b from-[#030508] to-[#090d16] overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67e8f9]/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-black text-white tracking-tight leading-[1.05] mb-6">
              Bring this training to <br />
              <span className="text-[#67e8f9]">your school.</span>
            </h2>
            <p className="max-w-2xl text-[18px] sm:text-[22px] leading-relaxed text-white/70 font-medium mx-auto mb-12">
              A single staff-wide session, an ongoing partnership, or something in between — built around how your teachers already work.
            </p>

            <Link
              href="mailto:service.excellence@lyfshilpacademy.com?subject=AI%20Training%20for%20Educators"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#67e8f9] px-10 text-[16px] font-black text-[#030508] transition-all hover:bg-white hover:-translate-y-0.5 shadow-lg shadow-[#67e8f9]/10"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <LyfshilpFooter />
    </div>
  );
}
