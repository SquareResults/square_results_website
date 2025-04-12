import React from "react";
import billMeade from "../../public/images/bill_meade.png";
import veronicaD from "../../public/images/veronica_delgado.png";
import jeanLanclot from "../../public/images/jean_lanclot.png";
import "../BoardAdvisorSection/BoardAdvisorSection.css"; // Ensure you have the CSS file for styling
const BoardAdvisorSection = () => {
  const boardMembers = [
    {
      name: "Bill Meade",
      image: billMeade.src,
      alt: "Bill Meade",
      title: "Chairman of the Board",
      description:
        "As Chairman of the Board of SquareResults, Bill has over 30 years of experience in senior business roles. Bill has served as CEO of a publicly traded mid cap business process outsourcing company and raised over $130 million in a secondary offering. Bill has also served as a CEO of a venture capital backed start-up and raised over $40 million in two rounds of financing. In senior roles at both American Express and Citicorp Bill was known for his strategic planning and execution skills. Bill believes significant growth and profitability occur as a result of focused execution. Bill is a strong supporter of DEI.",
    },
    {
      name: "Veronica Delgado",
      image: veronicaD.src,
      alt: "Veronica Delgado",
      title: "Strategic Advisor",
      description:
        "As a pivotal Strategic Advisor for SquareResults, Veronica significantly contributies to the company's growth and product expansion. Her extensive C-level experience has provided essential leadership, and her ability to align departments with strategic objectives and foster positive relationships across the organization has been invaluable.",
    },
    {
      name: "Jean Lanclot",
      image: jeanLanclot.src,
      alt: "Jean Lanclot",
      title: "Strategic Advisor",
      description:
        "Jean, a Strategic Advisor for SquareResults for over a year, is a Global Talent Acquisition Leader with experience partnering with C-level executives and managing high-performing global recruiting teams across the US, Singapore, and Europe. He is well-versed in global expansions, M&A, divestitures, and various recruiting platforms, making him a valuable asset in supporting revenue and business growth.",
    },
  ];

  return (
    <section className="p-20">
      <div className="container w-full max-auto bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
        <div className="mb-50px text-center">
          <h1 className="text-4xl font-bold text-purple mb-6">
            Board of Advisors
          </h1>
        </div>
        <div className="boardAdvisorSection">
          {boardMembers.map((member, index) => (
            <div key={member.name} className="boardAdvisor_div advisor">
              <div className="advisor__div advisor__div--img">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="advisor__img"
                />
              </div>
              <div className="advisor__div advisor__div--info">
                <h2 className="advisor__name font-bold">{member.name}</h2>
                <p className="advisor__desc">{member.description}</p>
              </div>
              <div className="advisor__div advisor__div--name">
                <h2 className="advisor-name">{member.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardAdvisorSection;
