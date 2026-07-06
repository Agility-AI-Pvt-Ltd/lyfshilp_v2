import Link from "next/link";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import HeroSection from "@/src/components/ui/HeroSection";
import { JoinCommunity } from "@/src/components/ui/join-community";
import { ProgramsSection } from "@/src/components/ui/programs-section";
import { BuiltTogether } from "@/src/components/ui/built-together";
import { RealVoices } from "@/src/components/ui/real-voices";
import { CustomerReviews } from "@/src/components/ui/customer-reviews";
import { FutureXReviewsSection } from "@/src/components/ui/futurex-reviews-section";

const heroCol1 = [
  "/images/hero/1.JPG",
  "/images/hero/3.JPG",
  "/images/hero/5.JPG",
  "/images/hero/7.JPG",
  "/images/hero/9.jpg",
  "/images/hero/11.jpeg",
  "/images/hero/13.jpeg",
];

const heroCol2 = [
  "/images/hero/2.JPG",
  "/images/hero/4.JPG",
  "/images/hero/6.JPG",
  "/images/hero/8.JPG",
  "/images/hero/10.jpg",
  "/images/hero/12.jpeg",
];

export const metadata = {
  title: "Lyfshilp — Explore, build, and become future-ready",
  description:
    "Lyfshilp is an AI-first learning platform where every learner — from school to college — explores ideas, builds real products, and grows with a community of ambitious builders across India.",
};

const programmes = [
  {
    label: "For Colleges",
    href: "/for-colleges",
    description:
      "Campus programmes aligned with real industry work, startup labs, and mentor showcases.",
    accent: "bg-[#ffd166]",
    status: "Launching Soon",
  },
  {
    label: "Corporate AI",
    href: "/corporate-ai",
    description:
      "Practical AI enablement and adoption support for modern teams and everyday work.",
    accent: "bg-[#242532]",
    status: "Launching Soon",
  },
];


function PixelMark({ accent }: { accent: string }) {
  const pixels = [1, 2, 4, 7, 8, 10, 13, 14];

  return (
    <span
      className={`grid size-12 shrink-0 grid-cols-4 grid-rows-4 overflow-hidden rounded-sm ${accent} p-1 shadow-sm`}
      aria-hidden="true"
    >
      {Array.from({ length: 16 }).map((_, index) => (
        <span
          key={index}
          className={
            pixels.includes(index)
              ? "m-0.5 rounded-[1px] bg-white"
              : "m-0.5 rounded-[1px] bg-black/20"
          }
        />
      ))}
    </span>
  );
}

function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="size-0 border-y-[5px] border-l-[6px] border-y-transparent border-l-current opacity-45"
    />
  );
}

