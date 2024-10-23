import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import SpecialtiesContainer from "./Pages/WhatWeDo/SpecialtiesContainer";

const ContactUs = () => {
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
           Please don’t let your questions hold you back.
          </h1>
          <p className="text-xl pt-16 text-white md:text-2xl font-semibold aos-init aos-animate">
          Let’s get you connected with one of our down-to-earth My Shark team members.
          </p>
        </div>
      </div>
      <SpecialtiesContainer/>
     
      <ContactForm/>
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
                  Join Our team
                </a>
              </article>
            </div>
          </div>
        </section>
      </div>
   </>
  )
}

export default ContactUs
