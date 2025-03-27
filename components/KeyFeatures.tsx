import { motion } from "framer-motion";
import { FileText, Users, CheckCircle } from "lucide-react";

const features = [
  {
    title: "RADAR Access",
    description: "Tap into a high-quality, pre-vetted candidate pool to fast-track your hiring process and find top talent effortlessly.",
    image: "/images/image.png",
    icon: FileText
  },
  {
    title: "Industry Events",
    description: "Gain insights from industry leaders through exclusive webinars, fireside chats, and live Q&A sessions covering the latest hiring trends.",
    image: "/images/image.png",
    icon: Users
  },
  {
    title: "Discussion Threads",
    description: "Engage in meaningful conversations with top TA professionals, share best practices, and discuss hiring challenges in a collaborative space.",
    image: "/images/image.png",
    icon: CheckCircle
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-secondary text-[#1D066F] mb-16"
        >
          KEY FEATURES
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <feature.icon className="w-10 h-10 text-[#1D066F] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;