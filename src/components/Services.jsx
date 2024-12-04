import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesinfo } from "/src/components/export.js";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="services"
      className="container mx-auto px-6 lg:px-20 py-16 flex flex-col gap-10"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-black p-6 lg:p-16 flex flex-col lg:flex-row flex-wrap justify-center gap-10 rounded-3xl"
      >
        {servicesinfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-4 max-w-sm"
          >
            {/* Icon */}
            <div className=" p-4 rounded-3xl flex items-center justify-center w-30 h-30">
              {/* bg-purple-500 w-16 h-16 */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-30 h-30 rounded-3xl object-contain"
              />
            </div>
            {/* Title */}
            <h1 className="text-[20px] md:text-[24px] lg:text-[26px] text-white font-semibold font-rlway">
              {item.title}
            </h1>
            {/* Description */}
            <p className="font-rlway text-[16px] md:text-[18px] text-slate-200">
              {item.about}
            </p>
            {/* Button (Optional) */}
            {/* <button className="text-purp font-rlway font-semibold text-[18px] flex justify-center items-center gap-2">
              {item.label}
              <FaArrowRight />
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
