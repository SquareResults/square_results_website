import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    userType: 'Hiring Partner',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="py-24 bg-secondary text-white min-h-screen">
      <div className="container mx-auto  flex h-full">
        <div className="w-full max-w-8xl">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-12 text-[#4DCCE6] text-center"
          >
            Contact Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto ml-20">
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b8f9b1e0e2!2sEnvato!5e0!3m2!1sen!2sau!4v1611816751234!5m2!1sen!2sau"
                width="100%"
                height="800"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center md:text-left md:items-start"
            >
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center mb-8">
                <Phone className="w-6 h-6 mr-2 text-[#4DCCE6]" />
                <a href="tel:(602) 418-6255" className="text-gray-300 hover:text-primary transition-colors">
                  (602) 418-6255
                </a>
              </div>
              <div className="flex items-center mb-8">
                <Mail className="w-6 h-6 mr-2 text-[#4DCCE6]" />
                <a href="mailto:mark@squareresults.com" className="text-gray-300 hover:text-primary transition-colors">
                  mark@squareresults.com
                </a>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
                <p className="text-gray-300">
                  7150 East Camelback Rd Suite 444,<br />
                  Scottsdale, AZ 85251<br />
                </p>
              </div>
              <div className="flex gap-4 mb-8">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6 text-[#4DCCE6]" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Twitter className="w-6 h-6 text-[#4DCCE6]" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6 text-[#4DCCE6]" />
                </a>
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="userType">
                    I am a
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                    required
                  >
                    <option value="Hiring Partner">Hiring Partner</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;