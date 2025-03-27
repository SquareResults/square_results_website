import React from 'react';

const CoreValues: React.FC = () => {
  const values = [
    {
      title: 'Visionary Thinking',
      description: "We encourage ambitious thinking and bold vision, pushing the boundaries of what's possible to achieve innovative and transformative solutions that drive significant impact.",
      imageUrl: '/images/integrity.png',
    },
    {
      title: 'Do Something Special',
      description: "We are committed to going above and beyond to create a positive and lasting impact, striving for excellence and making a difference in everything we do.",
      imageUrl: '/images/customer_commitment.png',
    },
    {
      title: 'Innovate and Simplify',
      description: "We continually strive to innovate and simplify processes to enhance efficiency and drive progress.",
      imageUrl: '/images/quality.png',
    },
    {
      title: 'Sustainability',
      description: "We emphasize the importance of mindful spending and resourcefulness, ensuring sustainable and responsible financial practices.",
      imageUrl: '/images/quality.png',
    },
  ];

  return (
    <div className="p-8 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold mb-16 text-[#1D066F]">Our Core Values</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {values.map((value, index) => (
          <div key={index} className="m-4 p-6 border border-gray-200 rounded-lg shadow-lg w-72 bg-white transform transition-transform hover:scale-105">
            <img src={value.imageUrl} alt={value.title} className="w-36 h-36 rounded-full mx-auto mb-6 shadow-md" />
            <h2 className="text-2xl font-semibold-500 mb-4 text-[#1D066F]">{value.title}</h2>
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;