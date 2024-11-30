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
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 bg-purple-400 p-[40px] rounded-3xl"
    >
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay=""
          className="text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-rlway"
        >
          Unlock growth using creativity & data to boost your business
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="font-rlway text-[20px] text-slate-700"
        >
          Let's start something big together,
          <br />
          lets increase your revenue using our expert knowledge for your
          business
        </p>

        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="bg-purp text-white px-6 py-4 rounded-full text-[17px] font-semibold font-rlway hover:bg-black hover:text-white"
        >
          Get in touch
        </button>

        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10"
        ></div>
        <img src={clients} alt="" />
        <p className="font-rlway text-[20px] font-bold text-black">
          Trusted by 1000+ Worldwide Brand & Customers
        </p>
      </div>
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          src={herobanner}
          className="xl:w-[100vw] xl:h-[90vh] lg:w-[500] lg:h-[300]"
        />
      </div>
    </section>
  );
};

export default Hero;
