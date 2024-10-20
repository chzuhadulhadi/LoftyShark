import React, { useState } from "react";

const specialtiesData = [
  {
    id: 1,
    title: "Digital Marketing Staffing",
    description:
      "Analytics Managers, Marketing Automation Specialists, Digital Project Managers, Customer Experience Specialists, & more.",
    img: "https://mondo.com/wp-content/smush-webp/2021/11/Digital-Markeitng-Staffing-desk-1.png.webp",
    link: "https://mondo.com/hire-talent/",
  },
  {
    id: 2,
    title: "Creative Staffing",
    description:
      "UX Designers, Copywriters, Email Developers, Art Directors, Video Editors, Graphic Designers, & more.",
    img: "https://mondo.com/wp-content/uploads/2021/11/Creative-Staffing-desk.png",
    link: "https://mondo.com/hire-talent/",
  },
  {
    id: 3,
    title: "IT & Tech Staffing",
    description:
      "Software Engineers, ETL Developers, Network Engineers, Cyber Security Engineers, QA Engineers & more.",
    img: "https://mondo.com/wp-content/smush-webp/2021/11/IT-and-Tech-Staffing-desk.png.webp",
    link: "https://mondo.com/hire-talent/",
  },
];

const SpecialtiesContainer = () => {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <>
      <div className="">
        <div className=" py-40 bg-gray-200   md:px-20 px-4  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: List of Specialties */}
            <div className="space-y-6 pl-12 md:pl-0">
              <h2 className="md:text-6xl  text-4xl font-bold leading-tight">
                What we <br /> do Best.
              </h2>

              {specialtiesData.map((item) => (
                <div key={item.id}>
                  <button
                    className={`w-[60%] hover:text-blue-400 text-left py-3 text-lg md:text-2xl font-semibold border-b-2 ${
                      activeSection === item.id
                        ? "border-gray-400 text-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side: Active Section Content */}
            <div>
              {specialtiesData.map((item) =>
                activeSection === item.id ? (
                  <div key={item.id} className="space-y-5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="md:w-[70%] w-full mx-auto "
                    />
                    <h4 className="md:text-5xl  text-2xl text-center font-bold">
                      {item.title}
                    </h4>
                    <p className="md:text-xl text-base font-semibold text-center text-gray-700 mx-auto md:w-[65%]">
                      {item.description}
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href={item.link}
                        className="inline-block text-white justify-center px-8 font-semibold py-2 bg-gradient-to-r hover:from-[#52CDFC] hover:to-[#0286E5] from-[#0286E5] to-[#52CDFC] rounded-[2px]"
                      >
                        Hire {item.title.split(" ")[0]} Talent
                      </a>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialtiesContainer;
