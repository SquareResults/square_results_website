import React, { useState } from "react";
import { motion } from "framer-motion";
import { jobs } from "@/lib/careerData"; // Assuming you have a jobs data file

const CareersSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const departmentOptions = [
    "", // All Departments
    "Technology",
    "Operations",
    "Administration",
    "Marketing",
    "Finance",
    "Sales",
    // Add more departments as needed
  ];

  const locationOptions = [
    "", // All Locations
    "Tempe, AZ",
    // Add more locations as needed
    // Note: Ensure these match the job data's location field for filtering to work correctly
  ];

  const mailToLink = "";

  const filteredJobs = jobs.filter((job) => {
    return (
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.includes(searchTerm.toLowerCase())) &&
      (departmentFilter === "" || job.department === departmentFilter) &&
      (locationFilter === "" || job.location === locationFilter)
    );
  });

  const handleExpand = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section className="py-12 text-white min-h-screen">
      <div className="container mx-auto px-24">
        {/* === Section Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#081321] mb-6">
            Careers
          </h1>
        </motion.div>

        {/* === Filter and Search Section === */}
        {/* This section allows users to filter by department and location, and search by job title or description */}
        <div className="flex justify-between mb-8">
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-12 py-2 rounded bg-black-200 text-gray-700 ml-4">
            {departmentOptions.map((option, index) => (
              <option key={index} value={option}>
                {option || "All Departments"}
              </option>
            ))}
          </select>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-12 py-2 rounded bg-black-200 text-gray-700 ml-4">
            {locationOptions.map((option, index) => (
              <option key={index} value={option}>
                {option || "All Locations"}
              </option>
            ))}
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

        {/* === Job Listings === */
        /* This section displays the filtered job listings based on the search and filter criteria */}
        <div className="grid grid-cols-1 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-500">{job.datePosted}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{job.department}</p>
                  <button
                    onClick={() => handleExpand(job.id)}
                    className="text-primary hover:underline">
                    {expandedJob === job.id ? "Hide Details" : "Show Details"}
                  </button>
                </div>
              </div>
              {expandedJob === job.id && (
                <div className="mt-4">
                  <p>{job.reportsTo}</p>
                  <p className="mt-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="mt-2">
                    <strong>Department:</strong> {job.department}
                  </p>
                  <p className="mt-2">
                    <strong>About the SquareResults:</strong>
                    <br />
                    SquareResults is a technology-driven company revolutionizing
                    the talent acquisition and job seeking sectors. We leverage
                    cutting-edge AI to streamline the hiring process, making it
                    easier, faster, and more efficient for both companies and
                    candidates. Our mission is to transform the job search
                    experience into a more efficient and satisfying journey for
                    everyone involved.
                  </p>
                  <p className="mt-2">
                    <strong>About the Role:</strong>
                    <br />
                    {job.aboutTheRole}
                  </p>

                  {/* === Responsibilities, Qualifications, and Benefits === */}
                  <ul className="list-disc list-inside mt-2">
                    <p className="font-bold">Key Responsibilities:</p>
                    {job.responsabilities.map((responsibility, index) => (
                      <li key={index} className="ml-4">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  <ul className="list-disc list-inside mt-2">
                    <p className="font-bold">Qualifications:</p>
                    {job.qualifications.map((qualification, index) => (
                      <li key={index} className="ml-4">
                        {qualification}
                      </li>
                    ))}
                  </ul>
                  {job.preferredQualifications ? (
                    <ul className="list-disc list-inside mt-2">
                      <p className="font-bold">Preferred Qualifications:</p>
                      {job.preferredQualifications.map(
                        (qualification, index) => (
                          <li key={index} className="ml-4">
                            {qualification}
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                  <ul className="list-disc list-inside mt-2">
                    <p className="font-bold">Benefits:</p>
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="ml-4">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:contact@squareresults.com?subject=Job%20Application:%20${
                      job.title
                    }&body=Hello,%0D%0A%0D%0APlease%20submit%20your%20resume,%20cover%20letter/portfolio%20for%20the%20${job.title
                      .split(" ")
                      .join("%20")}%20position.%0D%0A%0D%0AThank%20you!`}>
                    <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                      Apply Now
                    </button>
                  </a>
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
