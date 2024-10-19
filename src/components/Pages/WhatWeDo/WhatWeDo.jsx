import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialtiesContainer from "./SpecialtiesContainer";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <div className=" py-28  px-4 md:px-20 pt-32 bg-[#093046]">
        {/* Title Section */}
        <div className="text-center">
          <h1
            className="text-4xl text-white md:text-8xl font-semibold aos-init aos-animate"
            data-aos="fade-in"
          >
            Values-based partnerships. Driving lasting talent solutions.
          </h1>
        </div>

        {/* Subtitle Section */}
        <div
          className="text-center mt-10 aos-init aos-animate"
          data-aos="fade-in"
        >
          <h3 className="text-xl text-blue-300 md:text-3xl text- font-semibold">
            Tech • Creative • Digital Marketing Staffing
          </h3>
        </div>
      </div>
      <div className=" flex justify-center items-center py-16   px-4 md:px-40 ">
        <div className="md:w-1/2">
          <div className=" text-center mb-8">
            <h2
              className="cta--title text-2xl md:text-4xl md:text-4xl font-semibold with-highlight-mod"
              data-aos="fade-in"
            >
              We Match The Right People With The Right Roles.
            </h2>
          </div>

          <div className="cta--copy text-center md:text-xl" data-aos="fade-in">
            <p className="font-normal">
              Uncover talent that instantly elevates your team.
            </p>
            <p className="font-normal mt-6 md:text-lg">
              At Mondo, we specialize in IT, Tech, Digital Marketing, and
              Creative staffing, ensuring each placement brings immediate impact
              to your organization. We go beyond mere skills and experience,
              selecting candidates who offer the ideal mix of mindset,
              diversity, and potential, coupled with professional expertise.
            </p>
          </div>

          <div className="cta--row flex justify-center mt-5">
            <div className="cta--cta-wrap">
              <a
                href="https://mondo.com/hire-talent/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta--cta inline-block text-white justify-center px-8 font-semibold py-2 bg-gradient-to-r hover:from-[#52CDFC] hover:to-[#0286E5] from-[#0286E5] to-[#52CDFC] rounded-[2px]"
              >
                Hire Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <SpecialtiesContainer />
    </>
  );
};

export default WhatWeDo;
