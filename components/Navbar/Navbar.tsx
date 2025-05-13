import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link"; // ✅ Use Next.js Link
import { useRouter } from "next/router"; // ✅ Use Next.js Router
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";
import { FaBuilding, FaUser, FaUsers } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      submenu: [
        {
          name: "About Us",
          path: "/about",
          submenu: undefined,
        },
        {
          name: "Resources",
          path: "/resources",
          submenu: undefined,
          description: undefined,
          icon: undefined,
        },
        {
          name: "Careers",
          path: "/careers",
          submenu: [
            {
              name: "Join Our Team",
              path: "/careers",
              description: "SquareResults Jobs",
              icon: <FaUsers className="text-primary text-2xl" />,
            },
            {
              name: "Global Job Board",
              path: "https://theradarlist.com/jobs",
              description: "Other Companies Jobs",
              icon: <FaBuilding className="text-primary text-2xl" />,
            },
          ],
        },
      ],
    },
    {
      name: "Services",
      path: "/services",
      submenu: [
        {
          name: "Job Seekers",
          path: "/services/job-seekers",
          submenu: undefined,
          description: "For Job Seekers / Candidates",
          icon: <FaUser className="text-primary text-lg" />,
        },
        {
          name: "Hiring Partners",
          path: "/services/hiring-partners",
          submenu: undefined,
          description: "For Corporate / Leaders",
          icon: <FaUsers className="text-primary text-2xl" />,
        },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full p-4 flex items-center justify-between z-20 transition-all duration-300 bg-primary-dark ${
          scrolled ? "shadow-lg" : ""
        }`}>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/SQRlogo.jpg"
            alt="Logo"
            width={isMobile ? 120 : 160}
            height={isMobile ? 120 : 160}
            loading="lazy"
          />
        </Link>
        <div className="hidden md:flex items-center justify-end flex-wrap text-xl space-x-20 mr-10">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              className={`transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-primary-light font-bold"
                  : "text-semantic-white hover:text-primary-light"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              {item.submenu ? (
                <Popover>
                  <PopoverTrigger className="inline-flex items-center gap-x-1">
                    <span>{item.name}</span>
                  </PopoverTrigger>
                  <PopoverContent
                    className={`w-full max-w-sm overflow-hidden rounded-lg bg-semantic-white text-sm/6 ring-1 shadow-lg ring-gray-900/5`}>
                    <div className="flex flex-col p-2 space-y-2 bg-semantic-white">
                      {item.submenu.map((subItem) => {
                        if (subItem.submenu) {
                          return (
                            <Popover key={subItem.name}>
                              <PopoverTrigger className="px-2 py-1 w-full items-center font-semibold text-gray-900 group relative flex gap-x-4 rounded-lg hover:bg-gray-200">
                                <p className="">{subItem.name}</p>
                                <ChevronRight className="ml-auto h-4 w-4" />
                              </PopoverTrigger>
                              <PopoverContent
                                side="right"
                                className="w-4/4 max-w-sm ml-4 flex-auto overflow-hidden rounded-lg bg-semantic-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                                <div className="flex flex-col p-1 bg-semantic-white">
                                  {subItem.submenu.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.path}
                                      className="group relative flex gap-x-4 rounded-lg p-2 hover:bg-gray-200">
                                      <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        {subSubItem.icon}
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-900">
                                          {subSubItem.name}
                                        </span>
                                        {subSubItem.description && (
                                          <p className="mt-1 text-gray-600">
                                            {subSubItem.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </PopoverContent>
                            </Popover>
                          );
                        }

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="px-2 w-full group relative flex gap-x-4 py-1 rounded-md hover:bg-gray-200">
                            {subItem.icon && (
                              <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                {subItem.icon}
                              </div>
                            )}
                            <div className="">
                              <p className="font-semibold text-gray-900">
                                {subItem.name}
                              </p>
                              {subItem.description && (
                                <p className="mt-1 text-gray-600">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </motion.div>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-semantic-white focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ========== MOBILE MENU ========= */}
        <MobileNavbar
          isOpen={isOpen}
          menuItems={menuItems}
          isActive={isActive}
          toggleMenu={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
