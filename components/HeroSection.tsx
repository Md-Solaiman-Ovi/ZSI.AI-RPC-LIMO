/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import heroImage from "@/app/assets/heroSectionImg1.jpg"; // Adjust the path as per your file structure

const HeroSection = () => {
  const slides = [
    {
      type: "image",
      src: heroImage.src, // Extract `src` from StaticImageData
    },
    {
      type: "video",
      src: "/HeroSectionVideo.mp4", // Static video path from the public folder
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div className="relative mx-auto max-h-[754px] w-full overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-auto w-full flex-shrink-0 sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[754px]"
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src={slide.src}
                  type="video/mp4"
                  className="w-full object-cover"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
