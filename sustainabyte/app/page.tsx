import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import TrustedBy from "@/components/home/TrustedBy";
import EPICSection from "@/components/home/EPICSection";
import NetZeroFocus from "@/components/home/NetZeroFocus";
import FocusAreas from "@/components/home/FocusAreas";
import GlobalGoals from "@/components/home/GlobalGoals";
import WhatWeDo from "@/components/home/WhatWeDo";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <EPICSection />
      <TrustedBy />
      <NetZeroFocus />
      <FocusAreas />
      <GlobalGoals />
      <WhatWeDo />
      <FAQSection />
    </>
  );
}
