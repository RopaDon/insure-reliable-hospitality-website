import { Metadata } from "next";
import Faqs from "@/src/app/(default)/support/faqs";
import Hero from "@/src/app/(default)/support/hero-support";
import { PageData } from "@/src/config/constants/page-data";
import { generateSeoMetadata } from "@/src/components/utils/utils";

const { title, description, path } = PageData.Support;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function Support() {
  return (
    <>
      <Hero />
      <Faqs />
    </>
  );
}
