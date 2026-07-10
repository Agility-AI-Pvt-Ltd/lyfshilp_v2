"use client";

import { useEffect, useRef, useState, startTransition } from "react";
import { animate, useInView } from "framer-motion";

interface StaggeredCountdownProps {
  value: string; // e.g. "500"
  suffix?: string;
  color?: string;
  duration?: number;
  className?: string;
}

export function StaggeredCountdown({
  value,
  suffix = "",
  color = "#ffffff",
  duration = 2,
  className = "",
}: StaggeredCountdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const hasAnimated = useRef(false);

  const chars = value.split("");
  const digitIndices: number[] = [];
  let digitCounter = 0;
  for (const ch of chars) {
    if (ch >= "0" && ch <= "9") {
      digitIndices.push(digitCounter++);
    } else {
      digitIndices.push(-1);
    }
  }
  const digitCount = digitCounter;

  const [animatedDigits, setAnimatedDigits] = useState<number[]>(
    Array(digitCount).fill(0),
  );
  const suffixNeedsGap = Boolean(value && /^\s/.test(suffix));
  const displaySuffix = suffixNeedsGap ? suffix.trimStart() : suffix;

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    chars.forEach((ch, charIndex) => {
      const digitIndex = digitIndices[charIndex];
      if (digitIndex === -1) return;

      const targetDigit = parseInt(ch, 10);
      const staggerDelay = digitIndex * 0.1;
      const digitDuration = duration * 0.8;

      const id = setTimeout(() => {
        animate(0, targetDigit, {
          duration: digitDuration,
          ease: "easeOut",
          onUpdate: (v) => {
            startTransition(() => {
              setAnimatedDigits((prev) => {
                const next = [...prev];
                next[digitIndex] = Math.max(0, Math.min(9, v));
                return next;
              });
            });
          },
        });
      }, staggerDelay * 1000);

      timeouts.push(id);
    });

    return () => timeouts.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap sm:gap-2 ${className}`}
    >
      <div
        style={{ position: "relative", overflow: "hidden", height: "1.2em" }}
        className="inline-flex items-center"
      >
        {chars.map((ch, charIndex) => {
          const digitIndex = digitIndices[charIndex];

          if (digitIndex === -1) {
            // non-digit character (e.g. ".")
            return (
              <span
                key={charIndex}
                style={{ color, lineHeight: 1, display: "inline-block" }}
              >
                {ch}
              </span>
            );
          }

          const animVal = animatedDigits[digitIndex] ?? 0;
          const current = Math.floor(animVal) % 10;
          const progress = animVal - Math.floor(animVal);
          const next = (current + 1) % 10;

          return (
            <div
              key={charIndex}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "1.2em",
                display: "inline-flex",
                alignItems: "center",
                minWidth: "0.6em",
                justifyContent: "center",
              }}
            >
              {/* current digit sliding up */}
              <div
                style={{
                  color,
                  fontVariantNumeric: "tabular-nums",
                  display: "inline-block",
                  lineHeight: 1,
                  textAlign: "center",
                  width: "100%",
                  position: "absolute",
                  transform: `translateY(${progress * -100}%)`,
                }}
              >
                {current}
              </div>
              {/* next digit coming in from bottom */}
              {progress > 0 && next <= 9 && (
                <div
                  style={{
                    color,
                    fontVariantNumeric: "tabular-nums",
                    display: "inline-block",
                    lineHeight: 1,
                    textAlign: "center",
                    width: "100%",
                    position: "absolute",
                    transform: `translateY(${(1 - progress) * 100}%)`,
                  }}
                >
                  {next}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {suffix && (
        <span
          style={{ color, lineHeight: 1, height: "1.2em" }}
          className="inline-flex items-center"
        >
          {suffix}
        </span>
      )}
    </div>
  );
}
