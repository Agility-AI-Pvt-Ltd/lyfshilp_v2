"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import { MarqueeBanner } from "@/src/components/ui/marquee-banner";
import { FutureXTimelineSection } from "@/src/components/ui/futurex-timeline";
import { FutureXPlatformSection } from "@/src/components/ui/futurex-platform";
import { FutureXLeaderboardSection } from "@/src/components/ui/futurex-leaderboard";
import { FutureXSpotlightSection } from "@/src/components/ui/futurex-spotlight";
import { FutureXEventsSection } from "@/src/components/ui/futurex-events-section";

// SVG Icons
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

// Curriculum Sprints Data
const curriculumSprints = [
  {
    week: "Weeks 1–2",
    title: "Product Ideation & AI Stack",
    description: "Learn how to target high-value problems, validate user needs, and select the right AI frameworks and models (Next.js, Tailwind v4, LLM APIs).",
    tag: "Ideate",
    accent: "bg-[#5e22ff]",
  },
  {
    week: "Weeks 3–4",
    title: "Sprint Build & Copilot Engineering",
    description: "Write clean code faster using AI coding tools. Build functional backends, databases, and responsive interactive frontends.",
    tag: "Build",
    accent: "bg-[#10b981]",
  },
  {
    week: "Week 5",
    title: "UX Refinement & Launch",
    description: "Polish navigation, fix layout quirks, optimize performance, and deploy to Vercel. Gather feedback from real early adopters.",
    tag: "Ship",
    accent: "bg-[#ff492c]",
  },
  {
    week: "Week 6",
    title: "Demo Day & Peer Network",
    description: "Pitch your product to active startup founders, tech builders, and educators. Celebrate on Onboarding Day and enter the builder community.",
    tag: "Pitch",
    accent: "bg-[#ffd166]",
  },
];

