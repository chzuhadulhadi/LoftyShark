import React from 'react';

const WhyWorkForMyShark = () => {
  const stats = [
    {
      stat: '19',
      sub: 'mentors at your disposal',
      roundText: 'Endless Opportunities',
      description: 'At My Shark, your career trajectory is limitless. We\'re not just about filling positions; we\'re about fostering authentic connections and nurturing entrepreneurial spirit.'
    },
    {
      stat: '33+',
      sub: 'upskill trainings each year',
      roundText: 'Growth and Development',
      description: 'With a strong emphasis on internal promotions and skill enhancement, My Shark is the ideal place for ambitious individuals seeking to elevate their careers.'
    },
    {
      stat: '13',
      sub: '2023 leadership promotions',
      roundText: 'Diversity and Innovation',
      description: 'We thrive on change and innovation, delivering top-tier staffing solutions in Tech, IT, Creative, and Digital Marketing. Our diverse team is our strength, driving us to stay ahead even in challenging times.'
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Why Work For My Shark?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center bg-gray-200 p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-gray-800">{item.stat}</div>
                <div className="text-lg font-medium text-gray-600">{item.sub}</div>
                <div className="mt-4 text-gray-500">{item.roundText}</div>
              </div>
              <p className="mt-6 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkForMyShark;
