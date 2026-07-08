"use client";

import Link from "next/link";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";

const outcomes = [
  {
    title: "Automate",
    items: [
      "Eliminate 2–5 hours of repetitive weekly work using AI",
      "Auto-generate reports, emails & summaries",
      "Analyse Excel data in minutes — not hours",
      "Build automated lesson plans & feedback workflows",
    ],
  },
  {
    title: "Build",
    items: [
      "Create a live, working AI tool — no coding",
      "Use Claude, Antigravity, Google AI Studio & Bolt.new confidently",
      "Build custom AI assistants for your specific role",
      "Build things that impress colleagues & clients",
    ],
  },
  {
    title: "Grow",
    items: [
      "Use AI to accelerate career growth & visibility",
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
      "AI Scholar Digital Badge for LinkedIn & resume",
      "Portfolio of all 4 sessions' builds",
    ],
  },
];

const requirements = [
  {
    icon: "💻",
    title: "Technical Requirements",
    items: [
      "Laptop or desktop (Windows, Mac, or Chromebook)",
      "Stable internet connection (min 5 Mbps)",
      "A Google account (Gmail) — free to create",
      "No prior coding knowledge whatsoever required",
    ],
  },
  {
    icon: "🧠",
    title: "The Only Other Thing",
    items: [
      "A genuine willingness to learn and experiment",
      "Openness to trying things live — mistakes are the curriculum",
      "Curiosity about how AI can help your specific work",
      "2.5 focused hours per session — camera on, hands on",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="grid grid-cols-[auto_1fr] gap-3 text-[15px] font-medium leading-7 text-white/70"
        >
          <span
            className="mt-2 size-1.5 rounded-full bg-[#CFFD53] shrink-0"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CorporateProgramPageContent() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030508] font-sans text-white antialiased">
      <LyfshilpNavbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:px-8 lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -right-40 -top-40 size-[600px] rounded-full bg-[#CFFD53]/8 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-emerald-500/6 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFFD53]/35 bg-[#CFFD53]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#CFFD53]">
              <span className="size-1.5 rounded-full bg-[#CFFD53] animate-pulse" />
              Corporate AI Training
            </div>
            <h1 className="mt-8 max-w-4xl text-[40px] font-black leading-[1.06] tracking-tight sm:text-[56px] lg:text-[68px]">
              Building AI-ready teams through{" "}
              <span className="text-[#CFFD53]">hands-on training.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] font-medium leading-relaxed text-white/65 sm:text-[18px]">
              A 10-hour, 4-session programme for corporates — automate repetitive
              work, build real AI tools, and grow workplace productivity with no
              coding required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["4 Live Sessions", "10 Total Hours", "No Coding Needed", "Certificate + Badge"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white/70"
                  >
                    {pill}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Expected Learning Outcomes */}
        <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
                Expected Learning Outcomes
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[52px]">
                Automate. Build. Grow.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
                Three pillars that define what you&apos;ll walk away with after
                10 hours.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {outcomes.map((outcome) => (
                <article
                  key={outcome.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-[#CFFD53]/30"
                >
                  <h3 className="text-[24px] font-black text-[#CFFD53]">
                    {outcome.title}
                  </h3>
                  <BulletList items={outcome.items} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Session 4 · The Finale */}
        <section className="border-t border-white/10 bg-[#0b0c10] px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
                Session 4 · The Finale
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[52px]">
                🎤 Live Showcase — Your Moment
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/65 sm:text-[18px]">
                Session 4 is not just a class — it is a milestone. Every
                participant presents the AI tool they built across the programme
                to the full group. This is where the learning becomes real.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {showcaseColumns.map((column) => (
                <article
                  key={column.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
                >
                  <h3 className="text-[13px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                    {column.label}
                  </h3>
                  <BulletList items={column.items} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Before You Join */}
        <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
                Before You Join
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[52px]">
                What you need to bring
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
                The barrier is low. The outcomes are high.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {requirements.map((requirement) => (
                <article
                  key={requirement.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 sm:p-10 transition-colors hover:border-[#CFFD53]/25"
                >
                  <span className="text-[32px]" aria-hidden="true">
                    {requirement.icon}
                  </span>
                  <h3 className="mt-4 text-[22px] font-black text-white">
                    {requirement.title}
                  </h3>
                  <BulletList items={requirement.items} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/10 bg-linear-to-b from-[#030508] to-[#0b0c10] px-6 py-28 text-center sm:px-8 lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CFFD53]/3 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-[36px] font-black leading-tight tracking-tight sm:text-[52px]">
              Bring this programme to{" "}
              <span className="text-[#CFFD53]">your team.</span>
            </h2>
            <p className="mx-auto mt-6 mb-10 max-w-2xl text-[17px] font-medium leading-relaxed text-white/65 sm:text-[20px]">
              4 live sessions. 10 hours. 1 working AI tool. Built for modern
              workplaces.
            </p>
            <Link
              href="mailto:service.excellence@lyfshilpacademy.com?subject=Corporate%20AI%20Training%20Programme"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#CFFD53] px-10 text-[16px] font-black text-[#030508] shadow-lg shadow-[#CFFD53]/10 transition-all hover:-translate-y-0.5 hover:bg-white"
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
