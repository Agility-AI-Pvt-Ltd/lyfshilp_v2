"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";

export function ScrollRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const container = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "start 50%"],
  });

  const words = text.split(" ");

  return (
    <h2 ref={container} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </h2>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}
