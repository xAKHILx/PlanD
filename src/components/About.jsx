import React, { useEffect } from "react";
import about from "../assets/about.png";
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="about"
      className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-10 py-16  rounded-3xl"
    >
      {/* bg-purple-400 */}
      {/* Left Section - Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={about}
          alt="About Us"
          className="w-full max-w-[400px] lg:max-w-[500px] object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6"
      >
        <h1 className="text-purp font-rlway text-[18px] font-semibold uppercase">
          Who We Are
        </h1>
        <h2 className="text-black font-semibold text-[28px] md:text-[40px] lg:text-[50px] leading-tight">
          Designing the Future of Your Brand
        </h2>
        <p className="font-rlway text-[16px] md:text-[18px] text-slate-800 leading-relaxed">
          We are a creative powerhouse dedicated to transforming your ideas into
          captivating stories. From branding to graphic design, logos to
          impactful video content, we bring your vision to life with bold,
          innovative solutions.
        </p>
        <div className="flex flex-col justify-start items-start gap-4">
          {[
            "Brand Identity Design: Building a unique and memorable brand presence.",
            "Logo Creation: Designing logos that resonate and leave a lasting impression.",
            "Graphic Design: Elevating your visual communication to new heights.",
            "Video Production: Engaging and dynamic content for all your advertising needs.",
          ].map((text, index) => (
            <p
              key={index}
              className="text-black flex justify-center items-center gap-4 font-rlway text-[16px] md:text-[18px]"
            >
              <FaChevronCircleRight className="text-purp text-xl" />
              {text}
            </p>
          ))}
        </div>
        {/* Uncomment the button below if needed */}
        {/* <button className="bg-purp px-6 py-3 rounded-full text-white text-[16px] font-semibold font-rlway hover:bg-black hover:text-white transition">
          Discover More
        </button> */}
      </div>
    </section>
  );
};

export default About;
