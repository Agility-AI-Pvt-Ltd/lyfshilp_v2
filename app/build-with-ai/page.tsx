"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { MarqueeBanner } from "@/src/components/ui/marquee-banner";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import { BuildWithAITimelineSection } from "@/src/components/ui/build-with-ai-timeline";

function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current transition-transform group-hover:translate-x-1"
    />
  );
}

function CircuitField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.18]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

function CardMark({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/5 text-[13px] font-black uppercase tracking-[0.08em] text-[#CFFD53] transition-all duration-300 group-hover:bg-[#10b981]/10 group-hover:scale-105"
    >
      {label}
    </span>
  );
}

const registerHref =
  "mailto:service.excellence@lyfshilpacademy.com?subject=Build%20With%20AI%20Registration";

const includedCards = [
  {
    mark: "PL",
    title: "Comprehensive Prompt Library",
    description:
      "10+ ready-to-use prompts personalised for your profession: emails, reports, lesson plans, and meeting prep.",
  },
  {
    mark: "MC",
    title: "AI Masterclass Recording",
    description:
      "Complimentary access to a recorded AI masterclass to deepen your understanding beyond the live sessions.",
  },
  {
    mark: "DA",
    title: "Hands-On Data Analysis",
    description:
      "End-to-end training on Google AI Studio. Upload your own Excel files and let AI find patterns and anomalies.",
  },
  {
    mark: "BT",
    title: "Build 1 Live AI Tool",
    description:
      "Ship a working, shareable AI-powered tool with no coding needed. A real product with a live link you can show anyone.",
  },
  {
    mark: "MS",
    title: "Guided Mentor Support",
    description:
      "Additional resources and mentor support throughout the programme. You are never stuck alone.",
  },
  {
    mark: "CB",
    title: "Certificate + Digital Badge",
    description:
      "Course Completion Certificate from FutureX plus a Digital AI Badge for your LinkedIn profile and resume.",
  },
];

const tools = [
  ["CL", "Claude", "Advanced AI assistant for writing, analysis, and reasoning"],
  ["GA", "Google AI Studio", "Build custom AI assistants and analyse data"],
  ["AG", "Antigravity", "Google's AI builder: apps from plain English"],
  ["BN", "Bolt.new", "Ship live web tools in under 10 minutes"],
  ["NL", "NotebookLM", "AI-powered research companion by Google"],
  ["CA", "Canva AI", "AI-enhanced design for presentations and visuals"],
];

const outcomes = [
  {
    title: "Automate",
    items: [
      "Eliminate 2-5 hours of repetitive weekly work using AI",
      "Auto-generate reports, emails, and summaries",
      "Analyse Excel data in minutes, not hours",
      "Build automated lesson plans and feedback workflows",
    ],
  },
  {
    title: "Build",
    items: [
      "Create a live, working AI tool with no coding",
      "Use Claude, Antigravity, Google AI Studio, and Bolt.new confidently",
      "Build custom AI assistants for your specific role",
      "Build things that impress colleagues and clients",
    ],
  },
  {
    title: "Grow",
    items: [
      "Use AI to accelerate career growth and visibility",
      "Freelance or consult with AI-powered services",
      "Build a personal AI productivity system",
      "Stay future-ready in an AI-first workplace",
    ],
  },
];

const showcaseColumns = [
  {
    label: "What Happens at Showcase",
    items: [
      "Every participant does a 3-minute demo of their AI tool",
      "Peer awards: Most Innovative, Most Useful, Best Pitch",
      "Certificates presented live by the programme lead",
      "Each participant receives a personal closing note from their mentor",
    ],
  },
  {
    label: "You Leave With",
    items: [
      "A working, shareable AI tool with a live link",
      "A Prompt Library personalised for your profession",
      "Course Completion Certificate from FutureX",
      "AI Scholar Digital Badge for LinkedIn and resume",
      "Portfolio of all 4 sessions' builds",
    ],
  },
];

const requirements = [
  {
    title: "Technical Requirements",
    items: [
      "Laptop or desktop (Windows, Mac, or Chromebook)",
      "Stable internet connection (min 5 Mbps)",
      "A Google account (Gmail), free to create",
      "No prior coding knowledge whatsoever required",
    ],
  },
  {
    title: "The Only Other Thing",
    items: [
      "A genuine willingness to learn and experiment",
      "Openness to trying things live, because mistakes are the curriculum",
      "Curiosity about how AI can help your specific work",
      "2.5 focused hours per session: camera on, hands on",
    ],
  },
];

export default function BuildWithAIPage() {
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

      <Link
        href="/"
        onClick={handleBack}
        className={`fixed left-6 top-[52px] z-[60] flex items-center gap-3 select-none transition-all duration-300 hover:opacity-90 ${showHeaderElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <NextImage
          src="/images/futurex/logo.png"
          alt="FutureX Logo"
          width={40}
          height={40}
          className="h-[40px] w-[40px] object-contain"
          unoptimized
        />
        <div className="flex flex-col text-left">
          <span className="text-[22px] font-black leading-none tracking-tight text-white font-serif">
            Future<span className="text-[#10b981] font-sans">X</span>
          </span>
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/50">
            Powered By Lyfshilp Academy
          </span>
        </div>
      </Link>

      <div
        className={`fixed right-6 top-[52px] z-[60] transition-all duration-300 ${showHeaderElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <Link
          href="/"
          onClick={handleBack}
          className="group pointer-events-auto flex h-11 items-center gap-2.5 rounded-full border border-[#e6e8ef] bg-white px-4 text-[#272835] shadow-md transition-all hover:bg-[#fffaf4] hover:border-[#bdc3d1] active:scale-95"
        >
          <NextImage
            src="/images/logo.png"
            alt="Lyfshilp Academy Logo"
            width={24}
            height={24}
            className="h-[24px] w-[24px] object-contain"
            unoptimized
          />
          <span className="text-[15px] font-bold tracking-normal text-[#272835]">
            Lyfshilp
          </span>
        </Link>
      </div>

      <main>
        <section className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pb-8 pt-14 text-white sm:px-8 sm:pt-16 lg:sticky lg:top-0 lg:h-screen lg:px-14 lg:pt-16">
          <div className="absolute inset-0 z-0 bg-black/40" aria-hidden="true" />
          <div
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.22),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(207,253,83,0.12),transparent_40%)]"
            aria-hidden="true"
          />
          <CircuitField />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 py-2">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/40 bg-[#10b981]/12 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#CFFD53] sm:text-[11px]">
                <span className="size-1.5 animate-ping rounded-full bg-[#CFFD53]" />
                FutureX by Lyfshilp Academy
              </div>

              <h1 className="mt-3 text-[30px] font-black leading-[1.08] tracking-tight sm:text-[42px] lg:text-[56px]">
                Are you ready to free up your time{" "}
                <span className="text-[#CFFD53]">
                  and put it toward things that actually matter?
                </span>
              </h1>
              <p className="mt-3 text-[12px] font-bold uppercase tracking-wide text-white/50 sm:text-[13px]">
                Build with AI
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] font-medium leading-relaxed text-white/80 sm:text-[16px]">
                A 10-hour hands-on programme for working professionals and educators. Automate your repetitive work, build real AI tools, and grow your career with no coding required.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["4 Live Sessions", "10 Total Hours", "Weekends | June 2026", "No Coding Needed"].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-white/70"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  href={registerHref}
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#10b981] px-6 text-[14px] font-black text-white transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5"
                >
                  Register Now
                  <ArrowGlyph />
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[14px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/12 hover:border-white/30"
                >
                  View Curriculum
                </Link>
              </div>
            </div>

            <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["4", "Live Sessions"],
                ["2.5", "Hours Each Session"],
                ["1", "Working AI Tool"],
                ["Badge", "Certificate + Digital Badge"],
              ].map(([value, label]) => (
                <div key={label} className="min-h-16 border-l border-[#10b981]/40 pl-4">
                  <div className="text-[28px] font-black leading-none text-white sm:text-[32px]">
                    {value.match(/^\d/) ? (
                      <StaggeredCountdown value={value} />
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 sm:text-[12px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative lg:sticky lg:top-0 z-10 min-h-screen border-t border-white/5 bg-[#0a0b0d] px-6 py-28 text-white shadow-[0_-24px_64px_rgba(0,0,0,0.85)] sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                What&apos;s Included
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
                Everything you need, <br />
                <span className="text-[#CFFD53]">nothing you don&apos;t.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-[18px] font-medium leading-relaxed text-white/70 sm:text-[20px]">
                Every session is hands-on. You build something real, not watch videos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {includedCards.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-md transition-all duration-300 hover:border-[#10b981]/50 hover:bg-white/8"
                >
                  <CardMark label={item.mark} />
                  <h3 className="mt-6 text-[20px] font-black leading-snug text-white transition-colors group-hover:text-[#CFFD53]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-medium leading-relaxed text-white/60 transition-colors group-hover:text-white/85">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <BuildWithAITimelineSection />

        <section id="tools" className="relative z-30 border-t border-white/5 bg-[#0a0b0d] px-6 py-24 text-white sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                Your AI Toolkit
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px]">
                Six powerful tools - <span className="text-[#CFFD53]">all free to use.</span>
              </h2>
              <p className="mt-6 text-[18px] font-medium leading-8 text-white/62">
                No paid subscriptions needed. You&apos;ll learn to use each of these confidently by the end of the programme.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map(([mark, name, description]) => (
                <article key={name} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-colors hover:border-[#10b981]/40 hover:bg-white/[0.07]">
                  <span className="grid size-12 place-items-center rounded-xl bg-[#CFFD53] text-[13px] font-black text-[#10231a]">
                    {mark}
                  </span>
                  <h3 className="mt-5 text-[20px] font-black text-white">
                    {name}
                  </h3>
                  <p className="mt-3 text-[14px] font-medium leading-6 text-white/56">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-40 bg-[#fffaf4] px-6 py-24 text-[#272835] sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#10b981]">
                Expected Learning Outcomes
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px]">
                Automate. Build. Grow.
              </h2>
              <p className="mt-6 max-w-2xl text-[18px] font-medium leading-8 text-[#747b8f]">
                Three pillars that define what you&apos;ll walk away with after 10 hours.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {outcomes.map((outcome) => (
                <article key={outcome.title} className="rounded-2xl border border-[#e6e8ef] bg-white p-6 shadow-[0_18px_55px_rgba(39,40,53,0.06)]">
                  <h3 className="text-[22px] font-black text-[#272835]">
                    {outcome.title}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {outcome.items.map((item) => (
                      <li key={item} className="grid grid-cols-[auto_1fr] gap-3 text-[15px] font-medium leading-7 text-[#747b8f]">
                        <span className="mt-2 size-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="relative z-50 border-t border-white/5 bg-[#0a0b0d] px-6 py-24 text-white sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                Session 4 - The Finale
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px]">
                Live Showcase - <span className="text-[#CFFD53]">your moment.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-[18px] font-medium leading-8 text-white/62">
                Session 4 is not just a class. It is a milestone. Every participant presents the AI tool they built across the programme to the full group.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {showcaseColumns.map((column) => (
                <article key={column.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 sm:p-8">
                  <h3 className="text-[13px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                    {column.label}
                  </h3>
                  <ul className="mt-6 grid gap-3">
                    {column.items.map((item) => (
                      <li key={item} className="grid grid-cols-[auto_1fr] gap-3 text-[15px] font-medium leading-7 text-white/65">
                        <span className="mt-2 size-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-50 bg-[#0a0b0d] px-6 py-24 text-white sm:px-8 lg:px-14 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#10b981]">
                Before You Join
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px]">
                What you need to bring.
              </h2>
              <p className="mt-6 max-w-2xl text-[18px] font-medium leading-8 text-white/60">
                The barrier is low. The outcomes are high.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {requirements.map((requirement) => (
                <article
                  key={requirement.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#10b981]/40 hover:bg-white/[0.07] sm:p-8"
                >
                  <h3 className="text-[22px] font-black text-white group-hover:text-[#CFFD53] transition-colors">
                    {requirement.title}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {requirement.items.map((item) => (
                      <li key={item} className="grid grid-cols-[auto_1fr] gap-3 text-[15px] font-medium leading-7 text-white/65">
                        <span className="mt-2 size-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section id="register" className="relative z-[60] flex min-h-[75vh] flex-col items-center justify-center border-t border-[#e6e8ef] bg-[#fffaf4] px-6 py-24 text-center text-[#272835] shadow-[0_-32px_80px_rgba(0,0,0,0.06)] sm:px-8 lg:px-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <h2 className="mb-6 text-[40px] font-black leading-[1.05] tracking-tight text-[#272835] sm:text-[56px] lg:text-[72px]">
              Ready to automate, build & grow?
            </h2>
            <p className="mb-4 max-w-2xl text-[18px] font-medium leading-relaxed text-[#747b8f] sm:text-[22px]">
              4 live sessions. 2 weekends. 1 working AI tool. No coding required.
            </p>
            <p className="mb-10 max-w-3xl text-[13px] font-bold uppercase tracking-[0.12em] text-[#747b8f]">
              DPIIT Recognised Startup | Incubated at IIIT Allahabad | Shortlisted, Stanford Seed GSB | 38 Partner Schools | 6,000+ Students
            </p>
            <Link
              href={registerHref}
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#10b981] px-10 text-[16px] font-black text-white shadow-md shadow-[#10b981]/10 transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5 hover:shadow-[#10b981]/20"
            >
              Register Now
              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
