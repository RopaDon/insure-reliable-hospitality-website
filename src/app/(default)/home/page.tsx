import { Metadata } from "next";
import Hero from "@/src/app/(default)/home/hero-home";
import { PageData } from "@/src/config/constants/page-data";
import HomeFooter from "@/src/app/(default)/home/home-footer";
import FeaturesSet from "@/src/app/(default)/home/features-set";
import { generateSeoMetadata } from "@/src/components/utils/utils";
import HomeFeatureGlobe from "@/src/app/(default)/home/feature-globe";
import FeaturesBlocks from "@/src/app/(default)/home/features-blocks";
import FeaturesAnimation from "@/src/app/(default)/home/features-animation";

const { title, description, path } = PageData.Home;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

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
