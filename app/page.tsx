import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { StaggeredCountdown } from "@/src/components/ui/staggered-countdown";
import HeroSection from "@/src/components/ui/HeroSection";
import { FooterStats } from "@/src/components/ui/footer-stats";
import { JoinCommunity } from "@/src/components/ui/join-community";
import { ProgramsSection } from "@/src/components/ui/programs-section";

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

      <FooterStats />
      <JoinCommunity />
      <LyfshilpFooter />
    </div>
  );
}
