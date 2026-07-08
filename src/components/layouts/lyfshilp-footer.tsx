"use client";

import NextImage from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  icon?: "linkedin";
};

const footerLinks: { title: string; links: FooterLink[] }[] = [
  {
    title: "Programs",
    links: [
      { label: "FutureX Fellowship", href: "/futurex-fellowship" },
      { label: "AI Scholar Track", href: "/ai-scholar-track" },
      { label: "Build With AI", href: "/build-with-ai" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "FutureX Community", href: "/community" },
      { label: "Podcast", href: "/podcast" },
      { label: "Live Sessions", href: "/live-sessions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      {
        label: "Contact",
        href: "mailto:service.excellence@lyfshilpacademy.com",
      },
      { label: "WhatsApp", href: "https://wa.me/917042671115" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/international-futurex-fellowship",
        icon: "linkedin",
      },
      { label: "lyfshilp.com", href: "https://lyfshilp.com" },
      { label: "futurexfellows.com", href: "https://futurexfellows.com" },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46A1.75 1.75 0 0 0 24 22.27V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export function LyfshilpFooter() {
  return (
    <footer className="relative bg-[#3c1b0c] text-[#fffaf4]">
      <section className="relative z-20 bg-[#3c1b0c] px-6 pb-20 sm:px-8 lg:px-14 lg:pb-24">
        <div className="grid gap-12 border-t border-white/15 pt-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Lyfshilp home"
            >
              <NextImage
                src="/images/logo.png"
                alt="Lyfshilp Academy Logo"
                width={42}
                height={42}
                className="h-[42px] w-[42px] object-contain"
                unoptimized
              />
              <span className="text-[22px] font-semibold leading-none tracking-normal text-white">
                Lyfshilp
              </span>
            </Link>
            <p className="mt-6 text-[13px] font-black uppercase tracking-[0.15em] text-white">
              Lyfshilp Academy
            </p>
            <p className="mt-2 max-w-sm text-[16px] font-medium leading-7 text-white/68">
              Making AI-powered learning accessible to every student in India.
            </p>
            <div className="mt-5 grid gap-2 text-[14px] font-semibold text-white/62">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <Link
                  href="tel:+917042671115"
                  className="transition-colors hover:text-white"
                >
                  7042671115
                </Link>
                <span aria-hidden="true">·</span>
                <Link
                  href="tel:+917042672300"
                  className="transition-colors hover:text-white"
                >
                  7042672300
                </Link>
              </p>
              <Link
                href="mailto:service.excellence@lyfshilpacademy.com"
                className="break-all transition-colors hover:text-white"
              >
                service.excellence@lyfshilpacademy.com
              </Link>
            </div>
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
                    className="inline-flex items-center gap-2 text-[16px] font-semibold text-white/78 transition-colors hover:text-white"
                  >
                    {link.icon === "linkedin" && <LinkedInIcon />}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/15 pb-5 pt-7 text-[11px] font-bold tracking-widest text-white/50">
          <div>
            <p>
              © 2026 Lyfshilp Academy Pvt. Ltd. &amp; Agility AI Pvt. Ltd. ·{" "}
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
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
