import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialtiesContainer from "./SpecialtiesContainer";
import RelatedPosts from "./RlattedPosts";
import TestimonialsSection from "../../TestimonialsSection";

const ItTech = () => {
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
      <div className="px-4 md:px-0 pt-32 max-w-full flex justify-center items-center">
        <img className="w-[51.875rem] h-full" src="/SharkTech.png" alt="" />
      </div>
      <div className="flex flex-col pt-32 justify-center items-center">
        <h1 className="md:text-6xl text-5xl font-bold px-4 md:px-0 text-center">
          We Know IT & Tech Staffing.
        </h1>
      </div>
      <div className="pt-10 text-xl font-medium text-gray-700 md:text-2xl text-center px-4 md:px-0 md:px-6 md:w-[59%] mx-auto">
        <p className="pt-12">
          The talent in our exclusive IT and technology network specialize in
          over 180+ of the latest technologies and coding languages. Whether
          your company needs to implement new tech, improve data analytics, or
          build enterprise software, our team has fine-tuned their tactics for
          finding the right talent for the job. You’ll find the vetted IT and
          tech talent you need through our dedicated team of recruiters,
          available on a contract, contract-to-hire, and full-time basis.
        </p>
        <p className="pt-12">
          We don’t stop after we find you the right person for your role. We
          ensure that this talent is making a real impact on your organization
          every step of the way.
        </p>
      </div>
      <div className="container mx-auto md:w-[55%] py-28 px-4 md:px-0">
        <h2
          className="md:text-4xl text-2xl md:px-0 px-4 font-semibold uppercase text-center mb-8"
          data-aos="fade-in"
        >
          Our Digital Marketing Services
        </h2>
        <ul className="text-center space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              data-aos="fade-in"
              className="text-green-700 border-b-2 p-2 font-bold hover:text-green-200 text-base md:text-xl"
            >
              <a
                href={service.url}
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default link behavior
                  window.location.href = "/get-hired"; // Redirect to /get-hired
                }}
                className="/get-hired"
                target="_self" // Ensures it opens in the same tab
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

export default ItTech;
