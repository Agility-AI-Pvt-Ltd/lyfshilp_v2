import React from "react";

const communitySpaces = [
  {
    initial: "A",
    title: "AI Shipyard",
    description:
      "Be like pirates — explore boldly, learn by building, break limits, and create anything you can with AI.",
    stats: "31 members · 13 posts",
    avatarClassName: "bg-[#ef4444]",
  },
  {
    initial: "L",
    title: "LESSONS & MISSIONS",
    description:
      "In this community you can post your assignments and homework given to you",
    stats: "37 members · 189 posts",
    avatarClassName: "bg-[#a345f5]",
  },
  {
    initial: "A",
    title: "AI BUILDER'S SPELLBOOK ???",
    description:
      "This Community is to showcase your work that you build during the fellowship process. Post your tool links",
    stats: "33 members · 0 posts",
    avatarClassName: "bg-[#42bb83]",
  },
  {
    initial: "O",
    title: "ORDER OF FUTUREX ???",
    description:
      "This community is to post your session work and task. Make it as interesting, creative and intuitive as you can",
    stats: "38 members · 18 posts",
    avatarClassName: "bg-[#3b82f6]",
  },
];

export function FutureXSpotlightSection() {
  return (
    <section className="bg-[#faf8f5] px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#1e5237]">
            Community
          </p>
          <h2 className="text-[40px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[54px]">
            FutureX Titans — where students connect
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-[#4b5563] sm:text-[20px]">
            Every scholar joins a thriving community of young innovators who
            share projects, submit assignments, and learn together.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {communitySpaces.map((space) => (
            <article
              key={space.title}
              className="group relative flex min-h-[210px] overflow-hidden rounded-[18px] border border-[#ece8e0] bg-white p-5 shadow-[0_10px_30px_rgba(32,38,35,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(32,38,35,0.1)]"
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`grid size-10 shrink-0 place-items-center rounded-full text-[14px] font-black text-white shadow-inner ${space.avatarClassName}`}
                  aria-hidden="true"
                >
                  {space.initial}
                </div>
                <div className="flex min-w-0 flex-1 flex-col self-stretch">
                  <h3 className="text-[17px] font-black leading-tight tracking-[-0.015em] text-[#17201c]">
                    {space.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-5 text-[#5b6460]">
                    {space.description}
                  </p>
                  <p className="mt-auto pt-4 font-mono text-[10px] font-bold tracking-[0.06em] text-[#737b77]">
                    {space.stats}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 flex max-w-[1200px] flex-col items-start gap-12 lg:flex-row lg:gap-20">
        {/* Header Text (Left side on large screens) */}
        <div className="lg:w-5/12 lg:sticky lg:top-32">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#1e5237]">
            FELLOW SPOTLIGHT
          </p>
          <h2 className="mb-6 text-[42px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[52px]">
            Real Post from futurex fellows.
          </h2>
          <p className="text-[19px] leading-relaxed text-[#4b5563] sm:text-[21px]">
            Fellows build products that address real-world problems — then pitch
            them to the community.
          </p>
        </div>

        {/* Card (Right side on large screens) */}
        <div className="w-full space-y-8 lg:w-7/12">
          <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#181818] text-white shadow-[0_20px_55px_rgba(0,0,0,0.18)]">
            <div className="p-6 sm:p-8">
              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-between text-[12px] font-bold text-white/40 sm:text-[13px]">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true">·</span>
                  <span>2 days</span>
                  <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1 text-[#f2c94c]">
                    Discussion
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="rounded-full bg-[#10b981]/10 px-3 py-1 text-[#34d399]">
                    +16 XP
                  </span>
                </div>
                <div>
                  <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z" /></svg>
                </div>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#3d331a] border border-[#f2c94c]/20 text-[15px] font-black text-[#f2c94c]">
                  AD
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <strong className="text-[17px] font-black text-white">
                    adrija_gupta
                  </strong>
                  <span className="flex items-center gap-1.5 rounded-full border border-[#f2c94c]/30 px-3 py-1 text-[12px] font-black text-[#f2c94c]">
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    1,511 XP
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.07em] text-[#f2c94c]">
                  #LESSONS & MISSIONS
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.07em] text-white/50">
                  #Pitch
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-[22px] font-black tracking-tight text-white sm:text-[26px]">
                Pitch!!
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-white/60 sm:text-[16px]">
                SAFEHER "हर पिता अपनी बेटी को पढ़ाना चाहता है... लेकिन उससे भी ज़्यादा, वह उसे हर शाम सुरक्षित घर लौटते देखना चाहता है।" Good morning, Respected Principal Sir, respected teachers, judges, and my dear friends. My name is Adrija Today, I'm not here to present just another application. I'm here to present a solution to a fear...
              </p>

              {/* Image attachment */}
              <div className="mt-6 overflow-hidden rounded-[16px] border border-white/10 bg-[#0a0a0a]">
                <img src="/images/safeher-pitch.png" alt="SafeHer Pitch Presentation" className="w-full object-cover" />
              </div>

              {/* Footer actions */}
              <div className="mt-6 flex items-center justify-between text-[14px] font-bold text-white/40">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 cursor-pointer rounded-full border border-white/10 px-4 py-1.5 hover:bg-white/5 transition-colors">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    <span className="text-[#f2c94c]">1</span>
                    <svg className="size-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <span>0</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <svg className="size-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                  <svg className="size-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.632l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </div>
              </div>

            </div>
          </article>

          <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#181818] text-white shadow-[0_20px_55px_rgba(0,0,0,0.18)]">
            <div className="p-6 sm:p-8">
              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-between text-[12px] font-bold text-white/40 sm:text-[13px]">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true">·</span>
                  <span>about 2 months</span>
                  <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1 text-[#f2c94c]">
                    Discussion
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="rounded-full bg-[#10b981]/10 px-3 py-1 text-[#34d399]">
                    +18 XP
                  </span>
                </div>
                <div>
                  <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z" /></svg>
                </div>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#3d331a] text-[#f2c94c]">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <strong className="text-[17px] font-black text-white">
                    prayan_khowal
                  </strong>
                  <span className="flex items-center gap-1.5 rounded-full border border-[#f2c94c]/30 px-3 py-1 text-[12px] font-black text-[#f2c94c]">
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    1,401 XP
                  </span>
                  <span className="rounded-full bg-white/[0.07] px-3 py-1 text-[12px] font-black text-white/50">
                    Dedicated
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.07em] text-[#f2c94c]">
                  #LESSONS & MISSIONS
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black tracking-[0.07em] text-white/50">
                  #Companies
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black tracking-[0.07em] text-white/50">
                  #Ocean
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black tracking-[0.07em] text-white/50">
                  #Strategy
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-[22px] font-black tracking-tight text-white sm:text-[26px]">
                20 Companies that used Blue Ocean Strategy - Image - By Prayan Khowal
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-white/60 sm:text-[16px]">
                Sorry, I forgot to upload the image with my original post, so here it is for the 20 companies that use the blue ocean strategy.
              </p>

              {/* Image attachment */}
              <div className="mt-6 overflow-hidden rounded-[16px] border border-white/10 bg-[#0a0a0a]">
                <img src="/images/blue-ocean-strategy.png" alt="Blue Ocean Strategy Infographic" className="w-full object-cover" />
              </div>

              {/* Footer actions */}
              <div className="mt-6 flex items-center justify-between text-[14px] font-bold text-white/40">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 cursor-pointer rounded-full border border-white/10 px-4 py-1.5 hover:bg-white/5 transition-colors">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    <span className="text-[#f2c94c]">10</span>
                    <svg className="size-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <span>15</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <svg className="size-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                  <svg className="size-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.632l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </div>
              </div>

            </div>
          </article>

          {/* Third Card */}
          <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#181818] text-white shadow-[0_20px_55px_rgba(0,0,0,0.18)]">
            <div className="p-6 sm:p-8">
              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-between text-[12px] font-bold text-white/40 sm:text-[13px]">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true">·</span>
                  <span>2 months</span>
                  <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1 text-[#f2c94c]">
                    Discussion
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="rounded-full bg-[#10b981]/10 px-3 py-1 text-[#34d399]">
                    +18 XP
                  </span>
                </div>
                <div>
                  <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z" /></svg>
                </div>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#3d331a] text-[15px] font-black text-[#f2c94c]">
                  MA
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <strong className="text-[17px] font-black text-white">
                    manya_gupta
                  </strong>
                  <span className="flex items-center gap-1.5 rounded-full border border-[#f2c94c]/30 px-3 py-1 text-[12px] font-black text-[#f2c94c]">
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    70 XP
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f2c94c]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.07em] text-[#f2c94c]">
                  #LESSONS & MISSIONS
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black tracking-[0.07em] text-white/50">
                  #Problem
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black tracking-[0.07em] text-white/50">
                  #common
                </span>
                <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[11px] font-black tracking-[0.07em] text-white/50">
                  #problems
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-[22px] font-black tracking-tight text-white sm:text-[26px]">
                HTML Problem Card - 10 common problems faced in real life (By Manya Gupta)
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-white/60 sm:text-[16px]">
                I am a FutureX Fellow. Below are 10 real problems I noticed in daily life last week. 1. Long unpredictable work hours drive constant fatigue 2. Traffic & long commutes drain time and energy 3. Poor time management leads to constant overload 4. Irregular sleep & skipped meals weaken health and focus...
              </p>

              {/* Image attachment */}
              <div className="mt-6 overflow-hidden rounded-[16px] border border-white/10 bg-[#0a0a0a]">
                <img src="/images/manya-problem-card.png" alt="HTML Problem Card Presentation" className="w-full object-cover" />
              </div>

              {/* Footer actions */}
              <div className="mt-6 flex items-center justify-between text-[14px] font-bold text-white/40">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 cursor-pointer rounded-full border border-white/10 px-4 py-1.5 hover:bg-white/5 transition-colors">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    <span className="text-[#f2c94c]">11</span>
                    <svg className="size-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <span>10</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <svg className="size-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                  <svg className="size-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.632l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </div>
              </div>

            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
