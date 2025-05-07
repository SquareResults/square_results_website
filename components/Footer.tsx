import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const theCompanyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    // { name: "FAQs", href: "/faqs" },
    { name: "Resources", href: "/resources" },
  ];

  const servicesLinks = [
    { name: "The Radar List", href: "https://theradarlist.com/" },
    { name: "SquareTop", href: "https://squaretop.group/" },
    { name: "SquareCircle", href: "https://squarecircle.group/" },
    // { name: "SWFT", href: "#" },
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Theradarlist/100092114480865/",
      icon: <FaFacebook size={24} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/the_radar_list",
      icon: <FaTwitter size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/squareresults/about/",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/theradarlist/",
      icon: <FaInstagram size={24} />,
    },
  ];

  return (
    <footer className="bg-primary-dark text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-3/4">
            <div className="w-1/4">
              <img src="/images/SQRlogo.jpg" alt="Logo" className="w-25 h-25" />
            </div>
            <div className="flex flex-row my-2 center gap-2 md:mb-0 text-primary-light text-sm">
              <h2 className=" font-semibold  mb-4">
                <Link href="/terms" className="leading-relaxed hover:underline">
                  Terms
                </Link>{" "}
                &#124;
              </h2>
              <h2 className=" font-semibold mb-4">
                <Link
                  href="/privacy"
                  className="leading-relaxed hover:underline">
                  Legal Policy
                </Link>{" "}
                &#124;
              </h2>
              <h2 className=" font-semibold mb-4">
                <Link
                  href="/cookies"
                  className="leading-relaxed hover:underline">
                  Cookie Policy
                </Link>{" "}
              </h2>
            </div>
            <div className="my-2 text-gray-300 mx-auto">
              &copy; {new Date().getFullYear()} SquareResults. All rights
              reserved.
            </div>
          </div>
          <div className="w-full md:w-2/4 sm:w-full flex flex-row justify-between md:flex-row space-y-30 md:space-y-0">
            {/* ===== The Company ===== */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold text-primary-light">
                The Company
              </h2>
              {theCompanyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs leading-relaxed hover:underline hover:text-primary-light">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ===== Services ===== */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold text-primary-light">
                Services
              </h2>
              {servicesLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="text-xs leading-relaxed hover:underline hover:text-primary-light">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold text-primary-light">
                Our Address
              </h2>
              <Link
                href="https://maps.app.goo.gl/qkoPyD1LY8Gu9S9K7"
                target="_blank"
                className="hover:underline hover:text-primary-light">
                <p className="text-xs leading-relaxed">410 N Scottsdale Rd,</p>
                <p className="text-xs leading-relaxed">Tempe, AZ 85288</p>
              </Link>

              {/* ===== Social Media ===== */}
              <div className="flex justify-center space-x-4 text-justify">
                {socialMediaLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-light transition-colors duration-200">
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
