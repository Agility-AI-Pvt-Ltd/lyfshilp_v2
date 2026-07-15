"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    videoSrc: "/videos/govt_corp/govt.mp4",
  },
  {
    id: 2,
    videoSrc: "/videos/govt_corp/govt1.mp4",
  },
];

export function GovtBodiesTestimonials() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedStates, setMutedStates] = useState(() =>
    testimonials.map(() => true),
  );

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = mutedStates[index];
      }
    });
  }, [mutedStates]);

  const toggleMute = (index: number) => {
    setMutedStates((prev) => {
      const willUnmute = prev[index];

      if (willUnmute) {
        // Only one video can have sound at a time
        return prev.map((_, i) => i !== index);
      }

      return prev.map((muted, i) => (i === index ? true : muted));
    });
  };

  return (
    <section className="border-t border-white/10 bg-[#030508] px-6 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#CFFD53]">
            In Their Words
          </p>
          <h2 className="mt-4 text-[38px] font-black leading-tight tracking-tight text-white sm:text-[48px]">
            Testimonials from the field.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
            Hear directly from officials and leaders who experienced our
            institutional AI training programmes.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => {
            const isMuted = mutedStates[index];

            return (
              <div
                key={testimonial.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-transform hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[9/12] w-full overflow-hidden rounded-xl bg-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={testimonial.videoSrc}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />

                  <button
                    type="button"
                    onClick={() => toggleMute(index)}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="absolute bottom-4 right-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                  >
                    {isMuted ? (
                      <svg
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
