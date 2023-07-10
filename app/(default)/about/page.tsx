export const metadata = {
  title: "About",
  description: "Page description",
};

import Hero from "./hero-about";
import Content from "./content";
import Team from "@/components/team";
import Stats from "@/components/stats-02";
import AboutUsClient from "./about-us-clients";
import TeamMembers from "@/components/team-members";

export default function About() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <Content />
      <Team />
      <TeamMembers />
      <AboutUsClient />
    </>
  );
}
