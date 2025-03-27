import { motion } from "framer-motion";
import { FileText, Video, BookOpen, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";

const Resources = () => {
  const resources = [
    {
      type: "Guide",
      icon: FileText,
      title: "Complete Hiring Guide 2024",
      description: "Learn the latest hiring trends and best practices",
      downloadLink: "#"
    },
    {
      type: "Video",
      icon: Video,
      title: "Platform Tutorial Series",
      description: "Step-by-step guide to using our platform",
      downloadLink: "#"
    },
    {
      type: "eBook",
      icon: BookOpen,
      title: "Recruitment Analytics",
      description: "Understanding hiring metrics and KPIs",
      downloadLink: "#"
    }
  ];

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
            Resource <span className="text-[#4DCCE6]">Center</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Access our comprehensive library of hiring resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4DCCE6]/10 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-[#4DCCE6]" />
                  </div>
                  <CardTitle className="text-[#081321]">{resource.title}</CardTitle>
                  <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-block bg-[#4DCCE6]/5 text-[#4DCCE6] px-3 py-1 rounded-full text-sm">
                    {resource.type}
                  </span>
                </CardContent>
                <CardFooter>
                  <a
                    href={resource.downloadLink}
                    className="inline-flex items-center gap-2 text-[#4DCCE6] hover:text-[#45B5B5] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 bg-[#4DCCE6]/5 rounded-2xl text-center"
        >
          <h2 className="text-2xl font-bold text-[#081321] mb-4">Need Custom Resources?</h2>
          <p className="text-gray-700 mb-6">
            We can create tailored resources specific to your industry and requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#4DCCE6] text-white px-6 py-3 rounded-full hover:bg-[#45B5B5] transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
      <BlogsSection />
      <Footer/>
    </div>
  );
};

export default Resources;