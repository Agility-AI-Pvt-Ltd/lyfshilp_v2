import Link from "next/link";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import HeroSection from "@/src/components/ui/HeroSection";
import { JoinCommunity } from "@/src/components/ui/join-community";
import { ProgramsSection } from "@/src/components/ui/programs-section";
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

const reasons = [
  {
    title: "Mentored, not lectured",
    description:
      "Learn directly from founders, builders, and industry mentors who guide every sprint instead of just handing out theory.",
  },
  {
    title: "Build real, shippable work",
    description:
      "Every learner finishes with projects worth showing — AI tools, startups, and initiatives that move from idea to launch.",
  },
  {
    title: "A nationwide builder community",
    description:
      "Find collaborators, co-founders, and feedback across schools and colleges in cities all over India.",
  },
];

const stats = [
  { digits: "500", suffix: "+", label: "Student founders" },
  { digits: "50", suffix: "+", label: "Partner schools" },
  { digits: "20", suffix: "+", label: "Mentors and builders" },
  { digits: "10", suffix: "+", label: "Cities represented" },
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
          subtitle="Transforming education to inspire, engage, and prepare every student."
          rating="4.9 rating"
          students="500+ student founders"
        />

        <ProgramsSection />

        {/* Stats band */}
        <section className="bg-[#0d0d0d] px-6 pb-0 pt-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
              By the numbers
            </p>
            <h2 className="max-w-3xl text-[36px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
              A growing movement of young builders.
            </h2>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <StaggeredCountdown
                    value={stat.digits}
                    suffix={stat.suffix}
                    color="#ffffff"
                    duration={2}
                    className="text-[54px] font-black leading-none tracking-tight sm:text-[64px]"
                  />
                  <p className="mt-4 text-[17px] font-semibold tracking-normal text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-white/10 pt-16 text-center">
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

        {/* Original programmes grid */}
        <section className="border-b border-[#efe7da] bg-white px-6 py-24 sm:px-8 lg:px-14">
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
        </section>

        {/* Why Lyfshilp */}
        <section className="bg-[#fffaf4] px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
              Why Lyfshilp
            </p>
            <h2 className="max-w-3xl text-[40px] font-black leading-tight tracking-tight text-[#272835] sm:text-[52px]">
              Learning that ends in real work, not just a certificate.
            </h2>

            <div className="mt-16 grid gap-12 border-t border-[#e6e8ef] pt-12 lg:grid-cols-3 lg:gap-16">
              {reasons.map((reason, index) => (
                <div key={reason.title}>
                  <span className="text-[15px] font-black tracking-widest text-[#c7cad6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[24px] font-bold leading-tight tracking-tight text-[#272835]">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#747b8f]">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FutureXReviewsSection />
      </main>

      <JoinCommunity />
      <LyfshilpFooter />
    </div>
  );
}
