"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export function ModalTransitionWrapper({ modal }: { modal: React.ReactNode }) {
  const pathname = usePathname();
  const isFellowship = pathname === "/futurex-fellowship";
  
  // A truthy 'modal' prop alone isn't enough because Next.js passes a ReactElement for default.tsx.
  // We use useSelectedLayoutSegment("modal") to determine if a route is actively rendering in the slot.
  const modalSegment = useSelectedLayoutSegment("modal");
  const isModalActive = modalSegment !== null;

  return (
    <AnimatePresence>
      {isFellowship && isModalActive && modal && (
        <motion.div
          key="fellowship-modal-overlay"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black shadow-2xl"
        >
          {modal}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
