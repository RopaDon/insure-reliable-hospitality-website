import { Metadata } from "next";
import Partnerships from "./explore-partnership";
import { PageData } from "@/src/config/constants/page-data";
import { generateSeoMetadata } from "@/src/components/utils/utils";

const { title, description } = PageData.ExplorePartnership;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description),
};

export default function ExplorePartnership() {
  return (
    <>
      <Partnerships />
    </>
  );
}
