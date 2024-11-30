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
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-10 "
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-black lg:p-20 p-10 flex lg:flex-row flex-col justify-center gap-20 rounded-3xl"
      >
        {servicesinfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-6"
          >
            <img src={item.icon} alt="" className="size-50 p-3  rounded-3xl" />
            <h1 className="text-[26px] text-white font-semibold font-rlway">
              {item.title}
            </h1>
            <p className="font-rlway text-[18px] text-slate-200">
              {item.about}
            </p>
            {/* <button className="text-purp font-rlway font-semibold text-[18px] flex justify-center items-center gap-3">
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
