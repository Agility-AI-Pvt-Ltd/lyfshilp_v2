"use client";

import React from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

const sessionPhotos: GalleryItem[] = [
  {
    src: "/images/corporate/ses1.jpg",
    alt: "Trainer presenting to NDDB cohort",
    caption: "Live walkthrough of AI tools for daily reporting",
    tag: "NDDB",
  },
  {
    src: "/images/corporate/ses2.JPG",
    alt: "Full room engaged during workshop",
    caption: "Full-room working session, laptops open",
    tag: "NDDB",
  },
  {
    src: "/images/corporate/ses3.JPG",
    alt: "Trainer presenting recorded testimonial",
    caption: "Reviewing a recorded practitioner testimonial",
    tag: "NDDB",
  },
  {
    src: "/images/corporate/ses4.JPG",
    alt: "Trainer presenting to seated cohort",
    caption: "Guided discussion on AI adoption in the field",
    tag: "NDDB",
  },
  {
    src: "/images/corporate/ses5.JPG",
    alt: "Trainer walking cohort through account setup",
    caption: "Step-by-step account setup, done live",
    tag: "NDDB",
  },
  {
    src: "/images/corporate/ses6.JPG",
    alt: "Trainer addressing a curved conference room",
    caption: "Closing session, open floor for questions",
    tag: "NDDB",
  },
];

const humanPhotos = [
  {
    src: "/images/corporate/pep1.JPG",
    caption: "Trainer with cohort, candid group photo",
  },
  {
    src: "/images/corporate/pep2.JPG",
    caption: "Trainer with second cohort, candid group photo",
  },
];

export function CorporateGallery() {
  return (
    <div className="bg-[#0b0c10] border-t border-white/10">
      {/* Inside a Session Section */}
      <section className="px-6 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
              Inside a Session
            </p>
            <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
              What the room actually looks like.
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
              Practical, screen-facing, hands-on — every attendee works through the tools live, not just watches a demo.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-[#CFFD53] bg-black/75 px-2.5 py-1 rounded-[4px] uppercase">
                      {photo.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-black text-white leading-snug">
                    {photo.alt}
                  </h3>
                  <p className="mt-2 text-[14px] text-white/60 font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Human Element Section */}
      <section className="px-6 py-24 sm:px-8 lg:px-14 border-t border-white/10 bg-[#030508]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
              The Human Element
            </p>
            <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
              Training that people remember, not just attend.
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/60">
              Beyond the slides and the sign-in sheets, what stays with a cohort is whether the session felt worth their time. These are the moments after the formal photo — when the room actually relaxes.
            </p>
          </div>

          {/* Candid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {humanPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <p className="text-[15px] font-bold text-white/90">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
