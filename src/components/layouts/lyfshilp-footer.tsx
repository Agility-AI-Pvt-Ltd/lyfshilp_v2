"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Programs",
    links: [
      { label: "FutureX Fellowship", href: "/futurex-fellowship" },
      { label: "Summer Programme", href: "/summer-programme" },
      { label: "For Schools", href: "/for-schools" },
      { label: "For Colleges", href: "/for-colleges" },
      { label: "Corporate AI", href: "/corporate-ai" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "FutureX Community", href: "/community" },
      { label: "Podcast", href: "/podcast" },
      { label: "Live Sessions", href: "/community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "mailto:futurex@lyfshilpacademy.com" },
      { label: "WhatsApp", href: "https://wa.me/917042671115" },
    ],
  },
];

export function LyfshilpFooter() {
  return (
    <footer className="relative bg-[#3c1b0c] text-[#fffaf4]">
      <section className="relative z-20 bg-[#3c1b0c] px-6 pb-20 sm:px-8 lg:px-14 lg:pb-24">
        <div className="grid gap-12 border-t border-white/15 pt-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[32px] font-black tracking-normal text-white"
            >
              <span className="relative grid size-9 place-items-center">
                <span className="absolute size-7 rotate-45 rounded-[4px] bg-[#5e4cff]" />
                <span className="absolute left-0 top-1 size-3 rounded-[2px] bg-[#ff492c]" />
                <span className="absolute bottom-0 right-0 size-3 rounded-[2px] bg-[#10b981]" />
                <span className="absolute right-0 top-0 size-2.5 rounded-full bg-[#ffd166]" />
              </span>
              lyfshilp
            </Link>
            <p className="mt-5 max-w-sm text-[16px] font-medium leading-7 text-white/68">
              AI-powered learning, practical projects, and communities for
              learners, schools, colleges, and teams.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white/45">
                {group.title}
              </h3>
              <div className="mt-5 grid gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[16px] font-semibold text-white/78 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/15 pb-5 pt-7 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <div>
            <p>@2026 LYFSHILP. ALL RIGHTS RESERVED</p>
            <p className="mt-1">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> •{" "}
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>MADE BY</p>
            <p className="text-[13px] text-white">AGILITY</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
