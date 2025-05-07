"use client";

import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import TeamSection from "@/components/TeamSection";
import CoreValues from "@/components/CoreValues";
import ComeJoinUs from "@/components/ComeJoinUs";
import BoardAdvisorSection from "@/components/BoardAdvisorSection/BoardAdvisorSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <div className="pt-16">
        <AboutSection />
        <CEOSection />
        <BoardAdvisorSection />
        <MissionSection />
        <CoreValues />
        <TeamSection />
        <ComeJoinUs />
      </div>
    </div>
  );
};

export default About;
