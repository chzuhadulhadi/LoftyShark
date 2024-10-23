import React from "react";
import Slider from "react-slick";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-20 w-[95%]">
      <div className="container mx-auto text-center testimonials--container w-full px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="testimonials--slide pb-10">
            <blockquote className="testimonials--bq">
              <p className="testimonials--copy text-lg md:text-2xl">
                <span className="block mb-4">
                  "My recruiter at My Shark provided real-world, constructive
                  feedback, and throughout the process offered exceptional
                  guidance and reassurance, ensuring that I was well-prepared
                  for each stage..."
                </span>
              </p>
              <cite className="block mt-4">
                <span className="testimonials--author font-semibold">
                  Gene W.
                </span>
                <br />
                <span className="testimonials--title">Consultant</span>
              </cite>
            </blockquote>
          </div>

          {/* Slide 2 */}
          <div className="testimonials--slide">
            <blockquote className="testimonials--bq">
              <p className="testimonials--copy text-lg md:text-2xl">
                <span className="testimonials--statement block mb-4">
                  "I have to tell you that working with my rep is an absolute
                  pleasure. Not only does she work her butt off to get us what
                  we need..."
                </span>
              </p>
              <cite className="block mt-4">
                <span className="testimonials--author text-lg font-semibold">
                  David F.
                </span>
                <br />
                <span className="testimonials--title text-lg">
                  Chief Information Security Officer
                </span>
              </cite>
            </blockquote>
          </div>

          {/* Slide 3 */}
          <div className="testimonials--slide">
            <blockquote className="testimonials--bq">
              <p className="testimonials--copy text-lg md:text-2xl">
                <span className="testimonials--statement block mb-4">
                  "Today, I was offered a full-time position within an
                  organization after contracting through My Shark for around 9
                  months..."
                </span>
              </p>
              <cite className="block mt-4">
                <span className="testimonials--author text-lg font-semibold">
                  David P.
                </span>
                <br />
                <span className="testimonials--title text-lg">Consultant</span>
              </cite>
            </blockquote>
          </div>

          {/* Slide 4 */}
          <div className="testimonials--slide">
            <blockquote className="testimonials--bq">
              <p className="testimonials--copy text-lg md:text-2xl">
                <span className="testimonials--statement block mb-4">
                  "Thank you for making it easy for me to be a good partner. We
                  just had to pause the onboarding of an intern staffing
                  vendor..."
                </span>
              </p>
              <cite className="block mt-4">
                <span className="testimonials--author text-lg font-semibold">
                  Patrick P.
                </span>
                <br />
                <span className="testimonials--title text-lg">
                  Head of Cyber Technology
                </span>
              </cite>
            </blockquote>
          </div>

          {/* Slide 5 */}
          <div className="testimonials--slide">
            <blockquote className="testimonials--bq">
              <p className="testimonials--copy text-lg md:text-2xl">
                <span className="testimonials--statement block mb-4">
                  "I was recently placed by a My Shark rep in the interview process
                  for a position at a computer software company. She was nothing
                  short of amazing..."
                </span>
              </p>
              <cite className="block mt-4">
                <span className="testimonials--author text-lg font-semibold">
                  Karina J.
                </span>
                <br />
                <span className="testimonials--title text-lg">Consultant</span>
              </cite>
            </blockquote>
          </div>

          {/* Slide 6 */}
          <div className="testimonials--slide">
            <blockquote className="testimonials--bq">
              <p className="testimonials--copy text-lg md:text-2xl">
                <span className="testimonials--statement block mb-4">
                  "I cannot overstate how grateful I am for the support and
                  assistance. Your reps' proactive approach, attention to
                  detail, and commitment..."
                </span>
              </p>
              <cite className="block mt-4">
                <span className="testimonials--author text-lg font-semibold">
                  Charlotte B.
                </span>
                <br />
                <span className="testimonials--title text-lg">Consultant</span>
              </cite>
            </blockquote>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
