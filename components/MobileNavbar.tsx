import { motion } from "motion/react";
import { ReactNode } from "react";
import Link from "next/link"; // ✅ Use Next.js Link
import { ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface MobileNavbarProps {
  isOpen: boolean;
  menuItems: {
    name: string;
    path: string;
    submenu?:
      | {
          name: string;
          path: string;
          icon?: ReactNode;
          description?: string;
          submenu?:
            | {
                name: string;
                path: string;
                icon?: ReactNode;
                description?: string;
              }[]
            | undefined;
        }[]
      | undefined;
  }[];
  isActive: (path: string) => boolean;
  toggleMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  menuItems,
  isActive,
  toggleMenu,
}) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary-dark text-white flex flex-col items-center space-y-4 py-4 md:hidden">
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
                  </PopoverTrigger>

                  <PopoverContent className="w-full max-w-sm flex-auto overflow-hidden rounded-lg bg-semantic-white text-sm/6 ring-1 shadow-lg  ring-gray-900/5">
                    <div className="flex flex-col p-2 space-y-2 bg-semantic-white">
                      {item.submenu.map((subItem) => {
                        if (subItem.submenu) {
                          return (
                            <Popover key={subItem.name}>
                              <PopoverTrigger className="py-1 w-full items-center font-semibold text-gray-900 group relative flex gap-x-4 rounded-lg hover:bg-gray-200">
                                <p className="">{subItem.name}</p>
                                <ChevronRight className="ml-auto h-4 w-4" />
                              </PopoverTrigger>
                              <PopoverContent
                                side="bottom"
                                className="w-4/4 max-w-sm flex-auto overflow-hidden rounded-lg bg-semantic-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                                <div className="flex flex-col p-1 bg-semantic-white">
                                  {subItem.submenu.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.path}
                                      onClick={toggleMenu}
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
                            onClick={toggleMenu}
                            className="w-full group relative flex gap-x-4 py-1 rounded-md hover:bg-gray-200">
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
      )}
    </>
  );
};

export default MobileNavbar;
