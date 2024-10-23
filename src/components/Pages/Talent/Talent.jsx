import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../../ContactForm";

const Talent = () => {
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
      <div className=" lg:h-[100vh]  py-20 px-4 md:px-20  pt-12 md:pt-28 bg-[#093046]">
        {/* Title Section */}
        <div className="text-center">
          <h1
            className=" text-2xl md:text-6xl text-white lg:text-8xl font-semibold  
          "
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Finding great talent is possible when you partner with us.
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className="text-center mt-10">
          <h3
            className=" text-base md:text-xl text-blue-300 lg:text-2xl font-semibold"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Because in the booming digital landscape, it shouldn’t be hard to
            hire talent.
          </h3>
        </div>
      </div>
      <div className=" container flex  items-center justify-center py-24 ">
        <div className="space-y-8 px-4 md:20 lg:px-40">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              One of the most difficult decisions you’ll face is who to hire.
              With the popularity of sites like Monster, Indeed, and LinkedIn
              for job postings, it’s never been easier to apply to Tech or
              Digital Marketing jobs, which also means it’s nearly impossible
              for you to qualify the thousands of applicants for a single job
              and hire talent. That’s where we come in.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With nearly two decades of experience, 10 offices nationwide, and
              an expansive network of highly qualified IT, Tech, and Digital
              Marketing professionals often not found in the market, we’ll help
              match you with the candidates you’ve been searching for as soon as
              you need them. So, step away from the job posting sites and get
              back to business. We’ll handle everything else.
            </p>
            <h2 className="text-2xl font-semibold">How It Works</h2>

            <div className="text-left space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  1. Discuss Your Hiring Needs
                </h3>
                <p className="text-gray-700">
                  We collaborate to identify your needs and discuss the current
                  state of the market to develop and customize the right hiring
                  strategy for you. Not sure exactly what you’re looking for?
                  Don’t worry; we can help.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  2. Meet Your Candidates
                </h3>
                <p className="text-gray-700">
                  After our dedicated team of recruiters produces two weeks'
                  worth of recruiting efforts in just 48 hours, you’ll choose
                  which highly qualified candidates to interview.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  3. Timeline Check-In
                </h3>
                <p className="text-gray-700">
                  We’re with you every step of the way. Our team communicates
                  clearly throughout the process to ensure we’re all on track to
                  hire talent for your needed start date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">4. Hire Talent</h3>
                <p className="text-gray-700">
                  Once you’ve interviewed your top candidates, it’s time to get
                  the right one in the door. We’ll make sure they’re ready to
                  sign on the dotted line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
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

export default Talent;
