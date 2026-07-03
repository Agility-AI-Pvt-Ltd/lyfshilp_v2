"use client";

import React from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  description: string;
  gridClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "IMG_2713",
    src: "/images/built-together/img_2713.png",
    alt: "Large school session",
    label: "Large school session",
    description: "150+ uniformed students in FutureX session — primary trust photo.",
    gridClass: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: "IMG_2237",
    src: "/images/built-together/img_2237.png",
    alt: "Teacher workshop",
    label: "Teacher workshop",
    description: "35+ educators, Bloom's Taxonomy workshop, Lyfshilp banner visible.",
    gridClass: "col-span-1",
  },
  {
    id: "IMG_2618",
    src: "/images/built-together/img_2618.png",
    alt: "Founder on stage",
    label: "Founder on stage",
    description: "Female founder speaking, 'Founder' slide on screen behind her.",
    gridClass: "col-span-1",
  },
  {
    id: "WA_4:37",
    src: "/images/built-together/wa_4_37.png",
    alt: "Enrollment forms filling",
    label: "Enrollment forms",
    description: "Students filling FutureX enrollment forms outdoors, genuine moment.",
    gridClass: "col-span-1",
  },
  {
    id: "WA_4:38:01",
    src: "/images/built-together/wa_4_38_01.png",
    alt: "Career fair booth",
    label: "Career fair booth",
    description: "Lyfshilp team at fair, team hoodie visible, students engaging.",
    gridClass: "col-span-1",
  },
  {
    id: "IMG_3580",
    src: "/images/built-together/img_3580.png",
    alt: "AI reshaping slide",
    label: "AI reshaping slide",
    description: "'AI is reshaping the world — Are you ready?' slide clearly visible.",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-1",
  },
];

export function BuiltTogether() {
  return (
    <section className="border-b border-[#e6e8ef] bg-white px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
              Community & Impact
            </p>
            <h2 className="max-w-2xl text-[40px] font-black leading-tight tracking-tight text-[#272835] sm:text-[52px]">
              See What We&apos;ve Built Together
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#747b8f]">
              Real students. Real sessions. Real results. Across 40+ schools in 14 Indian cities.
            </p>
          </div>
          <Link
            href="https://www.instagram.com/futurexfellowship/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#272835] transition-colors hover:text-[#5e22ff] shrink-0"
          >
            Follow @futurexfellows for more
            <span className="inline-block transition-transform group-hover:translate-x-1 duration-200">
              →
            </span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[240px] md:auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl border border-[#efe7da] bg-[#fffaf4] group transition-all duration-500 hover:-translate-y-1.5 hover:border-[#272835] hover:shadow-xl ${item.gridClass}`}
            >
              {/* Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
                {/* Top: Badge / Photo ID */}
                <div className="flex justify-between items-start">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                    {item.id}
                  </span>
                  {/* Subtle hover arrow indicator */}
                  <span className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>

                {/* Bottom: Text Info */}
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <h3 className="text-[19px] font-black tracking-tight text-white sm:text-[22px] leading-tight mb-2">
                    {item.label}
                  </h3>
                  <p className="text-[14px] leading-snug text-white/85 font-medium">
                    {item.description}
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
