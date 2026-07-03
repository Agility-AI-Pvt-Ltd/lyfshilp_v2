import React from "react";

const events = [
  {
    tag: "ORIENTATION",
    tagColor: "bg-[#334155] text-white",
    topGradient: "from-[#183456] to-[#10233c]",
    icon: "🎓",
    title: "The Game Has Changed",
    subtitle: "Orientation Webinar",
    bottomTitle: "Kickoff Session",
    description:
      "Students discover why AI changes everything — with real data on teen entrepreneurs worldwide and young Indian founders already building.",
  },
  {
    tag: "LIVE SESSION",
    tagColor: "bg-[#ef4444] text-white",
    topGradient: "from-[#1e1b4b] to-[#0f172a]",
    icon: "💡",
    title: "Hands-On Building",
    subtitle: "Weekly Sessions",
    bottomTitle: "Interactive Sessions",
    description:
      "Live chat buzzing, students sharing their AI experiments in real-time, mentors guiding and encouraging — every session is a workshop, not a lecture.",
  },
  {
    tag: "🏆 DEMO DAY",
    tagColor: "bg-[#ef4444] text-white",
    topGradient: "from-[#2a1a10] via-[#171717] to-[#0f172a]",
    icon: "🎤",
    title: "Student Showcase",
    subtitle: "Cohort 1 • Demo Day",
    bottomTitle: "Demo Day — The Grand Finale",
    description:
      "Students present their AI tools to judges. A separate, dedicated day where every builder gets their moment on stage.",
  },
];

export function FutureXEventsSection() {
  return (
    <section className="relative z-50 bg-white px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
            What It Looks Like
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-tight tracking-tight text-[#171827] sm:text-[54px] lg:text-[64px]">
            Real sessions. Real students. Real energy.
          </h2>
          <p className="mt-6 max-w-3xl text-[18px] font-medium leading-relaxed text-[#5c6070] sm:text-[20px]">
            Every session is live on Zoom with mentors, interactive chat, and hands-on activities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[18px] border border-[#eceef5] bg-white shadow-[0_16px_42px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(15,23,42,0.1)]"
            >
              <div
                className={`relative flex h-[190px] flex-col items-center justify-center bg-gradient-to-br ${event.topGradient} p-5 text-center`}
              >
                <div
                  className={`absolute right-4 top-4 rounded-[7px] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] ${event.tagColor} shadow-sm`}
                >
                  {event.tag}
                </div>

                <div className="mb-6 text-[34px]" aria-hidden="true">
                  {event.icon}
                </div>
                <h3 className="font-serif text-[22px] font-black tracking-tight text-white drop-shadow-sm">
                  {event.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium text-white/45">
                  {event.subtitle}
                </p>
              </div>

              <div className="flex flex-grow flex-col p-6 sm:p-7">
                <h4 className="text-[20px] font-black leading-tight text-[#171827]">
                  {event.bottomTitle}
                </h4>
                <p className="mt-4 text-[16px] font-medium leading-7 text-[#5c6070]">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
