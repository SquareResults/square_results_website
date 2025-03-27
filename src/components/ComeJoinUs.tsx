import React from 'react';
import { Link } from 'react-router-dom';

const ComeJoinUs: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-secondary text-white p-8">
        <h1 className="text-5xl font-bold mb-8">Come Join Us</h1>
        <Link to="/career">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition-colors">
            Search Open Roles
          </button>
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