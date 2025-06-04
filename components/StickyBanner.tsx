import React from "react";
import { motion } from "motion/react";
import { Megaphone, X } from "lucide-react";
import Link from "next/link";

const StickyBanner = ({
  content,
  bannerLink,
}: {
  content: string;
  bannerLink: string;
}) => {
  const handleDismiss = () => {
    const banner = document.getElementById("sticky-banner");
    if (banner) {
      banner.style.display = "none"; // Hide the banner
    }
  };

  return (
    <motion.div
      id="sticky-banner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 * 0.1 }}>
      <div
        tabIndex={-1}
        className="fixed top-16 start-0 z-50 flex justify-between w-full pb-2 bg-green">
        <div className="flex justify-center items-center mx-auto bg-primary-medium p-2 w-full">
          <p className="flex items-center text-sm font-normal text-semantic-white">
            <span className="inline-flex p-1 me-3  rounded-full  w-8 h-8 items-center justify-center shrink-0">
              <Megaphone />
              <span className="sr-only">Light bulb</span>
            </span>
            <span>
              {content} Sign Up{" "}
              <Link
                href={bannerLink}
                target="_blank"
                className="hover:underline text-primary-light font-bold">
                Here
              </Link>
              .
            </span>
          </p>
        </div>
        <div className="flex items-center bg-primary-medium px-1">
          <button
            data-dismiss-target="#sticky-banner"
            type="button"
            onClick={handleDismiss}
            className="shrink-0 inline-flex justify-center w-7 h-7 items-center text-semantic-white hover:text-green rounded-lg text-sm p-1.5">
            <X />
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyBanner;
