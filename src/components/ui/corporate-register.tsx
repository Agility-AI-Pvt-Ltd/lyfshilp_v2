"use client";

import React from "react";
import Image from "next/image";

interface LogEntry {
  id: string;
  date: string;
  location: string;
  title: string;
  cohort: string;
  details: string;
  image: string;
}

const entries: LogEntry[] = [
  {
    id: "001",
    date: "11.05.2026",
    location: "National Dairy Development Board, Bengaluru",
    title: "AI-Powered Productivity for Dairy Sector Professionals",
    cohort: "NDDB training cohort, 11 May 2026",
    details: "Officials from milk unions of Bengaluru, Mandya, Vijaypura & Bagalkot (Karnataka), Puducherry, and Mulkanoor Women's Cooperative Dairy (Telangana), together with NDDB.",
    image: "/images/corporate/entry1.jpeg",
  },
  {
    id: "002",
    date: "12.05.2026",
    location: "National Dairy Development Board, Bengaluru",
    title: "AI-Powered Productivity for Dairy Sector Professionals",
    cohort: "NDDB training cohort, 12 May 2026",
    details: "Officials from milk unions of Bengaluru, Mandya, Hassan, Kolar, and Chikkaballapura (Karnataka), together with NDDB.",
    image: "/images/corporate/entry2.jpeg",
  },
  {
    id: "003",
    date: "13.05.2026",
    location: "National Dairy Development Board, Bengaluru",
    title: "AI-Powered Productivity for Dairy Sector Professionals",
    cohort: "NDDB training cohort, 13 May 2026",
    details: "Officials from milk unions of Bengaluru, Kolar, and Mandya (Karnataka), together with NDDB.",
    image: "/images/corporate/entry3.jpeg",
  },
];

export function CorporateRegister() {
  return (
    <section className="bg-[#0b0c10] border-y border-white/10 px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
            Training Register
          </p>
          <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
            A running log, not a portfolio.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
            Every session we run is logged like a field record — who attended, where, and when. Three entries from a recent multi-day deployment with NDDB follow.
          </p>
        </div>

        {/* Logs */}
        <div className="space-y-8">
          {entries.map((entry, i) => (
            <div
              key={entry.id}
              className="group relative border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.03] p-6 sm:p-8 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Session Photo */}
                <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shrink-0 lg:col-span-6 ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}>
                  {/* Floating Neon Entry Indicator Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[11px] font-black tracking-widest text-[#030508] bg-[#CFFD53] px-3.5 py-1.5 rounded-md uppercase shadow-md shadow-[#CFFD53]/10">
                      ENTRY / {entry.id}
                    </span>
                  </div>

                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                {/* Content block */}
                <div className={`flex flex-col lg:col-span-6 ${
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}>
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] font-mono font-bold text-white/40 uppercase">
                    <span>{entry.date}</span>
                    <span className="size-1 rounded-full bg-white/20" />
                    <span className="text-[#CFFD53]/80">{entry.location}</span>
                  </div>

                  <h3 className="text-[22px] sm:text-[28px] font-black text-white tracking-tight leading-snug mt-3">
                    {entry.title}
                  </h3>

                  <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-white/50">
                    {entry.cohort}
                  </p>

                  <p className="mt-4 text-[15px] leading-relaxed text-white/60 font-medium">
                    {entry.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
