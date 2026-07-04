import React from "react";

export function FutureXSpotlightSection() {
  return (
    <section className="bg-[#faf8f5] px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Header Text (Left side on large screens) */}
        <div className="lg:w-5/12 lg:sticky lg:top-32">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#1e5237]">
            FELLOW SPOTLIGHT
          </p>
          <h2 className="mb-6 text-[42px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[52px]">
            <span className="block">Real posts from</span>
            <span className="block">FutureX students</span>
          </h2>
          <p className="text-[19px] leading-relaxed text-[#4b5563] sm:text-[21px]">
            Fellows build products that address real-world problems — then pitch
            them to the community.
          </p>
        </div>

        {/* Card (Right side on large screens) */}
        <div className="w-full lg:w-7/12">
          <div className="rounded-[24px] border border-[#f0ebe1] bg-white shadow-sm transition-shadow hover:shadow-md">
            {/* Post Header */}
            <div className="flex items-center gap-4 border-b border-[#f0ebe1] p-6 sm:p-8">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1e5237] text-[15px] font-bold text-white shadow-inner">
                AG
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-[#111827]">
                  adrija_gupta
                </span>
                <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#d4af37]">
                  <svg
                    className="size-3.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  1,511 XP
                </span>
              </div>
            </div>

            {/* Post Body */}
            <div className="p-6 sm:p-8">
              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#e8f2ec] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1e5237]">
                  LESSONS & MISSIONS
                </span>
                <span className="inline-flex rounded-full bg-[#edf5ef] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1e5237]">
                  PITCH
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mb-4 text-[24px] sm:text-[28px] font-black tracking-tight text-[#111827]">
                SafeHer — A Message That Should Never Be Necessary
              </h3>
              <p className="mb-8 text-[16px] leading-relaxed text-[#505a66] sm:text-[17px]">
                A women&apos;s safety app for Delhi-NCR that combines instant
                SOS alerts, safe route navigation, AI-powered health assistance,
                and community-driven unsafe area reporting — built by a student
                who saw a problem and decided to solve it.
              </p>

              {/* Features Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-[12px] bg-[#fffcf8] px-4 py-3.5 border border-[#fdf6ec]">
                  <span className="text-[14px] font-semibold text-[#111827]">
                    Instant Live Location Share
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-[12px] bg-[#fffcf8] px-4 py-3.5 border border-[#fdf6ec]">
                  <span className="text-[14px] font-semibold text-[#111827]">
                    Safe Routes to Police & Metro
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-[12px] bg-[#fffcf8] px-4 py-3.5 border border-[#fdf6ec]">
                  <span className="text-[14px] font-semibold text-[#111827]">
                    AI Health Assistant
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-[12px] bg-[#fffcf8] px-4 py-3.5 border border-[#fdf6ec]">
                  <span className="text-[14px] font-semibold text-[#111827]">
                    Community Unsafe Area Reports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
