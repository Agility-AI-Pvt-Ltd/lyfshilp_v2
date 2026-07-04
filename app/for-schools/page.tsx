"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import { MarqueeBanner } from "@/src/components/ui/marquee-banner";
import { SchoolsTimelineSection } from "@/src/components/ui/schools-timeline";



// ─── Icons ────────────────────────────────────────────────────────────────────
function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current transition-transform group-hover:translate-x-1"
    />
  );
}

// ─── Animated Hero Background (CSS-only, no video/image) ──────────────────────
function SchoolHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#030508]" />

      {/* Large radial glow – top right */}
      <div className="absolute -right-40 -top-40 size-[700px] rounded-full bg-[#CFFD53]/[0.07] blur-[120px]" />
      {/* Large radial glow – bottom left */}
      <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-[#10b981]/[0.09] blur-[100px]" />
      {/* Mid accent – center */}
      <div className="absolute left-1/2 top-1/3 size-[400px] -translate-x-1/2 rounded-full bg-[#5e22ff]/[0.06] blur-[90px]" />

      {/* Fine dot-grid */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Diagonal scan lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(207,253,83,0.6) 0px, rgba(207,253,83,0.6) 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Floating orbit ring 1 */}
      <div className="absolute left-[60%] top-[15%] size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CFFD53]/[0.08] animate-[spin_28s_linear_infinite]" />
      {/* Floating orbit ring 2 */}
      <div className="absolute left-[60%] top-[15%] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10b981]/[0.06] animate-[spin_42s_linear_infinite_reverse]" />




      {/* Glowing corner bracket – top-left */}
      <div className="absolute left-6 top-24 hidden lg:block">
        <div className="h-12 w-12 border-l-2 border-t-2 border-[#CFFD53]/25 rounded-tl-lg" />
      </div>
      {/* Glowing corner bracket – bottom-right */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="h-12 w-12 border-b-2 border-r-2 border-[#10b981]/25 rounded-br-lg" />
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes floatNode {
          0%   { opacity: 0;    transform: translateY(0px) scale(0.9); }
          20%  { opacity: 0.55; }
          50%  { opacity: 0.65; transform: translateY(-14px) scale(1.05); }
          80%  { opacity: 0.45; }
          100% { opacity: 0;    transform: translateY(0px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const schoolBenefits = [
  {
    title: "AI Literacy & Ethics",
    description:
      "Students understand what AI is, how it works, and when to trust it. They explore bias, accuracy, and responsible use before touching any tool.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 9h8.25L9.75 21.75 12 15H3.75z" />
      </svg>
    ),
  },
  {
    title: "Prompt Engineering",
    description:
      "Students learn to talk to AI effectively, build a subject prompt library, and master the skill that makes every other AI tool more powerful.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Build AI Tools",
    description:
      "Students create working AI-powered applications with no coding required, from study systems to mentor bots and tools they can show.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0V3m7.5 13.5v3.75m0-3.75H12m3 3.75H9" />
      </svg>
    ),
  },
  {
    title: "Pitch & Present",
    description:
      "Students learn to tell the story of what they built, practise pitch skills, and present to real judges on Demo Day like a founder would.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];




const demoDay = [
  { icon: "🎯", title: "Pitch Rehearsal", description: "Students practise their presentations, refine their story, and prepare to face the judges with confidence." },
  { icon: "🎤", title: "Live Showcase", description: "Each student presents their working AI tool to a panel of judges - teachers, mentors, and industry experts - via Zoom." },
  { icon: "🧑‍⚖️", title: "Judge Feedback", description: "Judges evaluate originality, problem-solving, technical execution, and presentation skills. Real feedback, not participation trophies." },
  { icon: "📜", title: "Certificate Award", description: "Every student who completes the showcase receives the AI Scholar Certificate, recognising their AI literacy journey." },
];

const insideSessionChecks = [
  "Where was AI's answer useful and specific?",
  "Where did it sound generic or like Wikipedia?",
  "What surprised you - something you did not expect?",
];

const sessionMoments = [
  {
    label: "Orientation",
    title: "The Game Has Changed",
    type: "Orientation Webinar",
    description:
      "Students discover why AI changes everything, with real data on teen entrepreneurs worldwide and young Indian founders already building.",
  },
  {
    label: "Live Session",
    title: "Hands-On Building",
    type: "Weekly Sessions",
    description:
      "Live chat buzzing, students sharing AI experiments in real time, and mentors guiding every activity. Every session is a workshop, not a lecture.",
  },
  {
    label: "Demo Day",
    title: "Student Showcase",
    type: "Cohort 1 · Demo Day",
    description:
      "Students present their AI tools to judges on a separate, dedicated day where every builder gets their moment on stage.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ForSchoolsPage() {
  const router = useRouter();
  const [showHeaderElements, setShowHeaderElements] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeaderElements(window.scrollY <= 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (document.referrer && document.referrer.includes(window.location.host)) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="bg-[#fffaf4] text-[#272835] font-sans antialiased overflow-x-hidden">
      <MarqueeBanner />

      {/* Top-Left Brand Logo */}
      <Link
        href="/"
        onClick={handleBack}
        className={`fixed left-6 top-[52px] z-[60] flex items-center gap-3 select-none hover:opacity-90 transition-all duration-300 cursor-pointer ${showHeaderElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <NextImage src="/images/futurex/logo.png" alt="FutureX Logo" width={40} height={40} className="h-[40px] w-[40px] object-contain" unoptimized />
        <div className="flex flex-col text-left">
          <span className="text-[22px] font-black leading-none tracking-tight text-white font-serif">
            Future<span className="text-[#10b981] font-sans">X</span>
          </span>
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/50">
            Powered By Lyfshilp Academy
          </span>
        </div>
      </Link>

      {/* Top-Right Home Button */}
      <div className={`fixed right-6 top-[52px] z-[60] transition-all duration-300 ${showHeaderElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <Link
          href="/"
          onClick={handleBack}
          className="group pointer-events-auto flex h-11 items-center gap-2.5 rounded-full border border-[#e6e8ef] bg-white px-4 text-[#272835] shadow-md transition-all hover:bg-[#fffaf4] hover:border-[#bdc3d1] active:scale-95 cursor-pointer"
        >
          <NextImage src="/images/logo.png" alt="Lyfshilp Academy Logo" width={24} height={24} className="h-[24px] w-[24px] object-contain" unoptimized />
          <span className="text-[15px] font-bold tracking-normal text-[#272835]">Lyfshilp</span>
        </Link>
      </div>

      <main>
        {/* ── 1. HERO — CSS-animated, no video/image ───────────────────────── */}
        <section className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-14 text-white sm:px-8 sm:pt-16 lg:sticky lg:top-0 lg:h-screen lg:px-14 lg:pt-16">
          <SchoolHeroBackground />

          {/* Foreground content */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 py-2">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CFFD53]/40 bg-[#CFFD53]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#CFFD53] sm:text-[11px]">
                <span className="size-1.5 animate-ping rounded-full bg-[#CFFD53]" />
                In-School Program · All Grades
              </div>

              <h1 className="mt-3 text-[28px] font-black leading-[1.08] tracking-tight sm:text-[38px] lg:text-[44px]">
                AI{" "}
                <span className="text-[#CFFD53]">
                  Scholar Track
                </span>
              </h1>

              <p className="mt-2 text-[12px] font-bold tracking-wide uppercase text-white/50 sm:text-[13px]">
                FutureX · AI Scholar Track for Schools
              </p>
              <p className="mt-2 max-w-2xl text-[14px] font-medium leading-relaxed text-white/80 sm:text-[15px] mx-auto">
                Your school&apos;s gateway to AI literacy. Seven hands-on sessions during school hours, then a dedicated Demo Day where students showcase what they built to a panel of judges.
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Link
                  href="mailto:service.excellence@lyfshilpacademy.com?subject=AI%20Scholar%20Track%20School%20Partnership"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#10b981] px-6 text-[14px] font-black text-white transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5"
                >
                  Partner with Your School
                  <ArrowGlyph />
                </Link>
                <Link
                  href="#sessions"
                  className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[14px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/12 hover:border-white/30"
                >
                  See the Curriculum
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="min-h-16 border-l border-[#10b981]/40 pl-4">
                <div className="text-[28px] font-black leading-none text-[#CFFD53] sm:text-[32px]">
                  <StaggeredCountdown value="7" suffix=" Sessions" />
                </div>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 sm:text-[12px]">During school hours</p>
              </div>
              <div className="min-h-16 border-l border-[#10b981]/40 pl-4">
                <div className="text-[28px] font-black leading-none text-white sm:text-[32px]">
                  <StaggeredCountdown value="+1" suffix=" Demo Day" />
                </div>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 sm:text-[12px]">Live judged showcase</p>
              </div>
              <div className="min-h-16 border-l border-[#10b981]/40 pl-4">
                <div className="text-[28px] font-black leading-none text-white sm:text-[32px]">
                  <StaggeredCountdown value="" suffix="In-School" />
                </div>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 sm:text-[12px]">Delivery</p>
              </div>
              <div className="min-h-16 border-l border-[#10b981]/40 pl-4">
                <p className="text-[28px] font-black leading-none text-white sm:text-[32px]">Certificate</p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 sm:text-[12px]">For showcase completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT SCHOOLS GET ──────────────────────────────────────────── */}
        <section className="relative lg:sticky lg:top-0 z-10 bg-[#0a0b0d] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-24px_64px_rgba(0,0,0,0.85)] border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl mb-20">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">What Students Learn</p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
                AI literacy meets <br />
                <span className="text-[#CFFD53]">real building.</span>
              </h2>
              <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-white/70 max-w-3xl font-medium">
                Every session ends with something real that students made - not a quiz, not a worksheet, a working output they can show.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {schoolBenefits.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#10b981]/50 hover:bg-white/8 hover:shadow-[0_20px_50px_rgba(16,185,129,0.06)] flex flex-col justify-start text-left"
                >
                  <div className="grid size-14 place-items-center rounded-xl bg-white/5 mb-6 group-hover:bg-[#10b981]/10 group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-[20px] font-black text-white group-hover:text-[#CFFD53] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/60 group-hover:text-white/85 transition-colors font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. 7-SESSION WAVE TIMELINE ───────────────────────────────────── */}
        <SchoolsTimelineSection />

        {/* ── 5. DEMO DAY ─────────────────────────────────────────────────── */}
        <section className="relative z-40 bg-[#CFFD53] px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-24px_64px_rgba(0,0,0,0.85)]">
          <div className="mx-auto max-w-7xl">
            <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#1b432f]">Separate Day · The Grand Finale</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
              <h2 className="text-[44px] font-black leading-[1.02] tracking-[-0.04em] text-[#10231a] sm:text-[66px]">
                Demo Day<br />- AI Scholar Showcase
              </h2>
              <p className="text-[18px] font-medium leading-8 text-[#1b432f]/75">
                After 7 sessions of learning and building, students take the stage on a dedicated day to present their AI-powered projects to a live panel of judges. This isn&apos;t a classroom exercise - it&apos;s a real showcase.
              </p>
            </div>

            <div className="mt-14 grid overflow-hidden rounded-[28px] bg-[#10231a] text-white md:grid-cols-2 xl:grid-cols-4">
              {demoDay.map((step) => (
                <article key={step.title} className="min-h-64 border-b border-r border-white/10 p-7 sm:p-8 last:border-r-0">
                  <span className="text-[28px]" aria-hidden="true">{step.icon}</span>
                  <h3 className="mt-8 text-[21px] font-black">{step.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/58">{step.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["29–51", "Participants per demo"],
                ["Live", "On Zoom · Recorded"],
                ["8+", "Judges & mentors"],
                ["Real", "Projects · Not simulations"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-[#10231a]/25 pl-5">
                  <p className="text-[32px] font-black text-[#10231a]">{value}</p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#1b432f]/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. INSIDE A SESSION ───────────────────────────────────────────── */}
        <section className="relative z-40 border-t border-white/5 bg-[#0a0b0d] px-6 py-24 text-white sm:px-8 lg:px-14">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                Inside a Session
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px]">
                Your first real <br />
                <span className="text-[#CFFD53]">AI conversation.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] font-medium leading-8 text-white/65">
                From Session 1, students don&apos;t just hear about AI - they use it. Here&apos;s the actual prompt they start with.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                  Open your AI tool. Type this prompt.
                </p>
                <p className="text-[12px] font-bold text-white/35">
                  Replace the brackets with your details.
                </p>
              </div>
              <blockquote className="rounded-2xl bg-[#030508] p-5 text-[15px] font-medium leading-8 text-white/82 sm:text-[16px]">
                &quot;I am a Grade [X] student in India. I have noticed the following problem: [your problem from the Canvas]. Can you help me understand:
                <br />
                (1) Why does this problem exist?
                <br />
                (2) Who else has it?
                <br />
                (3) Have people tried to solve it already?&quot;
              </blockquote>

              <div className="mt-6">
                <p className="text-[13px] font-black uppercase tracking-[0.16em] text-white/45">
                  While AI responds, notice three things:
                </p>
                <div className="mt-4 grid gap-3">
                  {insideSessionChecks.map((check, index) => (
                    <div key={check} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#CFFD53] text-[13px] font-black text-[#10231a]">
                        {index + 1}
                      </span>
                      <p className="text-[14px] font-medium leading-6 text-white/70">
                        {check}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. REAL SESSIONS ─────────────────────────────────────────────── */}
        <section className="relative z-50 bg-[#0a0b0d] px-6 py-24 text-white sm:px-8 lg:px-14 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#10b981]">
                  What It Looks Like
                </p>
                <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px]">
                  Real sessions. Real students. Real energy.
                </h2>
              </div>
              <p className="max-w-2xl text-[18px] font-medium leading-8 text-white/60">
                Every session is live on Zoom with mentors, interactive chat, and hands-on activities.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {sessionMoments.map((moment) => (
                <article
                  key={moment.title}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-md transition-all duration-300 hover:border-[#10b981]/40 hover:bg-white/[0.07]"
                >
                  <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#10b981]">
                    {moment.label}
                  </p>
                  <h3 className="mt-6 text-[24px] font-black leading-tight text-white group-hover:text-[#CFFD53] transition-colors">
                    {moment.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.1em] text-white/40">
                    {moment.type}
                  </p>
                  <p className="mt-5 text-[15px] font-medium leading-7 text-white/60">
                    {moment.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>






        {/* ── 8. FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="relative z-[60] bg-[#fffaf4] text-[#272835] min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24 sm:px-8 lg:px-14 shadow-[0_-32px_80px_rgba(0,0,0,0.06)] border-t border-[#e6e8ef]">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-black text-[#272835] tracking-tight leading-[1.05] mb-6">
              Bring AI Scholar Track to your school.
            </h2>
            <p className="max-w-2xl text-[18px] sm:text-[22px] leading-relaxed text-[#747b8f] font-medium mb-12">
              Seven sessions during school hours, a dedicated Demo Day, and a certificate for every student. Your school&apos;s AI literacy programme, delivered turnkey.
            </p>
            <Link
              href="mailto:service.excellence@lyfshilpacademy.com?subject=AI%20Scholar%20Track%20School%20Partnership"
              className="group inline-flex h-15 items-center justify-center gap-3 rounded-full bg-[#10b981] px-10 text-[16px] font-black text-white transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5 shadow-md shadow-[#10b981]/10 hover:shadow-[#10b981]/20 cursor-pointer"
            >
              Partner with Your School
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
