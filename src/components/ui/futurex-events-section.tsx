import React from "react";

const events = [
  {
    tag: "ORIENTATION",
    tagColor: "bg-[#334155] text-white",
    topGradient: "from-[#1e293b] to-[#0f172a]",
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
    title: "Hands-On Building",
    subtitle: "Weekly Sessions",
    bottomTitle: "Interactive Sessions",
    description:
      "Live chat buzzing, students sharing their AI experiments in real-time, mentors guiding and encouraging — every session is a workshop, not a lecture.",
  },
  {
    tag: "🏆 DEMO DAY",
    tagColor: "bg-[#ef4444] text-white",
    topGradient: "from-[#171717] to-[#0a0a0a]",
    title: "Student Showcase",
    subtitle: "Cohort 1 • Demo Day",
    bottomTitle: "Demo Day — The Grand Finale",
    description:
      "Students present their AI tools to judges. A separate, dedicated day where every builder gets their moment on stage.",
  },
];

export function FutureXEventsSection() {
  return (
    <section className="bg-[#faf8f5] px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1200px]">
        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#f0ebe1] bg-white shadow-xl shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
            >
              {/* Top Half (Dark Header) */}
              <div
                className={`relative flex h-[220px] flex-col items-center justify-center bg-gradient-to-b ${event.topGradient} p-6 text-center`}
              >
                {/* Tag */}
                <div
                  className={`absolute right-4 top-4 rounded-[6px] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest ${event.tagColor} shadow-sm`}
                >
                  {event.tag}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-[26px] font-black tracking-tight text-white drop-shadow-sm">
                  {event.title}
                </h3>
                <p className="text-[15px] text-gray-400">{event.subtitle}</p>
              </div>

              {/* Bottom Half (White Content) */}
              <div className="flex flex-grow flex-col p-6 sm:p-8">
                <h4 className="mb-3 text-[18px] font-bold text-[#111827]">
                  {event.bottomTitle}
                </h4>
                <p className="mb-2 text-[15px] leading-relaxed text-[#505a66]">
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
