import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DemoForm } from "./DemoForm/DemoForm";
import officeLobbyImage from "../public/images/office_img.png";
import CustomButton from "./CustomButton";

const ContactSection = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openContactForm = () => {
    setIsDemoOpen(!isDemoOpen);
  };

  return (
    <section className="py-20 sm:py-18 bg-secondary text-semantic-white min-h-screen">
      <div className="container mx-auto flex h-full ">
        <div className="w-full max-w-8xl ">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mt-12 text-primary-medium text-center">
            Contact Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2  mx-auto sm:ml-0 lg:ml-20">
            {/* ====== LEFT SECTION: MAPS & IMAGE ======= */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5 justify-center items-center mt-12">
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

            {/* ====== RIGHT SECTION: CONTACT INFORMATION ======= */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center md:text-left md:items-start mt-12">
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
                    className="w-6 h-6 text-primary-medium"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/squareresults/about/"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaLinkedin
                    size={24}
                    className="w-6 h-6 text-primary-medium"
                  />
                </a>
                <a
                  href="https://twitter.com/the_radar_list"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaTwitter
                    size={24}
                    className="w-6 h-6 text-primary-medium"
                  />
                </a>
                <a
                  href="https://www.instagram.com/theradarlist/"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <FaInstagram
                    size={24}
                    className="w-6 h-6 text-primary-medium"
                  />
                </a>
              </div>

              {/* ===== CONTACT FORM ====== */}
              <div className="flex items-center px-8 md:pr-8 sm:px-0">
                <p className="text-primary mb-4">
                  <strong>Get Started with a Demo</strong> If you&apos;re new
                  here, scheduling a demo is the perfect way to explore our
                  services. Simply reach out, and we&apos;ll connect with you
                  shortly to understand your needs and arrange a personalized
                  demo.
                </p>
              </div>
              <div className="flex justify-center">
                <CustomButton
                  onClick={openContactForm}
                  content="Book an Appointment"
                />
              </div>
              <DemoForm open={isDemoOpen} onOpenChange={openContactForm} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
