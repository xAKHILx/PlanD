import React, { useEffect } from "react";
import herobanner from "../assets/herobanner.png";
import clients from "../assets/clients.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-out-sine",
    });
  }, []);

  return (
    <section
      id="hero"
      className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-10 py-16 rounded-3xl"
      // bg-purple-400
    >
      {/* Left Section - Text and Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
        <h1
          data-aos="zoom-in"
          className="text-black font-semibold text-[30px] md:text-[50px] lg:text-[65px] xl:text-[80px] leading-tight lg:leading-[90px] font-rlway"
        >
          Unlock growth using creativity & data to boost your business
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="font-rlway text-[16px] md:text-[18px] lg:text-[20px] text-slate-700 leading-relaxed"
        >
          Let's start something big together. <br />
          Increase your revenue using our expert knowledge for your business.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="bg-purp text-white px-6 py-3 rounded-full text-[16px] md:text-[18px] font-semibold font-rlway hover:bg-black hover:text-white transition"
        >
          Get in touch
        </button>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="flex flex-col lg:flex-row justify-center lg:items-center items-start gap-6 mt-6"
        >
          <img
            src={clients}
            alt="Clients"
            className="w-[200px] md:w-[300px] lg:w-[400px] object-contain"
          />
          <p className="font-rlway text-[16px] md:text-[18px] lg:text-[20px] font-bold text-black">
            Trusted by 1000+ Worldwide Brands & Customers
          </p>
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          src={herobanner}
          alt="Hero Banner"
          className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
