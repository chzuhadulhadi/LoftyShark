import TestimonialsSection from "./TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import StatsSection from './StatsSection';
import ContactForm from './ContactForm';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>
   
     <section className="bg-[#093046] flex justify-center items-center h-[100vh]  text-white ">
      <div className="container  mx-auto">
        <div className="flex justify-center">
          <h1 className="text-center md:flex text-5xl lg:text-7xl font-bold">
            <span className="block text-white" >
              Right <span className="text-blue-600">People.</span>
            </span>
            <span className="block text-white" >
              Right <span className="text-blue-600">Roles.</span>
            </span>
          </h1>
        </div>
        <div className=" md:flex justify-center pt-14 px-4 space-y-10 md:space-y-0 md:space-x-4">
          <div className='flex justify-center' data-aos="fade-in" data-aos-duration="500" data-aos-delay="1000">
            <a
              href="/hire-talent"
              className="border border-white text-white text-xl font-bold py-3 px-14 rounded-xl hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Hire Talent
            </a>
          </div>
          <div data-aos="fade-in" className='flex justify-center' data-aos-duration="500" data-aos-delay="1000">
            <a
              href="/find-a-job"
              className="border border-white text-white text-xl font-bold py-3 px-14 rounded-xl hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Find a Job
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-200  text-black py-16">
      <div className="w-[90%] mx-auto px-4">
        <h2 className="text-4xl font-extrabold  text-center mb-12" data-aos="fade-up">
          People, Passion &amp; Process: 
          <h2>Values-based talent solutions.</h2>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Digital Marketing Section */}
          <div className='flex md:justify-end' data-aos="fade-in ">
            <a href="https://mondo.com/services/digital-marketing-staffing/">
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">Digital Marketing</h3>
            </a>
          </div>
          <div  data-aos="fade-in">
            <h4 className="text-xl font-semibold mb-2">Leave your mark</h4>
            <p className="text-base text-justify">
              Looking to hire Data Analysts, SEO Experts, Generative AI Specialists, Content Strategists, Social Media Marketers, Marketing Managers, Brand Managers &amp; more?
            </p>
          </div>
          
          {/* IT / Tech Section */}
          <div className='flex md:justify-end' data-aos="fade-in">
            <a href="https://mondo.com/services/it-tech-staffing/">
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">IT / Tech</h3>
            </a>
          </div>
          <div data-aos="fade-in">
            <h4 className="text-xl font-semibold mb-2">Stay on the cutting edge</h4>
            <p className="text-base text-justify">
              Hiring Software Engineers, Data Scientists, Machine Learning Engineers, Network Engineers, Full Stack Developers, Cyber Security Analysts, Front End Developers &amp; more to implement new tech, improve data analytics, or build enterprise software?
            </p>
          </div>
          
          {/* Creative Section */}
          <div className='flex md:justify-end' data-aos="fade-in">
            <a href="https://mondo.com/services/creative-staffing/">
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">Creative</h3>
            </a>
          </div>
          <div data-aos="fade-in">
            <h4 className="text-xl font-semibold mb-2">Make a lasting impression</h4>
            <p className="text-base text-justify">
              Need UX Designers, Copywriters, Content Creators, Art Directors, Video Editors, Graphic Designers, Video Production Specialists, Motion Graphics Designers &amp; more to bring your team’s vision to life?
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className=" py-20">
      {/* Top wave can be an SVG or decorative element */}
      <div className="cta-top-wave"></div>

        <div className="container mx-auto text-center">
          <div className="cta-title-wrap mb-6">
            <h2
              className="text-5xl font-bold highlight relative"
              data-aos="fade-in"
            >
              Need Help With <span className="text-blue-600">AI Hiring?</span>
            </h2>
          </div>

          <div className="cta-copy pt-5 mb-6" data-aos="fade-in">
            <h3 className="text-3xl">We Can Help</h3>
          </div>

          <div className="cta-row pt-3 flex justify-center">
            <div className="cta-cta-wrap" data-aos="fade-in">
              <a
                href="https://mondo.com/ai-hiring-questions-contact-page/"
                className=" text-white justify-center px-8 font-semibold py-2 bg-gradient-to-r hover:from-[#52CDFC] hover:to-[#0286E5] from-[#0286E5] to-[#52CDFC] rounded-[2px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

      {/* Bottom wave can be an SVG or decorative element */}
      <div className="cta-bottom-wave"></div>
    </section>
    <div className='md:w-[80%] mx-auto'>
    <TestimonialsSection/>
    </div>
    <section className="hiringstats--section bg-black dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl text-gray-400 font-bold text-center mb-6">
          Hiring made <span className="text-blue-600">simple</span>
        </h2>

          <h3 className="text-2xl text-center text-gray-400 mb-12">
            HOW WE PARTNER
          </h3>

          <div className="hiringstats--circles-wrap">
            <div className="flex flex-wrap justify-center gap-10">
              {/* Step 1 */}
              <div
                className="hiringstats--circle circled"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="w-48 h-48 rounded-full bg-[#093046] text-white flex flex-col items-center justify-center text-2xl font-bold">
                  1
                  <p className="text-center mt-4 px-3 text-base text-white">
                    Discover Your Need
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="hiringstats--circle circled"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="w-48 h-48 rounded-full bg-[#093046] text-white flex flex-col items-center justify-center text-2xl font-bold">
                  2
                  <p className="text-center mt-4 px-3 text-base text-white">
                    Ignite the Process
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="hiringstats--circle circled"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <div className="w-48 h-48 rounded-full bg-[#093046] text-white flex flex-col items-center justify-center text-2xl font-bold">
                  3
                  <p className="text-center mt-4 px-3 text-base text-white">
                    Designate Personalized Team
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div
                className="hiringstats--circle circled"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                <div className="w-48 h-48 rounded-full bg-[#093046] text-white flex flex-col items-center justify-center text-2xl font-bold">
                  4
                  <p className="text-center mt-4 px-3 text-base text-white">
                    Secure Top Talent
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div
                className="hiringstats--circle circled"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                <div className="w-48 h-48 rounded-full bg-[#093046] text-white flex flex-col items-center justify-center text-2xl font-bold">
                  5
                  <p className="text-center mt-4 px-3 text-base text-white">
                    Provide Ongoing Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gifscta--section bg-black dark:bg-gray-900 p-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Fulfillment Rate Section */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <h2
                className="text-2xl text-center text-white mb-6"
                data-aos="fade-in"
              >
                Fulfillment Rate
              </h2>
              <div className="gifscta--image-wrap" data-aos="fade-in">
                <img
                  width="720"
                  height="214"
                  src="https://mondo.com/wp-content/uploads/2023/12/fullfillment-rate.webp"
                  alt="Fulfillment Rate"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Average Time-To-Fill Section */}
            <div className="w-full lg:w-1/2 px-4">
              <h2
                className="text-2xl text-center text-white mb-6"
                data-aos="fade-in"
              >
                Average Time-To-Fill
              </h2>
              <div className="gifscta--image-wrap" data-aos="fade-in">
                <img
                  width="720"
                  height="222"
                  src="https://mondo.com/wp-content/uploads/2023/12/avg-time-to-fill.webp"
                  alt="Average Time-To-Fill"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="text-center mt-12">
            <a
              href="https://mondo.com/services/"
              target="_blank"
              rel="noopener noreferrer"
              className=" button text-white justify-center px-8 font-semibold py-2 bg-gradient-to-r hover:from-[#52CDFC] hover:to-[#0286E5] from-[#0286E5] to-[#52CDFC] rounded-[2px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <ContactForm />
      <section className="py-10 text-left font-sans text-[1.125rem] leading-[1.5] text-[#2f3233] box-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2
              className="text-5xl font-bold text-center mb-6"
              data-aos="fade-in"
            >
              What sets us{" "}
              <span className="text-highlight text-blue-600">apart</span>
            </h2>
            <div className="text-lg text-gray-700" data-aos="fade-in">
              <p>
                Through our value-aligned partnerships, we deliver impactful
                outcomes tailored to your needs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-1/2">
              <StatsSection />
            </div>

          <div className="w-full lg:w-5/12 px-4 md:px-0 lg:ml-auto mt-10 lg:mt-0">
            <div className="flex items-center mb-6" data-aos="fade-in">
              <img
                src="https://mondo.com/wp-content/themes/mondo-2023/images/mondo-ico-green.svg"
                alt="mondo Icon"
                width="45"
                height="67"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">CX PROGRAM</h3>
                <p>1000+ On Demand Consultants</p>
              </div>
            </div>

            <div className="flex items-center " data-aos="fade-in">
              <img
                src="https://mondo.com/wp-content/themes/mondo-2023/images/mondo-ico-green-dark.svg"
                alt="mondo Icon"
                width="45"
                height="67"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">mondoX TEAM</h3>
                <p>Specialized in Permanent Placements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    
   </>
  );
};

export default Home;
