import type { Metadata } from "next";
import { CorporateProgramPageContent } from "@/src/components/pages/corporate-program-page";

export const metadata: Metadata = {
  title: "Corporate AI | Lyfshilp",
  description:
    "Building AI-ready teams through hands-on training and workplace transformation — automate, build, and grow in a 10-hour corporate AI programme.",
};

export default function CorporateAIPage() {
  return <CorporateProgramPageContent />;
}
