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
  //
  const handleModalResize = useCallback((screenSize: number) => {
    console.log("Screen Size:", screenSize - 50);
    if (screenSize < 770) {
      // Logic for mobile screens
      return `w-[${screenSize - 20}px]`;
    } else if (screenSize < 1000) {
      // Logic for smaller screens
      return `w-[${screenSize - 1000}px]`;
    } else if (screenSize > 1200) {
      // Logic for larger screens
      return `w-[500px]`;
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          className="fixed inset-0 bg-black/1 transition-opacity overflow-y-auto"
          ref={containerRef}>
          <DialogContent
            className={`${styles.closeX} p-0 border-none max-w-[90%] lg:max-w-[800px] max-h-[90%] md:max-h-[100%] lg:max-h-[550px] flex flex-col md:flex-row lg:flex-row gap-4 overflow-y-auto`}>
            <DialogDescription className="block lg:hidden md:hidden">
              <img
                src="/images/recruiter-interviewing.jpg"
                alt="why sqr"
                className=""
              />
            </DialogDescription>
            <DialogDescription
              className={`flex flex-col relative mx-[3%] my-[3%] ${handleModalResize(
                screenResize.width
              )} `}>
              <div
                className={`flex flex-col gap-0 md:gap-2 lg:gap-2 lg:text-left md:text-left text-center items-center md:items-start lg:items-start w-full md:w-3/5 lg:w-full`}>
                <div
                  className="hidden lg:block md:block mb-0 md:my-0 lg:my-0"
                  style={{
                    width: "165px",
                    height: "50px",
                  }}>
                  <img
                    src="/images/sqr-trl-logo.png"
                    alt="SQR Logo"
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start lg:items-start w-full md:w-4/4 lg:w-full">
                  <h1
                    className={`${styles.careerHeader} text-primary text-[40px] md:text-[50px] lg:text-[50px] flex flex-wrap`}>
                    Recruitment Drive
                  </h1>
                </div>
                <div className="flex flex-col items-center md:items-start lg:items-start w-full md:w-3/4 lg:w-2/4">
                  <p className={`${styles.careerDescription}`}>
                    Explore Roles. Meet the Team. Take the Next Step. Discover
                    your future at SquareResults! Join our virtual recruitment
                    drive to explore current openings, connect with our teams,
                    and learn how to launch your career with us.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 my-[6%] md:my-[2%] lg:my-[2%] text-center md:text-left lg:text-left">
                <CustomButton
                  variant="primary"
                  content="REGISTER NOW"
                  className="w-[211.111px] h-[55px] text-[22px] font-bold leading-normal font-openSans rounded-[20px] items-center"></CustomButton>
              </div>
              <div className="flex  justify-center flex-row md:flex-col lg:flex-col gap-1 md:bg-transparent lg:bg-transparent lg:border-none md:border-none text-center md:text-left lg:text-left ">
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

            <div className="hidden lg:block md:block absolute md:right-[22%] lg:right-[26%] top-[24%] z-10">
              <img
                src="/images/recruiter-interviewing.jpg"
                alt="why sqr"
                className="w-[168px] object-cover h-[168px] rounded-[168px] border-[8px] border-green"
              />
            </div>
            <div className="hidden lg:block md:block absolute md:right-[36%] lg:right-[40%] top-[60%] z-10">
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
                <div className="absolute right-5 md:right-5 lg:right-20 md:top-[76%] lg:top-[72%] text-semantic-white flex flex-col gap-2">
                  <h2
                    className={`${styles.contactItem} text-[17.9px] leading-6`}>
                    <Phone size={22} className="inline-block mr-2" />
                    <a href="tel:602-418-6255" className="hover:underline">
                      (602) 418-6255
                    </a>
                  </h2>
                  <h2
                    className={`${styles.contactItem} text-[17.9px] leading-6`}>
                    <Globe size={22} className="inline-block mr-2" />
                    <a
                      href="https://www.squareresults.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline">
                      squareresults.com
                    </a>
                  </h2>
                  <h2
                    className={`${styles.contactItem} text-[17.9px] leading-6`}>
                    <Mail size={22} className="inline-block mr-2" />
                    <a
                      href="mailto:contact@squareresults.com"
                      className="hover:underline">
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
