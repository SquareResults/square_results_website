import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link"; // ✅ Use Next.js Link
import { useRouter } from "next/router"; // ✅ Use Next.js Router
import { Menu, X } from "lucide-react";
import { DemoForm } from "./DemoForm";
import { FaAngleDown, FaUser, FaUsers } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const router = useRouter(); // ✅ Next.js router

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        {
          name: "Job Seekers",
          path: "/services/job-seekers",
          description: "For Job Seekers / Candidates",
        },
        {
          name: "Hiring Partners",
          path: "/services/hiring-partners",
          description: "For Corporate / Leaders",
        },
      ],
    },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemoForm(true);
    closeMenu();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full p-4 flex items-center justify-between z-20 transition-all duration-300 bg-primary-dark ${
          scrolled ? "shadow-lg" : ""
        }`}>
        <Link href="/" className="flex items-center">
          <img src="/images/SQRlogo.jpg" alt="Logo" className="w-15 h-14" />
        </Link>
        <div className="hidden md:flex items-center justify-end flex-wrap text-xl space-x-14 ml-auto">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              className={`text-semantic-white transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-primary-light font-bold"
                  : "hover:text-primary-light"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              {item.submenu ? (
                <Popover>
                  <PopoverTrigger className="inline-flex items-center gap-x-1">
                    <span>{item.name}</span>
                    {/* <FaAngleDown className="text-primary-light" /> */}
                  </PopoverTrigger>

                  <PopoverContent className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                    <div className="flex flex-col p-4 bg-semantic-white">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            {subItem.name === "Job Seekers" ? (
                              <FaUser className="text-primary text-lg" />
                            ) : (
                              <FaUsers className="text-primary text-2xl" />
                            )}
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">
                              {subItem.name}
                            </span>
                            <p className="mt-1 text-gray-600">
                              {subItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDemoClick}
            className="px-4 py-1 bg-semantic-white text-semantic-black font-semibold rounded-full hover:bg-primary-medium/90 hover:text-semantic-white transition-colors duration-200">
            Book An Appointment
          </motion.button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#081321] text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                className={`text-[#4DCCE6] transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-[#4DCCE6] font-bold"
                    : "hover:text-[#4DCCE6]"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                {item.submenu ? (
                  <Popover>
                    <PopoverTrigger className="inline-flex items-center gap-x-1">
                      <span>{item.name}</span>
                      {/* <FaAngleDown className="text-primary-light" /> */}
                    </PopoverTrigger>

                    <PopoverContent className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                      <div className="flex flex-col p-4 bg-semantic-white">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              {subItem.name === "Job Seekers" ? (
                                <FaUser className="text-primary text-lg" />
                              ) : (
                                <FaUsers className="text-primary text-2xl" />
                              )}
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900">
                                {subItem.name}
                              </span>
                              <p className="mt-1 text-gray-600">
                                For {subItem.name} / Candidates
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link href={item.path} onClick={closeMenu}>
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-[#4DCCE6] text-black font-semibold rounded-full hover:bg-[#3BB0C1] transition-colors duration-200">
              <Link href="/book-demo" onClick={closeMenu}>
                Book An Appointment
              </Link>
            </motion.button>
          </div>
        )}
      </nav>
      <DemoForm open={showDemoForm} onOpenChange={setShowDemoForm} />
    </>
  );
};

export default Navbar;
