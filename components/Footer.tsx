import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#081321] text-white py-10">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-10">
          <div className="mb-4 md:mb-0">
            <img
              src="/images/SQRlogo.jpg"
              alt="Logo"
              className="w-25 h-25 space-y-20"
            />
          </div>
          <div className="flex flex-col md:flex-row items-start space-y-30 md:space-y-0 md:space-x-8">
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-[#4DCCE6] mb-4">
                Terms and Conditions
              </h2>
              <p className="text-xs text-white leading-relaxed mb-4">
                Welcome to SquareResults. These terms and conditions outline the
                rules and regulations for the use of our website. By accessing
                this website, we assume you accept these terms and conditions.
                Do not continue to use SquareResults if you do not agree to all
                of the terms and conditions stated on this page.
              </p>
              <p className="text-xs text-white leading-relaxed">
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                "Client", "You" and "Your" refers to you, the person log on this
                website and compliant to the Company’s terms and conditions.
                "The Company", "Ourselves", "We", "Our" and "Us", refers to our
                Company. "Party", "Parties", or "Us", refers to both the Client
                and ourselves.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-[#4DCCE6] mb-4">
                Legal Policies
              </h2>
              <p className="text-xs text-white leading-relaxed mb-4">
                At SquareResults, we are committed to protecting your privacy.
                This legal policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website.
              </p>
              <p className="text-xs text-white leading-relaxed">
                We may update this policy from time to time to reflect changes
                in our practices or for other operational, legal, or regulatory
                reasons. If we make material changes to this policy, we will
                notify you by email or through a notice on our website.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-[#4DCCE6] mb-4">
                Cookie Policy
              </h2>
              <p className="text-xs text-white leading-relaxed mb-4">
                Our website uses cookies to improve your experience while you
                navigate through the website. Out of these cookies, the cookies
                that are categorized as necessary are stored on your browser as
                they are essential for the working of basic functionalities of
                the website.
              </p>
              <p className="text-xs text-white leading-relaxed">
                We also use third-party cookies that help us analyze and
                understand how you use this website. These cookies will be
                stored in your browser only with your consent. You also have the
                option to opt-out of these cookies. But opting out of some of
                these cookies may have an effect on your browsing experience.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-[#4DCCE6] mb-4">
                Our Address
              </h2>
              <p className="text-xs text-white leading-relaxed mb-4">
                7150 East Camelback Rd Suite 444, Scottsdale, AZ 85251
              </p>
              {/* <p className="text-xs text-white leading-relaxed mb-4 text-justify">
                Suite 100, City,
              </p>
              <p className="text-xs text-white leading-relaxed mb-4 text-justify">
                State, 12345
              </p> */}
              <div className="flex justify-center space-x-4 mb-4 text-justify">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4DCCE6] transition-colors duration-200">
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4DCCE6] transition-colors duration-200">
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4DCCE6] transition-colors duration-200">
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4DCCE6] transition-colors duration-200">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 mx-auto">
          &copy; {new Date().getFullYear()} SquareResults. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
