import React from "react";

type FutureXStackingSectionProps = {
  zIndex: number;
  children: React.ReactNode;
  className?: string;
};

/** Full-viewport sticky layer — next section scrolls over this one. */
export function FutureXStackingSection({
  zIndex,
  children,
  className = "",
}: FutureXStackingSectionProps) {
  return (
    <div
      className={`sticky top-0 h-svh snap-start snap-always overflow-hidden shadow-[0_-24px_64px_rgba(0,0,0,0.85)] ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}
