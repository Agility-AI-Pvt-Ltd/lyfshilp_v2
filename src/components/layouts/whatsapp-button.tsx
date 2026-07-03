"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [fellowshipTextIndex, setFellowshipTextIndex] = useState(0);

  const isFellowship = pathname === "/futurex-fellowship";

  useEffect(() => {
    if (!isFellowship) return;
    const interval = setInterval(() => {
      setFellowshipTextIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [isFellowship]);

  const message = isFellowship
    ? "Book a quick call"
    : "Hi! I want to know more about FutureX programs for my child.";

  const whatsappUrl = `https://wa.me/917042671115?text=${encodeURIComponent(message)}`;
  const instagramUrl = "https://www.instagram.com/futurexfellowship/";

  return (
    <>
      <style>{`
        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        .whatsapp-pulse-btn {
          animation: whatsapp-pulse 2s infinite;
        }

        /* Subtle slide-in for the alert bubble */
        @keyframes alert-slide-in {
          0% {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .alert-bubble-animate {
          animation: alert-slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes text-fade-in {
          0% {
            opacity: 0;
            transform: translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .text-fade-in {
          animation: text-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3 select-none pointer-events-none">
        {/* Alert Bubble */}
        {isAlertVisible && (
          <div className={`alert-bubble-animate pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md border text-[#272835] shadow-xl py-3 px-4 rounded-2xl max-w-[280px] sm:max-w-md ${isFellowship ? "border-[#10b981]/25" : "border-[#FF492C]/25"}`}>
            {/* Live Indicator */}
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isFellowship ? "bg-[#10b981]" : "bg-[#FF492C]"}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isFellowship ? "bg-[#10b981]" : "bg-[#FF492C]"}`}></span>
            </span>

            {/* Alert Message */}
            {isFellowship ? (
              <p
                key={fellowshipTextIndex}
                className="text-fade-in text-[10px] sm:text-xs font-extrabold tracking-wide uppercase leading-normal text-[#272835]"
              >
                {fellowshipTextIndex === 0 ? (
                  <>
                    Next batch starts <span className="text-[#10b981]">June 15</span> — <span className="text-[#10b981]">12 seats</span> remaining
                  </>
                ) : (
                  <>
                    Book a <span className="text-[#10b981]">quick call</span>
                  </>
                )}
              </p>
            ) : (
              <p className="text-[10px] sm:text-xs font-extrabold tracking-wide uppercase leading-normal text-[#272835]">
                Next cohort starts <span className="text-[#FF492C]">15 July</span> — Only <span className="text-[#FF492C]">20 seats</span> per batch
              </p>
            )}

            {/* Dismiss Button */}
            <button
              onClick={() => setIsAlertVisible(false)}
              className="text-[#272835]/40 hover:text-[#272835]/90 transition-colors ml-1 p-0.5 shrink-0 hover:bg-black/5 rounded cursor-pointer"
              aria-label="Dismiss alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}

        <div className="flex flex-col items-center gap-3">
          {/* Instagram Button */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#dd2a7b]/40 shrink-0 group relative"
            aria-label="Follow on Instagram"
          >
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

            {!isAlertVisible && (
              <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
                Follow on Instagram
              </span>
            )}
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-pulse-btn pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 shrink-0 group relative"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {!isAlertVisible && (
              <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
                Chat on WhatsApp
              </span>
            )}
          </a>
        </div>
      </div>
    </>
  );
}
