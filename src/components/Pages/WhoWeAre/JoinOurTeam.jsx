import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadlinesSection from "./HeadlinesSection";
import WhyWorkForMyShark from "./WhyWorkForMyShark";
import PerksSection from "./PerksSection";
import TestimonialsSection from "../../TestimonialsSection";


const JoinOurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
  <>
     <div className=" h-[100vh]   px-4 md:px-20 pt-32 bg-[#093046]">
        <div className="text-center" data-aos="fade-in">
          <h1
            className="text-4xl text-white md:text-7xl font-bold aos-init aos-animate"
            data-aos="fade-in"
          >
            Join Our Team: My Shark National Staffing Agency
          </h1>
          <p className="text-xl pt-16 text-white md:text-2xl font-semibold aos-init aos-animate">
          Embrace Growth and Drive Innovation at My Shark
          </p>
        </div>
      </div>
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
                Careers at My Shark: Where Your Potential Meets Opportunitythan we do.
                </h2>
                <div
                  className="md:text-xl text-lg text-white"
                  data-aos="fade-in"
                  data-aos-delay="100"
                >
                  <p className="pt-10">
                  Discover a different kind of staffing agency.                 
                  </p>
                  <p className="pt-10">
                  At My Shark, we’re redefining the staffing industry with our commitment to values-based partnerships and a unique approach to talent solutions. We see our clients as partners in success, driving us to excel in everything we do. Join us and be part of a team that’s transforming today’s dynamic job market.Let’s transform your hiring strategy with our expertise in
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
      <HeadlinesSection/>
      <WhyWorkForMyShark/>
      <section className="cta--section bg-white py-12">
      {/* Top wave */}
      <div className="cta--top-wave"></div>

      <div className="container md:w-[80%] mx-auto px-6">
        {/* Title */}
        <div className="cta--title-wrap text-center">
          <h2
            className="cta--title text-3xl md:text-6xl font-semibold text-gray-800"
            data-aos="fade-in"
          >
            Your Benefits at My Shark
          </h2>
        </div>

        {/* Paragraph */}
        <div className="cta--copy text-justify mt-6" data-aos="fade-in">
          <p className="text-lg text-gray-700 font-normal mb-4">
            Working at My Shark allows you to excel professionally while thriving outside of work as well. To prove it, we created our FUEL Platform, which is made up of the incredible benefits we provide to empower our employees and continually ignite your passion for greatness.
          </p>
          <p className="text-lg text-gray-700 font-normal">
            Explore below to check out a few of the perks you’ll receive once you join our team.
          </p>
        </div>

        {/* Empty row for additional content (you can add more elements here) */}
        <div className="cta--row flex justify-center items-center mt-8">
          {/* Future content goes here */}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="cta--btm-wave"></div>
    </section>
    <PerksSection/>
    <div className=" md:w-[80%] mx-auto">
    <TestimonialsSection/>
    </div>
      
  </>
  )
}

export default JoinOurTeam
