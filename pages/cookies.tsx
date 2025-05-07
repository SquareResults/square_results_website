import React from "react";
import PoliciesWrapper from "@/components/PoliciesWrapper";

const cookie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <PoliciesWrapper>
        <div className="max-w-[75%] h-auto mt-[30px] mb-[60px] text-center">
          <div className="text-primary">
            <div className="text-[34px] sm:text-[44px]">Cookie Policy</div>
            <div className="text-[20px] sm:text-[24px]">
              This policy explains how and why we use cookies on our website.
            </div>
          </div>
          <div className="text-[18px] sm:text-[24px] flex flex-col gap-4 mt-[30px]">
            <p>
              Our website uses cookies to improve your experience while you
              navigate through the website. Out of these cookies, the cookies
              that are categorized as necessary are stored on your browser as
              they are essential for the working of basic functionalities of the
              website.
            </p>
            <p>
              We also use third-party cookies that help us analyze and
              understand how you use this website. These cookies will be stored
              in your browser only with your consent. You also have the option
              to opt-out of these cookies. But opting out of some of these
              cookies may have an effect on your browsing experience.
            </p>
          </div>
        </div>
      </PoliciesWrapper>
    </div>
  );
};

export default cookie;
