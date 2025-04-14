import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";
import { blogs } from "../lib/blodData";

const BlogsSection = () => {
  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false));

  // create a memo that returns a sorted array of blogs by date
  const sortedBlogs = [...blogs].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const toggleExpand = (index: number) => {
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#081321] to-[#081321] border-b-2 border-[#4DCCE6]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Blogs</h2>
          <p className="text-lg text-gray-300">
            Stay updated with the latest insights in recruitment and HR
            technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sortedBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-mirage rounded-lg shadow-md hover:shadow-primary-light overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-sm text-primary-light font-semibold mb-2">
                  {blog.category}
                </div>
                <h3 className="text-xl font-bold text-semantic-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {expanded[index] ? blog.fullText : blog.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="cursor-pointer text-[#4DCCE6] font-semibold flex items-center hover:text-[#45B5B5] transition-colors">
                    {expanded[index] ? "Show Less" : "Read More"}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <a
                    href={blog.url}
                    target="_blank"
                    className="cursor-pointer text-[#4DCCE6] font-semibold flex items-center hover:text-[#45B5B5] transition-colors">
                    Visit Blog <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
