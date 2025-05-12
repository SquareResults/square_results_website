import { motion } from "motion/react";
import { testimonials } from "../lib/testimonialsData";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-8 overflow-hidden bg-gradient-to-br from-primary-medium to-primary-mirage text-semantic-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-semantic-white font-bold text-center">
          Read the Reviews
        </motion.h2>

        <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
