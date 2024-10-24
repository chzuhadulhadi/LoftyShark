import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialtiesContainer from "./SpecialtiesContainer";
import RelatedPosts from "./RelatedPosts";
import TestimonialsSection from "../../TestimonialsSection";

const CreativeStaffing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      name: "Client Services",
    },
    {
      name: "Content & Social",
    },
    {
      name: "Creative Design & Production",
    },
    {
      name: "Graphic Designe",
    },
    {
      name: "Motion Design & Videography",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-0 pt-12 lg:pt-32 flex justify-center items-center">
        <img
          className="w-[50rem] h-full"
          src="/SharkCreative.png"
          alt="MyShark-Creative"
        />
      </div>
      <div className="flex flex-col pt-10 md:pt-32 justify-center items-center">
        <h1 className="md:text-6xl text-4xl font-bold px-4 md:px-0 text-center">
          We Know Creative Staffing.
        </h1>
      </div>
      <div className=" text-lg text-gray-700 md:text-2xl text-center px-4 md:px-0 md:px-6 md:w-[59%] mx-auto">
        <p className="pt-12">
          No marketing team is complete without creative minds. We fill creative
          services roles with talented and artistic individuals who have the
          design, writing, building, and branding skills to bring your team’s
          vision to life.
        </p>
        <p className="pt-12">
          Now more than ever, organizations are seeing the value through ROI in
          their digital marketing efforts. With that comes the rising demand for
          creative services to level up their marketing plans.
        </p>
        <p className="pt-12">
          We partner with you and provide insights on skill sets and contract,
          freelance, contract-to-hire and full-time roles to do just that.
        </p>
      </div>
      <div className="container mx-auto lg:w-[55%] py-28 px-4 md:px-0">
        <h2
          className="lg:text-6xl text-4xl md:px-0 px-4 font-semibold uppercase text-center mb-8"
          data-aos="fade-in"
        >
          Our Creative Staffing Services
        </h2>
        <ul className="text-center space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              data-aos="fade-in"
              className="text-blue-500 border-b-2 p-2 font-bold text-base lg:text-lg"
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

export default CreativeStaffing;
