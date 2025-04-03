import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const LetterFromMark = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 transition-opacity overflow-y-auto">
          <DialogContent className="sm:max-w-3xl h-full overflow-y-auto ">
            <button
              onClick={handleCancel}
              className="bg-white absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary-dark">
                A letter from Mark Burks, Chief Executive Officer & Founder
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-4 text-md text-justify text-primary-dark">
              Two years ago, SquareResults, LLC was born out of a simple yet
              profound observation: the job search process needed to be
              significantly improved. While applicant tracking systems have
              become commonplace, the reality is that many candidates still face
              immense frustration. They apply for countless jobs, often without
              receiving any feedback, leaving them feeling lost and demoralized.
              This gap in the current system inspired the creation of
              SquareResults LLC.
              <br />
              <br />
              At our core, SquareResults LLC is driven by a singular mission: to
              make the job search process easier and faster for both candidates
              and recruiters. Today's recruiters are overwhelmed with a deluge
              of applications, while candidates struggle to navigate a complex
              and often impersonal job market. We aim to bridge this gap by
              providing innovative solutions that streamline the application
              process, improve communication, and foster a more efficient and
              rewarding experience for all stakeholders.
              <br />
              <br />
              SquareResults LLC stands apart in the dynamic world of Internet &
              Technology as a company dedicated to revolutionizing the Talent
              Acquisition and Job Seeking sectors through the power of
              technology, specifically AI. Unlike traditional recruitment and
              staffing agencies, we are committed to enhancing the experience
              for every participant in the employment ecosystem. With a focus on
              innovation, we develop cutting-edge products and services designed
              to streamline the hiring process, empower recruiters with advanced
              tools, and provide job seekers with robust platforms to advance
              their careers.
              <br />
              <br />
              We address a critical challenge: the inefficiency and impersonal
              nature of many current hiring processes. Major players like
              LinkedIn, Indeed, and Glassdoor offer job listings and candidate
              sourcing, but often lack the personalized touch and advanced
              technology needed to truly optimize the recruitment experience.
              SquareResults LLC differentiates itself by offering
              technology-powered matching, which utilizes advanced algorithms
              and natural language processing to connect candidates with the
              most suitable jobs based on their unique skills, preferences, and
              personality.
              <br />
              <br />
              SquareResults LLC delivers a comprehensive solution that bridges
              the gap between employers and job seekers. Our platform is
              designed to streamline the recruitment process, making it more
              efficient and effective for companies of all sizes. By leveraging
              advanced analytics and machine learning algorithms, we provide
              employers with valuable insights into candidate profiles, ensuring
              a better match between job requirements and applicant skills.
              <br />
              <br />
              Our early success can be attributed to our dynamic team's stellar
              execution and the strength of our business model, built upon a
              foundation of hard work and unwavering commitment to our
              customers. Our network currently spans tens of thousands of
              candidates and recruiters, connecting them with over 1000
              companies. Our talented engineering and product teams are at the
              forefront of innovation, solving some of the most challenging
              problems at the intersection of the physical and digital worlds
              while our tech team builds and maintains the robust infrastructure
              that powers our platform.
              <br />
              <br />
              In closing, I want to reiterate our core values: prioritizing
              customer needs, upholding respect and dignity for all
              stakeholders, continually innovating and simplifying processes,
              taking decisive action to achieve outstanding results, embracing
              growth through continuous learning, fostering a collaborative and
              inclusive team environment, and valuing diversity within our
              global community.
              <br />
              <br />
              Best regards,
              <br />
              <div className="mb-4 flex row-span-2 align-middle justify-between">
                <DialogTitle className="text-2xl ">Mark Burks</DialogTitle>
                <button
                  onClick={handleCancel}
                  className="text-md hover:bg-primary-light py-2 px-4 rounded-full text-primary-dark bg-semantic-white shadow-lg hover:shadow-primary-medium/50 shadow-primary-light/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark">
                  Close
                </button>
              </div>
            </DialogDescription>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
};

export default LetterFromMark;
