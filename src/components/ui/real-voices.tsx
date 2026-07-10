"use client";

import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  subtitle: string;
  imgSrc: string;
}

const teacherTestimonials: Testimonial[] = [
  {
    quote:
      "The workshop on AI and Bloom's Taxonomy was eye-opening for our faculty. We left with practical tools we could use in class the next day — not just theory.",
    author: "Ms. Kavita Joshi",
    subtitle: "Head of Academics · The Shri Ram School, Delhi",
    imgSrc: "/images/testimonials/educator_professional.png",
  },
  {
    quote:
      "Our students were disengaged in regular classes but lit up during FutureX sessions. The XP system and community posts made learning feel like a game they wanted to win.",
    author: "Mr. Sandeep Kaur",
    subtitle: "Computer Science Teacher · Delhi Public School, Chandigarh",
    imgSrc: "/images/testimonials/male_teacher_relaxed.png",
  },
  {
    quote:
      "As a principal, I care about outcomes. FutureX delivered: 100% of enrolled students completed the program, and 3 presented at a district-level startup competition.",
    author: "Dr. Meena Kapoor",
    subtitle: "Principal · Army Public School, Pune",
    imgSrc: "/images/testimonials/principal_smiling.png",
  },
];

const schools = [
  {
    name: "Springdales School",
    logo: "/images/school_logos/springdales_school.jpeg",
  },
  {
    name: "Ryan International",
    logo: "/images/school_logos/ryan_internation_school.jpeg",
  },
  {
    name: "Modern School New Delhi",
    logo: "/images/school_logos/modern_school.jpeg",
  },
  {
    name: "Army Public School",
    logo: "/images/school_logos/army_public_school.jpeg",
  },
  {
    name: "Mt. Carmel School",
    logo: "/images/school_logos/mount_carmel_school.jpeg",
  },
  {
    name: "St. Thomas School",
    logo: "/images/school_logos/st_thomas.jpeg",
  },
  {
    name: "St. Francis School",
    logo: "/images/school_logos/st_francis.jpeg",
  },
  {
    name: "Delhi Public School",
    logo: "/images/school_logos/delhi_public_school.jpeg",
  },
];

function SchoolLogoItem({ school }: { school: (typeof schools)[number] }) {
  return (
    <div className="mx-12 flex min-w-[200px] flex-col items-center gap-3 sm:mx-14 sm:min-w-[240px]">
      <img
        src={school.logo}
        alt={`${school.name} logo`}
        className="h-16 w-auto max-w-[180px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-20 sm:max-w-[220px] lg:h-24 lg:max-w-[260px]"
        loading="lazy"
      />
      <span className="text-center text-[12px] font-bold uppercase tracking-wider text-[#555a68]/70 whitespace-nowrap sm:text-[13px]">
        {school.name}
      </span>
    </div>
  );
}

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
      {/* <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-14 lg:py-28"> */}
      {/* Title */}
      {/* <div className="mb-16">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
            Testimonials
          </p>
          <h2 className="text-[40px] font-black leading-tight tracking-tight text-[#272835] sm:text-[52px]">
            Real voices. Real change.
          </h2>
        </div> */}

      {/* Teachers Section */}
      {/* <div>
          <h3 className="mb-8 text-[20px] font-black uppercase tracking-wider text-[#272835]/70 border-l-4 border-[#5e22ff] pl-4">
            Teachers and school heads say
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teacherTestimonials.map((t, idx) => (
              <TestimonialCard key={`teacher-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div> */}

      {/* School Partners Logos Strip */}
      <div className="w-full bg-[#f5f5f7]/60 border-t border-[#e6e8ef] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <p className="text-[12px] font-bold text-center uppercase tracking-widest text-[#8a90a3] mb-8 sm:mb-10 sm:text-[13px] px-6">
          Trusted by schools across India
        </p>

        <div className="w-full overflow-hidden relative select-none py-4 sm:py-6">
            {/* Fade overlays for marquee ends */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />

            <div className="logo-marquee-track">
              {schools.map((school, idx) => (
                <SchoolLogoItem key={`logo-1-${idx}`} school={school} />
              ))}
              {schools.map((school, idx) => (
                <SchoolLogoItem key={`logo-2-${idx}`} school={school} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
