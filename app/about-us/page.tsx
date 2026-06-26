import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { HowWeWork } from "@/src/components/ui/how-we-work";

export const metadata = {
  title: "About Us | Lyfshilp",
  description:
    "Learn how Lyfshilp helps every learner explore, build, and become future-ready through mentored AI programmes and real-world projects.",
};

export default function AboutUsPage() {
  return (
    <>
      <LyfshilpNavbar />
      <main className="pt-20">
        <section className="bg-[#fffaf4] px-6 py-24 sm:px-8 lg:px-14">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
            About Us
          </p>
          <h1 className="max-w-4xl text-[52px] font-black leading-[1.05] tracking-normal text-[#272835] sm:text-[72px] lg:text-[88px]">
            Building the next generation of future-ready learners.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-[#747b8f]">
            Lyfshilp is an AI-first learning platform that gives every student
            from school to college the space to explore ideas, build real
            products, and grow with a community of ambitious builders across
            India.
          </p>
        </section>

        <HowWeWork />

        <section className="bg-[#fffaf4] px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
                  Our Mission
                </p>
                <h2 className="text-[40px] font-black leading-tight tracking-normal text-[#272835] sm:text-[52px]">
                  A space to explore, build, and become.
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-6 text-[17px] leading-relaxed text-[#747b8f]">
                <p>
                  We believe every learner deserves access to mentors, tools,
                  and real challenges - not just textbooks. Our programmes
                  combine structured learning with hands-on building, so
                  students do not just learn about the future, they create it.
                </p>
                <p>
                  From school-level AI literacy to college-level startup
                  incubation, Lyfshilp meets learners where they are and takes
                  them further than they imagined.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LyfshilpFooter />
    </>
  );
}
