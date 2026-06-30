import NextImage from "next/image";
import Link from "next/link";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";

export const metadata = {
  title: "About Us | Lyfshilp",
  description:
    "Lyfshilp is an AI-first education platform helping students learn AI by building projects, products, and future-ready confidence with mentors.",
};

const heroImage =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1800&q=85";

const labImage =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85";

const showcaseImage =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85";

const proofPoints = [
  { value: "6,000+", label: "students introduced to AI and product thinking" },
  { value: "38", label: "institutions engaged through programmes and labs" },
  { value: "500+", label: "student founders and builders in the community" },
  { value: "NEP", label: "aligned learning that blends skills and application" },
];

const droppingAudiences = ["Students", "Schools", "Colleges", "EVERYONE!"];

const learningSystem = [
  {
    step: "01",
    title: "AI Literacy",
    description:
      "Students understand prompts, models, data, bias, automation, and responsible AI through age-aware examples.",
    accent: "bg-[#5e22ff]",
  },
  {
    step: "02",
    title: "Builder Sprints",
    description:
      "Learners move from idea to prototype with AI copilots, no-code tools, design thinking, and mentor reviews.",
    accent: "bg-[#10b981]",
  },
  {
    step: "03",
    title: "Founder Mindset",
    description:
      "Every project is shaped around a real user, clear problem, feedback loops, storytelling, and demo confidence.",
    accent: "bg-[#ff492c]",
  },
  {
    step: "04",
    title: "Showcase Ready",
    description:
      "Students leave with portfolios, presentations, products, and the vocabulary to explain what they built.",
    accent: "bg-[#ffd166]",
  },
];

const audiences = [
  {
    title: "For Schools",
    description:
      "Structured AI exposure, creative technology labs, and safe project formats for young learners.",
  },
  {
    title: "For Colleges",
    description:
      "Campus innovation programmes where students build practical tools, startups, and career-ready proof of work.",
  },
  {
    title: "For Teams",
    description:
      "Corporate AI enablement that helps professionals use modern tools in everyday workflows.",
  },
];

const principles = [
  {
    title: "Use AI with judgement",
    description:
      "Learners are taught when to automate, when to question outputs, and how to keep humans in the loop.",
  },
  {
    title: "Learn in public",
    description:
      "Demo days, peer feedback, and showcases make progress visible and confidence repeatable.",
  },
  {
    title: "Build before you believe",
    description:
      "Curiosity becomes durable when students can test an idea, improve it, and show what changed.",
  },
];

const team = [
  {
    name: "AI Mentors",
    role: "Prompt workflows, tool stacks, and responsible AI reviews",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Learning Designers",
    role: "Age-aware curriculum, project briefs, and assessment rubrics",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Builder Community",
    role: "Demo days, peer circles, founder feedback, and momentum",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=85",
  },
];

function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current"
    />
  );
}

function PixelMark({ accent }: { accent: string }) {
  const pixels = [1, 2, 4, 7, 8, 10, 13, 14];

  return (
    <span
      className={`grid size-12 shrink-0 grid-cols-4 grid-rows-4 overflow-hidden rounded-sm ${accent} p-1`}
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

function CircuitField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.24]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
  );
}

