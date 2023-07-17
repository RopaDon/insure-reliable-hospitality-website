import { Metadata } from "next";
import HeroInvestors from "./hero-investors";
import EmptyState from "@/src/app/(default)/investors/empty-investors-state";
import { PageData } from "@/src/config/constants/page-data";
import { generateSeoMetadata } from "@/src/components/utils/utils";

const { title, description, path } = PageData.Investors;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function Investors() {
  return (
    <>
      <HeroInvestors />
      <EmptyState />
    </>
  );
}
