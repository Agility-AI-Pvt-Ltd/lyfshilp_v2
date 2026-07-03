"use client";

import React, { useRef } from "react";

const videoReviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Student Founder",
    videoSrc: "/videos/reviews/SaveClip.App_AQMJhIvM7WQBkrkh67hRfXwhONUq7o9ABF1f55uAxmvXJKOgWyJ4EEHrRDSJ706bLFCxTbcn3eYJAlkIc-pVdqISnrGQOHTELpykZdo.mp4",
  },
  {
    id: 2,
    name: "Neha Gupta",
    role: "Fellowship Alumni",
    videoSrc: "/videos/reviews/SaveClip.App_AQNQs6eLhZgbEry77lkYjTozyGFkvRu5akl5YqBuvnKklWsttjAPNf-YU9xltbUNHIZlQ-Sa8jlZ5lHf4Qlcyq4xb-cazvdMb6bTCAg (1) copy.mp4",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Young Entrepreneur",
    videoSrc: "/videos/reviews/SaveClip.App_AQOBNKBzecCUeBSsft4pvUvVrQIb14ahHIm21GXAQbsIzu4NfZkr0sZUgFXPtrzgWtqLCiIH9B1RgclAOWpnzXBWkZhjZ1JjXIpEQFs.mp4",
  },
];

export function FutureXReviewsSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video) {
        video.pause();
      }
    });
  };

  return (
    <section className="bg-[#050505] px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Area */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="mb-6 inline-flex rounded-md border border-white/10 px-3 py-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                REVIEWS
              </span>
            </div>
            <h2 className="text-[40px] font-black leading-[1.1] tracking-tight sm:text-[52px]">
              <span className="block text-white">What people</span>
              <span className="block text-gray-500">are saying</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 pb-2">
            <div className="flex text-white text-sm">
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <span className="text-[13px] font-semibold text-gray-400 font-mono tracking-tight">4.9 / 5 · 2,000+ users</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoReviews.map((review, index) => (
            <div 
              key={review.id}
              className="flex flex-col gap-4 rounded-[20px] border border-white/10 bg-[#111] p-4 transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              {/* Video Player */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[12px] bg-black shadow-inner">
                {review.videoSrc ? (
                  <video 
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={review.videoSrc} 
                    controls 
                    className="h-full w-full object-cover"
                    preload="metadata"
                    onPlay={() => handlePlay(index)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center text-gray-600 bg-[#1a1a1a]">
                    <svg className="size-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold">Video Path Needed</span>
                  </div>
                )}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 px-2 pb-1">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white">{review.name}</h4>
                  <p className="text-[13px] text-gray-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
