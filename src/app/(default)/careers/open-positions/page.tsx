import Sidebar from "./sidebar";
import { Metadata } from "next";
import OpenPositionList from "./open-position-list";
import OpenPositionHero from "./open-position-hero";
import { PageData } from "@/src/config/constants/page-data";
import { generateSeoMetadata } from "@/src/components/utils/utils";
import PaginationClassic from "@/src/components/pagination-classic";

const { title, description, path } = PageData.Careers.OpenPositions;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function OpenPositions() {
  return (
    <>
      <OpenPositionHero />
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <div className="md:flex md:justify-between" data-sticky-container>
              <Sidebar />
              <div className="md:grow">
                {/* @ts-expect-error Async Server Component */}
                <OpenPositionList />
                <PaginationClassic />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
