import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialtiesContainer from "./SpecialtiesContainer";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Elements animate only once on scroll
      easing: "ease-in-out", // Easing for smooth animation
      offset: 100, // Trigger animations 100px before the element comes into view
    });
  }, []);

  return (
    <>
      <div className=" lg:h-[100vh] py-20 px-4 md:px-20 pt-32 bg-[#093046]">
        {/* Title Section */}
        <div className="text-center">
          <h1
            className="text-2xl md:text-6xl text-white lg:text-8xl font-semibold "
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Values-based partnerships. Driving lasting talent solutions.
          </h1>
        </div>

        {/* Subtitle Section */}
        <div
          className="text-center mt-10"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h3 className="text-base md:text-xl text-blue-300 lg:text-2xl font-semibold">
            Tech • Creative • Digital Marketing Staffing
          </h3>
        </div>
      </div>

      <div className="flex justify-center items-center py-16 px-4">
        <div className="sm:w-1/2">
          <div className="text-center mb-8" data-aos="fade-in">
            <h2 className="cta--title text-2xl md:text-4xl font-semibold">
              We Match The Right People With The Right Roles.
            </h2>
          </div>

          <div
            className="cta--copy text-center md:text-xl"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <p className="font-normal">
              Uncover talent that instantly elevates your team.
            </p>
            <p className="font-normal mt-6 md:text-lg">
              At MyShark, we specialize in IT, Tech, Digital Marketing, and
              Creative staffing, ensuring each placement brings immediate impact
              to your organization.
            </p>
          </div>

          <div className="cta--row flex justify-center mt-5" data-aos="fade-up">
            <div className="cta--cta-wrap">
              <a
                href="/hire-talent"
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

      {/* Specialties Container */}
      <SpecialtiesContainer />

      <div className="bg-black  py-20">
        <div className="border-t-2"></div>
        <div className="copy-circle--section lwh-dark-theme mt-20">
          <div className="sm:px-20 px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Content Section */}
              <div
                className="order-2  lg:w-1/2 flex flex-col justify-center text-white"
                data-aos="fade-in"
              >
                <h2 className="md:text-4xl text-2xl font-semibold">
                  Nobody knows today’s staffing landscape better than we do.
                </h2>
                <div
                  className="md:text-xl text-lg text-white"
                  data-aos="fade-in"
                  data-aos-delay="100"
                >
                  <p className="pt-10">
                    At the heart of our staffing approach lies a deep
                    understanding of recruitment, guided by values-based
                    partnerships.
                  </p>
                  <p className="pt-10">
                    Let’s transform your hiring strategy with our expertise in
                    contract, contract-to-hire, and full-time staffing
                    solutions.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div
                className="md:order-2 order-1 lg:w-1/2 flex justify-center"
                data-aos="fade-in"
              >
                <img
                  width="1024"
                  src="https://mondo.com/wp-content/smush-webp/2021/11/iStock-672824152_bw_sqr-1024x1024.jpg.webp"
                  alt="Person outdoors working on a laptop"
                  loading="lazy"
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="border-t-2"></div>
      <div className="bg-black  lg:h-[100vh] py-20  md:px-16 px-4">
        <div className=" mx-auto  grid sm:grid-cols-1 lg:grid-cols-4 gap-10 text-center text-white">
          <div
            className="relative lg:top-28  transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-40 h-40 bg-gray-700  rounded-full mx-auto flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-out">
              <i className="fas fa-binoculars fa-5x text-white"></i>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-green-400">
              Strategic Partnership
            </h3>
            <h4 className="mt-2 text-2xl font-bold">IDENTIFY</h4>
            <p className="mt-4 text-lg sm:px-20 lg:px-0">
              We engage in a dynamic partnership, leveraging an action-oriented
              approach to understand your precise needs.
            </p>
          </div>

          <div
            className="relative  sm:mt-12 transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-out">
              <i className="fas fa-envelope fa-5x text-white"></i>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-green-400">
              Modernized Recruiting
            </h3>
            <h4 className="mt-2 text-2xl font-bold">DELIVER</h4>
            <p className="mt-4 text-lg sm:px-20 lg:px-0">
              Our dedicated team delivers the equivalent of two weeks of
              recruiting efforts within 48 hours.
            </p>
          </div>

          <div
            className="relative sm:mt-12 lg:top-28 transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-out">
              <i className="fas fa-clipboard-list fa-5x text-white"></i>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-green-400">
              Collaborative Progress Review
            </h3>
            <h4 className="mt-2 text-2xl font-bold">ASSESS</h4>
            <p className="mt-4 text-lg sm:px-20 lg:px-0">
              A collaborative review ensures alignment and timely progress
              toward your desired start date.
            </p>
          </div>

          <div
            className="relative sm:mt-12 transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-40 h-40  bg-gray-700 rounded-full mx-auto flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-out">
              <i className="fas fa-comments fa-5x text-white"></i>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-green-400">
              Values-Based Hiring
            </h3>
            <h4 className="mt-2 text-2xl font-bold">ZERO IN</h4>
            <p className="mt-4 text-lg sm:px-20 lg:px-0">
              Post-interview, we help you pinpoint the ideal candidate to ensure
              a perfect fit for your team.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <section className="py-24" id="simple-copy-3156">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <article className="w-full md:w-8/12 text-center">
                <h2 className="text-2xl md:text-7xl  font-semibold ">
                  Rediscover Your <span className="text-[#093046]">WHY</span>
                </h2>
                <a
                  href="/hire-talent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta--cta inline-block mt-10 text-white hover:text-black text-lg justify-center px-12 font-semibold py-2 bg-gradient-to-r hover:from-[#52CDFC] hover:to-[#0286E5] from-[#0286E5] to-[#52CDFC] rounded-[6px]"
                >
                  Hire Now
                </a>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeDo;
