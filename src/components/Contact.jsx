import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactimg from "../assets/contact.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="contact"
      className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-10 py-20"
    >
      {/* Left Section - Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={contactimg}
          alt="Contact"
          className="w-full max-w-[500px] lg:max-w-[700px] object-cover"
        />
      </div>

      {/* Right Section - Form */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start bg-black p-8 rounded-3xl"
      >
        <h1 className="font-rlway text-[32px] lg:text-[45px] font-semibold text-white text-center lg:text-left">
          Get in Touch with Our Team!
        </h1>
        <div
          id="form-box"
          className="w-full bg-transparent flex flex-col justify-center items-center gap-4 mt-6"
        >
          <input
            type="text"
            className="w-full bg-gray-700 px-4 py-3 rounded-lg border-none font-rlway"
            placeholder="Your Full Name"
          />
          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-4">
            <input
              type="email"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg border-none font-rlway"
              placeholder="Your Email Address"
            />
            <input
              type="number"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg border-none font-rlway"
              placeholder="Your Phone Number"
            />
          </div>
          <textarea
            className="w-full bg-gray-700 px-4 py-3 rounded-lg border-none font-rlway"
            placeholder="What can we help you with?"
            rows={5}
          ></textarea>
          <button className="bg-purp text-white px-6 py-3 rounded-full text-[16px] md:text-[18px] font-semibold font-rlway hover:bg-gray-700 hover:text-white transition">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
