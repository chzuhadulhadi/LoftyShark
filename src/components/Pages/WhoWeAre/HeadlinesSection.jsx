import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeadlinesSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Headline data
  const headlines = [
    "Work with the world's most innovative companies.",
    "Built-in professional development.",
    "Create your own career trajectory.",
    "Supportive & dynamic company culture.",
    "Stay at the forefront of change."
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-6xl  font-bold mb-8">Why Work For Us</h2>
        <Slider {...settings} className="relative">
          {headlines.map((headline, index) => (
            <div key={index} className="p-4">
              <div className=" p-8 ">
                <h3 className="text-3xl font-semibold">{headline}</h3>
                <span className="block mt-2 text-lg text-gray-500">{headline}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeadlinesSection;
