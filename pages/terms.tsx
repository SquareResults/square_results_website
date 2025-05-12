import React from "react";
import PoliciesWrapper from "@/components/PoliciesWrapper";

const terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <PoliciesWrapper>
        <div className="max-w-[75%] h-auto mt-[30px] mb-[60px] text-center">
          <div className="text-primary">
            <div className="text-[34px] sm:text-[44px]">Terms & Conditions</div>
            <div className="text-[20px] sm:text-[24px]">
              Use of our site constitutes acceptance of these terms and all
              applicable policies.
            </div>
          </div>
          <div className="text-[18px] sm:text-[18px] flex flex-col gap-4 mt-[20px]">
            <p>
              Welcome to SquareResults. These terms and conditions outline the
              rules and regulations for the use of our website. By accessing
              this website, we assume you accept these terms and conditions. Do
              not continue to use SquareResults if you do not agree to all of
              the terms and conditions stated on this page.
            </p>
            <p>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company's terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves.
            </p>
          </div>
        </div>
      </PoliciesWrapper>
    </div>
  );
};

export default terms;
