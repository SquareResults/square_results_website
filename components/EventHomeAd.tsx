import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "./ui/dialog";
import { CalendarDays, Clock3, Globe, Mail, Phone } from "lucide-react";
import styles from "./EventHomeAd.module.css";
import CustomButton from "./CustomButton";

const EventHomeAd = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 transition-opacity overflow-y-auto">
          <DialogContent className="p-0 border-none max-w-[90%] md:max-w-[90%] lg:max-w-[70%] max-h-[90%] md:max-h-[100%] lg:max-h-[100%] flex flex-col md:flex-row lg:flex-row gap-4 overflow-y-auto">
            <DialogDescription className="block lg:hidden md:hidden">
              <img
                src="/images/recruiter-interviewing.jpg"
                alt="why sqr"
                className=""
              />
            </DialogDescription>
            <DialogDescription className="flex flex-col relative mx-[5%] my-[3%]">
              <div
                className={`flex flex-col gap-0 md:gap-2 lg:gap-2 lg:text-left md:text-left text-center items-center md:items-start lg:items-start lg:w-[493px] md:w-[50%] w-full`}>
                <h1
                  className={`${styles.careerHeader} text-primary text-[56px] md:text-[80px] lg:text-[80px] md:w-[383px] lg:w-[393px]`}>
                  CAREER DAY
                </h1>
                <p
                  className={`${styles.careerDescription} w-[249px] md:w-[350px] lg:w-[373px]`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-shrink-0 mt-[6%] mb-[8%] w-full text-center md:text-left lg:text-left">
                <CustomButton
                  variant="primary"
                  content="REGISTER NOW"
                  className="w-[211.111px] h-[60px] text-[22px] font-bold leading-normal font-openSans rounded-[20px] items-center"></CustomButton>
              </div>
              <div className="flex justify-center flex-row md:flex-col lg:flex-col gap-2 md:bg-transparent lg:bg-transparent lg:border-none md:border-none text-center md:text-left lg:text-left ">
                <h2 className="bg-gray-300 w-[115px] md:w-full lg:w-full md:bg-transparent lg:bg-transparent text-[12px] md:text-[16px] lg:text-[16px] leading-6 flex flex-col md:flex-row lg:flex-row gap-2 items-center md:items-start lg:items-start">
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
                <h2 className="bg-gray-300 w-[173px] md:w-full lg:w-full md:bg-transparent lg:bg-transparent text-[12px] md:text-[16px] lg:text-[16px] leading-6 flex flex-col md:flex-row lg:flex-row gap-2 items-center md:items-start lg:items-start">
                  <Clock3
                    size={51}
                    color="#FFFFFF"
                    fill="#1E3A8A"
                    className="inline-block"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-bold">Time</p>
                    <p className="">8:00 AM - 10:00 AM PST</p>
                  </div>
                </h2>
              </div>
            </DialogDescription>

            <div className="hidden lg:block md:block absolute right-[26%] top-[24%] z-10">
              <img
                src="/images/recruiter-interviewing.jpg"
                alt="why sqr"
                className="w-[168px] object-cover h-[168px] rounded-[168px] border-[8px] border-secondary"
              />
            </div>
            <div className="hidden lg:block md:block absolute right-[38%] top-[60%] z-10">
              <img
                src="/images/why_sqr.png"
                alt="why sqr"
                className="w-[168px] h-[168px] rounded-[168px] border-[8px] border-secondary"
              />
            </div>

            {/* ===== CONTACT INFORMATION ===== */}
            <DialogDescription
              className={`${styles.bottomTriangle} hidden lg:block md:block`}>
              <div className={styles.rightTriangle}>
                <div
                  style={{
                    width: "150px",
                    height: "55px",
                    position: "absolute",
                    right: "10%",
                    top: "70px",
                  }}>
                  <img
                    src="/images/SQRlogo.jpg"
                    alt="Logo"
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>

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
