import { LyfshilpFooter } from "@/src/components/layouts/lyfshilp-footer";
import { LyfshilpNavbar } from "@/src/components/layouts/lyfshilp-navbar";
import { HowWeWork } from "@/src/components/ui/how-we-work";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafb] text-[#272835]">
      <LyfshilpNavbar />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-[#dfe1e7] bg-white px-3 py-1.5 text-sm font-medium text-[#666d80]">
            AI-first business intelligence
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-[#0d0d12] sm:text-6xl">
            Build intelligence, not just dashboards.
          </h1>
        </div>
      </main>

      <HowWeWork />

      <LyfshilpFooter />
    </div>
  );
}
