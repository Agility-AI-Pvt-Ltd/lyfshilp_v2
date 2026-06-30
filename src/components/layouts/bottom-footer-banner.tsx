"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BottomFooterBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end end"],
  });
  const bannerLift = useTransform(scrollYProgress, [0, 1], ["18%", "0%"]);
  const wordmarkLift = useTransform(scrollYProgress, [0, 1], ["34%", "0%"]);
  const taglineLift = useTransform(scrollYProgress, [0, 1], ["46%", "-3%"]);
  const wordmarkScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={bannerRef}
      className="sticky bottom-0 -z-10 min-h-[330px] overflow-hidden bg-[#ff492c] sm:min-h-[390px] lg:min-h-[430px] w-full"
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-3 sm:px-7 lg:px-10"
        style={{ y: bannerLift }}
      >
        <motion.h2
          className="relative flex origin-bottom-left items-start whitespace-nowrap text-[clamp(5.2rem,13vw,13rem)] font-black leading-[0.7] tracking-normal text-[#050505]"
          style={{ scale: wordmarkScale, y: wordmarkLift }}
        >
          LYFSHILP
          <span className="ml-2 mt-3 text-[clamp(1.2rem,2vw,2.4rem)] font-black leading-none tracking-normal">
            ®
          </span>
        </motion.h2>
        <motion.div
          className="absolute bottom-5 right-[-0.35em] hidden text-right md:block lg:bottom-7"
          style={{ y: taglineLift }}
        >
          <h3 className="text-[clamp(3rem,4.2vw,5.4rem)] font-black leading-[0.86] tracking-normal text-[#050505]">
            Beyond<br />
            Learning<br />
            Built with<br />
            Vision.
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
