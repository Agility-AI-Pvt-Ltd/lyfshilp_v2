import type { Metadata } from "next";
import { CorporateAIPageContent } from "@/src/components/pages/corporate-ai-page";

export const metadata: Metadata = {
  title: "Government Bodies | Lyfshilp",
  description:
    "Empowering public institutions with practical AI capabilities for smarter governance — hands-on training, workflow automation, and responsible AI implementation.",
};

export default function GovtBodiesPage() {
  return <CorporateAIPageContent />;
}
