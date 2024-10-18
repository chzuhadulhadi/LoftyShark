import React from 'react';
import TestimonialsSection from './TestimonialsSection';

const Home = () => {
  return (
   <>
     <section className="bg-[#10292c] flex justify-center items-center h-[100vh]  text-white py-16">
      <div className="container  mx-auto">
        <div className="flex justify-center">
          <h1 className="text-center md:flex text-5xl lg:text-7xl font-bold">
            <span className="block text-black" >
              Right <span className="text-blue-600">People.</span>
            </span>
            <span className="block text-black" >
              Right <span className="text-blue-600">Roles.</span>
            </span>
          </h1>
        </div>
        <div className="flex justify-center pt-14  space-x-4">
          <div data-aos="fade-in" data-aos-duration="500" data-aos-delay="1000">
            <a
              href="https://mondo.com/hire-talent/"
              className="border border-white text-white text-xl font-bold py-3 px-14 rounded-xl hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Hire Talent
            </a>
          </div>
          <div data-aos="fade-in" data-aos-duration="500" data-aos-delay="1000">
            <a
              href="https://mondo.com/get-hired/"
              className="border border-white text-white text-xl font-bold py-3 px-14 rounded-xl hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Find a Job
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-blue-200  text-black py-16">
      <div className="w-[90%] mx-auto px-4">
        <h2 className="text-4xl font-extrabold  text-center mb-12" data-aos="fade-up">
          People, Passion &amp; Process: 
          <h2>Values-based talent solutions.</h2>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Digital Marketing Section */}
          <div className='flex justify-end' data-aos="fade-in ">
            <a href="https://mondo.com/services/digital-marketing-staffing/">
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">Digital Marketing</h3>
            </a>
          </div>
          <div  data-aos="fade-in">
            <h4 className="text-xl font-semibold mb-2">Leave your mark</h4>
            <p className="text-base">
              Looking to hire Data Analysts, SEO Experts, Generative AI Specialists, Content Strategists, Social Media Marketers, Marketing Managers, Brand Managers &amp; more?
            </p>
          </div>
          
          {/* IT / Tech Section */}
          <div className='flex justify-end' data-aos="fade-in">
            <a href="https://mondo.com/services/it-tech-staffing/">
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">IT / Tech</h3>
            </a>
          </div>
          <div data-aos="fade-in">
            <h4 className="text-xl font-semibold mb-2">Stay on the cutting edge</h4>
            <p className="text-base">
              Hiring Software Engineers, Data Scientists, Machine Learning Engineers, Network Engineers, Full Stack Developers, Cyber Security Analysts, Front End Developers &amp; more to implement new tech, improve data analytics, or build enterprise software?
            </p>
          </div>
          
          {/* Creative Section */}
          <div className='flex justify-end' data-aos="fade-in">
            <a href="https://mondo.com/services/creative-staffing/">
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">Creative</h3>
            </a>
          </div>
          <div data-aos="fade-in">
            <h4 className="text-xl font-semibold mb-2">Make a lasting impression</h4>
            <p className="text-base">
              Need UX Designers, Copywriters, Content Creators, Art Directors, Video Editors, Graphic Designers, Video Production Specialists, Motion Graphics Designers &amp; more to bring your team’s vision to life?
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-20">
      {/* Top wave can be an SVG or decorative element */}
      <div className="cta-top-wave"></div>

      <div className="container mx-auto text-center">
        <div className="cta-title-wrap mb-6">
          <h2 className="text-5xl font-bold highlight relative" data-aos="fade-in">
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
              className="cta-cta bg-blue-600 hover:bg-blue-200 text-white hover:text-black font-bold py-3 px-10 rounded-lg"
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
    <section className="bg-white py-24">
      <div className="container mx-auto w-[80%] text-center">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-in">
          We <span className="text-blue-600">love</span> what we do...
        </h2>

        <div className="ticker-container pt-10 overflow-hidden ">
          <div className="mask">
            <ul className="animate-marquee space-x-12">
              {/* Logos to be repeated for continuous effect */}
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="106"
                    src="https://mondo.com/wp-content/smush-webp/2022/10/Forbes_US_BE2023_Logo_Professional_Rec_White-scaled-1-300x106.jpg.webp"
                    alt="Forbes"
                    className="max-h-24"
                  />
                </div>
              </li>
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="80"
                    src="https://mondo.com/wp-content/smush-webp/2023/11/SIA_2022_Fasting-Growing-300x80.png.webp"
                    alt="SIA"
                    className="max-h-24"
                  />
                </div>
              </li>
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="172"
                    src="https://mondo.com/wp-content/smush-webp/2023/11/SAWIB22_Bronze_Winner-300x172.png.webp"
                    alt="SAWIB"
                    className="max-h-24"
                  />
                </div>
              </li>
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="81"
                    src="https://mondo.com/wp-content/smush-webp/2023/11/SIA_2023_ListLogos_LargestStaffingFirms_US-300x81.png.webp"
                    alt="Largest Staffing Firms"
                    className="max-h-24"
                  />
                </div>
              </li>

              {/* Repeated logos for continuous scrolling */}
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="106"
                    src="https://mondo.com/wp-content/smush-webp/2022/10/Forbes_US_BE2023_Logo_Professional_Rec_White-scaled-1-300x106.jpg.webp"
                    alt="Forbes"
                    className="max-h-24"
                  />
                </div>
              </li>
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="80"
                    src="https://mondo.com/wp-content/smush-webp/2023/11/SIA_2022_Fasting-Growing-300x80.png.webp"
                    alt="SIA"
                    className="max-h-24"
                  />
                </div>
              </li>
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="172"
                    src="https://mondo.com/wp-content/smush-webp/2023/11/SAWIB22_Bronze_Winner-300x172.png.webp"
                    alt="SAWIB"
                    className="max-h-24"
                  />
                </div>
              </li>
              <li className="logos--logo">
                <div className="object-contain" data-aos="fade-in">
                  <img
                    width="300"
                    height="81"
                    src="https://mondo.com/wp-content/smush-webp/2023/11/SIA_2023_ListLogos_LargestStaffingFirms_US-300x81.png.webp"
                    alt="Largest Staffing Firms"
                    className="max-h-24"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <TestimonialsSection/>
   </>
  );
};

export default Home;
