import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import ClientWork1 from "../assets/clientwork_pxfuel.png";
import ClientWork2 from "../assets/clientwork_pxfuel_1.png";
import ClientWork3 from "../assets/clientwork_pxfuel_2.png";
import ClientWork4 from "../assets/clientwork_pxfuel_3.png";

const Clientwork = () => {
  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Client work images with additional details
  const clientWorkImages = [
    {
      src: ClientWork1,
      title: "Project 1",
      description: "Description of project 1",
    },
    {
      src: ClientWork2,
      title: "Project 2",
      description: "Description of project 2",
    },
    {
      src: ClientWork3,
      title: "Project 3",
      description: "Description of project 3",
    },
    {
      src: ClientWork4,
      title: "Project 4",
      description: "Description of project 4",
    },
  ];

  // Modal Component
  const ImageModal = ({ image, onClose }) => {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-[90%] max-h-[90vh] flex flex-col items-center justify-center space-y-4 py-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-white text-4xl hover:text-red-500 transition-colors z-10"
          >
            &times;
          </button>

          {/* Image Container */}
          <div className="flex flex-col items-center justify-center w-full max-w-[1200px]">
            {/* Full Image */}
            <img
              src={image.src}
              alt={image.title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl mb-4"
            />

            {/* Image Details */}
            <div className="text-center text-white mt-4 px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {image.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                {image.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="clientwork"
      className="container mx-auto px-6 lg:px-20 py-16 flex flex-col gap-10"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-black p-6 lg:p-16 flex flex-col lg:flex-row flex-wrap justify-center gap-10 rounded-3xl"
      >
        <Slider {...settings} className="w-full">
          {clientWorkImages.map((image, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-2"
            >
              <div className="flex flex-col justify-start items-center text-center gap-4 max-w-sm">
                <div
                  className="p-4 rounded-3xl flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-[250px] h-[250px] rounded-3xl object-cover"
                  />
                </div>
                <h1 className="text-[20px] md:text-[24px] lg:text-[26px] text-white font-semibold font-rlway">
                  {image.title}
                </h1>
                <p className="font-rlway text-[16px] md:text-[18px] text-slate-200">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Render */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Clientwork;