export default function Home() {
  return (
    <div className="bg-[#fffaf4] text-[#272835]">
      <LyfshilpNavbar showMarquee={true} />

      <main>
        {/* Hero */}
        <HeroSection
          columnOneImages={heroCol1}
          columnTwoImages={heroCol2}
          title={
            "'Your Child Doesn't Just Learn AI. \nThey Build With It. Lead With It.'"
          }
          subtitle="The FutureX Fellowship is a 36-session, project-led program where students in Grades 6-12 build real AI tools, pitch real business ideas, and earn internationally recognised certification — all using free tools."
          rating="4.9 rating"
          students="500+ student founders"
          programGuideHref="https://drive.google.com/file/d/1XnZhCzch9jXuivfyVgg039zY4dTv_30X/view?usp=sharing"
        />

        {/* Stats band */}
        <section className="bg-black px-6 py-24 sm:px-12 lg:px-20 text-white relative overflow-hidden">
          {/* Subtle decorative glow to enhance premium look */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -right-40 -top-40 size-[600px] rounded-full bg-white/[0.03] blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-white/[0.02] blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-7xl z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
                <h2 className="text-[36px] sm:text-[48px] font-bold text-white tracking-tight leading-none">
                  Our Impact
                </h2>
                <p className="text-[15px] sm:text-[17px] leading-relaxed text-white/80 font-medium">
                  Empowering young minds across high schools and colleges with hands-on startup and tech curricula, forging a nationwide builder community of ambitious learners.
                </p>
                <div>
                  <Link
                    href="/about-us"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 text-[13px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/30"
                  >
                    READ OUR CASES
                  </Link>
                </div>
              </div>

              {/* Right Column: 2x2 Stats Grid with Divider lines */}
              <div className="lg:col-span-7 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  
                  {/* Cell 1: Top-Left */}
                  <div className="border-b border-white/10 pb-8 sm:border-r sm:pr-8 sm:pb-8">
                    <div className="text-[52px] sm:text-[64px] font-bold leading-none tracking-tight text-white flex items-baseline">
                      <StaggeredCountdown value="5,000" suffix="+" color="#ffffff" duration={2} />
                    </div>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                      STUDENTS TRAINED
                    </p>
                  </div>

                  {/* Cell 2: Top-Right */}
                  <div className="border-b border-white/10 py-8 sm:border-b sm:pl-8 sm:pt-0 sm:pb-8">
                    <div className="text-[52px] sm:text-[64px] font-bold leading-none tracking-tight text-white flex items-baseline">
                      <StaggeredCountdown value="40" suffix="+" color="#ffffff" duration={2} />
                    </div>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                      PARTNER SCHOOLS
                    </p>
                  </div>

                  {/* Cell 3: Bottom-Left */}
                  <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-8 sm:pt-8 sm:pb-0">
                    <div className="text-[52px] sm:text-[64px] font-bold leading-none tracking-tight text-white flex items-baseline">
                      <StaggeredCountdown value="14" suffix="" color="#ffffff" duration={2} />
                    </div>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                      CITIES NATIONWIDE
                    </p>
                  </div>

                  {/* Cell 4: Bottom-Right */}
                  <div className="pt-8 sm:pl-8">
                    <div className="text-[52px] sm:text-[64px] font-bold leading-none tracking-tight text-white flex items-baseline">
                      <StaggeredCountdown value="100" suffix="%" color="#ffffff" duration={2} />
                    </div>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                      FREE TOOL ACCESS
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="bg-[#0d0d0d] px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1440px] mb-12">
            {/* Customer Stories Header */}
            <div className="text-center">
              <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#9bd340]">
                Customer stories
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-[38px] font-black leading-tight tracking-[-0.035em] text-white sm:text-[52px]">
                The shift families can see.
              </h2>
            </div>
          </div>

          <CustomerReviews />
        </section>

        <ProgramsSection />
        <FutureXReviewsSection />
        <BuiltTogether />
        <RealVoices />

        {/* Original programmes grid */}
        {/* <section className="border-b border-[#efe7da] bg-white px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
                  Programmes
                </p>
                <h2 className="max-w-2xl text-[40px] font-black leading-tight tracking-tight text-[#272835] sm:text-[52px]">
                  A path for every kind of builder.
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#272835] transition-colors hover:text-[#5e22ff]"
              >
                View all programmes
                <ArrowGlyph />
              </Link>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {programmes.map((programme) => (
                <Link
                  key={programme.label}
                  href={programme.href}
                  className="group relative flex flex-col gap-5 rounded-sm border border-[#e6e8ef] bg-[#fffaf4] p-7 transition-all hover:-translate-y-1 hover:border-[#272835]"
                >
                  <PixelMark accent={programme.accent} />
                  <div>
                    <h3 className="flex items-center gap-2 text-[21px] font-bold leading-7 tracking-tight text-[#272835] group-hover:text-[#5e22ff]">
                      {programme.label}
                    </h3>
                    <p className="mt-3 text-[15px] leading-6 text-[#747b8f]">
                      {programme.description}
                    </p>
                  </div>
                  <span className="mt-auto flex items-center gap-2 text-[14px] font-semibold text-[#747b8f] transition-colors group-hover:text-[#272835]">
                    {programme.status ?? "Learn more"}
                    <ArrowGlyph />
                  </span>
                </Link>
              ))}

              <Link
                href="/about-us"
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-sm bg-[#272835] p-7 text-white transition-transform hover:-translate-y-1"
              >
                <span
                  className="absolute right-0 top-0 size-10 bg-[#CFFD53]"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-0 right-10 size-8 bg-[#5e22ff]"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-0 right-0 size-10 bg-[#10b981]"
                  aria-hidden="true"
                />
                <h3 className="relative z-10 max-w-[200px] text-[24px] font-black leading-tight tracking-tight">
                  Not sure where to start?
                </h3>
                <span className="relative z-10 flex items-center gap-2 text-[15px] font-semibold text-white/80 transition-colors group-hover:text-white">
                  Learn how Lyfshilp works
                  <ArrowGlyph />
                </span>
              </Link>
            </div>
          </div>
        </section> */}

      </main>

      <JoinCommunity />
      <LyfshilpFooter />
    </div>
  );
}
