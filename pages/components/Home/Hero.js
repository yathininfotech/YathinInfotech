"use client";

import { useEffect, useState } from "react";
import CommonButton from "../common/CommonButton";
import { FaArrowRight } from "react-icons/fa";

const images = [
  "/images/Hero/heroImage1.png",
  "/images/Hero/heroImage2.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            className="w-full h-full object-cover"
            alt="bg"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-5 md:px-0 mt-10">
        
        <div className="max-w-xl text-white space-y-4 md:space-y-6">

          {/* Small Heading */}
          <h4 className="text-sm md:text-lg font-medium text-gray-200">
            IT Recruitment • Internships • Skill Development
          </h4>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-secondary">
            Launch Your Career with Real-World Experience
          </h1>

          {/* Sub Heading */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            We bridge the gap between students and companies by providing 
            industry-focused internships, hands-on training, and direct 
            placement opportunities through skill-based assessments.
          </p>

          {/* Extra Value Line */}
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Gain practical experience • Work on live projects • Get placement support
          </p>

          {/* CTA */}
          <div className="pt-2">
            <CommonButton
              text="Enroll Now"
              variant="outline"
              icon={<FaArrowRight />}
            />
          </div>

        </div>
      </div>
    </div>
  );
}