import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import BlogsSection from "@/components/BlogsSection";
import WhySection from "@/components/WhySection";
import JobSeekersSection from "@/components/JobSeekersSection";
import HiringManagersSection from "@/components/HiringManagersSection";
import KeyFeatures from "@/components/KeyFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
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
      <Footer/>
    </div>
  );
};

export default Index;