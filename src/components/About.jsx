import React, { useEffect } from "react";
import about from "../assets/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronCircleRight } from "react-icons/fa";

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
      className=" w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20  bg-purple-400 p-[40px] rounded-3xl"
    >
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={about}
          alt=""
          className="lg:w-auto lg:h-[550px]"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex flex-col justify-center items-start gap-4"
      >
        <h1 className="text-purp font-rlway text-[19px] font-semibold">
          Who We Are
        </h1>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-rlway">
          Designing the Future of Your Brand
        </h1>
        <p className="font-rlway text-[18px] text-slate-800">
          We are a creative powerhouse dedicated to transforming your ideas into
          captivating stories. From branding to graphic design, logos to
          impactful video content, we bring your vision to life with bold,
          innovative solutions.
        </p>
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-black flex justify-center items-center gap-4 font-rlway">
            <FaChevronCircleRight className="text-purp size-6" />
            Brand Identity Design: Building a unique and memorable brand
            presence.
          </p>

          <p className="text-black flex justify-center items-center gap-4 font-rlway">
            <FaChevronCircleRight className="text-purp size-6" />
            Logo Creation: Designing logos that resonate and leave a lasting
            impression.
          </p>

          <p className="text-black flex justify-center items-center gap-4 font-rlway">
            <FaChevronCircleRight className="text-purp size-6" />
            Graphic Design: Elevating your visual communication to new heights.
          </p>

          <p className="text-black flex justify-center items-center gap-4 font-rlway">
            <FaChevronCircleRight className="text-purp size-6" />
            Video Production: Engaging and dynamic content for all your
            advertising needs.
          </p>
        </div>
        {/* <button className="bg-purp px-6 py-4 rounded-full text-[17px] font-semibold font-rlway hover:black hover:text-white">
          Discover More
        </button> */}
      </div>
    </section>
  );
};

export default About;
