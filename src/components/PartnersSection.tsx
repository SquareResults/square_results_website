import { motion } from "framer-motion";

const partners = [
  {
    logo: "/images/amazon.png",
    name: "Amazon"
  },
  {
    logo: "/images/microsoft.png",
    name: "Microsoft"
  },
  {
    logo: "/images/oracle.png",
    name: "Oracle"
  },
  {
    logo: "/images/salesforce.png",
    name: "Salesforce"
  },
  {
    logo: "/images/twicth.png",
    name: "Twitch"
  },
  {
    logo: "/images/zillow.png",
    name: "Zillow"
  }
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src="/images/partners.png"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-secondary mb-12 ml-12"
            >
              Our Partners
            </motion.h2>

            <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain" /> {/* Set fixed size */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;