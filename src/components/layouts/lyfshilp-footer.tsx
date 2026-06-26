import Link from "next/link";
import { ScrollRevealText } from "../ui/scroll-reveal-text";
import { StaggeredCountdown } from "../ui/staggered-countdown";

const footerStats = [
  { digits: "500", suffix: "+", label: "Student founders" },
  { digits: "50", suffix: "+", label: "Partner schools" },
  { digits: "20", suffix: "+", label: "Mentors and builders" },
  { digits: "10", suffix: "+", label: "Cities represented" },
];

const footerLinks = [
  {
    title: "Programs",
    links: [
      { label: "Lyfshilp Fellowship", href: "/lyfshilp-fellowship" },
      { label: "Summer Programme", href: "/summer-programme" },
      { label: "For Schools", href: "/for-schools" },
      { label: "For Colleges", href: "/for-colleges" },
      { label: "Corporate AI", href: "/corporate-ai" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Lyfshilp Community", href: "/community" },
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

function FooterWave() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-[46%] z-10 h-[330px] w-[1500px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[390px] sm:w-[1900px] lg:h-[480px] lg:w-[2500px]"
      viewBox="0 0 2400 520"
      aria-hidden="true"
    >
      <path
        id="lyfshilp-footer-wave"
        d="M-90 326 C 260 302 440 138 790 182 C 1085 219 1165 362 1468 338 C 1746 316 1840 214 2160 236 C 2294 245 2390 289 2490 340"
        fill="none"
        stroke="#ffeab5"
        strokeWidth="120"
      />
      <text
        className="fill-[#27231f] text-[46px] font-black tracking-normal sm:text-[58px] lg:text-[68px]"
        dominantBaseline="middle"
      >
        <textPath href="#lyfshilp-footer-wave" startOffset="0%">
          <animate
            attributeName="startOffset"
            from="0%"
            to="-100%"
            dur="30s"
            repeatCount="indefinite"
          />
          {Array(4).fill("Build slowly, think deeply, and ship work that matters with Lyfshilp ✦ ").join("")}
        </textPath>
      </text>
    </svg>
  );
}

export function LyfshilpFooter() {
  return (
    <footer className="overflow-hidden bg-[#fffaf4] text-[#fffaf4]">
      <section className="relative min-h-[650px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2200&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a160c]/15 via-[#2a160c]/35 to-[#351808]" />
        <FooterWave />

        <div className="absolute inset-x-0 bottom-0 z-20 grid gap-8 px-6 pb-9 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-14">
          {footerStats.map((stat) => (
            <div key={stat.label}>
              <StaggeredCountdown
                value={stat.digits}
                suffix={stat.suffix}
                color="#fffaf4"
                duration={2}
                className="text-[54px] font-black leading-none tracking-normal sm:text-[64px]"
              />
              <p className="mt-4 text-[18px] font-semibold tracking-normal text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#3c1b0c] px-6 py-24 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <ScrollRevealText
            text="At Lyfshilp, every learner gets space to explore, build, and become future-ready."
            className="max-w-4xl text-[46px] font-black leading-[1.05] tracking-normal text-[#fffaf4] sm:text-[64px] lg:text-[76px]"
          />
          <Link
            href="/community"
            className="inline-flex h-16 w-fit items-center rounded-full border border-white/15 px-8 text-[17px] font-bold text-white transition-colors hover:bg-white hover:text-[#3c1b0c]"
          >
            Join the community
          </Link>
        </div>
      </section>

      <section className="bg-[#3c1b0c] px-6 pb-10 sm:px-8 lg:px-14">
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-[14px] font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Lyfshilp. All rights reserved.</p>
          <p>Built for curious minds and real-world skills.</p>
        </div>
      </section>
    </footer>
  );
}
