import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import officeLobbyImage from "../public/images/office_img.png";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    userType: "Hiring Partner",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formLink = `https://formsubmit.co/ajax/${process.env.FORM_SUBMIT}`;
    // Simulate API call
    await fetch(formLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    setIsLoading(true);

    setFormData({
      name: "",
      email: "",
      message: "",
      userType: "Hiring Partner",
    });
    toast({
      title: "Form Submitted!",
      description: "We'll contact you shortly to discuss.",
    });
  };

  return (
    <section className="py-24 bg-secondary text-white min-h-screen">
      <div className="container mx-auto flex h-full ">
        <div className="w-full max-w-8xl ">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mt-12 mb-12 text-primary-light text-center">
            Contact Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto sm:ml-0 lg:ml-20">
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5 justify-center items-center">
              <img
                src={officeLobbyImage.src}
                alt="Image of the lobby for the office"
                width="100%"
                className="w-3/4 h-auto lg:max-w-xl"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.9150292487925!2d-111.92750740000001!3d33.433383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b091f4fb018d1%3A0x484b7ba9cbecbcab!2s410%20N%20Scottsdale%20Rd%2C%20Tempe%2C%20AZ%2085288!5e1!3m2!1sen!2sus!4v1744047290162!5m2!1sen!2sus"
                width="100%"
                height="450"
                className="w-3/4"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center md:text-left md:items-start">
              <h3 className="text-2xl text-primary font-semibold mb-2">
                Get in Touch
              </h3>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-2 text-primary" />
                <a
                  href="tel:+16024186255"
                  className="text-primary hover:text-primary transition-colors">
                  (602) 418-6255
                </a>
              </div>
              <div className="flex items-center mb-8">
                <Mail className="w-6 h-6 mr-2 text-primary" />
                <a
                  href="mailto:contact@squareresults.com"
                  className="text-primary hover:text-primary transition-colors">
                  contact@squareresults.com
                </a>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl text-primary font-semibold mb-2">
                  Our Address
                </h3>
                <p className="text-primary">
                  410 N Scottsdale Rd,
                  <br />
                  Tempe, AZ 85288
                  <br />
                </p>
              </div>
              <div className="flex gap-4 mb-8">
                <a
                  href="https://www.facebook.com/people/Theradarlist/100092114480865/"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaFacebook
                    size={24}
                    className="w-6 h-6 text-primary-light"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/squareresults/about/"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaLinkedin
                    size={24}
                    className="w-6 h-6 text-primary-light"
                  />
                </a>
                <a
                  href="https://twitter.com/the_radar_list"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaTwitter size={24} className="w-6 h-6 text-primary-light" />
                </a>
                <a
                  href="https://www.instagram.com/theradarlist/"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaInstagram
                    size={24}
                    className="w-6 h-6 text-primary-light"
                  />
                </a>
              </div>

              {/* --- CONTACT FORM --- */}
              <form
                id="myForm"
                onSubmit={handleSubmit}
                className="w-3/4 max-w-lg">
                <div className="mb-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission for Square Results!"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <label
                    className="block text-primary text-sm font-bold mb-2"
                    htmlFor="name">
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
                  <label
                    className="block text-primary text-sm font-bold mb-2"
                    htmlFor="email">
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
                  <label
                    className="block text-primary text-sm font-bold mb-2"
                    htmlFor="userType">
                    I am a
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                    required>
                    <option value="Hiring Partner">Hiring Partner</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-primary text-sm font-bold mb-2"
                    htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                    rows={4}
                    required></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#1E3A8A] text-white px-4 py-2 rounded hover:text-primary-light transition-colors">
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
