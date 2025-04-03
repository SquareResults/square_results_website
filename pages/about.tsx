console.log("Rendering About Page...");

import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import CoreValues from "@/components/CoreValues";
import ComeJoinUs from "@/components/ComeJoinUs";
import BoardAdvisorSection from "@/components/BoardAdvisorSection/BoardAdvisorSection";

const About = () => {
  console.log("Rendering About Components...");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <CEOSection />
        <BoardAdvisorSection />
        <MissionSection />
        <CoreValues />
        <TeamSection />
        <ComeJoinUs />
        <Footer />
      </div>
    </div>
  );
};

export default About;
