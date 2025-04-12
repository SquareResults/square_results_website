import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Vaishnavie Suresh",
    linkedin: "https://linkedin.com/in/vaishnavie-suresh",
    description: "Experienced in remote hiring and onboarding.",
  },
  {
    name: "Gi Diaz",
    linkedin: "https://www.linkedin.com/in/gisseldiazf/",
    description:
      "Specialist in innovating solutions for better user experience",
  },
  {
    name: "Amad Arshad",
    linkedin: "https://linkedin.com/in/amadarshad",
    description: "Expert in building high-performing teams.",
  },
  {
    name: "Diksha Bokade",
    linkedin: "https://linkedin.com/in/diksha-bokade",
    description: "Specialist in recruitment marketing and employer branding.",
  },
  {
    name: "Jamiah Cypress",
    linkedin: "https://linkedin.com/in/jamiah-cypress-bb3a98271",
    description: "Focused on data-driven recruitment strategies.",
  },
  {
    name: "Karthik Gowda",
    linkedin: "https://linkedin.com/in/karthik-gowda-r-45ab8b1a2",
    description: "Expert in talent management and development.",
  },
  {
    name: "Shannon Viets",
    linkedin: "https://linkedin.com/in/shannon-viets-19136b63",
    description: "Specialist in employee engagement and retention.",
  },
  {
    name: "Cherris Armour",
    linkedin: "https://linkedin.com/in/cherris-armour-871a0418",
    description: "Specialist in leadership development and coaching.",
  },
  {
    name: "George Thomas Mohan",
    linkedin: "https://www.linkedin.com/in/georgethomasmohan/",
    description: "Experienced business operations and creator.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081321] mb-8 tracking-wide">
            Built By Passionate People
          </h2>
          <p className="mt-10 text-3xl text-[#081321] mb-8 tracking-wide">
            Meet Our Core Team
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {/* <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div> */}
                <div>
                  <h3 className="text-xl font-bold text-[#081321]">
                    {member.name}
                  </h3>
                  <a
                    href={member.linkedin}
                    className="text-[#4DCCE6] hover:text-[#45B5B5] transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
