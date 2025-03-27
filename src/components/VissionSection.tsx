import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#081321] mb-8 w-3/4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          SquareResults envisions a world where the journey to one's dream job is not just a possibility, but a tangible reality. We aim to transform the job search process from a daunting task into an inspiring journey of self-discovery and growth. By providing innovative solutions that streamline the application process, improve communication between job seekers and employers, and make the job search easier and faster, we're committed to transforming the job search experience into a more efficient and satisfying journey for everyone involved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VissionSection;