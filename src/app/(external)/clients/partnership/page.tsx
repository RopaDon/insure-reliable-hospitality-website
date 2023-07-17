import { Metadata } from "next";
import Partnerships from "./explore-partnership";
import { PageData } from "@/src/config/constants/page-data";
import { generateSeoMetadata } from "@/src/components/utils/utils";

const { title, description, path } = PageData.ExplorePartnership;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function ExplorePartnership() {
  return (
    <>
      <Partnerships />
    </>
  );
}
