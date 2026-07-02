"use client";

import { useEffect, useState } from "react";

type Metric = {
  value: string;
  label: string;
};

export function ScrollingMetrics({
  metrics,
  accentClassName,
}: {
  metrics: Metric[];
  accentClassName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="relative w-full">
      <div className="relative h-[340px] lg:h-[380px] w-full">
        <article className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#e7e2d9] bg-white px-8 shadow-[0_28px_80px_rgba(21,24,38,0.13)] sm:px-12">
          <span
            className={`absolute right-0 top-0 size-16 ${accentClassName}`}
            aria-hidden="true"
          />
          <span
            className={`absolute bottom-0 left-0 size-28 ${accentClassName} opacity-15`}
            aria-hidden="true"
          />

          <div className="relative h-full w-full">
            {metrics.map((metric, index) => {
              const isActive = index === activeIndex;
              // If it's the first slide and we just cycled from the last slide, we want it to come from the bottom
              // Let's keep it simple: past goes up (-30px), future comes from bottom (30px)
              // But for wrap around, let's just base it on distance
              const distance = index - activeIndex;

              return (
                <div
                  key={metric.label}
                  className="absolute inset-0 flex items-center justify-center gap-7 transition-all duration-700 ease-in-out sm:gap-10"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translate3d(0, ${isActive ? 0 : distance > 0 ? 30 : -30}px, 0)`,
                    filter: `blur(${isActive ? 0 : 4}px)`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  <strong className="text-[76px] font-black leading-none tracking-[-0.06em] text-[#272835] sm:text-[104px] lg:text-[112px]">
                    {metric.value}
                  </strong>
                  <span className="h-20 w-px bg-[#ddd8cf]" aria-hidden="true" />
                  <span className="text-[18px] font-black uppercase tracking-[0.16em] text-[#747b8f] sm:text-[22px]">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

          <span className="absolute bottom-7 right-8 text-[12px] font-black tracking-[0.18em] text-[#a8acb7]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(metrics.length).padStart(2, "0")}
          </span>
        </article>

        <div
          className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-2"
          aria-hidden="true"
        >
          {metrics.map((metric, index) => (
            <button
              key={metric.label}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#5e22ff]"
                  : "w-1.5 bg-[#d5d0c8]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
