import { motion } from "framer-motion";
import { Search, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const features = [
  {
    title: "Access to Quality Talent",
    description: "AI-driven matching helps you find the right candidates faster.",
    image: "/images/quality_talent.gif",
    icon: Search,
    gradient: "from-blue-100 to-purple-100"
  },
  {
    title: "Seamless Hiring Workflow",
    description: "Reduce time-to-hire with a structured and efficient process.",
    image: "/images/seamless_workflow.gif",
    icon: Clock,
    gradient: "from-emerald-100 to-sky-100"
  },
  {
    title: "Better Candidate Engagement",
    description: "Build real connections with top talent and avoid drop-offs.",
    image: "/images/candidate_engagement.gif",
    icon: Users,
    gradient: "from-orange-100 to-rose-100"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative w-full"
    >
      <div className={cn(
        "absolute inset-0 rounded-3xl bg-gradient-to-r",
        feature.gradient,
        "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      )} />
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
        <div className="relative h-80 mb-8 overflow-hidden rounded-2xl"> {/* Increased height */}
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-white transition-colors duration-500">
            <feature.icon className="w-8 h-8 text-[#1D066F]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1D066F]">{feature.title}</h3>
        </div>
        
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const HiringManagersSection = () => {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  useEffect(() => {
    if (api) {
      const onSelect = () => {
        setSelectedIndex(api.selectedScrollSnap());
      };
      api.on('select', onSelect);
      return () => {
        api.off('select', onSelect);
      };
    }
  }, [api]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-50/95" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative flex flex-col md:flex-row items-center"
      >
        <div className="md:w-3/5 mb-16 md:mb-0 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 rounded-full text-xl font-medium bg-gray-100 text-gray-800 inline-block mb-4">
              For Hiring Managers
            </span>
            <h2 className="text-4xl font-bold text-[#1D066F] mb-4">
              Streamline Your Hiring Process
            </h2>
            <p className="text-lg text-gray-600">
              Find and connect with the perfect candidates efficiently
            </p>
          </motion.div>
        </div>

        <div className="md:w-3/4">
          <Carousel
            setApi={setApi}
            plugins={[plugin]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={feature.title}>
                  <FeatureCard feature={feature} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
      </motion.div>

      <div className="flex justify-center gap-2 mt-8">
        {features.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors duration-300",
              selectedIndex === index ? "bg-gray-800" : "bg-gray-300"
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HiringManagersSection;
