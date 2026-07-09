"use client";

import Link from "next/link";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { SchoolsTimelineSection } from "@/src/components/ui/schools-timeline";

const learnCards = [
  {
    icon: "🧠",
    title: "AI Literacy & Ethics",
    description:
      "Understand what AI is, how it works, and when to trust it. Students explore bias, accuracy, and responsible use before touching any tool.",
  },
  {
    icon: "💬",
    title: "Prompt Engineering",
    description:
      "Learn to talk to AI effectively. Build a subject prompt library and master the skill that makes every other AI tool more powerful.",
  },
  {
    icon: "🛠️",
    title: "Build AI Tools",
    description:
      "Create working AI-powered applications — no coding required. From study systems to mentor bots, students ship real tools by session 7.",
  },
  {
    icon: "🎤",
    title: "Pitch & Present",
    description:
      "Learn to tell the story of what you built. Practise pitch skills and present to real judges on Demo Day — just like a founder would.",
  },
];

const demoDaySteps = [
  {
    icon: "🎯",
    title: "Pitch Rehearsal",
    description:
      "Students practise their presentations, refine their story, and prepare to face the judges with confidence.",
  },
  {
    icon: "🎤",
    title: "Live Showcase",
    description:
      "Each student presents their working AI tool to a panel of judges — teachers, mentors, and industry experts — via Zoom.",
  },
  {
    icon: "🧑‍⚖️",
    title: "Judge Feedback",
    description:
      "Judges evaluate originality, problem-solving, technical execution, and presentation skills. Real feedback, not participation trophies.",
  },
  {
    icon: "📜",
    title: "Certificate Award",
    description:
      "Every student who completes the showcase receives the AI Scholar Certificate — a credential recognising their AI literacy journey.",
  },
];

const communitySpaces = [
  {
    initial: "F",
    name: "FutureX Titans Announcements",
    description:
      "Official updates channel where students receive new assignments, homework updates, schedules, challenges, and important announcements.",
    stats: "119 members · 26 posts",
  },
  {
    initial: "T",
    name: "Titans Submission Hub",
    description:
      "Where students submit assignments, share projects, and learn AI, technology, and problem solving — together. The most active community space.",
    stats: "137 members · 717 posts",
  },
];

const sessionHighlights = [
  {
    tag: "Orientation",
    title: "The Game Has Changed",
    subtitle: "Orientation Webinar",
    description:
      "Students discover why AI changes everything — with real data on teen entrepreneurs worldwide and young Indian founders already building.",
    meta: "",
    videoSrc: "/videos/ai-scholar-track/session-energy.mp4",
  },
  {
    tag: "Live Session",
    title: "Hands-On Building",
    subtitle: "Weekly Sessions",
    description:
      "Live chat buzzing, students sharing their AI experiments in real-time, mentors guiding and encouraging — every session is a workshop, not a lecture.",
    meta: "",
    videoSrc: "/videos/ai-scholar-track/student-showcase.mp4",
  },
  {
    tag: "Demo Day",
    title: "Student Showcase",
    subtitle: "Cohort 1 · Demo Day",
    description:
      "Students present their AI tools to judges. A separate, dedicated day where every builder gets their moment on stage.",
    meta: "",
    videoSrc: "/videos/ai-scholar-track/demo-day.mp4",
  },
];

const promptObservations = [
  "Where was AI's answer useful and specific?",
  "Where did it sound generic or like Wikipedia?",
  "What surprised you — something you did not expect?",
];

