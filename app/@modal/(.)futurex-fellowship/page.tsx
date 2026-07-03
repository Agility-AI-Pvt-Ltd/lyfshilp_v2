"use client";

import FutureXFellowshipPage from "@/app/futurex-fellowship/page";
import { useEffect } from "react";

export default function InterceptedFellowshipPage() {
  // Lock parent page scrolling while fellowship overlay is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return <FutureXFellowshipPage />;
}
