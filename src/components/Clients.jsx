import React, { useEffect } from "react";
import testimonial from "../assets/testimonial.png";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { testidata } from "./export.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      arrows: false,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="testimonial"
      className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-10 py-20"
    >
      {/* Left Section - Image */}
      <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={testimonial}
          alt="testimonial"
          className="w-full max-w-[500px] lg:max-w-[700px] object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-purp font-rlway text-[18px] font-semibold uppercase "
        >
          Testimonial
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-black font-rlway font-semibold text-[30px] md:text-[40px] lg:text-[50px] leading-tight"
        >
          Making a Difference, One Story at a Time
        </h2>
        <div data-aos="zoom-in" data-aos-delay="800" className="w-full mt-8">
          <Slider {...settings}>
            {testidata.map((item, index) => (
              <div key={index} className="p-4">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-4">
                  {/* Icon */}
                  <div className="bg-black p-4 rounded-full flex justify-center items-center">
                    <FaQuoteLeft className="text-purp text-2xl" />
                  </div>
                  {/* Review Content */}
                  <div className="flex flex-col justify-start items-start gap-4">
                    <p className="font-rlway text-lg md:text-xl text-justify">
                      {item.review}
                    </p>
                    <div className="text-left">
                      <h3 className="text-black font-rlway font-semibold text-lg md:text-xl">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 font-rlway text-sm md:text-base">
                        {item.post}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
