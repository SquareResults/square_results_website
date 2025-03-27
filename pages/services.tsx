import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; // ✅ Next.js optimized image import

const services = [
  {
    icon: "/images/radar.png",
    title: "RADAR",
    description:
      "RADAR, a top product from Square Results, showcases elite candidates and enhances their visibility in the recruitment field. With advanced tools like the Web Portfolio for a strong online presence and an accelerated job search solution, RADAR streamlines the job search process for effective results.",
  },
  {
    icon: "/images/swift.png",
    title: "SWFT",
    description:
      "Introducing SWFT, our innovative solution that transforms the job search process. Utilizing advanced AI technology, SWFT accelerates the search, matches candidates with ideal positions, and offers personalized recommendations based on individual skills and preferences.",
  },
];

const community = [
  {
    icon: "/images/SquareTop.png",
    title: "SquareTop",
    description:
      "SquareTop is an exclusive network for corporate leaders, facilitating connections with peers and industry experts. This community encourages strategic discussions and alliances to elevate recruitment standards and offer valuable insights in the recruitment landscape.",
  },
  {
    icon: "/images/SquareCircle.png",
    title: "SquareCircle",
    description:
      "SquareCircle is an exclusive network dedicated to empowering corporate and business professionals. Our platform fosters connection and insight sharing, helping recruiters efficiently find the talent they need.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <Navbar />
      <div className="container mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#081321] mb-6">
            Our <span className="text-[#4DCCE6]">Services</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 p-12px">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 bg-[#4DCCE6]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Image src={service.icon} alt={service.title} width={128} height={128} /> {/* ✅ Fixed Image */}
                  </div>
                  <CardTitle className="text-[#081321] flex items-center text-2xl justify-center mb-32 padding-12">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xl text-gray-600 mt-32 text-justify">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 py-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#081321] mb-6">Community</h1>
          </motion.div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {community.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-32 h-32 bg-[#4DCCE6]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Image src={item.icon} alt={item.title} width={128} height={128} /> {/* ✅ Fixed Image */}
                    </div>
                    <CardTitle className="text-[#081321] text-2xl flex items-center justify-center">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xl text-gray-600 text-justify">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
