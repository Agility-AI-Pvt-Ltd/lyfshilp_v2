import Link from "next/link";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { HowWeWork } from "@/src/components/ui/how-we-work";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import HeroSection from "@/src/components/ui/HeroSection";

const heroCol1 = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
];

const heroCol2 = [
  "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005198143-e528346d9a9f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
];

export const metadata = {
  title: "Lyfshilp — Explore, build, and become future-ready",
  description:
    "Lyfshilp is an AI-first learning platform where every learner — from school to college — explores ideas, builds real products, and grows with a community of ambitious builders across India.",
};

const programmes = [
  {
    label: "Lyfshilp Fellowship",
    href: "/lyfshilp-fellowship",
    description:
      "A mentored pathway for ambitious learners building AI products and founder-level confidence.",
    accent: "bg-[#5e22ff]",
  },
  {
    label: "Summer Programme",
    href: "/summer-programme",
    description:
      "Focused project sprints with practical, demo-ready outcomes you can actually show.",
    accent: "bg-[#10b981]",
  },
  {
    label: "For Schools",
    href: "/for-schools",
    description:
      "Age-aware AI literacy and creative technology projects that help students learn by making.",
    accent: "bg-[#ff492c]",
  },
  {
    label: "For Colleges",
    href: "/for-colleges",
    description:
      "Campus programmes aligned with real industry work, startup labs, and mentor showcases.",
    accent: "bg-[#ffd166]",
  },
  {
    label: "Corporate AI",
    href: "/corporate-ai",
    description:
      "Practical AI enablement and adoption support for modern teams and everyday work.",
    accent: "bg-[#242532]",
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
      <LyfshilpNavbar />

      <main>
        {/* Hero */}
        <HeroSection
          columnOneImages={heroCol1}
          columnTwoImages={heroCol2}
          title={"Explore, build, and\nbecome future-ready."}
          subtitle="LYFSHILP GIVES EVERY LEARNER — FROM SCHOOL TO COLLEGE — THE SPACE TO EXPLORE IDEAS, BUILD REAL PRODUCTS, AND GROW WITH A COMMUNITY OF AMBITIOUS BUILDERS ACROSS INDIA."
          rating="4.9 rating"
          students="500+ student founders"
        />

        {/* Programmes */}
        <section className="border-y border-[#efe7da] bg-white px-6 py-24 sm:px-8 lg:px-14">
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
                    Learn more
                    <ArrowGlyph />
                  </span>
                </Link>
              ))}

              {/* Closing CTA card */}
              <Link
                href="/about-us"
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-sm bg-[#272835] p-7 text-white transition-transform hover:-translate-y-1"
              >
                <span className="absolute right-0 top-0 size-10 bg-[#CFFD53]" aria-hidden="true" />
                <span className="absolute bottom-0 right-10 size-8 bg-[#5e22ff]" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 size-10 bg-[#10b981]" aria-hidden="true" />
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

        {/* How We Work — scroll-driven horizontal section */}
        <HowWeWork />

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

        {/* Stats band */}
        <section className="bg-[#0d0d0d] px-6 py-24 sm:px-8 lg:px-14">
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
          </div>
        </section>
      </main>

      <LyfshilpFooter />
    </div>
  );
}
