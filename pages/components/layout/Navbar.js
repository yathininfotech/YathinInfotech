"use client";

import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import CommonButton from "../common/CommonButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setOpen(false);
    }
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center shadow-md">
        {/* Logo */}
        <h1 className="flex items-center gap-2 font-bold text-xl text-blue-900">
          <img
            src="/background-plain.png"
            alt="logo"
            className=""
            width={"150px"}
            height={"50px"}
          />
          {/* <span>
            <span className="text-primary">Yathin</span>
            <span className="text-secondary ml-1">Infotech</span>
          </span> */}
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700">
          <span
            onClick={() => handleScroll("about")}
            className="cursor-pointer hover:text-primary"
          >
            About Us
          </span>
          <span
            onClick={() => handleScroll("services")}
            className="cursor-pointer hover:text-primary"
          >
            Services
          </span>
          <span
            onClick={() => handleScroll("whyus")}
            className="cursor-pointer hover:text-primary"
          >
            Why Us
          </span>
          <span
            onClick={() => handleScroll("contact")}
            className="cursor-pointer hover:text-primary"
          >
            Contact
          </span>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <CommonButton
            text="Enroll Now"
            variant="outline"
            icon={<FaArrowRight />}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer text-primary">
          {open ? (
            <FaTimes onClick={() => setOpen(false)} />
          ) : (
            <FaBars onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 p-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-700">
          <span
            onClick={() => handleScroll("services")}
            className="cursor-pointer hover:text-primary"
          >
            Services
          </span>
          <span
            onClick={() => handleScroll("whyus")}
            className="cursor-pointer hover:text-primary"
          >
            Why Us
          </span>
          <span
            onClick={() => handleScroll("about")}
            className="cursor-pointer hover:text-primary"
          >
            About Us
          </span>
          <span
            onClick={() => handleScroll("contact")}
            className="cursor-pointer hover:text-primary"
          >
            Contact
          </span>
        </div>

        <div className="mt-4">
          <CommonButton
            text="Enroll Now"
            variant="outline"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
}
