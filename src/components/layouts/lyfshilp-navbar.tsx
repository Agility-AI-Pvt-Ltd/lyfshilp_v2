"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MarqueeBanner } from "../ui/marquee-banner";

const programGroups = [
  {
    title: "Learning",
    items: [
      {
        label: "FutureX Fellowship",
        href: "/futurex-fellowship",
        description: "A mentored pathway for ambitious AI product builders",
        accent: "bg-[#5e22ff]",
      },
      {
        label: "AI Scholar Program",
        href: "/summer-programme",
        description: "Focused project sprints with practical outcomes",
        accent: "bg-[#10b981]",
      },
    ],
  },
  // {
  //   title: "Education",
  //   items: [
  //     {
  //       label: "For Schools",
  //       href: "/for-schools",
  //       description: "Future-ready AI learning paths for school students",
  //       accent: "bg-[#ff492c]",
  //     },
  //     {
  //       label: "For Colleges",
  //       href: "/for-colleges",
  //       description: "Campus programs aligned with real industry work",
  //       accent: "bg-[#ffd166]",
  //     },
  //   ],
  // },
  {
    title: "Enterprise",
    items: [
      {
        label: "Corporate AI",
        href: "/corporate-ai",
        description: "AI enablement and adoption for modern teams",
        accent: "bg-[#242532]",
      },
    ],
  },
];

const communityItems = [
  {
    label: "FutureX Community",
    href: "/community",
    description: "Student founders building the future together",
  },
  {
    label: "Podcast",
    href: "/podcast",
    description: "Conversations on AI, work, and learning",
  },
];

const communityFeaturedCards = [
  {
    label: "FutureX Community",
    href: "/community",
    kicker: "Community",
    title: "Where student founders build the future together",
    cta: "Explore community",
    accent: "bg-[#5e22ff]",
  },
  {
    label: "Podcast",
    href: "/podcast",
    kicker: "Podcast",
    title: "Conversations on AI, work, learning, and real builders",
    cta: "Listen now",
    accent: "bg-[#10b981]",
  },
  {
    label: "Live Sessions",
    href: "/live-sessions",
    kicker: "Sessions",
    title: "AMAs, demo days, and workshops with builders and mentors",
    cta: "See what is inside",
    accent: "bg-[#ff492c]",
  },
];

const communityGroups = [
  {
    title: "Network",
    items: [
      {
        label: "Share & Discuss",
        href: "/community",
        description:
          "Post your startup idea and get feedback from founders and mentors.",
        accent: "bg-[#5e22ff]",
      },
      {
        label: "Build Together",
        href: "/community",
        description:
          "Find co-founders, designers, and developers across schools and colleges.",
        accent: "bg-[#10b981]",
      },
      {
        label: "Celebrate Wins",
        href: "/community",
        description:
          "Share milestones, progress, and achievements with the community.",
        accent: "bg-[#ff492c]",
      },
    ],
  },
  {
    title: "Access",
    items: [
      {
        label: "Lyfshilp Mentors",
        href: "/community",
        description:
          "Get guidance from founders and industry leaders who help ideas scale.",
        accent: "bg-[#ffd166]",
      },
      {
        label: "Live Sessions",
        href: "/live-sessions",
        description:
          "Join community AMAs, demo days, and workshops with builders.",
        accent: "bg-[#5e22ff]",
      },
      {
        label: "Nationwide Network",
        href: "/community",
        description:
          "Connect with student founders across cities and campuses in India.",
        accent: "bg-[#10b981]",
      },
    ],
  },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label="Lyfshilp home"
    >
      <NextImage
        src="/images/logo.png"
        alt="Lyfshilp Academy Logo"
        width={42}
        height={42}
        className="h-[42px] w-[42px] object-contain"
        unoptimized
        priority
      />
      <span className="text-[22px] font-semibold leading-none tracking-normal text-[#272835]">
        Lyfshilp
      </span>
    </Link>
  );
}

function Chevron() {
  return (
    <span
      aria-hidden="true"
      className="mt-[-3px] size-1.5 rotate-45 border-b border-r border-current"
    />
  );
}

