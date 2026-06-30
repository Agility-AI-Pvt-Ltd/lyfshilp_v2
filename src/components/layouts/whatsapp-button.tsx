"use client";

import React, { useState } from "react";

export function WhatsAppButton() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const message = "Hi! I want to know more about FutureX programs for my child.";
  const url = `https://wa.me/917042671115?text=${encodeURIComponent(message)}`;

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
      `}</style>

      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 select-none pointer-events-none">
        {/* Alert Bubble */}
        {isAlertVisible && (
          <div className="alert-bubble-animate pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md border border-[#FF492C]/25 text-[#272835] shadow-xl py-3 px-4 rounded-2xl max-w-[280px] sm:max-w-md">
            {/* Live Indicator */}
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF492C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF492C]"></span>
            </span>

            {/* Alert Message */}
            <p className="text-[10px] sm:text-xs font-extrabold tracking-wide uppercase leading-normal text-[#272835]">
              Next cohort starts <span className="text-[#FF492C]">15 July</span> — Only <span className="text-[#FF492C]">20 seats</span> per batch
            </p>

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

        {/* WhatsApp Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse-btn pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 shrink-0 group relative"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Tooltip (Only visible if the main alert bubble is dismissed to avoid overlapping) */}
          {!isAlertVisible && (
            <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
              Chat on WhatsApp
            </span>
          )}
        </a>
      </div>
    </>
  );
}
