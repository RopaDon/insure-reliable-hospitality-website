import Hero from "./hero-about";
import Content from "./content";
import { Metadata } from "next";
import TeamMembers from "./team-members";
import AboutUsClient from "./about-us-clients";
import Team from "@/src/app/(default)/about/team";
import { PageData } from "@/src/config/constants/page-data";
import { generateSeoMetadata } from "@/src/components/utils/utils";

const { title, description, path } = PageData.About;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function About() {
  return (
    <>
      <Hero />
      <Content />
      <Team />
      <TeamMembers />
      <AboutUsClient />
    </>
  );
}
