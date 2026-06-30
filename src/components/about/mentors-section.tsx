"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface Mentor {
  name: string;
  role: string;
  credentials: string;
  detail: string;
  focus: string;
}

const cardThemes = [
  {
    accent: "bg-[#CFFD53]",
    number: "text-[#566b00]",
    wash: "from-[#CFFD53]/20",
  },
  {
    accent: "bg-[#8f6bff]",
    number: "text-white",
    wash: "from-[#8f6bff]/18",
  },
  {
    accent: "bg-[#2fd4a0]",
    number: "text-[#063f30]",
    wash: "from-[#2fd4a0]/18",
  },
  {
    accent: "bg-[#ff7058]",
    number: "text-white",
    wash: "from-[#ff7058]/18",
  },
] as const;

const cardRotations = [-1.1, 0.8, -0.6, 0.9];

function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const theme = cardThemes[index % cardThemes.length];
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 35%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [72, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0, 0.7, 1]);

  return (
    <div
      ref={cardRef}
      className="relative pb-8 sm:min-h-[620px] sm:pb-0 lg:min-h-[560px]"
    >
      <div
        className="sm:sticky"
        style={{
          top: `${86 + index * 16}px`,
          zIndex: index + 1,
          transform: reduceMotion
            ? undefined
            : `rotate(${cardRotations[index]}deg)`,
        }}
      >
        <motion.article
          style={reduceMotion ? undefined : { y, scale, opacity }}
          className="relative overflow-hidden rounded-3xl border border-black/8 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:p-8 lg:p-9"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.wash} via-transparent to-transparent`}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-x-0 top-0 h-2 ${theme.accent}`}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-5">
              <p className="max-w-xl text-[12px] font-black uppercase leading-5 tracking-[0.16em] text-[#747b8f]">
                {mentor.role}
              </p>
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-full text-[12px] font-black tracking-[0.12em] ${theme.accent} ${theme.number}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 text-[30px] font-black leading-tight tracking-normal text-[#272835] sm:text-[38px]">
              {mentor.name}
            </h3>

            <div className="mt-7 grid gap-6 border-t border-[#e6e8ef] pt-6 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8a90a3]">
                  Education
                </p>
                <p className="mt-3 text-[14px] font-bold leading-6 text-[#272835]">
                  {mentor.credentials}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8a90a3]">
                  Experience
                </p>
                <p className="mt-3 text-[14px] leading-6 text-[#747b8f]">
                  {mentor.detail}
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#101116] px-5 py-4 text-white">
              <span
                className={`mt-1.5 size-2 shrink-0 rounded-full ${theme.accent}`}
                aria-hidden="true"
              />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
                  FutureX Focus
                </p>
                <p className="mt-1 text-[14px] font-bold leading-6">
                  {mentor.focus}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export function MentorsSection({ mentors }: { mentors: Mentor[] }) {
  return (
    <section className="mt-20 border-t border-[#e6e8ef] pb-8 pt-14">
      <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <div className="h-fit lg:sticky lg:top-28">
          <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#8a90a3]">
            FutureX Leadership & Mentors
          </p>
          <h2 className="mt-5 max-w-lg text-[38px] font-black leading-tight tracking-normal text-[#272835] sm:text-[50px]">
            Four leaders shaping one practical AI learning movement.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-7 text-[#747b8f]">
            Scroll to meet the people guiding programme vision, learner
            experience, technology, and operations.
          </p>
          <div className="mt-8 flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.16em] text-[#5e22ff]">
            <span className="h-px w-12 bg-[#5e22ff]" aria-hidden="true" />
            Keep scrolling
          </div>
        </div>

        <div className="relative">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
