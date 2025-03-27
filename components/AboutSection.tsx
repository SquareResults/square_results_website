import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative">
      {/* Background Image Section */}
      <div
  className="bg-cover bg-center flex flex-col justify-end items-center p-4"
  style={{ backgroundImage: "url('/images/about_us.jpg')", height: "80vh" }}
>
 
</div>

      {/* About Us Text Section */}
      <div className="relative py-10 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <div className="p-4 rounded-lg">
    <h1 className="text-5xl mb-20 font-bold text-[#1D066F] mb-4 text-center">About Us</h1>
  </div>
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" max-w-6xl mx-auto"
          >
            
            <h4 className="text-4xl font-bold text-[#081321] mb-8">We’re redefining hiring—making it fair, transparent, and human.</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-justify">
            Hiring should be more than just algorithms and black holes. It should be about people—real talent, real opportunities, and real connections. We’re here to fix what’s broken. To cut through the noise. To ensure every job seeker is seen, every recruiter finds the right fit, and every hiring decision is made with confidence. No more dead ends. No more guessing games. Just a hiring ecosystem that finally works—for everyone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#081321] mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
            SquareResults was born from a simple yet frustrating reality—hiring shouldn’t be this broken. We’ve seen talented job seekers lost in a sea of applications and recruiters drowning in mismatched candidates. So, we set out to build something different: a hiring ecosystem that values people over processes. With technology that enhances, not replaces, human connection, and a commitment to transparency, we’re here to make job searching and hiring a smoother, fairer experience. What started as a vision to fix the gaps in recruitment has grown into a platform that empowers both job seekers and recruiters to succeed—without the usual frustration. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
