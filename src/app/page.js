import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import GlobeSection from "@/components/GlobeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GlobeSection></GlobeSection>
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
