import { HomeHero } from "@/components/blocks/HomeHero";
import { HomePrinciples } from "@/components/blocks/HomePrinciples";
import { HomeCategoryGrid } from "@/components/blocks/HomeCategoryGrid";
import { HomePreviewSection } from "@/components/blocks/HomePreviewSection";
import { HomeNextSteps } from "@/components/blocks/HomeNextSteps";

export default function Home() {
  return (
    <main className="flex-1 min-w-0 space-y-24">
      <HomeHero />
      <HomePrinciples />
      <HomeCategoryGrid />
      <HomePreviewSection />
      <HomeNextSteps />
    </main>
  );
}
