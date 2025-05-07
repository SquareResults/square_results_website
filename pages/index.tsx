"use client";

import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import JobSeekersSection from "@/components/JobSeekersSection";
import HiringManagersSection from "@/components/HiringManagersSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ChatbotComponent from "@/components/ChatbotComponent";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhySection />

      {/* <KeyFeatures/> */}
      <JobSeekersSection />
      <HiringManagersSection />
      <StatsSection />
      <TestimonialsSection />

      {/* <UpcomingEvents/> */}
      <PartnersSection />

      {/* ==== Chat Component ==== */}
      <ChatbotComponent />
    </div>
  );
};

export default Home;
