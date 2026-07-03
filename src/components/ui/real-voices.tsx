"use client";

import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  subtitle: string;
  imgSrc: string;
}

const parentTestimonials: Testimonial[] = [
  {
    quote: "My son was always good at studies but never knew what to do with it. After FutureX, he built an AI chatbot for his school library project. I couldn't believe what a 14-year-old could create in 8 weeks.",
    author: "Priya Sharma",
    subtitle: "Parent of Arjun, Grade 9 · DAV Public School, Noida",
    imgSrc: "/images/testimonials/mother_40s.png",
  },
  {
    quote: "What I loved most is that they never talked down to the kids. They treated my daughter like a founder from Day 1. She presented her idea to a panel of mentors. That confidence is priceless.",
    author: "Rakesh Mehta",
    subtitle: "Parent of Ananya, Grade 11 · Ryan International, Delhi",
    imgSrc: "/images/testimonials/father_45s.png",
  },
  {
    quote: "We were sceptical — another online course? But this was different. Weekly check-ins, real mentors, and my son actually finished something. He built a working tool. In India, that's rare.",
    author: "Sunita Agarwal",
    subtitle: "Parent of Rohan, Grade 10 · St. Xavier's, Jaipur",
    imgSrc: "/images/testimonials/mother_candid.png",
  },
];

const teacherTestimonials: Testimonial[] = [
  {
    quote: "The workshop on AI and Bloom's Taxonomy was eye-opening for our faculty. We left with practical tools we could use in class the next day — not just theory.",
    author: "Ms. Kavita Joshi",
    subtitle: "Head of Academics · The Shri Ram School, Delhi",
    imgSrc: "/images/testimonials/educator_professional.png",
  },
  {
    quote: "Our students were disengaged in regular classes but lit up during FutureX sessions. The XP system and community posts made learning feel like a game they wanted to win.",
    author: "Mr. Sandeep Kaur",
    subtitle: "Computer Science Teacher · Delhi Public School, Chandigarh",
    imgSrc: "/images/testimonials/male_teacher_relaxed.png",
  },
  {
    quote: "As a principal, I care about outcomes. FutureX delivered: 100% of enrolled students completed the program, and 3 presented at a district-level startup competition.",
    author: "Dr. Meena Kapoor",
    subtitle: "Principal · Army Public School, Pune",
    imgSrc: "/images/testimonials/principal_smiling.png",
  },
];

const schools = [
  "DAV Public School",
  "Ryan International",
  "The Shri Ram School",
  "Army Public School",
  "Amity International",
  "GD Goenka",
  "Tagore Public School",
  "Delhi Public School",
];

function QuoteIcon() {
  return (
    <svg
      className="size-8 text-[#5e22ff]/10 mb-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.19 12.19c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-2.22 1.35-4.13 3.28-4.9l.48.88c-1.31.6-2.26 1.88-2.6 3.42.34-.23.75-.4 1.2-.4 1.66 0 3 1.34 3 3zm7.19 0c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-2.22 1.35-4.13 3.28-4.9l.48.88c-1.31.6-2.26 1.88-2.6 3.42.34-.23.75-.4 1.2-.4 1.66 0 3 1.34 3 3z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#e6e8ef] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#272835] hover:shadow-md">
      <div>
        <QuoteIcon />
        <p className="text-[15px] italic leading-relaxed text-[#555a68] mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center mt-auto border-t border-[#f4f5f8] pt-5">
        <img
          src={testimonial.imgSrc}
          alt={testimonial.author}
          className="size-12 rounded-full object-cover bg-gray-100 border border-gray-200 shrink-0"
          loading="lazy"
        />
        <div className="ml-4 overflow-hidden">
          <h4 className="text-[15px] font-bold text-[#272835] truncate">
            {testimonial.author}
          </h4>
          <p className="text-[12px] text-[#8a90a3] truncate mt-0.5">
            {testimonial.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function RealVoices() {
  return (
    <section className="bg-[#fcfbf9] border-b border-[#e6e8ef]">
      <style>{`
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          display: flex;
          width: max-content;
          animation: logoMarquee 35s linear infinite;
        }
        .logo-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Testimonials Block */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-14 lg:py-28">
        {/* Title */}
        <div className="mb-16">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
            Testimonials
          </p>
          <h2 className="text-[40px] font-black leading-tight tracking-tight text-[#272835] sm:text-[52px]">
            Real voices. Real change.
          </h2>
        </div>

        {/* Parents Section */}
        <div className="mb-20">
          <h3 className="mb-8 text-[20px] font-black uppercase tracking-wider text-[#272835]/70 border-l-4 border-[#ffd166] pl-4">
            Parents say
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parentTestimonials.map((t, idx) => (
              <TestimonialCard key={`parent-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Teachers Section */}
        <div>
          <h3 className="mb-8 text-[20px] font-black uppercase tracking-wider text-[#272835]/70 border-l-4 border-[#5e22ff] pl-4">
            Teachers and school heads say
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teacherTestimonials.map((t, idx) => (
              <TestimonialCard key={`teacher-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>

      {/* School Partners Logos Strip */}
      <div className="bg-[#f5f5f7]/60 border-t border-[#e6e8ef] py-6 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-14">
          <p className="text-[11px] font-bold text-center uppercase tracking-widest text-[#8a90a3] mb-6">
            Trusted by schools across India
          </p>
          
          <div className="w-full overflow-hidden relative select-none">
            {/* Fade overlays for marquee ends */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
            
            <div className="logo-marquee-track">
              {/* First Pass */}
              {schools.map((school, idx) => (
                <div key={`logo-1-${idx}`} className="flex items-center gap-2.5 mx-12">
                  <svg
                    className="size-5 text-[#8a90a3] opacity-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21V9.75M12 9.75a3.375 3.375 0 0 1 3.375-3.375h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a3.375 3.375 0 0 1-3.375-3.375ZM12 9.75a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 0 6 7.5v1.5A1.125 1.125 0 0 0 7.125 11.25h1.5A3.375 3.375 0 0 0 12 9.75Zm0 11.25a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
                    />
                  </svg>
                  <span className="text-[13px] font-black uppercase tracking-wider text-[#555a68]/70 whitespace-nowrap">
                    {school}
                  </span>
                </div>
              ))}
              {/* Second Pass */}
              {schools.map((school, idx) => (
                <div key={`logo-2-${idx}`} className="flex items-center gap-2.5 mx-12">
                  <svg
                    className="size-5 text-[#8a90a3] opacity-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21V9.75M12 9.75a3.375 3.375 0 0 1 3.375-3.375h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a3.375 3.375 0 0 1-3.375-3.375ZM12 9.75a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 0 6 7.5v1.5A1.125 1.125 0 0 0 7.125 11.25h1.5A3.375 3.375 0 0 0 12 9.75Zm0 11.25a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
                    />
                  </svg>
                  <span className="text-[13px] font-black uppercase tracking-wider text-[#555a68]/70 whitespace-nowrap">
                    {school}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
