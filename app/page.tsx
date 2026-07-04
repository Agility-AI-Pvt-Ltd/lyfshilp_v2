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


const stats = [
  {
    digits: "5,000",
    suffix: "+",
    label: "Student Trained",
    description: "Empowering young minds across high schools and colleges with hands-on startup and tech curricula."
  },
  {
    digits: "40",
    suffix: "+",
    label: "Partner schools",
    description: "Collaborating with elite institutions to drive active tech and AI training directly."
  },
  {
    digits: "14",
    suffix: "",
    label: "Cities across India",
    description: "Forging a nationwide builder community of ambitious learners, co-founders, and mentors."
  },
  {
    digits: "100% Free Tools",
    suffix: "",
    label: "Zero extra cost beyond program fee",
    description: "Ensuring no barriers to entry with completely free, no-code, and open-source ecosystems."
  },
  {
    digits: "Intl. Certified",
    suffix: "",
    label: "International FutureX Fellowship seal",
    description: "Validating student outcomes with international seals and credentials recognized worldwide."
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
          programGuideHref="https://drive.google.com/file/d/1mu6FYFgg4kz--Cdt7mW_ObvS8V_HPh3t/view?usp=sharing"
        />

        {/* Stats band */}
        <section className="bg-[#0d0d0d] px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1440px] mb-24">
            
            {/* White card container */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] px-8 py-16 md:px-12 md:py-20 shadow-2xl border border-[#efe7da]/30 text-[#272835]">
              
              {/* Header with headings */}
              <div className="mb-16">
                <h2 className="text-[32px] sm:text-[42px] font-black text-[#272835] tracking-tight leading-none">
                  We only deliver results.
                </h2>
                <p className="mt-4 text-[16px] sm:text-[18px] text-[#747b8f] font-medium leading-relaxed max-w-2xl">
                  We don&apos;t use excuses or something. Okay maybe sometimes.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 xl:gap-x-12 gap-y-12 border-t border-[#272835]/10 pt-16">
                {stats.map((stat) => {
                  const isLong = stat.digits.length > 8;
                  return (
                    <div key={stat.label} className="flex flex-col text-left">
                      <div className="flex items-baseline">
                        <StaggeredCountdown
                          value={stat.digits}
                          suffix={stat.suffix}
                          color="#272835"
                          duration={2}
                          className={`font-black leading-none tracking-tight text-[#272835] ${
                            isLong
                              ? "text-[20px] sm:text-[24px] lg:text-[28px]"
                              : "text-[32px] sm:text-[36px] lg:text-[40px]"
                          }`}
                        />
                      </div>
                      <p className="mt-4 text-[15px] font-extrabold tracking-tight text-[#272835] leading-snug">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#747b8f]">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Customer Stories Header */}
            <div className="mt-24 text-center">
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
