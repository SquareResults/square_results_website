import { motion } from "framer-motion";
import { Radar, Circle, ArrowUp } from "lucide-react";

const services = [
  {
    title: "RADAR",
    description: "There is just enough space here for several lines of text. Use it well.",
    icon: Radar
  },
  {
    title: "SquareCircle",
    description: "There is just enough space here for several lines of text. Use it well.",
    icon: Circle
  },
  {
    title: "SquareTop",
    description: "There is just enough space here for several lines of text. Use it well.",
    icon: ArrowUp
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-secondary mb-16"
        >
          OUR SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 relative">
                <div className="w-32 h-32 mx-auto bg-sky-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-primary" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full mix-blend-multiply filter blur-lg opacity-30" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;