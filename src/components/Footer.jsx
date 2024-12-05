import React from "react";
import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-black m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10">
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold font-raleway text-[40px] leading-[50px]">
            Let's work together, get in touch!
          </h1>
          <button className="bg-purple-600 px-6 py-4 rounded-full text-[17px] font-semibold font-raleway hover:bg-white hover:text-black">
            Get started now
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Contact Info
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3">
              <FaMapMarkedAlt className="text-purple-600 size-8" />
              <span className="text-[16px] font-raleway text-slate-100">
                LOCATION, LOCATION, LOCATION, COUNTRY
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaPhoneVolume className="text-purple-600 size-8" />
              <span className="text-[16px] font-raleway text-slate-100">
                PHONE NUMBER
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoIosMailOpen className="text-purple-600 size-8" />
              <span className="text-[16px] font-raleway text-slate-100">
                EMAIL@EMAIL.COM
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime className="text-purple-600 size-8" />
              <span className="text-[16px] font-raleway text-slate-100">
                COMPANY TIME
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-black m-auto border-y-2 border-slate-700 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6">
        <div>
          <h1 className="text-white text-[17px] font-raleway text-center">
            Copyright 2024, Plan D, All Rights Reserved
          </h1>
        </div>
        <div>
          <p className="text-white text-3xl font-raleway font-bold text-center">
            Plan
            <span className="text-purple-600 italic text-center">D</span>
          </p>
        </div>
        <div className="flex lg:justify-center justify-center items-start gap-4">
          <FaFacebook className="text-purple-600 size-6" />
          <FaInstagram className="text-purple-600 size-6" />
          <FaYoutube className="text-purple-600 size-6" />
          <FaTwitter className="text-purple-600 size-6" />
        </div>
      </section>
      <div
        id="icon-box"
        className="bg-purple-600 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} smooth={true} offset={-100}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
