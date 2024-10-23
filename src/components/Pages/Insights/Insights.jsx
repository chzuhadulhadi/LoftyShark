import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../../ContactForm";
import RelatedPosts from "../WhatWeDo/RelatedPosts";
import SpecialtiesContainer from "../WhatWeDo/SpecialtiesContainer";

const Insights = () => {
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
      <div className=" lg:h-[100vh] py-20 px-4 md:px-20  pt-12 md:pt-28 bg-[#093046]">
        {/* Title Section */}
        <div className="text-center">
          <h1
            className=" text-2xl md:text-6xl text-white lg:text-8xl font-semibold  
          "
            data-aos="fade-in"
            data-aos-delay="200"
          >
            MyShark Hiring Guides & Industry Insights
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className="text-center mt-10">
          <h3
            className=" text-base md:text-xl text-blue-300 lg:text-2xl font-semibold"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Dive into real-time industry trends & insights to inform your hiring
            strategies.
          </h3>
        </div>
      </div>
      <div className="py-24 pt-12 lg:px-40 md:px-20 px-4 flex flex-row justify-center items-center space-y-7">
        <div>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold ">
            Streamlining Business Operations with AI
          </h1>
          <p className="pt-8 lg:text-center md:text-center lg:text-lg">
            Maximizing Efficiency and Innovation: Harnessing AI to Transform
            Business Operations
          </p>
          <div className="w-full pt-12">
            <img
              className=" mx-auto w-[33rem]"
              src="/ShrakInsight.png"
              alt="Insight My Shrak"
            />
          </div>
        </div>
      </div>

      <ContactForm />
      <SpecialtiesContainer />

      <RelatedPosts />
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

export default Insights;
