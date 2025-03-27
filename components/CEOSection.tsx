import { motion } from "framer-motion";

const CEOSection = () => {
  return (
    <section className="py-20 ">
      <div className="container max-w-6xl bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-[#1D066F] mb-6">Meet the CEO</h2>
            <p className="text-lg text-[#081321] leading-relaxed mb-6 text-justify">
              With over two decades of experience in talent acquisition and HR technology, our CEO has been at the forefront of 
              revolutionizing how companies and candidates connect. Their vision for SquareResults stems from a deep understanding 
              of the challenges faced by both job seekers and recruiters in today's dynamic job market.
            </p>
            <p className="text-lg text-[#081321] leading-relaxed text-justify">
              Under their leadership, SquareResults has grown from a startup to an industry leader, helping thousands of 
              professionals find their dream roles and enabling companies to build high-performing teams efficiently.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative w-100 h-200 overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/Mark.png"
                alt="CEO"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;