function DroppingAudienceText() {
  return (
    <>
      <style>{`
        @keyframes aboutAudienceDrop {
          0% {
            opacity: 0;
            transform: translate3d(-0.32em, -0.12em, 0) rotate(-14deg) scale(0.74);
            filter: blur(2px);
          }
          7% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
            filter: blur(0);
          }
          27% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
            filter: blur(0);
          }
          36% {
            opacity: 0;
            transform: translate3d(0.34em, 0.95em, 0) rotate(10deg) scale(0.72);
            filter: blur(1px);
          }
          100% {
            opacity: 0;
            transform: translate3d(-0.32em, -0.12em, 0) rotate(-14deg) scale(0.74);
            filter: blur(2px);
          }
        }

        .about-dropping-texts {
          display: block;
          position: relative;
          height: 1.05em;
          width: min(100%, 8.8ch);
          color: #CFFD53;
        }

        .about-dropping-texts > span {
          position: absolute;
          inset: 0 auto auto 0;
          white-space: nowrap;
          opacity: 0;
          text-shadow: 0 22px 35px rgba(0, 0, 0, 0.36);
          transform-origin: left center;
          animation: aboutAudienceDrop 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        .about-dropping-texts > span:nth-child(2) {
          animation-delay: 1.5s;
          color: #ffffff;
        }

        .about-dropping-texts > span:nth-child(3) {
          animation-delay: 3s;
          color: #10b981;
        }

        .about-dropping-texts > span:nth-child(4) {
          animation-delay: 4.5s;
          color: #ff492c;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-dropping-texts > span {
            animation: none;
          }

          .about-dropping-texts > span:first-child {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      `}</style>
      <span className="about-dropping-texts" aria-label={droppingAudiences.join(", ")}>
        {droppingAudiences.map((audience) => (
          <span key={audience}>{audience}</span>
        ))}
      </span>
    </>
  );
}

