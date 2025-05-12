import React from "react";
import PoliciesWrapper from "@/components/PoliciesWrapper";

const privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <PoliciesWrapper>
        <div className="max-w-[75%] h-auto mt-[30px] mb-[60px] text-center">
          <div className="text-primary">
            <div className="text-[34px] sm:text-[44px]">Legal Policy</div>
            <div className="text-[20px] sm:text-[24px]">
              We value your privacy and are committed to protecting your
              personal information.
            </div>
          </div>
          <div className="text-[18px] sm:text-[18px] flex flex-col gap-4 mt-[20px]">
            <p>
              At SquareResults, we are committed to protecting your privacy.
              This legal policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website. We may
              update this policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              If we make material changes to this policy, we will notify you by
              email or through a notice on our website.
            </p>
          </div>
        </div>
      </PoliciesWrapper>
    </div>
  );
};

export default privacy;
