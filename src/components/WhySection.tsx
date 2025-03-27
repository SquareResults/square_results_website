import { motion } from "framer-motion";
import styles from './WhySection.module.css';

const WhySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              Why <br />
              <span className="text-[#1E3A8A]">SquareResults?</span>
            </h2>
            <p className="text-lg text-gray-600">
              SquareResults is revolutionizing the hiring process by creating an ecosystem that
              bridges the gaps in recruitment. We eliminate the chaos, improve
              transparency, and prioritize human connections—ensuring job seekers find
              real opportunities and recruiters discover the best talent, faster.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative p-4 bg-white rounded-2xl shadow-xl overflow-hidden ${styles['image-container']}`}
          >
            <img
              src="/images/why_sqr.png"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-2xl pointer-events-none" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;