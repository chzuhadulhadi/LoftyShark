import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialtiesContainer from "./SpecialtiesContainer";
import RelatedPosts from "./RelatedPosts";
import TestimonialsSection from "../../TestimonialsSection";

const ItTech = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      name: "AR, VR & IoT",
    },
    {
      name: "BI, Big Data & Cloud",
    },
    {
      name: "Web & Mobile Development",
    },
    {
      name: "Data Science",
    },
    {
      name: "Database Administrators (DBA)",
    },
    {
      name: "DevOps",
    },
    {
      name: "eCommerce Tech",
    },
    {
      name: "Hire IT Executives | Mondo Staffing",
    },
    {
      name: "Infrastructure & Support",
    },
    {
      name: "Software Development",
    },
    { name: "Software Development" },
  ];

  return (
    <>
      <div className="px-4 md:px-0 pt-10 lg:pt-32 max-w-full flex justify-center items-center">
        <img className="w-[51.875rem] h-full" src="/SharkTech.png" alt="" />
      </div>
      <div className="flex flex-col pt-10 md:pt-32 justify-center items-center">
        <h1 className="md:text-6xl text-4xl font-bold px-4 md:px-0 text-center">
          We Know IT & Tech Staffing.
        </h1>
      </div>
      <div className=" text-lg text-gray-700 md:text-2xl text-center px-4 md:px-0 md:px-6 md:w-[59%] mx-auto">
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
      <div className=" mx-auto lg:w-[55%] py-28 px-4 md:px-0">
        <h2
          className="lg:text-6xl text-4xl md:px-0 px-4 font-semibold uppercase text-center mb-8"
          data-aos="fade-in"
        >
          Our Digital Marketing Services
        </h2>
        <ul className="text-center space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              data-aos="fade-in"
              className=" text-blue-500 border-b-2 p-3 font-bold  text-base lg:text-lg"
            >
              <a href={service.url}>{service.name}</a>
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
