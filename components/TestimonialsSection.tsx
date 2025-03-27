import { motion } from "framer-motion";
import { Star, StarHalf, StarOff } from "lucide-react";
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: "Marcus J",
    review: "I needed a web portfolio that showcases my skills, achievements and projects in a clear and attractive way. That's why I chose SquareResults to create my personal website. They did an amazing job of designing and developing a responsive and user-friendly site that highlights my professional profile. I'm very impressed by their creativity, expertise and attention to detail. They also provided excellent support and guidance throughout the process. I highly recommend SquareResults to anyone looking for a web portfolio that stands out from the crowd.",
    position: "Economic Development Director",
    rating: 5
  },
  {
    name: "Elnora C",
    review: "I am always looking for ways to showcase my work and attract new opportunities. That's why I chose SquareResults to create my Web Portfolio. They did an amazing job of designing a website that reflects my personality, style and vision. They also made it easy for me to update and manage my portfolio with their user-friendly platform. I am very happy with the results and I have received many compliments and inquiries from potential customers. Thank you, SquareResults, for helping me take my digital marketing career to the next level!",
    position: "Director of Digital Marketing",
    rating: 5
  },
  {
    name: "Jean L",
    review: "I know how important it is to have a professional and attractive web portfolio that showcases my skills and achievements. That's why I chose SquareResults to create my web portfolio. They did an amazing job of designing a website that mirrors my personality and brand, as well as highlighting my accomplishments and projects. They were easy to work with, responsive to my feedback, and delivered the final product on time and within budget. I am very happy with the result and I have received many compliments on my web portfolio from colleagues, clients, and recruiters. I would highly recommend SquareResults to anyone looking for a web portfolio that stands out from the crowd.",
    position: "Director of Talent Acquisition",
    rating: 5
  },
  {
    name: "Ken B",
    review: "I'm so happy with the web portfolio that SquareResults created for me. They really captured my personality and skills in a professional and engaging way. The design is sleek and modern, and the content is clear and concise. I've received many compliments from potential clients and employers who visited my site. SquareResults is the best choice for anyone who wants to showcase their talents online",
    position: "Student",
    rating: 5
  },
  {
    name: "Oscar B",
    review: "I know how important it is to have a web portfolio that showcases my skills and achievements. That's why I hired SquareResults to create one for me. They did an amazing job of designing a website that reflects my background. They also made it easy for me to provide updates and modifications with their user-friendly tools. I'm very happy with the result and I've received many compliments from my clients and colleagues. SquareResults is the best choice for anyone who wants a web portfolio.",
    position: "Technology Professional",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-8 overflow-hidden bg-[#1D066F]/40 bg-opacity-70 text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-white font-bold text-center mb-8"
        >
          Read the Reviews
        </motion.h2>

        <div className={`scroll-container ${styles['scroll-container']}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black rounded-lg shadow-lg p-6 min-w-[400px] flex flex-col text-wrap justify-between" 
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(testimonial.rating)) {
                    return <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />;
                  } else if (i < testimonial.rating) {
                    return <StarHalf key={i} className="w-5 h-5 text-yellow-500 fill-current" />;
                  } else {
                    return <StarOff key={i} className="w-5 h-5 text-gray-300" />;
                  }
                })}
              </div>
              <div>
                <p className="text-sm mb-4">"{testimonial.review}"</p>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-[#081321]">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;