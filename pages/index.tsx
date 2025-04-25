"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import JobSeekersSection from "@/components/JobSeekersSection";
import HiringManagersSection from "@/components/HiringManagersSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ChatbotComponent from "@/components/ChatbotComponent";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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

      <Footer />
    </div>
  );
};

export default Home;
