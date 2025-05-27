import React, { useState } from "react";
import { motion } from "motion/react";
import { jobs } from "@/lib/careerData"; // Assuming you have a jobs data file
import { ApplyNowForm } from "./ApplyNowForm/ApplyNowForm";

type JobRole = {
  id: number;
  title: string;
  datePosted: string;
  description: string[];
  reportsTo: string;
  location: string;
  department: string;
  aboutTheRole: string;
  responsabilities: string[];
  qualifications: string[];
  preferredQualifications?: string[];
  benefits: string[];
};

const CareersSection: React.FC = () => {
  const jobRoleSchema = {
    id: 0,
    title: "",
    datePosted: "",
    description: [],
    reportsTo: "",
    location: "",
    department: "",
    aboutTheRole: "",
    responsabilities: [],
    qualifications: [],
    preferredQualifications: [],
    benefits: [],
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [jobRole, setJobRole] = useState<JobRole>(jobRoleSchema);

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

  const handleApplyNow = (role: string) => {
    setShowApplyForm(true);
    const foundJob = filteredJobs.find((job) => job.id === expandedJob);
    setJobRole(foundJob || jobRoleSchema);
  };

  return (
    <section className="py-8 text-semantic-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-24 space-y-4">
        {/* === Section Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">
            Careers
          </h1>
          <p className="text-md md:text-lg lg:text-lg text-gray-700">
            Joining SquareResults as an employee means becoming part of a
            dynamic, forward-thinking team dedicated to innovation, growth, and
            excellence. At SquareResults, you'll have the opportunity to work
            alongside talented professionals who are passionate about driving
            meaningful change and shaping the future of the industry.
          </p>
          <p className="text-md md:text-lg lg:text-lg text-gray-700">
            We foster a collaborative culture that values creativity,
            leadership, and continuous learning, ensuring that every team member
            has the support and resources needed to thrive. Whether you're
            looking to expand your skill set, take on exciting challenges, or
            make a lasting impact, SquareResults is the place where ambition
            meets opportunity. Take the next step in your career—join us and be
            part of something extraordinary!
          </p>
          <p className="text-md md:text-lg lg:text-lg text-gray-700">
            Take the next step in your career—join us and be part of something
            extraordinary!
          </p>
        </motion.div>

        {/* === Filter and Search Section === */}
        {/* This section allows users to filter by department and location, and search by job title or description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-4 mb-8">
          <div className="relative w-full">
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="w-full appearance-none px-2 py-2 pr-8 rounded bg-semantic-white text-gray-700 ">
              {departmentOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option || "All Departments"}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
              </svg>
            </div>
          </div>

          <div className="relative w-full">
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full appearance-none px-2 py-2 pr-8 rounded bg-semantic-white text-gray-700">
              {locationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option || "All Locations"}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
              </svg>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-2 rounded bg-black-200 text-gray-700 w-full"
          />
        </div>

        {/* === Job Listings === */
        /* This section displays the filtered job listings based on the search and filter criteria */}
        <div className="grid grid-cols-1 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-700">
              <div className="flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {job.title}
                  </h2>
                  <p className="text-sm text-[#1b54b1]">{job.datePosted}</p>
                </div>
                <div>
                  <p className="text-sm text-[#1b54b1]">{job.department}</p>
                  <button
                    onClick={() => handleExpand(job.id)}
                    className="text-primary hover:underline font-semibold">
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
                  {/* <a
                    href={`mailto:contact@squareresults.com?subject=Job%20Application:%20${
                      job.title
                    }&body=Hello,%0D%0A%0D%0APlease%20submit%20your%20resume,%20cover%20letter/portfolio%20for%20the%20${job.title
                      .split(" ")
                      .join("%20")}%20position.%0D%0A%0D%0AThank%20you!`}>
                    <button className="mt-4 bg-primary text-semantic-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                      Apply Now
                    </button>
                  </a> */}
                  <button
                    onClick={() => handleApplyNow(job.title)}
                    className="mt-4 bg-primary text-semantic-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ApplyNowForm
        open={showApplyForm}
        onOpenChange={setShowApplyForm}
        jobRole={jobRole}
      />
    </section>
  );
};

export default CareersSection;