function PixelIcon({ accent }: { accent: string }) {
  const pixels = [1, 2, 4, 7, 8, 10, 13, 14];

  return (
    <span
      className={`grid size-11 shrink-0 grid-cols-4 grid-rows-4 overflow-hidden rounded-sm ${accent} p-1 shadow-sm`}
      aria-hidden="true"
    >
      {Array.from({ length: 16 }).map((_, index) => (
        <span
          key={index}
          className={
            pixels.includes(index)
              ? "m-0.5 rounded-[1px] bg-white"
              : "m-0.5 rounded-[1px] bg-[#25106f]/35"
          }
        />
      ))}
    </span>
  );
}

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="flex h-10 items-center whitespace-nowrap rounded-md px-3 text-[15px] font-medium tracking-normal text-[#36394a] transition-colors hover:bg-[#f8fafb] hover:text-[#0d0d12]"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function MenuTrigger({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-10 items-center gap-1.5 whitespace-nowrap rounded-md px-3 text-[15px] font-medium tracking-normal text-[#36394a] transition-colors hover:bg-[#f8fafb] hover:text-[#0d0d12]"
      aria-haspopup="true"
    >
      {label}
      <Chevron />
    </button>
  );
}

function ProgramLink({
  label,
  href,
  description,
  accent,
}: {
  label: string;
  href: string;
  description: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group/item flex gap-3 rounded-md p-2.5 transition-colors hover:bg-[#f8fafb]"
    >
      <PixelIcon accent={accent} />
      <span>
        <span className="block text-[15px] font-semibold leading-5 tracking-normal text-[#11131f] group-hover/item:text-[#5e22ff]">
          {label}
        </span>
        <span className="mt-1 block text-[13px] leading-5 tracking-normal text-[#8a90a3]">
          {description}
        </span>
      </span>
    </Link>
  );
}

function EnterpriseCard({
  label,
  href,
  description,
  accent,
}: {
  label: string;
  href: string;
  description: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group/card relative flex h-full min-h-36 overflow-hidden rounded-sm bg-[#262735] p-5 text-white transition-transform hover:-translate-y-0.5"
    >
      <span className="relative z-10">
        <span className="flex items-center gap-2 text-[16px] font-semibold leading-6">
          {label}
          <span className="text-[#8a90a3] transition-transform group-hover/card:translate-x-0.5">
            /
          </span>
        </span>
        <span className="mt-2 block text-[13px] leading-5 text-[#c7cad6]">
          {description}
        </span>
      </span>
      <span className={`absolute right-0 top-0 size-5 ${accent}`} />
      <span className="absolute bottom-0 right-24 size-7 bg-[#10b981]/70" />
      <span className="absolute bottom-0 right-12 size-7 bg-[#5e22ff]" />
      <span className="absolute bottom-0 right-0 size-10 bg-[#5e22ff]" />
    </Link>
  );
}

function CommunityFeatureCard({
  label,
  href,
  kicker,
  title,
  cta,
  accent,
}: {
  label: string;
  href: string;
  kicker: string;
  title: string;
  cta: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group/card relative flex min-h-[270px] flex-col overflow-hidden rounded-sm bg-[#f8f9fb] p-8 transition-transform hover:-translate-y-0.5"
    >
      <span
        className={`absolute right-12 top-0 size-9 ${accent} bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_2px,transparent_2px,transparent_5px)]`}
        aria-hidden="true"
      />
      <span
        className={`absolute right-0 top-9 size-9 ${accent} bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_2px,transparent_2px,transparent_5px)] opacity-80`}
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-[72px] border-t border-dashed border-[#e1e4ec]"
        aria-hidden="true"
      />

      <span className="flex h-12 items-center">
        <span className="text-[21px] font-semibold leading-none tracking-normal text-[#272835]">
          {label}
        </span>
      </span>

      <span className="mt-auto block">
        <span className="mb-4 inline-flex h-7 items-center rounded-sm bg-white px-2.5 text-[12px] font-semibold tracking-normal text-[#8a90a3] shadow-sm">
          {kicker}
        </span>
        <span className="block max-w-[340px] text-[20px] font-semibold leading-6 tracking-normal text-[#272835]">
          {title}
        </span>
        <span className="mt-5 flex items-center gap-2 text-[15px] font-medium leading-5 tracking-normal text-[#747b8f] transition-colors group-hover/card:text-[#5e22ff]">
          {cta}
          <span
            aria-hidden="true"
            className="size-0 border-y-[5px] border-l-[6px] border-y-transparent border-l-current opacity-45"
          />
        </span>
      </span>
    </Link>
  );
}

function ProgramsMenu() {
  const [enterpriseItem] = programGroups[1].items;

  return (
    <div className="group/programs relative flex h-16 items-center">
      <MenuTrigger label="Programs" />
      <span
        aria-hidden="true"
        className="invisible absolute inset-x-0 top-full h-8 group-hover/programs:visible group-focus-within/programs:visible"
      />

      <div className="invisible fixed inset-x-0 top-[80px] z-40 flex justify-center px-4 opacity-0 transition duration-150 group-hover/programs:visible group-hover/programs:opacity-100 group-focus-within/programs:visible group-focus-within/programs:opacity-100">
        <div className="w-full max-w-[840px] overflow-hidden rounded-3xl border border-[#e6e8ef] bg-white shadow-[0_24px_60px_rgba(21,24,38,0.16)]">
          <div className="relative grid min-h-[370px] grid-cols-[1.2fr_1fr_0.8fr] px-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[72px] border-t border-dashed border-[#e1e4ec]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-[72px] border-t border-dashed border-[#e1e4ec]"
            />

            <section className="border-x border-dashed border-[#e1e4ec] py-7 pr-8">
              <p className="mb-5 px-2 text-[14px] font-semibold tracking-normal text-[#8a90a3]">
                {programGroups[0].title}
              </p>
              <div className="grid gap-3">
                {programGroups[0].items.map((item) => (
                  <ProgramLink key={item.label} {...item} />
                ))}
              </div>
            </section>

            <section className="border-r border-dashed border-[#e1e4ec] px-4 py-7">
              <p className="mb-5 px-2 text-[14px] font-semibold tracking-normal text-[#8a90a3]">
                {programGroups[1].title}
              </p>
              <div className="grid gap-3">
                <EnterpriseCard {...enterpriseItem} />
              </div>
            </section>

            <section className="relative hidden overflow-hidden border-r border-dashed border-[#e1e4ec] py-7 pl-8 lg:block">
              <div className="absolute inset-y-7 left-8 right-0 rounded-sm border border-dashed border-[#e1e4ec] bg-[repeating-linear-gradient(135deg,#ffffff_0,#ffffff_6px,#f2f4f9_6px,#f2f4f9_8px)]" />
              <span className="absolute bottom-7 right-0 size-9 bg-[#5e22ff]/25" />
              <span className="absolute bottom-7 right-14 size-7 bg-[#5e22ff]/15" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityMenu() {
  return (
    <div className="group/community relative flex h-16 items-center">
      <MenuTrigger label="Community" />
      <span
        aria-hidden="true"
        className="invisible absolute inset-x-0 top-full h-8 group-hover/community:visible group-focus-within/community:visible"
      />

      <div className="invisible fixed inset-x-0 top-[80px] z-40 flex justify-center px-4 opacity-0 transition duration-150 group-hover/community:visible group-hover/community:opacity-100 group-focus-within/community:visible group-focus-within/community:opacity-100">
        <div className="w-full max-w-[1120px] overflow-hidden rounded-3xl border border-[#e6e8ef] bg-white shadow-[0_24px_60px_rgba(21,24,38,0.16)]">
          <div className="relative min-h-[430px] px-6 py-7">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-4 border-l border-dashed border-[#e1e4ec] sm:left-6 lg:left-8"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-4 border-l border-dashed border-[#e1e4ec] sm:right-6 lg:right-8"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[92px] border-t border-dashed border-[#e1e4ec]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-[104px] border-t border-dashed border-[#e1e4ec]"
            />

            <p className="mb-8 pl-5 text-[15px] font-semibold tracking-normal text-[#8a90a3]">
              Featured Community
            </p>

            <div className="grid grid-cols-3 gap-8 px-5">
              {communityFeaturedCards.map((item) => (
                <CommunityFeatureCard key={item.label} {...item} />
              ))}
            </div>

            <Link
              href="/community"
              className="mt-8 inline-flex items-center gap-2 pl-5 text-[15px] font-semibold tracking-normal text-[#272835] transition-colors hover:text-[#5e22ff]"
            >
              View all community updates
              <span
                aria-hidden="true"
                className="size-0 border-y-[5px] border-l-[6px] border-y-transparent border-l-current opacity-45"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LyfshilpNavbarProps {
  showMarquee?: boolean;
}

export function LyfshilpNavbar({ showMarquee = false }: LyfshilpNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        // Always visible at the very top of the page
        setHidden(false);
      } else if (currentY > lastY) {
        // Scrolling down -> hide
        setHidden(true);
      } else if (currentY < lastY) {
        // Scrolling up -> reveal
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
        hidden && !isOpen ? "translate-y-[-150%]" : "translate-y-0"
      }`}
    >
      {showMarquee && <MarqueeBanner />}
      <div className={`px-4 ${showMarquee ? "pt-3" : "pt-4"}`}>
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-[#e6e8ef] bg-white/85 pl-6 pr-3 shadow-[0_10px_40px_rgba(21,24,38,0.12)] backdrop-blur-xl">
          <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <NavLink label="Home" href="/" />
          <ProgramsMenu />
          <CommunityMenu />
          <NavLink label="About Us" href="/about-us" />
        </nav>

        {/* Explore products pill button — desktop only */}
        <Link
          href="/futurex-fellowship"
          className="group relative hidden overflow-hidden items-center gap-0 rounded-full bg-[#f8fafb] border border-[#e5e7eb] p-1 transition-colors duration-300 lg:flex"
        >
          {/* #CFFD53 sweep layer — covers whole pill left to right on hover */}
          <span
            className="absolute inset-0 origin-left scale-x-0 bg-[#CFFD53] transition-transform duration-300 ease-in-out group-hover:scale-x-100"
            aria-hidden="true"
          />

          {/* Text with slide animation */}
          <span className="relative flex h-[1.4em] items-center overflow-hidden px-5">
            {/* Original text — slides up out */}
            <span className="block whitespace-nowrap text-[15px] font-semibold text-[#272835] transition-transform duration-300 ease-in-out group-hover:-translate-y-[200%]">
              FutureX Fellowship
            </span>
            {/* Incoming text — slides in from below in dark */}
            <span
              className="absolute left-5 right-0 flex items-center whitespace-nowrap text-[15px] font-semibold text-[#272835] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
              aria-hidden="true"
            >
              FutureX Fellowship
            </span>
          </span>

          {/* Arrow circle — #CFFD53 filled */}
          <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-[#CFFD53] text-[#272835] transition-all duration-300">
            {/* Arrow exits to the right */}
            <span className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-[150%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            {/* Arrow enters from the left */}
            <span className="absolute -translate-x-[150%] text-[#272835] transition-all duration-300 ease-in-out group-hover:translate-x-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center rounded-md border border-[#dfe1e7] bg-[#f8fafb] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className="h-0.5 rounded-full bg-[#1d293d]" />
            <span className="h-0.5 rounded-full bg-[#1d293d]" />
          </span>
        </button>
      </div>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-h-[calc(100vh-6rem)] w-full max-w-7xl overflow-y-auto rounded-2xl border border-[#e6e8ef] bg-white px-4 py-4 shadow-[0_10px_40px_rgba(21,24,38,0.12)] lg:hidden">
          <nav aria-label="Mobile primary" className="grid gap-1">
            <NavLink label="Home" href="/" onClick={() => setIsOpen(false)} />

            <p className="mt-3 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8a90a3]">
              Programs
            </p>
            {programGroups.map((group) => (
              <div key={group.title} className="grid gap-1">
                <p className="px-3 py-1 text-[13px] font-semibold text-[#36394a]">
                  {group.title}
                </p>
                {group.items.map((item) => (
                  <NavLink
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            ))}

            <p className="mt-3 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8a90a3]">
              Community
            </p>
            {communityGroups.map((group) => (
              <div key={group.title} className="grid gap-1">
                <p className="px-3 py-1 text-[13px] font-semibold text-[#36394a]">
                  {group.title}
                </p>
                {group.items.map((item) => (
                  <NavLink
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            ))}
            {communityItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
              />
            ))}

            <NavLink
              label="About Us"
              href="/about-us"
              onClick={() => setIsOpen(false)}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
