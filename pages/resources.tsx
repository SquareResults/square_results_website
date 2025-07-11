import React from "react";
import { motion } from "motion/react";
import { FileText, Video, BookOpen } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import BlogsSection from "@/components/BlogsSection";
import CustomButton from "@/components/CustomButton";

const Resources = () => {
  const resources = [
    {
      type: "Guide",
      icon: FileText,
      title: "Complete Hiring Guide 2025",
      description: "Learn the latest hiring trends and best practices",
      downloadLink: "#",
      url: "https://theradarlist.com/what-we-do",
    },
    {
      type: "Video",
      icon: Video,
      title: "Platform Tutorial Series",
      description: "Step-by-step guide to using our platform",
      downloadLink: "#",
      url: "https://theradarlist.com/courselist",
    },
    {
      type: "eBook",
      icon: BookOpen,
      title: "Recruitment Analytics",
      description: "Understanding hiring metrics and KPIs",
      downloadLink: "#",
      url: "https://theradarlist.com/assessment",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <div className="container mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Resource <span className="text-primary-light">Center</span>
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
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <a
                href={resource.url} // ✅ Fixed URL to point to the resource link
                target="_blank"
                rel="noopener noreferrer">
                <Card className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center mb-4">
                      {React.createElement(resource.icon, {
                        className: "w-6 h-6 text-primary-light",
                      })}{" "}
                      {/* ✅ Fixed Icon */}
                    </div>
                    <CardTitle className="text-primary-dark">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-block bg-primary-light/5 text-primary-medium px-3 py-1 rounded-full text-sm">
                      {resource.type}
                    </span>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <BlogsSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-8 bg-primary-light/5 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-primary-dark mb-4">
          Need Custom Resources?
        </h2>
        <p className="text-gray-700 mb-6">
          We can create tailored resources specific to your industry and
          requirements.
        </p>
        <Link href="/contact">
          <CustomButton content="Contact Us" variant="primary" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Resources;
