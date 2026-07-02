import React from "react";
import NextImage from "next/image";

const features = [
  {
    title: "Harvard Case Method",
    description:
      "Learn from real business cases used at the world's top institutions. Analyse decisions, debate strategies, and apply lessons directly to your own startup.",
    bgColor: "bg-[#6a9efa]",
    illustration: (
      <div className="relative h-full w-full p-6 flex flex-col items-center justify-center">
        {/* Abstract Document UI */}
        <div className="w-[85%] h-[80%] bg-white rounded-t-xl shadow-lg relative flex flex-col p-4 border-t border-x border-white/40">
          <div className="w-1/3 h-2 bg-gray-200 rounded-full mb-4"></div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2"></div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2"></div>
          <div className="w-4/5 h-1.5 bg-gray-100 rounded-full mb-6"></div>
          
          <div className="flex gap-3">
            <div className="w-1/2 h-16 bg-blue-50 rounded-lg border border-blue-100"></div>
            <div className="w-1/2 h-16 bg-blue-50 rounded-lg border border-blue-100"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Build a Real Startup",
    description:
      "From problem validation to product development — you'll ship something real. Not a simulation, not a hypothetical. A product with real users.",
    bgColor: "bg-[#ff9696]",
    illustration: (
      <div className="relative h-full w-full p-6 flex items-center justify-center">
        {/* Kanban Board / Startup building UI */}
        <div className="w-[90%] h-[75%] bg-white/90 backdrop-blur rounded-xl shadow-xl flex gap-3 p-4">
          <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col gap-2">
            <div className="w-1/2 h-1.5 bg-[#ff9696] rounded-full mb-1"></div>
            <div className="w-full h-6 bg-white rounded shadow-sm"></div>
            <div className="w-full h-6 bg-white rounded shadow-sm"></div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col gap-2">
            <div className="w-1/2 h-1.5 bg-yellow-400 rounded-full mb-1"></div>
            <div className="w-full h-6 bg-white rounded shadow-sm"></div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col gap-2">
            <div className="w-1/2 h-1.5 bg-green-400 rounded-full mb-1"></div>
            <div className="w-full h-8 bg-white rounded shadow-sm border border-green-100"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Pitch to Investors",
    description:
      "Culminates in Demo Day, where you present your venture to a panel of investors, mentors, and industry professionals — just like a real accelerator.",
    bgColor: "bg-[#ffba59]",
    illustration: (
      <div className="relative h-full w-full p-6 flex items-end justify-center">
        {/* Presentation Screen */}
        <div className="w-[85%] h-[85%] bg-white rounded-t-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-full flex-1 bg-orange-50 rounded-lg border border-orange-100 flex items-end justify-center gap-3 p-3">
            <div className="w-4 h-[40%] bg-orange-300 rounded-t-sm"></div>
            <div className="w-4 h-[70%] bg-orange-400 rounded-t-sm"></div>
            <div className="w-4 h-[100%] bg-orange-500 rounded-t-sm"></div>
          </div>
          <div className="mt-3 w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Earn XP & Certification",
    description:
      "A gamified XP system tracks your progress across missions, lessons, and milestones. Top performers are recognised on a live leaderboard.",
    bgColor: "bg-[#9b87f5]",
    illustration: (
      <div className="relative h-full w-full p-6 flex flex-col items-center justify-center">
        {/* Gamification / Leaderboard UI */}
        <div className="w-[80%] bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-purple-50 p-2 rounded-lg border border-purple-100">
            <div className="size-6 rounded-full bg-yellow-400 flex-shrink-0 border-2 border-white shadow-sm"></div>
            <div className="w-1/2 h-2 bg-purple-200 rounded-full"></div>
            <div className="w-1/4 h-2 bg-purple-400 rounded-full ml-auto"></div>
          </div>
          <div className="flex items-center gap-3 px-2">
            <div className="size-6 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
            <div className="w-1/5 h-2 bg-gray-200 rounded-full ml-auto"></div>
          </div>
          <div className="flex items-center gap-3 px-2">
            <div className="size-6 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="w-1/3 h-2 bg-gray-100 rounded-full"></div>
            <div className="w-1/5 h-2 bg-gray-200 rounded-full ml-auto"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI-Powered Tools",
    description:
      "Access a built-in AI Playground and Research Workspace to prototype ideas, analyse feasibility, and experiment with prompt engineering.",
    bgColor: "bg-[#153d70]",
    illustration: (
      <div className="relative h-full w-full">
        <NextImage
          src="/images/futurex-fellowship/image.png"
          alt="AI interface floating above a person's hands"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    ),
  },
  {
    title: "International Certification",
    description:
      "Graduates receive an internationally recognised certification validating their entrepreneurial and AI literacy skills.",
    bgColor: "bg-[#fb7185]",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Certificate UI */}
        <div className="w-[75%] h-[70%] bg-white rounded-sm shadow-xl p-5 flex flex-col items-center justify-center border-4 border-rose-50 relative">
          <div className="w-1/2 h-2 bg-rose-200 rounded-full mb-6"></div>
          <div className="w-3/4 h-1 bg-gray-100 rounded-full mb-2"></div>
          <div className="w-2/3 h-1 bg-gray-100 rounded-full mb-6"></div>
          
          <div className="absolute bottom-4 right-4 size-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
             <div className="size-5 border-2 border-white rounded-full border-dashed"></div>
          </div>
        </div>
      </div>
    ),
  },
];

export function FutureXIncubatorSection() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1200px]">
        {/* Header matching previous styling */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1e5237]/10 bg-[#1e5237]/5 px-4 py-2 shadow-sm">
            <span className="relative flex size-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1e5237] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#1e5237]" />
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1e5237]">
              What You&apos;ll Do
            </span>
          </div>
          <h2 className="mb-6 text-[42px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[56px]">
            Not a course.{" "}
            <span className="relative whitespace-nowrap text-[#1e5237]">
              A startup incubator.
              <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#c9f45b] opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[19px] leading-relaxed text-[#4b5563] sm:text-[21px]">
            Fellows don&apos;t just learn entrepreneurship — they live it. Every
            concept is applied to a venture you build across 6 months.
          </p>
        </div>

        {/* 3-Column Grid matching the screenshot */}
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group">
              {/* Illustration Top Box */}
              <div
                className={`relative mb-6 h-56 w-full overflow-hidden rounded-[20px] ${feature.bgColor} transition-transform duration-500 group-hover:-translate-y-1`}
              >
                {feature.illustration}
              </div>

              {/* Text Content Below */}
              <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#111827]">
                {feature.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-[#505a66]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
