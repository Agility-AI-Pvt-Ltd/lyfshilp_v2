import { notFound } from "next/navigation";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";

type RouteContent = {
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  accent: string;
};

const routeContent: Record<string, RouteContent> = {
  products: {
    title: "Products built for AI-first learning.",
    eyebrow: "Products",
    description:
      "Explore Lyfshilp tools, programmes, and learning experiences designed to help learners move from curiosity to shipped work.",
    points: [
      "Project-led learning journeys",
      "Mentor-guided AI workflows",
      "Community spaces for feedback and collaboration",
    ],
    accent: "bg-[#CFFD53]",
  },
  "futurex-fellowship": {
    title: "A fellowship for ambitious student builders.",
    eyebrow: "Lyfshilp Fellowship",
    description:
      "A mentored pathway for learners who want to build AI products, understand business problems, and develop founder-level confidence.",
    points: [
      "Weekly mentor sessions",
      "Hands-on product sprints",
      "Portfolio-worthy outcomes",
    ],
    accent: "bg-[#5e22ff]",
  },
  "summer-programme": {
    title: "AI learning that turns curiosity into real projects.",
    eyebrow: "AI Scholar Program",
    description:
      "A guided program for students to build practical AI literacy, use modern tools responsibly, and finish with work they can demonstrate.",
    points: [
      "Practical AI and prompt engineering",
      "Responsible, project-led learning",
      "Demo-ready student projects",
    ],
    accent: "bg-[#10b981]",
  },
  "for-schools": {
    title: "Future-ready AI learning for schools.",
    eyebrow: "For Schools",
    description:
      "Age-aware AI literacy, creative technology projects, and practical exposure that helps school students learn by making.",
    points: [
      "Curriculum-aligned workshops",
      "Student-friendly AI tools",
      "Teacher and cohort support",
    ],
    accent: "bg-[#ff492c]",
  },
  "for-colleges": {
    title: "Campus programmes aligned with real industry work.",
    eyebrow: "For Colleges",
    description:
      "Lyfshilp helps colleges run builder-focused AI programmes that turn student potential into visible projects and career momentum.",
    points: [
      "Startup and product labs",
      "Industry-style project briefs",
      "Mentor review and showcases",
    ],
    accent: "bg-[#ffd166]",
  },
  "corporate-ai": {
    title: "AI enablement for modern teams.",
    eyebrow: "Corporate AI",
    description:
      "Practical training and adoption support for teams that want to use AI responsibly in everyday work, decision-making, and delivery.",
    points: [
      "Role-specific AI workflows",
      "Team training and playbooks",
      "Implementation-focused sessions",
    ],
    accent: "bg-[#242532]",
  },
  community: {
    title: "A community where student founders build together.",
    eyebrow: "Community",
    description:
      "Connect with learners, mentors, and builders across India to share ideas, find collaborators, and keep momentum alive.",
    points: [
      "Founder circles and peer feedback",
      "AMAs, demo days, and live sessions",
      "Nationwide builder network",
    ],
    accent: "bg-[#5e22ff]",
  },
  podcast: {
    title: "Conversations on AI, work, learning, and builders.",
    eyebrow: "Podcast",
    description:
      "Listen to practical conversations with people building at the edge of education, AI, entrepreneurship, and meaningful work.",
    points: [
      "Founder and mentor interviews",
      "Student builder stories",
      "Ideas for future-ready learning",
    ],
    accent: "bg-[#10b981]",
  },
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Privacy",
    description:
      "A clear privacy page for how Lyfshilp intends to handle learner, partner, and community information.",
    points: [
      "Data is collected to operate and improve Lyfshilp experiences",
      "Personal information is handled with care and limited access",
      "Contact the team for privacy questions or data requests",
    ],
    accent: "bg-[#747b8f]",
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Terms",
    description:
      "The basic terms for using Lyfshilp programmes, community spaces, and digital learning experiences.",
    points: [
      "Use Lyfshilp services respectfully and lawfully",
      "Programme details may vary by cohort or partner",
      "Contact the team for questions about participation or access",
    ],
    accent: "bg-[#272835]",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(routeContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const content = routeContent[slug];

  if (!content) {
    return {};
  }

  return {
    title: `${content.eyebrow} | Lyfshilp`,
    description: content.description,
  };
}

export default async function InfoPage({ params }: PageProps) {
  const { slug } = await params;
  const content = routeContent[slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#272835]">
      <LyfshilpNavbar />
      <main className="pt-20">
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 text-[13px] font-semibold uppercase tracking-widest text-[#8a90a3]">
                {content.eyebrow}
              </p>
              <h1 className="max-w-4xl text-[48px] font-black leading-[1.04] tracking-normal text-[#272835] sm:text-[70px] lg:text-[86px]">
                {content.title}
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-[#747b8f]">
                {content.description}
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-white p-8 shadow-[0_22px_70px_rgba(21,24,38,0.10)]">
              <span
                className={`absolute right-0 top-0 size-16 ${content.accent}`}
                aria-hidden="true"
              />
              <span
                className={`absolute bottom-0 left-0 size-24 ${content.accent} opacity-20`}
                aria-hidden="true"
              />
              <div className="relative z-10 grid gap-5">
                {content.points.map((point, index) => (
                  <div
                    key={point}
                    className="grid grid-cols-[auto_1fr] gap-4 border-b border-dashed border-[#e1e4ec] pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="grid size-10 place-items-center rounded-sm bg-[#f8fafb] text-[13px] font-black text-[#272835]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-[18px] font-semibold leading-7 text-[#272835]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <LyfshilpFooter />
    </div>
  );
}