export default function AboutUsPage() {
  return (
    <div className="bg-[#fffaf4] text-[#272835]">
      <LyfshilpNavbar />
      <main>
        <section className="relative flex min-h-screen overflow-hidden bg-[#101116] px-6 pb-14 pt-28 text-white sm:px-8 lg:px-14">
          <NextImage
            src={heroImage}
            alt="Students learning artificial intelligence in a modern education lab"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-58"
          />
          <div className="absolute inset-0 bg-[#101116]/62" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(207,253,83,0.26),transparent_28%),radial-gradient(circle_at_20%_76%,rgba(94,34,255,0.28),transparent_30%)]" />
          <CircuitField />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 self-end lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="pb-4">
              <p className="mb-5 text-[13px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                About Lyfshilp
              </p>
              <h1 className="max-w-5xl text-[46px] font-black leading-[1.02] tracking-normal sm:text-[70px] lg:text-[92px]">
                AI education that works for
                <DroppingAudienceText />
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] font-medium leading-8 text-white/78 sm:text-[20px]">
                Lyfshilp turns artificial intelligence from a buzzword into a
                practical learning experience. Students explore modern tools,
                build real projects, and learn how to think like responsible
                creators.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/community"
                  className="inline-flex h-14 w-fit items-center gap-3 rounded-full bg-[#CFFD53] px-7 text-[15px] font-black text-[#101116] transition-transform hover:-translate-y-0.5"
                >
                  Join the builder community
                  <ArrowGlyph />
                </Link>
                <Link
                  href="/for-schools"
                  className="inline-flex h-14 w-fit items-center rounded-full border border-white/28 px-7 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-[#101116]"
                >
                  Explore school programmes
                </Link>
              </div>
            </div>

            <div className="grid gap-4 border-t border-white/18 pt-6 sm:grid-cols-2 lg:pb-4">
              {proofPoints.map((point) => (
                <div key={point.value} className="min-h-32 border-l border-white/18 pl-5">
                  <p className="text-[42px] font-black leading-none text-white">
                    {point.value}
                  </p>
                  <p className="mt-3 max-w-[240px] text-[14px] font-semibold leading-6 text-white/62">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#8a90a3]">
                Our Mission
              </p>
              <h2 className="text-[38px] font-black leading-tight tracking-normal text-[#272835] sm:text-[52px]">
                Make every learner fluent in the language of AI and creation.
              </h2>
              <div className="mt-7 grid gap-5 text-[17px] leading-8 text-[#747b8f]">
                <p>
                  We believe AI should be learned through practice, not panic.
                  Lyfshilp gives students a structured way to understand tools,
                  ask better questions, and build work that has a clear purpose.
                </p>
                <p>
                  Our programmes combine educators, founders, mentors, and
                  project-based learning so students do not just consume AI
                  content. They create with it, critique it, and present it with
                  confidence.
                </p>
              </div>
            </div>

            <div className="relative min-h-[460px] overflow-hidden rounded-sm bg-[#101116]">
              <NextImage
                src={labImage}
                alt="Learners and mentors working together in an AI project lab"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover opacity-86"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#101116]/84 p-6 text-white sm:p-8">
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                  Learning Model
                </p>
                <p className="mt-3 max-w-xl text-[24px] font-black leading-tight sm:text-[32px]">
                  Classroom energy, startup discipline, and AI-native tools in
                  one guided experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf4] px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#8a90a3]">
                  How It Works
                </p>
                <h2 className="max-w-3xl text-[38px] font-black leading-tight tracking-normal text-[#272835] sm:text-[52px]">
                  A practical AI learning system, not a lecture series.
                </h2>
              </div>
              <p className="max-w-md text-[16px] leading-7 text-[#747b8f]">
                Every pathway moves students from awareness to application,
                then into feedback, refinement, and public presentation.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {learningSystem.map((item) => (
                <article
                  key={item.title}
                  className="group min-h-[330px] rounded-sm border border-[#e6e8ef] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#272835]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <PixelMark accent={item.accent} />
                    <span className="text-[13px] font-black tracking-[0.2em] text-[#c7cad6]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-8 text-[28px] font-black leading-tight tracking-normal text-[#272835]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[16px] leading-7 text-[#747b8f]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#101116] px-6 py-20 text-white sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[430px] overflow-hidden rounded-sm">
              <NextImage
                src={showcaseImage}
                alt="Students presenting a project during a Lyfshilp showcase"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#101116]/18" aria-hidden="true" />
            </div>

            <div>
              <p className="mb-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                Who We Serve
              </p>
              <h2 className="text-[38px] font-black leading-tight tracking-normal sm:text-[52px]">
                AI pathways for schools, colleges, and teams.
              </h2>
              <div className="mt-10 grid gap-7">
                {audiences.map((audience, index) => (
                  <div
                    key={audience.title}
                    className="grid gap-4 border-t border-white/14 pt-7 sm:grid-cols-[76px_1fr]"
                  >
                    <span className="text-[15px] font-black tracking-[0.22em] text-white/28">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[24px] font-black tracking-normal">
                        {audience.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[16px] leading-7 text-white/62">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#8a90a3]">
                  The People Behind It
                </p>
                <h2 className="max-w-3xl text-[38px] font-black leading-tight tracking-normal text-[#272835] sm:text-[52px]">
                  Educators, AI practitioners, and mentors shaping learner
                  confidence.
                </h2>
              </div>
              <p className="max-w-md text-[16px] leading-7 text-[#747b8f]">
                The Lyfshilp team keeps learning grounded in practical outcomes:
                useful tools, stronger portfolios, sharper thinking, and a
                community that keeps building.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-sm border border-[#e6e8ef] bg-[#fffaf4]"
                >
                  <div className="relative h-[310px]">
                    <NextImage
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[22px] font-black tracking-normal text-[#272835]">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-6 text-[#747b8f]">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf4] px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#8a90a3]">
              What Guides Us
            </p>
            <h2 className="max-w-4xl text-[38px] font-black leading-tight tracking-normal text-[#272835] sm:text-[52px]">
              Principles for an AI education company that still feels human.
            </h2>

            <div className="mt-14 grid gap-8 border-t border-[#e6e8ef] pt-10 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <div key={principle.title}>
                  <span className="text-[14px] font-black tracking-widest text-[#c7cad6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[25px] font-black leading-tight tracking-normal text-[#272835]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#747b8f]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-6 border-t border-[#e6e8ef] pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-[26px] font-black leading-tight tracking-normal text-[#272835] sm:text-[34px]">
                Ready to help learners understand AI by building with it?
              </p>
              <Link
                href="/community"
                className="inline-flex h-14 w-fit items-center gap-3 rounded-full bg-[#272835] px-7 text-[15px] font-black text-white transition-transform hover:-translate-y-0.5"
              >
                Start with Lyfshilp
                <ArrowGlyph />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LyfshilpFooter />
    </div>
  );
}
