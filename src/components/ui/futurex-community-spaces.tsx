"use client";

import { useRef } from "react";

type CommunitySpace = {
  name: string;
  initials: string;
  description: string;
  members: number;
  posts: number;
  accent: string;
};

const featuredSpaces: CommunitySpace[] = [
  {
    name: "FutureX Titans Announcements",
    initials: "F",
    description:
      "Official updates channel where students receive new assignments, homework updates, schedules, challenges, and important announcements.",
    members: 119,
    posts: 26,
    accent: "#526df4",
  },
  {
    name: "Titans Submission Hub",
    initials: "T",
    description:
      "Where students submit assignments, share projects, and learn AI, technology, and problem solving — together. The most active community space.",
    members: 137,
    posts: 717,
    accent: "#e58a35",
  },
];

const communitySpaces: CommunitySpace[] = [
  {
    name: "AI Shipyard",
    initials: "A",
    description:
      "Be like pirates — explore boldly, learn by building, break limits, and create anything you can with AI.",
    members: 31,
    posts: 13,
    accent: "#ef4444",
  },
  {
    name: "Announcements",
    initials: "A",
    description: "Official updates from the FutureX team.",
    members: 22,
    posts: 1,
    accent: "#38bdf8",
  },
  {
    name: "Lessons & Missions",
    initials: "L",
    description:
      "A community for assignments, missions, session work, and fellowship learning.",
    members: 37,
    posts: 189,
    accent: "#a855f7",
  },
  {
    name: "AI Builder's Spell Book",
    initials: "A",
    description:
      "Showcase the tools, experiments, and projects you build throughout the fellowship.",
    members: 33,
    posts: 0,
    accent: "#42c28a",
  },
  {
    name: "Order of FutureX",
    initials: "O",
    description:
      "Post your session work and tasks. Make them interesting, creative, and intuitive.",
    members: 38,
    posts: 18,
    accent: "#4385f5",
  },
];

const allSpaces = [...featuredSpaces, ...communitySpaces];

function SpaceStats({ space }: { space: CommunitySpace }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.06em] text-white/32">
      {space.members} members <span className="mx-1.5">·</span> {space.posts}{" "}
      {space.posts === 1 ? "post" : "posts"}
    </p>
  );
}

export function FutureXCommunitySpaces() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "previous" | "next") => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("article");
    const distance = (card?.offsetWidth ?? 390) + 16;

    scroller?.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden border-t border-white/5 bg-[#0b0d10] py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-14">
          <div>
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#10b981]">
              FutureX Community
            </p>
            <h2 className="mt-5 max-w-3xl text-[38px] font-black leading-tight tracking-tight sm:text-[54px] lg:text-[64px]">
              A space for every
              <br />
              <span className="text-[#CFFD53]">stage of the build.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-[18px] font-medium leading-relaxed text-white/58 sm:text-[20px]">
            Fellows receive updates, complete missions, share tools, and submit
            finished work inside dedicated community spaces.
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollCards("previous")}
            aria-label="Show previous community spaces"
            className="absolute left-1/2 top-1/2 z-20 -ml-[50vw] grid size-11 -translate-y-1/2 place-items-center rounded-r-full border border-l-0 border-white/15 bg-[#171a1e]/95 text-white shadow-[0_12px_30px_rgba(0,0,0,0.4)] backdrop-blur transition-all hover:border-[#CFFD53]/50 hover:text-[#CFFD53]"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-8 lg:px-14"
          >
            {allSpaces.map((space) => (
              <article
                key={space.name}
                className="relative flex h-[270px] w-[82vw] max-w-[390px] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.2)] transition-colors hover:border-white/20 hover:bg-white/[0.065] sm:p-6"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full opacity-15 blur-3xl"
                  style={{ backgroundColor: space.accent }}
                  aria-hidden="true"
                />
                <div className="relative flex items-start gap-4">
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full text-[14px] font-black text-white"
                    style={{ backgroundColor: space.accent }}
                    aria-hidden="true"
                  >
                    {space.initials}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-black leading-tight text-white sm:text-[19px]">
                      {space.name}
                    </h3>
                  </div>
                </div>
                <p className="relative mt-5 text-[13px] leading-6 text-white/52 sm:text-[14px]">
                  {space.description}
                </p>
                <div className="relative mt-auto border-t border-white/8 pt-4">
                  <SpaceStats space={space} />
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollCards("next")}
            aria-label="Show next community spaces"
            className="absolute right-1/2 top-1/2 z-20 -mr-[50vw] grid size-11 -translate-y-1/2 place-items-center rounded-l-full border border-r-0 border-white/15 bg-[#171a1e]/95 text-white shadow-[0_12px_30px_rgba(0,0,0,0.4)] backdrop-blur transition-all hover:border-[#CFFD53]/50 hover:text-[#CFFD53]"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
