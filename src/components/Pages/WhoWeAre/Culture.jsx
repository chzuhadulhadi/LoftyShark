import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Culture = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
         <div className=" h-[100vh]   px-4 md:px-20 pt-32 bg-[#093046]">
        <div className="text-center" data-aos="fade-in">
          <h1
            className="text-4xl text-white md:text-8xl font-semibold aos-init aos-animate"
            data-aos="fade-in"
          >
            Tomorrow's Workforce: Driven by Resilience, Agility & Value-Alignment
          </h1>
        </div>
      </div>
      <section className="py-24" id="simple-copy-3156">
      <div className="container mx-auto px-4 " data-aos="fade-in">
        <div className="flex justify-center">
          <article className="w-full md:w-8/12 text-center">
            <h2 className="text-2xl md:text-4xl  font-semibold ">
              Redefining Staffing with a Commitment to Excellence in Technology, Digital Marketing, and Creative Talent.
            </h2>
            <p className="mt-10 text-black">
              Our core values — Mindset, Attitude, Action, People, Process &amp; Passion — form the MAP that guides My Shark culture, driving our personal and professional growth and success.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section className="bg-[#093046] lg:h-[100vh] flex items-center py-10 lg:py-0 ">
      <div className="container mx-auto px-4" data-aos="fade-in">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center lg:mr-8 mb-8 lg:mb-0">
            <div className="w-60 h-60 rounded-full bg-gray-800 flex items-center justify-center">
              <img
                className="w-32 h-32 object-contain"
                src="https://mondo.com/wp-content/uploads/2021/12/mindset-icon_v2.svg"
                alt="Mindset"
              />
            </div>
            <p className="mt-4 text-white max-w-sm">
              Embracing continuous evolution and improvement, fostering the ability to identify opportunities &amp; overcome obstacles through personal &amp; professional development.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col  items-center text-center lg:mr-8 mb-8 lg:mb-0">
            <div className="w-60 h-60 rounded-full bg-gray-800 flex items-center justify-center">
              <img
                className="w-32 h-32 object-contain"
                src="https://mondo.com/wp-content/uploads/2023/11/accountability-icon_v2.svg"
                alt="Attitude & Action"
              />
            </div>
            <p className="mt-4 text-white max-w-sm">
              A solution-driven ethos, actualizing success through intentional actions that drive growth &amp; evolution for both individual contributors and our team.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-60 h-60 rounded-full bg-gray-800 flex items-center justify-center">
              <img
                className="w-32 h-32 object-contain"
                src="https://mondo.com/wp-content/uploads/2021/12/process-icon_v2.svg"
                alt="People, Process, Passion"
              />
            </div>
            <p className="mt-4 text-white max-w-sm">
              Blending passionate culture &amp; adaptable processes creates an environment that values individual growth &amp; autonomy, driving sustainable achievement &amp; collective progress.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24" id="simple-copy-3156">
      <div className="container mx-auto px-4" data-aos="fade-in">
        <div className="flex justify-center">
          <article className="w-full md:w-8/12 text-center">
            <h2 className="text-2xl md:text-4xl  font-semibold ">
            Our success isn’t just about the bottom line.  
            </h2>
            <p className="mt-10 text-black">
            The My Shark Leadership team is committed to embodying our values through their solution-driven actions. They ignite a passion within the My Shark team, fostering an environment of teamwork, support, and collaboration that empowers us to reach our full potential and paves the way for nurturing future leaders.
            </p>
          </article>
        </div>
      </div>
    </section>
    <div className="bg-gray-100">
      <section className="py-24" id="simple-copy-3156">
        <div className="container mx-auto px-4" data-aos="fade-in">
          <div className="flex justify-center">
            <article className="w-full md:w-8/12 text-center">
              <h2 className="text-2xl md:text-7xl  font-semibold ">
              Rediscover Your <span className='text-[#093046]'>WHY</span> 
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
  )
}

export default Culture
