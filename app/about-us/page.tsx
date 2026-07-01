import NextImage from "next/image";
import Link from "next/link";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { MentorsSection } from "@/src/components/about/mentors-section";
import { HowWeWork } from "@/src/components/ui/how-we-work";

export const metadata = {
  title: "About Us | Lyfshilp",
  description:
    "Lyfshilp is an AI-first education platform helping students learn AI by building projects, products, and future-ready confidence with mentors.",
};

const heroImage =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1800&q=85";

const labImage = "/images/about-team/ai-project-lab.png";

const showcaseCollage = [
  {
    src: "/images/about-collage/reroute-demo.png",
    alt: "A learner presenting the ReRoute sustainability project during an online demo",
    wrapperClassName:
      "h-[240px] sm:col-span-2 sm:h-[320px] lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:h-[400px]",
    imageClassName: "object-cover",
  },
  {
    src: "/images/about-collage/student-demo-day.png",
    alt: "A student presenting during a Lyfshilp online demo day",
    wrapperClassName:
      "h-[180px] lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:h-[170px]",
    imageClassName: "object-cover",
  },
  {
    src: "/images/about-collage/creativity-compass-demo.png",
    alt: "A student showcasing the Creativity Compass project to mentors",
    wrapperClassName:
      "h-[180px] lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:h-[170px]",
    imageClassName: "object-cover",
  },
  {
    src: "/images/about-collage/near-me-demo.jpg",
    alt: "A student demonstrating the NearMe location discovery project",
    wrapperClassName:
      "h-[200px] sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:h-[220px]",
    imageClassName: "object-contain",
  },
];

const proofPoints = [
  { value: "6,000+", label: "students introduced to AI and product thinking" },
  { value: "38", label: "institutions engaged through programmes and labs" },
  { value: "500+", label: "student founders and builders in the community" },
  { value: "NEP", label: "aligned learning that blends skills and application" },
];

const droppingAudiences = ["Students", "Schools", "Colleges", "EVERYONE!"];

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
    name: "Sharadd Raaj Utsav",
    role: "Founder & CEO - Lyfshilp Academy & Agility AI",
    image: "/images/about-team/mentor-1-fill.png",
    imageClassName: "scale-125 object-[58%_48%]",
  },
  {
    name: "Shreya Sinha",
    role: "Co-Founder & COO - Lyfshilp Academy & Agility AI",
    image: "/images/about-team/mentor-2-fill.png",
    imageClassName: "scale-125 object-[50%_42%]",
  },
  {
    name: "Aryan Shukla",
    role: "Co-Founder & CTO - Lyfshilp Academy & Agility AI",
    image: "/images/about-team/mentor-3.png",
    imageClassName: "object-center",
  },
];

const mentorProfiles = [
  {
    name: "Sharadd Raaj Utsav",
    role: "Founder & CEO - Lyfshilp Academy & Agility AI",
    credentials:
      "B.Tech, NSUT Delhi; MBA in Rural Management, IRMA Anand; advanced studies in Data Science & AI, BITS Pilani.",
    detail:
      "Architect of Lyfshilp Academy's fellowship and learning frameworks. His work spans Amul, Resil agritech, the Gandhi Fellowship with Piramal Foundation, International Trade Centre research in Geneva, and the Prime Minister's Rural Fellowship programme.",
    focus: "Programme vision, strategy, and partnerships for FutureX AI.",
  },
  {
    name: "Shreya Sinha",
    role: "Co-Founder & COO - Lyfshilp Academy & Agility AI",
    credentials:
      "B.Tech, NSUT Delhi; PGP in Digital Marketing & Strategic Marketing, MICA Ahmedabad; Economics at National School of Drama.",
    detail:
      "Nearly six years at Piramal Pharma Solutions leading digital marketing and analytics, plus two years with Piramal Foundation across 63 rural government schools in Rajasthan.",
    focus: "Curriculum design, mentor engagement, and student experience.",
  },
  {
    name: "Aryan Shukla",
    role: "Co-Founder & CTO - Lyfshilp Academy & Agility AI",
    credentials:
      "Integrated B.Tech + M.Tech in Mathematics and Computing from IIT (BHU) Varanasi.",
    detail:
      "Owns the full technology stack across AI systems, agentic architectures, retrieval-augmented knowledge systems, and automation pipelines. Previously a Machine Learning Engineer at Samsung Research Institute, Delhi, with an Expert rating on Codeforces.",
    focus: "AI systems, platform architecture, and technical mentorship.",
  },
  {
    name: "C.A. Saurabh Jain",
    role: "Co-Founder - Lyfshilp Academy & Agility AI",
    credentials:
      "CA (ICAI) , CS-II , MBA (ICAI) , IMSIP (ICAI)",
    detail:
      "A finance, compliance, and strategic operations leader with more than a decade of experience bringing financial rigour and governance depth to the FutureX fellowship team.",
    focus: "Financial strategy, regulatory compliance, and operational efficiency.",
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

            <div className="relative min-h-[460px] overflow-hidden rounded-2xl bg-[#101116] shadow-[0_24px_64px_rgba(0,0,0,0.38)] ring-1 ring-black/10">
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

        <HowWeWork />

        <section
          className="overflow-hidden bg-[#fffaf4] px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
          aria-label="Lyfshilp learner project showcase"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {showcaseCollage.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl bg-[#101116] shadow-[0_16px_40px_rgba(0,0,0,0.22)] ring-1 ring-black/10 ${image.wrapperClassName}`}
              >
                <NextImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 1280px, (min-width: 640px) 50vw, 100vw"
                  className={`${image.imageClassName} transition-transform duration-500 group-hover:scale-[1.015]`}
                />
              </div>
            ))}

            <div className="flex min-h-[360px] flex-col rounded-2xl bg-[#101116] p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.26)] sm:col-span-2 sm:p-7 lg:col-span-2 lg:col-start-5 lg:row-start-2 lg:row-span-2">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                Who We Serve
              </p>
              <h2 className="mt-3 text-[28px] font-black leading-tight tracking-normal sm:text-[32px]">
                AI pathways for schools, colleges, and teams.
              </h2>
              <div className="mt-auto grid gap-3 pt-6">
                {audiences.map((audience, index) => (
                  <div
                    key={audience.title}
                    className="grid grid-cols-[30px_1fr] gap-2 border-t border-white/14 pt-3"
                  >
                    <span className="pt-0.5 text-[11px] font-black tracking-[0.16em] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-black tracking-normal">
                        {audience.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-5 text-white/58">
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
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-sm border border-[#e6e8ef] bg-[#fffaf4]"
                >
                  <div className="relative h-[310px] overflow-hidden">
                    <NextImage
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover ${member.imageClassName}`}
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

            <MentorsSection mentors={mentorProfiles} />
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
