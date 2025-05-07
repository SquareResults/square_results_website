import React from "react";

import { ReactNode } from "react";

const PoliciesWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`relative w-full h-[356px] text-left bg-[url('../public/images/transparent_hiring.gif')] bg-cover bg-no-repeat`}></div>
      {children}
    </div>
  );
};

export default PoliciesWrapper;
