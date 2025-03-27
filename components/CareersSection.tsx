import React, { useState } from 'react';
import { motion } from "framer-motion";

const CareersSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      datePosted: '2025-02-20',
      description: 'We are looking for a skilled software engineer to join our team.',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      datePosted: '2025-02-18',
      description: 'We are seeking a product manager to lead our product development efforts.',
    },
    // Add more job listings as needed
  ];

  const filteredJobs = jobs.filter(job => {
    return (
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (departmentFilter === '' || job.department === departmentFilter) &&
      (locationFilter === '' || job.location === locationFilter)
    );
  });

  const handleExpand = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section className="py-12 text-white min-h-screen">
      <div className="container mx-auto px-24">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
      <h1 className="text-4xl md:text-5xl font-bold text-[#081321] mb-6">Careers</h1>
      </motion.div>
        <div className="flex justify-between mb-8">
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-12 py-2 rounded bg-black-200 text-gray-700 ml-4"
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            {/* Add more departments as needed */}
          </select>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-12 py-2 rounded bg-black-200 text-gray-700 ml-4"
          >
            <option value="">All Locations</option>
            <option value="New York, NY">New York, NY</option>
            <option value="San Francisco, CA">San Francisco, CA</option>
            {/* Add more locations as needed */}
          </select>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-12 py-2 rounded bg-black-200 text-gray-700 w-full max-w-md"
          />
          
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {filteredJobs.map(job => (
            <div key={job.id} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-500">{job.datePosted}</p>
                </div>
                <button
                  onClick={() => handleExpand(job.id)}
                  className="text-primary hover:underline"
                >
                  {expandedJob === job.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {expandedJob === job.id && (
                <div className="mt-4">
                  <p>{job.description}</p>
                  <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;