"use client";

import React from "react";
import Link from "next/link";
import { ScrollRevealText } from "./scroll-reveal-text";

export function JoinCommunity() {
  return (
    <section className="bg-[#3c1b0c] px-6 py-24 sm:px-8 lg:px-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <ScrollRevealText
          text="At Lyfshilp, every learner gets space to explore, build, and become future-ready."
          className="max-w-4xl text-[46px] font-black leading-[1.05] tracking-normal text-[#fffaf4] sm:text-[64px] lg:text-[76px]"
        />
        <Link
          href="/community"
          className="inline-flex h-16 w-fit items-center rounded-full border border-white/15 px-8 text-[17px] font-bold text-white transition-colors hover:bg-white hover:text-[#3c1b0c]"
        >
          Join the community
        </Link>
      </div>
    </section>
  );
}
