/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Client1 from "../public/clientImg1.jpg";
import Client2 from "../public/clientImg2.jpg";
import Client3 from "../public/clientImg3.jpg";

const testimonials = [
  {
    text: "Impeccable service! From punctuality to the pristine condition of the vehicles, RPC Limo made our corporate event seamless and stylish. Highly recommended!",
    name: "Peter Rose",
    image: Client1.src,
    rating: 5,
  },
  {
    text: "RPC Limo exceeded our expectations! The professionalism and comfort provided made our wedding day truly special.",
    name: "Carolina Montoya",
    image: Client2.src,
    rating: 4,
  },
  {
    text: "Amazing service and friendly staff. Highly recommended for anyone looking for luxury and reliability.",
    name: "Md Solaiman Ovi",
    image: Client3.src,
    rating: 5,
  },
];

const OurSatisfiedClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="taviraj-regular mb-8 text-center md:text-start">
        <h2 className="text-2xl text-gray-800 md:text-4xl">
          Our Satisfied Clients
        </h2>
        <p className="mt-2 text-gray-600 md:text-lg">
          At RPC Limo, our success is measured by the satisfaction of our
          clients. We take immense pride in building lasting relationships and
          delivering exceptional service that exceeds expectations.
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="mx-auto max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-center px-4 text-center"
            >
              <div className="relative rounded-lg bg-[rgba(218,145,0,1)] p-6 text-black shadow-lg">
                <p className="text-lg italic">{testimonial.text}</p>
                <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 transform bg-[rgba(218,145,0,1)]"></div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-36 w-36 rounded-full shadow-md"
                />
                <div className="mt-4">
                  <div className="flex justify-center text-2xl text-[rgba(218,145,0,1)]">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <h3 className="mt-8 text-lg font-bold md:text-[22px]">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-16 top-1/2">
        {" "}
        <button
          onClick={handlePrev}
          className="rounded border border-gray-300 bg-white px-4 py-3 shadow shadow-sky-200 hover:bg-[rgba(218,145,0,1)] hover:text-white"
        >
          <span className="text-4xl">&#8592;</span>
        </button>
      </div>
      <div className="absolute right-16 top-1/2">
        {" "}
        <button
          onClick={handleNext}
          className="rounded border border-gray-300 bg-white px-4 py-3 shadow shadow-sky-200 hover:bg-[rgba(218,145,0,1)] hover:text-white"
        >
          <span className="text-4xl">&#8594;</span>
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="mt-4 flex justify-center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-[rgba(218,145,0,1)]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OurSatisfiedClients;
