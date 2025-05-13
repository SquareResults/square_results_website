import React from "react";
import { Link } from "react-router-dom";

const ComeJoinUs: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-secondary text-semantic-white p-8">
        <h1 className="text-primary text-5xl font-bold mb-8">Come Join Us</h1>
        <Link
          to="/careers"
          reloadDocument={true}
          className="bg-primary shadow-md shadow-gray-500 hover:bg-semantic-white hover:font-bold text-semantic-white hover:text-primary px-4 py-2 rounded-lg transition-colors hover:shadow-md hover:shadow-primary">
          Search Open Roles
        </Link>
      </div>
      <div className="flex-1">
        <img
          src="/images/come_join_us.png"
          alt="Join Us"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ComeJoinUs;
