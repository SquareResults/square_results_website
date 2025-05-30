import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "../ui/dialog";
import { CalendarDays, Clock3, Globe, Mail, Phone } from "lucide-react";
import styles from "./EventHomeAd.module.css";
import CustomButton from "../CustomButton";

const EventHomeAd = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [screenResize, setScreenResize] = useState({ width: 0, height: 0 });

  // Display the ad content based on the dialog size and screen size
  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = () => {
      const width = containerRef.current?.offsetWidth || window.innerWidth;
      const height = containerRef.current?.offsetHeight || window.innerHeight;
      setScreenResize({ width, height });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModalResize = useCallback((screenSize: number) => {
    if (screenSize < 770) {
      // Logic for mobile screens
      return "w-full";
    } else if (screenSize < 1300) {
      // Logic for smaller screens
      return "w-[360px]";
    } else if (screenSize > 1200) {
      // Logic for larger screens
      return "w-[500px]";
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          className="fixed inset-0 bg-black/10 transition-opacity overflow-y-auto"
          ref={containerRef}>
          <DialogContent className="p-0 border-none max-w-[90%] md:max-w-[90%] lg:max-w-[70%] max-h-[90%] md:max-h-[100%] lg:max-h-[100%] flex flex-col md:flex-row lg:flex-row gap-4 overflow-y-auto">
            <DialogDescription className="block lg:hidden md:hidden">
              <img
                src="/images/recruiter-interviewing.jpg"
                alt="why sqr"
                className=""
              />
            </DialogDescription>
            <DialogDescription className="flex flex-col relative mx-[3%] my-[3%]">
              <div
                className={`flex flex-col gap-0 md:gap-2 lg:gap-2 lg:text-left md:text-left text-center items-center md:items-start lg:items-start ${handleModalResize(
                  screenResize.width
                )}`}>
                <div
                  style={{
                    width: "170px",
                    height: "55px",
                  }}>
                  <img
                    src="/images/sqr-trl-logo.png"
                    alt="SQR Logo"
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start lg:items-start">
                  <h1
                    className={`${styles.careerHeader} text-primary text-[40px] md:text-[58px] lg:text-[58px] flex flex-wrap`}>
                    Recruitment Drive
                  </h1>
                </div>
                <div className="flex flex-col items-center md:items-start lg:items-start w-3/5 md:w-full lg:w-3/4">
                  <p className={`${styles.careerDescription}`}>
                    Explore Roles. Meet the Team. Take the Next Step. <br />
                    Discover your future at SquareResults! Join our virtual
                    recruitment drive to explore current openings, connect with
                    our teams, and learn how to launch your career with us.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 mt-[6%] mb-[8%] w-full text-center md:text-left lg:text-left">
                <CustomButton
                  variant="primary"
                  content="REGISTER NOW"
                  className="w-[211.111px] h-[60px] text-[22px] font-bold leading-normal font-openSans rounded-[20px] items-center"></CustomButton>
              </div>
              <div className="flex justify-center flex-row md:flex-col lg:flex-col gap-2 md:bg-transparent lg:bg-transparent lg:border-none md:border-none text-center md:text-left lg:text-left ">
                <h2 className="bg-gray-300 py-2 w-[115px] md:w-full lg:w-full md:bg-transparent lg:bg-transparent text-[12px] md:text-[16px] lg:text-[16px] leading-6 flex flex-col md:flex-row lg:flex-row gap-2 items-center md:items-start lg:items-start">
                  <CalendarDays
                    size={54}
                    color="#FFFFFF"
                    fill="#1E3A8A"
                    className="inline-block"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-bold">Friday</p>
                    <p className="">June 20, 2025</p>
                  </div>
                </h2>
                <h2 className="bg-gray-300 py-2 w-[173px] md:w-full lg:w-full md:bg-transparent lg:bg-transparent text-[12px] md:text-[16px] lg:text-[16px] leading-6 flex flex-col md:flex-row lg:flex-row gap-2 items-center md:items-start lg:items-start">
                  <Clock3
                    size={51}
                    color="#FFFFFF"
                    fill="#1E3A8A"
                    className="inline-block"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-bold">Time</p>
                    <p className="">10:00 AM PST</p>
                  </div>
                </h2>
              </div>
            </DialogDescription>

            <div className="hidden lg:block md:block absolute right-[26%] top-[24%] z-10">
              <img
                src="/images/recruiter-interviewing.jpg"
                alt="why sqr"
                className="w-[168px] object-cover h-[168px] rounded-[168px] border-[8px] border-green"
              />
            </div>
            <div className="hidden lg:block md:block absolute right-[38%] top-[60%] z-10">
              <img
                src="/images/why_sqr.png"
                alt="why sqr"
                loading="lazy"
                className="w-[168px] h-[168px] rounded-[168px] border-[8px] border-green"
              />
            </div>

            {/* ===== CONTACT INFORMATION ===== */}
            <DialogDescription
              className={`${styles.bottomTriangle} hidden lg:block md:block`}>
              <div className={styles.rightTriangle}>
                <div className="absolute right-10 top-[75%] text-semantic-white flex flex-col gap-2">
                  <h2
                    className={`${styles.contactItem} text-[17.9px] leading-6`}>
                    <Phone size={22} className="inline-block mr-2" />
                    <a href="tel:602-418-6255">(602) 418-6255</a>
                  </h2>
                  <h2
                    className={`${styles.contactItem} text-[17.9px] leading-6`}>
                    <Globe size={22} className="inline-block mr-2" />
                    <a
                      href="https://www.squareresults.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      squareresults.com
                    </a>
                  </h2>
                  <h2
                    className={`${styles.contactItem} text-[17.9px] leading-6`}>
                    <Mail size={22} className="inline-block mr-2" />
                    <a href="mailto:contact@squareresults.com">
                      contact@squareresults.com
                    </a>
                  </h2>
                </div>
              </div>
            </DialogDescription>
            <DialogDescription className="bg-primary-medium block lg:hidden md:hidden text-center py-4">
              <div className="text-semantic-white flex flex-col gap-2">
                <h2 className={`${styles.contactItem} text-[17.9px] leading-6`}>
                  <Phone size={22} className="inline-block mr-2" />
                  <a href="tel:602-418-6255">(602) 418-6255</a>
                </h2>
                <h2 className={`${styles.contactItem} text-[17.9px] leading-6`}>
                  <Globe size={22} className="inline-block mr-2" />
                  <a
                    href="https://www.squareresults.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    squareresults.com
                  </a>
                </h2>
                <h2 className={`${styles.contactItem} text-[17.9px] leading-6`}>
                  <Mail size={22} className="inline-block mr-2" />
                  <a href="mailto:contact@squareresults.com">
                    contact@squareresults.com
                  </a>
                </h2>
              </div>
            </DialogDescription>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
};

export default EventHomeAd;
