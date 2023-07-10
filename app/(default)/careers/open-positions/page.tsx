export const metadata = {
  title: "Career - Open Positions",
  description: "",
};

import Sidebar from "./sidebar";
import OpenPositionList from "./open-position-list";
import OpenPositionHero from "./open-position-hero";
import PaginationClassic from "@/components/pagination-classic";

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
