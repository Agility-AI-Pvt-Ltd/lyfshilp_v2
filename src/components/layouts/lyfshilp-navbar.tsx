"use client";

import Link from "next/link";
import { useState } from "react";

const programGroups = [
  {
    title: "Learning",
    items: [
      {
        label: "Lyfshilp Fellowship",
        href: "/lyfshilp-fellowship",
        description: "Mentored AI product-building for ambitious learners",
        accent: "bg-[#5e22ff]",
      },
      {
        label: "Summer Programme",
        href: "/summer-programme",
        description: "Focused project sprints with practical outcomes",
        accent: "bg-[#10b981]",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        label: "For Schools",
        href: "/for-schools",
        description: "Future-ready AI learning paths for school students",
        accent: "bg-[#ff492c]",
      },
      {
        label: "For Colleges",
        href: "/for-colleges",
        description: "Campus programs aligned with real industry work",
        accent: "bg-[#ffd166]",
      },
    ],
  },
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
    label: "Community",
    href: "/community",
    description: "Meet builders, mentors, and collaborators",
  },
  {
    label: "Podcast",
    href: "/podcast",
    description: "Conversations on AI, work, and learning",
  },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label="Lyfshilp home"
    >
      <span className="relative grid size-7 place-items-center">
        <span className="absolute size-5 rotate-45 rounded-[3px] bg-[#5e4cff]" />
        <span className="absolute left-0 top-1 size-2.5 rounded-[2px] bg-[#ff492c]" />
        <span className="absolute bottom-0 right-0 size-2.5 rounded-[2px] bg-[#10b981]" />
        <span className="absolute right-0 top-0 size-2 rounded-full bg-[#ffd166]" />
      </span>
      <span className="text-[22px] font-semibold leading-none tracking-normal text-[#272835]">
        lyfshilp
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
      className="group/card relative flex min-h-36 overflow-hidden rounded-sm bg-[#262735] p-5 text-white transition-transform hover:-translate-y-0.5"
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

function ProgramsMenu() {
  const [enterpriseItem] = programGroups[2].items;
  const [featuredItem] = programGroups[0].items;

  return (
    <div className="group/programs relative">
      <MenuTrigger label="Programs" />

      <div className="invisible fixed left-0 top-20 z-50 w-screen opacity-0 transition duration-150 group-hover/programs:visible group-hover/programs:opacity-100 group-focus-within/programs:visible group-focus-within/programs:opacity-100">
        <div className="border-y border-[#e6e8ef] bg-white shadow-[0_24px_60px_rgba(21,24,38,0.12)]">
          <div className="relative mx-auto grid min-h-[370px] max-w-[1500px] grid-cols-[1fr_1fr_1fr_1fr] overflow-hidden px-4 sm:px-6 lg:px-8">
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

            <section className="border-r border-dashed border-[#e1e4ec] px-8 py-7">
              <p className="mb-5 px-2 text-[14px] font-semibold tracking-normal text-[#8a90a3]">
                {programGroups[1].title}
              </p>
              <div className="grid gap-3">
                {programGroups[1].items.map((item) => (
                  <ProgramLink key={item.label} {...item} />
                ))}
              </div>
            </section>

            <section className="border-r border-dashed border-[#e1e4ec] px-3 py-7">
              <p className="mb-5 px-2 text-[14px] font-semibold tracking-normal text-[#8a90a3]">
                {programGroups[2].title}
              </p>
              <div className="grid gap-2">
                <EnterpriseCard {...enterpriseItem} />
                <EnterpriseCard {...featuredItem} />
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
    <div className="group/community relative">
      <MenuTrigger label="Community" />

      <div className="invisible absolute left-0 top-full z-50 w-80 pt-3 opacity-0 transition duration-150 group-hover/community:visible group-hover/community:opacity-100 group-focus-within/community:visible group-focus-within/community:opacity-100">
        <div className="rounded-md border border-[#e6e8ef] bg-white p-2 shadow-[0_18px_45px_rgba(21,24,38,0.14)]">
          {communityItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-md px-3 py-3 transition-colors hover:bg-[#f8fafb]"
            >
              <span className="block text-[15px] font-semibold leading-5 text-[#11131f]">
                {item.label}
              </span>
              <span className="mt-1 block text-[13px] leading-5 text-[#8a90a3]">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LyfshilpNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e5e7eb] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <NavLink label="Home" href="/" />
          <ProgramsMenu />
          <CommunityMenu />
          <NavLink label="About Us" href="/about-us" />
        </nav>

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

      {isOpen ? (
        <div className="border-t border-[#e5e7eb] bg-white px-4 py-4 lg:hidden">
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
