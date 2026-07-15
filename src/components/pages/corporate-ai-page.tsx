"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { CorporateRegister } from "@/src/components/ui/corporate-register";
import { CorporateFormats } from "@/src/components/ui/corporate-formats";
import { CorporateGallery } from "@/src/components/ui/corporate-gallery";
import { GovtBodiesTestimonials } from "@/src/components/ui/govt-bodies-testimonials";

const heroLineVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function CorporateAIPageContent() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#030508] text-white font-sans antialiased overflow-x-hidden min-h-screen">
      <style>{`
        @keyframes corporate-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes corporate-glow-pulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.04); }
        }
        @keyframes corporate-underline-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .corporate-hero-shimmer {
          background: linear-gradient(
            105deg,
            #CFFD53 0%,
            #CFFD53 35%,
            #ffffff 50%,
            #CFFD53 65%,
            #CFFD53 100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: corporate-shimmer 5s linear infinite;
        }
        .corporate-hero-glow {
          animation: corporate-glow-pulse 3.5s ease-in-out infinite;
        }
        .corporate-hero-underline {
          transform-origin: left center;
          animation: corporate-underline-grow 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards;
          transform: scaleX(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .corporate-hero-shimmer,
          .corporate-hero-glow,
          .corporate-hero-underline {
            animation: none;
          }
          .corporate-hero-underline {
            transform: scaleX(1);
          }
        }
      `}</style>
      <LyfshilpNavbar />

      <main>
        <section
          className="relative overflow-hidden px-6 pt-32 pb-24 sm:px-8 lg:px-14 bg-cover bg-center min-h-screen flex flex-col justify-center"
          style={{ backgroundImage: "url('/images/corporate/hero1.jpg')" }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/70 via-[#030508]/60 to-[#030508]/90 z-0"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-0 overflow-hidden z-0"
            aria-hidden="true"
          >
            <div className="absolute -right-40 -top-40 size-[600px] rounded-full bg-[#CFFD53]/[0.08] blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#CFFD53]/35 bg-[#CFFD53]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#CFFD53]"
                >
                  <span className="size-1.5 rounded-full bg-[#CFFD53] animate-pulse" />
                  Enterprise & Institutional AI Training
                </motion.div>

                <h1 className="mt-8 max-w-4xl">
                  <motion.span
                    custom={reduceMotion ? 0 : 0.1}
                    initial={reduceMotion ? false : "hidden"}
                    animate="visible"
                    variants={heroLineVariants}
                    className="block text-[clamp(2.75rem,7vw,5.5rem)] font-black leading-[0.98] tracking-[-0.04em] text-white"
                  >
                    AI Adoption.
                  </motion.span>
                  <motion.span
                    custom={reduceMotion ? 0 : 0.28}
                    initial={reduceMotion ? false : "hidden"}
                    animate="visible"
                    variants={heroLineVariants}
                    className="mt-1 block text-[clamp(2.75rem,7vw,5.5rem)] font-black leading-[0.98] tracking-[-0.04em] text-white sm:mt-2"
                  >
                    Enablement{" "}
                    <motion.span
                      initial={
                        reduceMotion ? false : { opacity: 0, scale: 0.6 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: reduceMotion ? 0 : 0.55,
                        duration: 0.5,
                      }}
                      className="inline-block font-bold text-white/25"
                    >
                      &
                    </motion.span>
                  </motion.span>
                  <motion.span
                    custom={reduceMotion ? 0 : 0.46}
                    initial={reduceMotion ? false : "hidden"}
                    animate="visible"
                    variants={heroLineVariants}
                    className="relative mt-1 inline-block sm:mt-2"
                  >
                    <span
                      className="corporate-hero-glow pointer-events-none absolute -inset-x-6 -inset-y-3 -z-10 rounded-2xl bg-[#CFFD53]/20 blur-2xl"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute -inset-x-4 -inset-y-2 -z-10 rounded-xl bg-[#CFFD53]/10 blur-lg"
                      aria-hidden="true"
                    />
                    <span className="corporate-hero-shimmer text-[clamp(3rem,8vw,6.75rem)] font-black leading-[0.95] tracking-[-0.05em]">
                      Integration.
                    </span>
                    <span
                      className="corporate-hero-underline pointer-events-none absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#CFFD53] via-white/60 to-transparent"
                      aria-hidden="true"
                    />
                  </motion.span>
                </h1>

                <p className="mt-6 max-w-xl text-[15px] font-medium leading-relaxed text-white/55 sm:mt-8 sm:text-[16px] lg:hidden">
                  From national dairy cooperatives to enterprise teams, we
                  deliver hands-on AI training in the rooms where decisions
                  actually get made — not in a generic webinar.
                </p>
              </div>

              <div className="flex flex-col lg:col-span-5 lg:pt-4">
                <p className="hidden text-[15px] font-medium leading-relaxed text-white/60 sm:text-[16px] lg:block">
                  From national dairy cooperatives to enterprise teams, we
                  deliver hands-on AI training in the rooms where decisions
                  actually get made — not in a generic webinar.
                </p>

                <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="font-mono text-[11px] font-bold text-[#CFFD53] tracking-widest uppercase border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 sm:pr-4 shrink-0 mt-0.5">
                      Deployment
                    </div>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-medium">
                      Delivered on-site for the{" "}
                      <strong>
                        National Dairy Development Board (NDDB), Bengaluru
                      </strong>{" "}
                      — training officials from milk unions across Karnataka,
                      Puducherry, and Telangana on AI-powered productivity.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="mailto:service.excellence@lyfshilpacademy.com?subject=Enterprise%20and%20Institutional%20AI%20Training"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#CFFD53] px-8 text-[15px] font-black text-[#030508] transition-all hover:bg-white hover:-translate-y-0.5"
                  >
                    Bring Training to Your Organization
                  </Link>
                  <Link
                    href="#register"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-[15px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/35"
                  >
                    View Field Records
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="register">
          <CorporateRegister />
        </div>

        <CorporateFormats />

        <CorporateGallery />

        <GovtBodiesTestimonials />

        <section className="relative px-6 py-28 sm:px-8 lg:px-14 border-t border-white/10 bg-gradient-to-b from-[#030508] to-[#0b0c10] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CFFD53]/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-[clamp(2.75rem,6vw,4.75rem)] font-black text-white tracking-tight leading-[1.05] mb-6 sm:mb-8">
                  Bring this training to <br />
                  <span className="text-[#CFFD53]">your organization.</span>
                </h2>
                <p className="max-w-xl text-[clamp(1.125rem,2.2vw,1.5rem)] leading-relaxed text-white/70 font-medium mx-auto lg:mx-0 mb-10 sm:mb-12">
                  Workshops, certification, or ongoing partnership — scoped
                  around your teams and your tools.
                </p>

                <Link
                  href="mailto:service.excellence@lyfshilpacademy.com?subject=Enterprise%20and%20Institutional%20AI%20Training"
                  className="inline-flex h-14 sm:h-16 items-center justify-center rounded-full bg-[#CFFD53] px-10 sm:px-12 text-[16px] sm:text-[18px] font-black text-[#030508] transition-all hover:bg-white hover:-translate-y-0.5 shadow-lg shadow-[#CFFD53]/10"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/40 lg:mx-0 lg:justify-self-end">
                <video
                  src="/videos/govt_corp/both.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] h-full w-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="mt-20 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase text-center">
              ENTERPRISE & INSTITUTIONAL AI TRAINING — FIELD RECORD ARCHIVE
            </div>
          </div>
        </section>
      </main>

      <LyfshilpFooter />
    </div>
  );
}