export default function AIScholarTrackPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030508] font-sans text-white antialiased">
      <LyfshilpNavbar />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 pt-32 pb-24 sm:px-8 lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[#030508]" />
            <div className="absolute -right-40 -top-40 size-[700px] rounded-full bg-[#10b981]/8 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-[#CFFD53]/6 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#10b981]">
                In-School Program
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/70">
                All Grades
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-[44px] font-black leading-[1.06] tracking-tight sm:text-[60px] lg:text-[76px]">
              AI Scholar Track
            </h1>

            <p className="mt-6 max-w-3xl text-[16px] font-medium leading-relaxed text-white/70 sm:text-[18px]">
              Your school&apos;s gateway to AI literacy. Seven hands-on sessions
              during school hours — then a dedicated Demo Day where students
              showcase what they built to a panel of judges.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {[
                { value: "7", label: "Sessions" },
                { value: "+1", label: "Demo Day" },
                { value: "In-School", label: "Delivery" },
                { value: "🏆", label: "Certificate" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/2 p-5 sm:p-6"
                >
                  <div className="text-[28px] font-black leading-none text-[#10b981] sm:text-[36px]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="mailto:service.excellence@lyfshilpacademy.com?subject=AI%20Scholar%20Track%20-%20School%20Partnership"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#10b981] px-8 text-[15px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#0e9f6e] shadow-md shadow-[#10b981]/10"
              >
                Partner with Your School →
              </Link>
            </div>
          </div>
        </section>

        {/* What Students Learn */}
        <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                What Students Learn
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[48px]">
                AI literacy meets real building
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
                Every session ends with something real that students made — not
                a quiz, not a worksheet, a working output they can show.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {learnCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[24px] border border-white/10 bg-white/2 p-8 transition-colors hover:border-[#10b981]/30"
                >
                  <span className="text-[32px]" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3 className="mt-4 text-[22px] font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path — reused timeline */}
        <SchoolsTimelineSection />

        {/* Demo Day */}
        <section className="border-t border-white/10 bg-[#030508] px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[32px] border border-[#CFFD53]/25 bg-[#CFFD53]/5 p-8 sm:p-12 lg:p-14">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
                Separate Day · The Grand Finale
              </p>
              <h2 className="mt-4 text-[32px] font-black leading-tight tracking-tight text-white sm:text-[44px]">
                🏆 Demo Day — AI Scholar Showcase
              </h2>
              <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
                After 7 sessions of learning and building, students take the
                stage on a dedicated day to present their AI-powered projects to
                a live panel of judges. This isn&apos;t a classroom exercise —
                it&apos;s a real showcase.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-[28px] font-black text-white sm:text-[36px]">
                How Demo Day Works
              </h3>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {demoDaySteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-white/2 p-7"
                  >
                    <span className="text-[28px]" aria-hidden="true">
                      {step.icon}
                    </span>
                    <h4 className="mt-4 text-[20px] font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: "29–51", label: "Participants per Demo" },
                { value: "Live", label: "On Zoom · Recorded" },
                { value: "8+", label: "Judges & Mentors" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/2 p-6 text-center"
                >
                  <div className="text-[32px] font-black text-[#CFFD53]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[13px] font-bold uppercase tracking-wider text-white/40">
              Real Projects · Not Simulations
            </p>
          </div>
        </section>

        {/* Inside a Session */}
        <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                Inside a Session
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[48px]">
                Your first real AI conversation
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
                From Session 1, students don&apos;t just hear about AI — they
                use it. Here&apos;s the actual prompt they start with.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#0b0c10] p-8">
                <p className="text-[13px] font-bold uppercase tracking-wider text-[#10b981]">
                  Open your AI tool. Type this prompt.
                </p>
                <p className="mt-2 text-[13px] text-white/50">
                  Replace the brackets with your details.
                </p>
                <blockquote className="mt-6 rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 p-6 text-[14px] italic leading-relaxed text-white/85 sm:text-[15px]">
                  &quot;I am a Grade [X] student in India. I have noticed the
                  following problem: [your problem from the Canvas]. Can you help
                  me understand:
                  <br />
                  (1) Why does this problem exist?
                  <br />
                  (2) Who else has it?
                  <br />
                  (3) Have people tried to solve it already?&quot;
                </blockquote>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/2 p-8">
                <p className="text-[15px] font-semibold text-white">
                  While AI responds, notice three things:
                </p>
                <ol className="mt-6 space-y-4">
                  {promptObservations.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[auto_1fr] gap-4 text-[15px] leading-relaxed text-white/75"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#10b981]/20 text-[13px] font-black text-[#10b981]">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="border-t border-white/10 bg-[#030508]/50 px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                Community
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[48px]">
                FutureX Titans — where students connect
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
                Every scholar joins a thriving community of young innovators who
                share projects, submit assignments, and learn together.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {communitySpaces.map((space) => (
                <div
                  key={space.name}
                  className="rounded-[24px] border border-white/10 bg-white/2 p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#10b981]/15 text-[18px] font-black text-[#10b981]">
                      {space.initial}
                    </span>
                    <div>
                      <h3 className="text-[20px] font-bold text-white">
                        {space.name}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                        {space.description}
                      </p>
                      <p className="mt-4 text-[12px] font-bold uppercase tracking-wider text-white/40">
                        {space.stats}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What It Looks Like */}
        <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
                What It Looks Like
              </p>
              <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight sm:text-[48px]">
                Real sessions. Real students. Real energy.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
                Every session is live on Zoom with mentors, interactive chat,
                and hands-on activities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {sessionHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/2 transition-colors hover:border-[#10b981]/30"
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                    <video
                      src={item.videoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#10b981]">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 text-[22px] font-black text-white">
                      {item.title}
                    </h3>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-white/45">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/65">
                      {item.description}
                    </p>
                    {item.meta && (
                      <p className="mt-6 border-t border-white/10 pt-4 text-[13px] font-semibold text-white/50">
                        {item.meta}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-white/10 bg-linear-to-b from-[#030508] to-[#090d16] px-6 py-28 text-center sm:px-8 lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/3 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-[40px] font-black leading-[1.05] tracking-tight text-white sm:text-[56px]">
              Bring AI Scholar Track to{" "}
              <span className="text-[#CFFD53]">your school.</span>
            </h2>
            <p className="mx-auto mt-6 mb-12 max-w-2xl text-[18px] font-medium leading-relaxed text-white/70 sm:text-[22px]">
              Seven sessions, one Demo Day, and a certificate every student can
              be proud of — delivered during school hours.
            </p>
            <Link
              href="mailto:service.excellence@lyfshilpacademy.com?subject=AI%20Scholar%20Track%20-%20School%20Partnership"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#10b981] px-10 text-[16px] font-black text-white shadow-lg shadow-[#10b981]/15 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Partner with Your School
            </Link>
          </div>
        </section>
      </main>

      <LyfshilpFooter />
    </div>
  );
}
