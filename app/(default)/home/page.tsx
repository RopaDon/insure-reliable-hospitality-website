export const metadata = {
  title: "Home",
  description: "Page description",
};

import Hero from "@/app/(default)/home/hero-home";
import HomeFooter from "@/app/(default)/home/home-footer";
import FeaturesSet from "@/app/(default)/home/features-set";
import HomeFeatureGlobe from "@/app/(default)/home/feature-globe";
import FeaturesBlocks from "@/app/(default)/home/features-blocks";
import FeaturesAnimation from "@/app/(default)/home/features-animation";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <HomeFeatureGlobe />
      <FeaturesSet />
      <FeaturesAnimation />
      <HomeFooter />
    </>
  );
}
