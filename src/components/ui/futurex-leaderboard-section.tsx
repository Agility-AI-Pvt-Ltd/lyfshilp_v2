import React from "react";

export function FutureXLeaderboardSection() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#1e5237]">
            GAMIFIED LEARNING
          </p>
          <h2 className="mb-6 text-[42px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[52px]">
            Climb the XP Leaderboard
          </h2>
          <p className="text-[19px] leading-relaxed text-[#4b5563] sm:text-[21px]">
            Every cohort has a live ranking. Complete missions, ship milestones,
            and earn your place on the podium.
          </p>
        </div>

        {/* Podium */}
        <div className="flex flex-col items-center">
          <div className="flex items-end justify-center gap-3 sm:gap-6 w-full max-w-3xl">
            {/* Rank 2 - Silver */}
            <div className="relative flex h-[240px] w-1/3 flex-col items-center justify-start rounded-t-3xl bg-gradient-to-b from-[#e2e4e6] to-[#b8bcbf] p-4 shadow-sm sm:h-[280px] sm:p-6 transition-transform hover:-translate-y-2 duration-300">
              <div className="mb-6 flex size-8 sm:size-10 items-center justify-center rounded-full bg-white/40 text-sm sm:text-base font-bold text-gray-600 shadow-inner ring-1 ring-white/50 backdrop-blur-sm">
                2
              </div>
              <h3 className="mb-1 text-center text-[15px] sm:text-[18px] font-extrabold tracking-tight text-[#111827]">
                Sam Smith
              </h3>
              <p className="mb-4 text-[12px] sm:text-[14px] text-gray-600">
                @sam_smith
              </p>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[28px] sm:text-[36px] font-black text-[#1e5237]">
                  207
                </span>
                <span className="text-[11px] sm:text-[13px] font-bold text-gray-600">
                  XP
                </span>
              </div>
            </div>

            {/* Rank 1 - Gold */}
            <div className="relative flex h-[280px] w-[38%] flex-col items-center justify-start rounded-t-3xl bg-gradient-to-b from-[#fef0a6] to-[#d4af37] p-4 shadow-xl sm:h-[340px] sm:p-6 transition-transform hover:-translate-y-2 duration-300 z-10 -mx-2 sm:-mx-0">
              <div className="mb-6 flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/40 text-base sm:text-lg font-bold text-amber-900 shadow-inner ring-1 ring-white/50 backdrop-blur-sm">
                1
              </div>
              <h3 className="mb-1 text-center text-[16px] sm:text-[20px] font-extrabold tracking-tight text-[#111827]">
                Alex Johnson
              </h3>
              <p className="mb-6 text-[12px] sm:text-[14px] text-amber-900/80">
                @alex_j
              </p>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[32px] sm:text-[42px] font-black text-[#1e5237]">
                  222
                </span>
                <span className="text-[12px] sm:text-[14px] font-bold text-amber-900/80">
                  XP
                </span>
              </div>
            </div>

            {/* Rank 3 - Bronze */}
            <div className="relative flex h-[220px] w-1/3 flex-col items-center justify-start rounded-t-3xl bg-gradient-to-b from-[#e8c09a] to-[#bf8552] p-4 shadow-sm sm:h-[250px] sm:p-6 transition-transform hover:-translate-y-2 duration-300">
              <div className="mb-6 flex size-8 sm:size-10 items-center justify-center rounded-full bg-white/30 text-sm sm:text-base font-bold text-amber-950 shadow-inner ring-1 ring-white/40 backdrop-blur-sm">
                3
              </div>
              <h3 className="mb-1 text-center text-[15px] sm:text-[18px] font-extrabold tracking-tight text-[#111827]">
                Taylor Doe
              </h3>
              <p className="mb-4 text-[12px] sm:text-[14px] text-amber-950/70">
                @taylordoe
              </p>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[26px] sm:text-[34px] font-black text-[#1e5237]">
                  196
                </span>
                <span className="text-[11px] sm:text-[13px] font-bold text-amber-950/70">
                  XP
                </span>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-[14px] text-[#505a66]">
            From cohort 26JUNSILVER • Top 30 ranked by total experience points
          </p>
        </div>
      </div>
    </section>
  );
}
