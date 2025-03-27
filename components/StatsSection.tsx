import { motion } from "framer-motion";
import { Users, Building, Network } from "lucide-react";

const stats = [
  {
    number: "50K",
    label: "NETWORK",
    icon : "/images/network.png"
  },
  {
    number: "3K",
    label: "RECRUITERS",
    icon: "/images/recruiters.png"
  },
  {
    number: "1100",
    label: "COMPANIES",
    icon: "/images/companies.png"
  }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <img src={stat.icon} alt={stat.label} className="w-24 h-24 text-[#1E3A8A] mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-5xl font-bold text-[#1E3A8A] mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xl text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;