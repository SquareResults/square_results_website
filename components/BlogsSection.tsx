import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "The Future of AI in Recruitment",
    excerpt: "Exploring how artificial intelligence is transforming the hiring process by automating repetitive tasks, enhancing candidate matching, and providing data-driven insights to improve decision-making...",
    fullText: "Exploring how artificial intelligence is transforming the hiring process by automating repetitive tasks, enhancing candidate matching, and providing data-driven insights to improve decision-making. AI is revolutionizing the recruitment landscape by streamlining processes, reducing biases, and improving the overall candidate experience.",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Technology"
  },
  {
    title: "Building Inclusive Hiring Practices",
    excerpt: "Best practices for creating diverse and inclusive recruitment strategies that foster a welcoming environment, promote equal opportunities, and drive innovation through a diverse workforce...",
    fullText: "Best practices for creating diverse and inclusive recruitment strategies that foster a welcoming environment, promote equal opportunities, and drive innovation through a diverse workforce. Learn how to implement effective DEI initiatives and create a culture of inclusivity within your organization.",
    date: "March 12, 2024",
    author: "Michael Chen",
    category: "DEI"
  },
  {
    title: "Remote Hiring Success Stories",
    excerpt: "Case studies of successful remote recruitment and onboarding, highlighting the challenges faced, solutions implemented, and the positive outcomes achieved by companies embracing remote work...",
    fullText: "Case studies of successful remote recruitment and onboarding, highlighting the challenges faced, solutions implemented, and the positive outcomes achieved by companies embracing remote work. Discover how companies are adapting to the remote work trend and achieving success in a distributed work environment.",
    date: "March 10, 2024",
    author: "Emma Williams",
    category: "Remote Work"
  }
];

const BlogsSection = () => {
  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#081321] to-[#081321]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Blogs</h2>
          <p className="text-lg text-gray-400">Stay updated with the latest insights in recruitment and HR technology.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A2E] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-[#4DCCE6] font-semibold mb-2">{blog.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
                <p className="text-gray-400 mb-4">
                  {expanded[index] ? blog.fullText : blog.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>{blog.author}</span>
                </div>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-[#4DCCE6] font-semibold flex items-center hover:text-[#45B5B5] transition-colors"
                >
                  {expanded[index] ? 'Show Less' : 'Read More'} <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;