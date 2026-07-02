import { notFound } from "next/navigation";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { ScrollingMetrics } from "@/src/components/ui/scrolling-metrics";
import { FutureXIncubatorSection } from "@/src/components/ui/futurex-incubator-section";
import { FutureXTimelineSection } from "@/src/components/ui/futurex-timeline";
import { FutureXPlatformSection } from "@/src/components/ui/futurex-platform-section";
import { FutureXLeaderboardSection } from "@/src/components/ui/futurex-leaderboard-section";
import { FutureXSpotlightSection } from "@/src/components/ui/futurex-spotlight-section";
import { FutureXEventsSection } from "@/src/components/ui/futurex-events-section";

type RouteContent = {
  title: string;
  eyebrow: string;
  description: string;
  points?: string[];
  metrics?: { value: string; label: string }[];
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
    title: "International FutureX Fellowship",
    eyebrow: "Flagship Program · Grades 6–12",
    description:
      "Build a real startup from scratch. Pitch to investors. Earn an international certification. A 9-month online incubator designed for the next generation of founders.",
    metrics: [
      { value: "36", label: "Sessions" },
      { value: "9", label: "Months" },
      { value: "100%", label: "Online" },
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
    title: "Launching soon.",
    eyebrow: "For Colleges",
    description:
      "Our builder-focused college programme is being prepared for launch. It will turn student potential into visible projects and career momentum.",
    points: [
      "Startup and product labs",
      "Industry-style project briefs",
      "Mentor review and showcases",
    ],
    accent: "bg-[#ffd166]",
  },
  "corporate-ai": {
    title: "Launching soon.",
    eyebrow: "Corporate AI",
    description:
      "Our practical AI enablement programme for modern teams is being prepared for launch.",
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
          <div
            className={`mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] ${
              content.metrics ? "lg:items-start" : "lg:items-end"
            }`}
          >
            <div
              className={content.metrics ? "lg:sticky lg:top-32" : undefined}
            >
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#e1e4ec] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${content.accent} opacity-40`} />
                  <span className={`relative inline-flex size-2 rounded-full ${content.accent}`} />
                </span>
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#4a4f60]">
                  {content.eyebrow}
                </p>
              </div>
              <h1 className="max-w-4xl text-[48px] font-black leading-[1.04] tracking-normal text-[#272835] sm:text-[70px] lg:text-[86px]">
                {content.title.includes("FutureX")
                  ? content.title.split("FutureX").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="whitespace-nowrap">
                            Future<span className={`inline-block cursor-default transition-all duration-500 hover:-rotate-180 hover:scale-110 ${content.accent.replace("bg-", "text-")}`}>X</span>
                          </span>
                        )}
                      </span>
                    ))
                  : content.title}
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-[#747b8f]">
                {content.description}
              </p>
            </div>

            {content.metrics ? (
              <ScrollingMetrics
                metrics={content.metrics}
                accentClassName={content.accent}
              />
            ) : (
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
                  {(content.points ?? []).map((point, index) => (
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
            )}
          </div>
        </section>
        {slug === "futurex-fellowship" && (
          <>
            <FutureXIncubatorSection />
            <FutureXTimelineSection />
            <FutureXPlatformSection />
            <FutureXLeaderboardSection />
            <FutureXEventsSection />
            <FutureXSpotlightSection />
          </>
        )}
      </main>
      <LyfshilpFooter />
    </div>
  );
}
