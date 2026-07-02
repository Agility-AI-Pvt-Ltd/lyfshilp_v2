"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Programs",
    links: [
      { label: "FutureX Fellowship", href: "/futurex-fellowship" },
      { label: "AI Scholar Track", href: "/summer-programme" },
      { label: "Build With AI", href: "/products" },
      { label: "AI for Organisations", href: "/corporate-ai" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "lyfshilp.com", href: "https://lyfshilp.com" },
      { label: "futurexfellows.com", href: "https://futurexfellows.com" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram: @futurexfellows",
    href: "https://www.instagram.com/futurexfellows",
    icon: "instagram",
  },
  {
    label: "LinkedIn: Lyfshilp Academy",
    href: "https://www.linkedin.com/company/lyfshilp-academy",
    icon: "linkedin",
  },
] as const;

function SocialIcon({ icon }: { icon: "instagram" | "linkedin" }) {
  if (icon === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          width="17"
          height="17"
          x="3.5"
          y="3.5"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.25 4a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92Zm8 4.98H10V20h3.38v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.38v-6.04c0-2.97-.64-5.25-4.11-5.25-1.67 0-2.78.92-3.24 1.78h-.05V8.98Z" />
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
              className="inline-flex items-center gap-3 text-[32px] font-black tracking-normal text-white"
            >
              <span className="relative grid size-9 place-items-center">
                <span className="absolute size-7 rotate-45 rounded-[4px] bg-[#5e4cff]" />
                <span className="absolute left-0 top-1 size-3 rounded-[2px] bg-[#ff492c]" />
                <span className="absolute bottom-0 right-0 size-3 rounded-[2px] bg-[#10b981]" />
                <span className="absolute right-0 top-0 size-2.5 rounded-full bg-[#ffd166]" />
              </span>
              LYFSHILP ACADEMY
            </Link>
            <p className="mt-5 max-w-sm text-[16px] font-medium leading-7 text-white/68">
              Making AI-powered learning accessible to every student in India.
              <br />
              <Link href="tel:+917042671115" className="hover:text-white">
                7042671115
              </Link>
              {" · "}
              <Link href="tel:+917042672300" className="hover:text-white">
                7042672300
              </Link>
              <br />
              <Link
                href="mailto:service.excellence@lyfshilpacademy.com"
                className="hover:text-white"
              >
                service.excellence@lyfshilpacademy.com
              </Link>
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

          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white/45">
              Social
            </h3>
            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/78 transition-colors hover:text-white"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/15 pb-5 pt-7 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <div>
            <p>© 2026 Lyfshilp Academy Pvt. Ltd. &amp; Agility AI Pvt. Ltd.</p>
            <p className="mt-1">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> •{" "}
              <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
