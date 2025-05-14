import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
import CustomButton from "./CustomButton";

const ComeJoinUs: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-secondary text-semantic-white p-8">
        <h1 className="text-primary text-5xl font-bold mb-8">Come Join Us</h1>
        <Link to="/careers" reloadDocument={true}>
          <CustomButton content="Search Open Roles" variant="primary" />
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src="/images/come_join_us.png"
          alt="Join Us"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ComeJoinUs;
