import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialtiesContainer from "./SpecialtiesContainer";
import RelatedPosts from "./RelatedPosts";
import TestimonialsSection from "../../TestimonialsSection";

const DigitalMarketingStaffing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      name: "Analytics & Strategy",
      url: "",
    },
    {
      name: "Customer Experience",
      url: "",
    },
    {
      name: "Digital Marketing Quality Assurance",
      url: "",
    },
    {
      name: "eCommerce",
      url: "",
    },
    {
      name: "Executive",
      url: "",
    },
    {
      name: "Marketing Automation & Demand Gen",
      url: "",
    },
    {
      name: "MarTech",
      url: "",
    },
    {
      name: "Media Planning & Buying",
      url: "",
    },
    {
      name: "Project Management",
      url: "",
    },
    {
      name: "SEO/SEM",
      url: "",
    },
    { name: "UX/UI", url: "" },
  ];

  return (
    <>
      <div className="px-4 md:px-0 pt-12 lg:pt-32 max-w-full flex justify-center items-center">
        <img
          className="w-[51.875rem] h-full"
          src="/MysharkDigital.png"
          alt="Digital Marketing Banner"
        />
      </div>
      <div className="flex flex-col pt-10 md:pt-32 justify-center items-center">
        <h1 className="lg:text-6xl text-4xl font-bold px-4 md:px-0 text-center">
          We know Digital Marketing.
        </h1>
      </div>
      <div className=" text-lg text-gray-700 md:text-2xl text-center px-4 md:px-0 md:px-6 md:w-[59%] mx-auto">
        <p className="pt-12">
          Decades ago, we predicted and planned for the convergence of
          technology, creative services, and marketing. Take a look at the world
          around you – digital marketing is essential and everywhere. Due to
          this rapid integration, many companies are left without the marketing
          knowledge and creative talent necessary to fully utilize tech-based
          tools and solutions to drive innovation and exceed the demands of our
          digital-first world. That’s where digital marketing staffing comes in.
        </p>
        <p className="pt-12">
          The top-tier digital marketing talent in our exclusive network
          specializes in over 140+ of the latest platforms and tools businesses
          need to boost ROI, enhance UX, increase website traffic, and drive
          revenue growth.
        </p>
        <p className="pt-12">
          Whether you’re looking to hire a digital marketing consultant, AI
          specialist, graphic designer, or other critical digital marketing
          roles we are the digital and creative staffing agency you’ve been
          looking for. We help with anything that arises, before, during, or
          after placement.
        </p>
      </div>
      <div className="container mx-auto md:w-[55%] py-28 px-4 md:px-0">
        <h2
          className="md:text-6xl text-4xl md:px-0 px-4 font-semibold uppercase text-center mb-8"
          data-aos="fade-in"
        >
          Our Digital Marketing Services
        </h2>
        <ul className="text-center space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              data-aos="fade-in"
              className="text-blue-500 border-b-2 p-2 font-bold hover:text-blue-300 text-lg lg:text-xl"
            >
              <a
                href={service.url}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  window.location.href = "/get-hired"; // Redirect to /get-hired
                }}
                className="/get-hired"
                target="_self" // Opens in the same tab
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <SpecialtiesContainer />
      <RelatedPosts />
      <TestimonialsSection />
    </>
  );
};

export default DigitalMarketingStaffing;
