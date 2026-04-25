"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  FaIndustry,
  FaHeartbeat,
  FaUniversity,
  FaGraduationCap,
  FaShoppingCart,
  FaBolt,
} from "react-icons/fa";

const data = [
  {
    title: "Manufacturing",
    desc: "Driving efficiency with automation, AI-powered analytics, and smart factory solutions that improve productivity.",
    icon: <FaIndustry />,
  },
  {
    title: "Healthcare",
    desc: "Enhancing patient outcomes through digital health platforms, telemedicine, and data-driven clinical decision systems.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Financial Services",
    desc: "Delivering secure, scalable fintech solutions including digital banking, fraud detection, and intelligent automation.",
    icon: <FaUniversity />,
  },
  {
    title: "Education",
    desc: "Empowering institutions with e-learning platforms, virtual classrooms, and AI-driven personalized learning experiences.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Retail",
    desc: "Transforming customer journeys with omnichannel strategies, personalized shopping, and data-driven insights.",
    icon: <FaShoppingCart />,
  },
{
  title: "Government",
desc: "Enabling smart governance with secure digital systems, automation, and real-time data insights.",
  icon: <FaUniversity />,
},
];

export default function Capabilities() {
  return (
    <section className="relative pt-24 pb-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/AboutUs/key-sectors-bg.jpeg"
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Key Sectors We Serve
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            We deliver innovative solutions across industries, helping
            businesses scale, transform, and succeed in a digital world.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="bg-white/90 backdrop-blur-md border border-white/20 
        rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 
       "
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center 
          rounded-xl bg-secondary
          text-white mb-4 text-xl shadow-md"
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* CTA (LEFT ALIGNED NOW) */}
                  <button className="mt-4 text-sm font-medium text-secondary  transition self-start">
                    Learn More →
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="swiper-button-prev !text-white !bg-white/20 backdrop-blur-md p-3 rounded-full shadow absolute top-1/2 -left-4 z-20">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next !text-white !bg-white/20 backdrop-blur-md p-3 rounded-full shadow absolute top-1/2 -right-4 z-20">
          <FaChevronRight />
        </div> */}
      </div>
    </section>
  );
}