// Perks/Benefits Data
const fellowshipPerks = [
  {
    title: "1:1 Founder Mentorship",
    description: "Skip theoretical lectures. Receive practical design code reviews and startup strategy feedback directly from founders who have built real companies.",
    icon: (
      <svg className="size-6 text-[#CFFD53]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "$10,000+ Builder Credits",
    description: "Get access to hosting credits, OpenAI/Anthropic API keys, low-code credits, and design systems to supercharge your launch velocity.",
    icon: (
      <svg className="size-6 text-[#CFFD53]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Curated Builder Network",
    description: "Surround yourself with the top 3% of active, ambitious student builders, designers, and hackers across India who motivate and review each other.",
    icon: (
      <svg className="size-6 text-[#CFFD53]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Shipped Portfolio Product",
    description: "Leave with a live, functional, and user-tested web app. A demonstrable proof of work that carries far more weight than typical certifications.",
    icon: (
      <svg className="size-6 text-[#CFFD53]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Target Audiences
const audiencePersonas = [
  {
    role: "The Hacker",
    tagline: "LOVES CODE & APIS",
    accent: "border-[#5e22ff]/30 hover:border-[#5e22ff]",
    dotColor: "bg-[#5e22ff]",
    bullets: [
      "Can compile ideas quickly but needs direction on product design & packaging.",
      "Wants to integrate LLM models and build stateful web products.",
      "Looking for collaborators to split work and share deployment feedback.",
    ],
  },
  {
    role: "The Designer",
    tagline: "OBSESSES OVER USER FLOWS",
    accent: "border-[#10b981]/30 hover:border-[#10b981]",
    dotColor: "bg-[#10b981]",
    bullets: [
      "Crafts neat vector visuals but wants to make designs functional.",
      "Keen to learn low-code/no-code platforms and AI development templates.",
      "Strives to design applications that look premium and function flawlessly.",
    ],
  },
  {
    role: "The Operator",
    tagline: "DRIVES PROBLEM SOLVING",
    accent: "border-[#ff492c]/30 hover:border-[#ff492c]",
    dotColor: "bg-[#ff492c]",
    bullets: [
      "Enjoys user research, content strategy, pitching, and project alignment.",
      "Wants to build digital tools to streamline operations and showcase work.",
      "Focused on business validation, feedback metrics, and growth campaigns.",
    ],
  },
];

const whatYouWillDo = [
  {
    title: "Harvard Case Method",
    description:
      "Learn from real business cases used at the world's top institutions. Analyse decisions, debate strategies, and apply lessons directly to your own startup.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Build a Real Startup",
    description:
      "From problem validation to product development — you'll ship something real. Not a simulation, not a hypothetical. A product with real users.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 4.57a6 6 0 0 1 5.95 9.8Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.86 17.29A6.002 6.002 0 0 1 4.57 9.64A14.98 14.98 0 0 0 12 21a14.98 14.98 0 0 0-1.14-3.71Z" />
      </svg>
    ),
  },
  {
    title: "Pitch to Investors",
    description:
      "Culminates in Demo Day, where you present your venture to a panel of investors, mentors, and industry professionals — just like a real accelerator.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0V3m7.5 13.5v3.75m0-3.75H12m3 3.75H9" />
      </svg>
    ),
  },
  {
    title: "Earn XP & Certification",
    description:
      "A gamified XP system tracks your progress across missions, lessons, and milestones. Top performers are recognised on a live leaderboard.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.75A3.75 3.75 0 0 0 10.5 6a3.75 3.75 0 0 0-3.75 3.75v5.625c0 .621.504 1.125 1.125 1.125h5.007ZM10.5 6V3.75m0 2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Tools",
    description:
      "Access a built-in AI Playground and Research Workspace to prototype ideas, analyse feasibility, and experiment with prompt engineering.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 9h8.25L9.75 21.75 12 15H3.75z" />
      </svg>
    ),
  },
  {
    title: "International Certification",
    description:
      "Graduates receive an internationally recognised certification validating their entrepreneurial and AI-building readiness.",
    icon: (
      <svg className="size-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

// FAQ Item structure
interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Who is the FutureX Fellowship designed for?",
    a: "It is built for school and college students, young programmers, designers, and future builders across India. If you have an idea and are motivated to build, you are welcome here. No formal computer science degree is required.",
  },
  {
    q: "What is the expected time commitment?",
    a: "You should plan for 8 to 10 hours per week. This includes weekly live mentor sprints, peer review sessions, and independent building time with your AI copilot tool stack.",
  },
  {
    q: "Do I need to be an expert coder before applying?",
    a: "Not at all. We teach you how to build using modern AI developer assistants, templates, and low-code integrations. A basic curiosity for logical thinking and design is all you need.",
  },
  {
    q: "How does the selection process work?",
    a: "After you submit the form, we conduct a quick review of your motivation and any past creative things you've worked on. The goal is to filter for high-initiative individuals who want to learn by making.",
  },
  {
    q: "Are there scholarships available?",
    a: "Yes. Lyfshilp offers partial and full merit-based scholarships to fellows with strong project ideas, outstanding portfolios, or financial need.",
  },
];

const futureXTitansSpaces = [
  {
    initial: "A",
    title: "AI Shipyard",
    description:
      "Be like pirates — explore boldly, learn by building, break limits, and create anything you can with AI.",
    stats: "31 members · 13 posts",
    avatarClassName: "bg-[#ef4444]",
  },
  {
    initial: "L",
    title: "LESSONS & MISSIONS",
    description:
      "In this community you can post your assignments and homework given to you",
    stats: "37 members · 189 posts",
    avatarClassName: "bg-[#a345f5]",
  },
  {
    initial: "A",
    title: "AI BUILDER'S SPELLBOOK ???",
    description:
      "This Community is to showcase your work that you build during the fellowship process. Post your tool links",
    stats: "33 members · 0 posts",
    avatarClassName: "bg-[#42bb83]",
  },
  {
    initial: "O",
    title: "ORDER OF FUTUREX ???",
    description:
      "This community is to post your session work and task. Make it as interesting, creative and intuitive as you can",
    stats: "38 members · 18 posts",
    avatarClassName: "bg-[#3b82f6]",
  },
];

function FutureXTitansCommunitySection() {
  return (
    <section className="relative z-50 bg-[#faf8f5] px-6 py-24 text-[#111827] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#1e5237]">
            Community
          </p>
          <h2 className="mt-4 text-[40px] font-black leading-[1.08] tracking-tight text-[#111827] sm:text-[54px]">
            FutureX Titans — where students connect
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-[#4b5563] sm:text-[20px]">
            Every scholar joins a thriving community of young innovators who share projects, submit assignments, and learn together.
          </p>
        </div>

        <div className="mt-14 overflow-hidden">
          <div className="flex w-max [animation:futurex-titans-marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex gap-5 pr-5"
                aria-hidden={groupIndex === 1}
              >
                {futureXTitansSpaces.map((space) => (
                  <article
                    key={`${groupIndex}-${space.title}`}
                    className="flex min-h-[270px] w-[300px] shrink-0 flex-col rounded-2xl border border-[#e7dcc3] bg-white p-6 shadow-[0_10px_26px_rgba(32,38,35,0.045)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(32,38,35,0.08)] sm:w-[340px] lg:w-[360px]"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div
                        className={`grid size-14 shrink-0 place-items-center rounded-full text-[18px] font-black text-white shadow-inner ${space.avatarClassName}`}
                        aria-hidden="true"
                      >
                        {space.initial}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[18px] font-black leading-tight tracking-tight text-[#17201c]">
                          {space.title}
                        </h3>
                        <p className="mt-1.5 max-w-2xl text-[15px] font-medium leading-6 text-[#5c625f]">
                          {space.description}
                        </p>
                        <p className="mt-2.5 font-mono text-[12px] font-bold tracking-[0.04em] text-[#5f6662]">
                          {space.stats}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FutureXFellowshipPage() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showHeaderElements, setShowHeaderElements] = useState(true);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target?.scrollTop || window.scrollY || document.documentElement?.scrollTop || 0;
      if (scrollTop > 200) {
        setShowHeaderElements(false);
      } else {
        setShowHeaderElements(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

      {/* Top Left Brand Logo Container */}
      <Link
        href="/"
        onClick={handleBack}
        className={`fixed left-6 top-[52px] z-[60] flex items-center gap-3 select-none hover:opacity-90 transition-all duration-300 cursor-pointer ${showHeaderElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
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

      {/* Floating Logo Home Button */}
      <div className={`fixed right-6 top-[52px] z-[60] transition-all duration-300 ${showHeaderElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <Link
          href="/"
          onClick={handleBack}
          className="group pointer-events-auto flex h-11 items-center gap-2.5 rounded-full border border-[#e6e8ef] bg-white px-4 text-[#272835] shadow-md transition-all hover:bg-[#fffaf4] hover:border-[#bdc3d1] active:scale-95 cursor-pointer"
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
        {/* 1. HERO SECTION */}
        <section className="relative lg:sticky lg:top-0 min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-black px-6 py-12 text-white sm:px-8 lg:px-14 z-0">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-[0.65] pointer-events-none z-0"
          >
            <source src="/videos/futurex/background-globe.mp4" type="video/mp4" />
          </video>

          {/* Ambient Glows */}
          <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.22),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(5,150,105,0.12),transparent_40%)] z-0"
            aria-hidden="true"
          />
          <CircuitField />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center gap-10 py-2">
            {/* Tagline & Main Copy */}
            <div className="max-w-4xl pt-0 flex flex-col items-center text-center mx-auto">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#10b981]/40 bg-[#10b981]/12 px-4 py-1.5 text-[12px] font-black uppercase tracking-wider text-[#CFFD53]">
                <span className="size-2 animate-ping rounded-full bg-[#CFFD53]" />
                Cohort 4.0 Applications Open
              </div>

              <h1 className="mt-5 text-[48px] font-black leading-[0.98] tracking-tight sm:text-[72px] lg:text-[96px]">
                Your Child Doesn't Just Learn AI. <span className="text-[#CFFD53]"><br/>They Build With It. Lead With It.</span>
              </h1>
              <p className="mt-4 text-[18px] font-bold tracking-wide uppercase text-white/50">
                FutureX Fellowship
              </p>
              <p className="mt-3 max-w-3xl text-[19px] font-medium leading-relaxed text-white/80 sm:text-[22px] mx-auto">
                A mentored sprint-driven pathway for ambitious learners. Move from raw ideas to fully
                deployed, user-tested AI products in 6 weeks with direct guidance from active founders.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="mailto:futurex@lyfshilpacademy.com?subject=FutureX Fellowship Application Inquiry"
                  className="group inline-flex h-14 items-center gap-3 rounded-full bg-[#10b981] px-8 text-[15px] font-black text-white transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5"
                >
                  Apply for Fellowship
                  <ArrowGlyph />
                </Link>
                <Link
                  // href="https://wa.me/917042671115?text=Hello! I want to know more about the FutureX Fellowship cohort."
                  href="https://www.futurexfellows.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center rounded-full border border-white/20 bg-white/5 px-8 text-[15px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/12 hover:border-white/30"
                >
                  FutureX Community
                </Link>
              </div>
            </div>

            {/* Interactive Stats Grid */}
            <div className="mt-10 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="min-h-24 border-l border-[#10b981]/40 pl-5">
                <div className="text-[40px] font-black leading-none text-[#CFFD53]">
                  <StaggeredCountdown value="5,000" suffix="+" />
                </div>
                <p className="mt-2 text-[14px] font-bold uppercase tracking-wider text-white/50">
                  students trained
                </p>
              </div>
              <div className="min-h-24 border-l border-[#10b981]/40 pl-5">
                <div className="text-[40px] font-black leading-none text-white">
                  <StaggeredCountdown value="36" suffix=" Sessions" />
                </div>
                <p className="mt-2 text-[14px] font-bold uppercase tracking-wider text-white/50">
                 Harvard Case Method
                </p>
              </div>
              <div className="min-h-24 border-l border-[#10b981]/40 pl-5">
                <p className="text-[40px] font-black leading-none text-white">
                  6 Months
                </p>
                <p className="mt-2 text-[14px] font-bold uppercase tracking-wider text-white/50">
                  Online
                </p>
              </div>
              <div className="min-h-24 border-l border-[#10b981]/40 pl-5">
                <div className="text-[40px] font-black leading-none text-white">
                  <StaggeredCountdown value="" suffix="Demo Day" />
                </div>
                <p className="mt-2 text-[14px] font-bold uppercase tracking-wider text-white/50">
                  
                </p>
              </div>
              <div className="min-h-24 border-l border-[#10b981]/40 pl-5">
                <p className="text-[40px] font-black leading-none text-white">
                  XP system 
                </p>
                <p className="mt-2 text-[14px] font-bold uppercase tracking-wider text-white/50">
                  Founder Review Cycles
                </p>
              </div>
            </div>
          </div>
        </section>

        

      {/* What You'll Do */}
        <section className="relative lg:sticky lg:top-0 z-10 bg-[#0a0b0d] text-white min-h-screen px-6 py-28 sm:px-8 lg:px-14 shadow-[0_-24px_64px_rgba(0,0,0,0.85)] border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            {/* Header Block */}
            <div className="max-w-4xl mb-20">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                What You&apos;ll Do
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
                Not a course. <br />
                <span className="text-[#CFFD53]">A startup incubator.</span>
              </h2>
              <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-white/70 max-w-3xl font-medium">
                Fellows don&apos;t just learn entrepreneurship — they live it. Every concept is applied to a venture you build across 9 months.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {whatYouWillDo.map((item) => (
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

        {/* The 9-Month Journey */}
        <FutureXTimelineSection />

        {/* FutureX Events */}
        <FutureXEventsSection />

        {/* Inside the Platform */}
        <FutureXPlatformSection />

        {/* Gamified Learning */}
        <FutureXLeaderboardSection />

        {/* FutureX Titans Community */}
        <FutureXTitansCommunitySection />

        {/* Fellow Spotlight */}
        <FutureXSpotlightSection />

        {/* CTA section */}
        <section className="relative z-[60] bg-[#fffaf4] text-[#272835] min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24 sm:px-8 lg:px-14 shadow-[0_-32px_80px_rgba(0,0,0,0.06)] border-t border-[#e6e8ef]">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-black text-[#272835] tracking-tight leading-[1.05] mb-6">
              Ready to build your first startup?
            </h2>
            <p className="max-w-2xl text-[18px] sm:text-[22px] leading-relaxed text-[#747b8f] font-medium mb-12">
              The next cohort is forming now. Grades 6–12, fully online, 9 months to Demo Day.
            </p>
            <Link
              href="mailto:futurex@lyfshilpacademy.com?subject=FutureX Fellowship Application Inquiry"
              className="group inline-flex h-15 items-center justify-center gap-3 rounded-full bg-[#10b981] px-10 text-[16px] font-black text-white transition-all hover:bg-[#0e9f6e] hover:-translate-y-0.5 shadow-md shadow-[#10b981]/10 hover:shadow-[#10b981]/20 cursor-pointer"
            >
              Apply to the Fellowship
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
