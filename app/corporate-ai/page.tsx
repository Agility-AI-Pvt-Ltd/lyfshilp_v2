"use client";

import React from "react";
import Link from "next/link";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { CorporateRegister } from "@/src/components/ui/corporate-register";
import { CorporateFormats } from "@/src/components/ui/corporate-formats";
import { CorporateGallery } from "@/src/components/ui/corporate-gallery";

export default function CorporateAIPage() {
  return (
    <div className="bg-[#030508] text-white font-sans antialiased overflow-x-hidden min-h-screen">
      <LyfshilpNavbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden px-6 pt-32 pb-24 sm:px-8 lg:px-14 bg-cover bg-center min-h-screen flex flex-col justify-center"
          style={{ backgroundImage: "url('/images/corporate/hero1.jpg')" }}
        >
          {/* Dark Overlay Layer for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/70 via-[#030508]/60 to-[#030508]/90 z-0" aria-hidden="true" />

          {/* Radial ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Headings */}
              <div className="lg:col-span-7">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#CFFD53]/35 bg-[#CFFD53]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#CFFD53]">
                  <span className="size-1.5 rounded-full bg-[#CFFD53] animate-pulse" />
                  Enterprise & Institutional AI Training
                </div>

                <h1 className="mt-8 text-[48px] font-black leading-[1.08] tracking-tight text-white sm:text-[68px] lg:text-[84px] xl:text-[96px]">
                  AI adoption, Enablement And <br />
                  <span className="text-[#CFFD53] block mt-4 sm:mt-6">
                     integration 
                  </span>
                </h1>
              </div>

              {/* Right Column: Description, Callout & Buttons */}
              <div className="flex flex-col lg:col-span-5 lg:pt-20">
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/60 font-medium">
                  From national dairy cooperatives to enterprise teams, we deliver hands-on AI training in the rooms where decisions actually get made — not in a generic webinar.
                </p>

                {/* Case Highlight Callout */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="font-mono text-[11px] font-bold text-[#CFFD53] tracking-widest uppercase border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 sm:pr-4 shrink-0 mt-0.5">
                      Deployment
                    </div>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-medium">
                      Delivered on-site for the <strong>National Dairy Development Board (NDDB), Bengaluru</strong> — training officials from milk unions across Karnataka, Puducherry, and Telangana on AI-powered productivity.
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

        {/* Dynamic Section Components */}
        <div id="register">
          <CorporateRegister />
        </div>

        <CorporateFormats />

        <CorporateGallery />

        {/* In Their Words (Testimonials) Section */}
        <section className="px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
                In Their Words
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
                Testimonials — intake in progress.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
                Space reserved for direct feedback from session attendees. Drop in quotes with name, title, and organization to complete this section.
              </p>
            </div>

            {/* Testimonials Quote Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="group relative border border-dashed border-white/15 rounded-2xl bg-white/[0.01] p-8 flex flex-col justify-between min-h-60"
                >
                  <div className="text-[44px] text-[#CFFD53]/30 font-serif leading-none select-none">
                    “
                  </div>
                  <p className="text-[16px] italic leading-relaxed text-white/50 font-medium">
                    Quote to be added
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-4">
                    <p className="text-[14px] font-bold text-white/70">
                      Name · Title
                    </p>
                    <p className="text-[12px] font-bold uppercase tracking-wider text-white/40 mt-1">
                      Organization
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative px-6 py-28 sm:px-8 lg:px-14 border-t border-white/10 bg-gradient-to-b from-[#030508] to-[#0b0c10] overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CFFD53]/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-black text-white tracking-tight leading-[1.05] mb-6">
              Bring this training to <br />
              <span className="text-[#CFFD53]">your organization.</span>
            </h2>
            <p className="max-w-2xl text-[18px] sm:text-[22px] leading-relaxed text-white/70 font-medium mx-auto mb-12">
              Workshops, certification, or ongoing partnership — scoped around your teams and your tools.
            </p>

            <Link
              href="mailto:service.excellence@lyfshilpacademy.com?subject=Enterprise%20and%20Institutional%20AI%20Training"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#CFFD53] px-10 text-[16px] font-black text-[#030508] transition-all hover:bg-white hover:-translate-y-0.5 shadow-lg shadow-[#CFFD53]/10"
            >
              Get in Touch
            </Link>

            <div className="mt-20 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase">
              ENTERPRISE & INSTITUTIONAL AI TRAINING — FIELD RECORD ARCHIVE
            </div>
          </div>
        </section>
      </main>

      <LyfshilpFooter />
    </div>
  );
}
