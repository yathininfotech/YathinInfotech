import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>

          <h1 className="flex items-center gap-2 font-bold text-xl text-secondary mb-2">
            {/* Logo */}
            <img
              src="/logo.jpeg"
              alt="logo"
              className=""
              width={"200px"}
              // height={"150px"}
            />

            {/* Name */}
            {/* <span>
              <span className="text-white">Yathin</span>
              <span className="text-blue ml-1">Infotech</span>
            </span> */}
          </h1>
          <p className="text-sm leading-relaxed">
            Connecting top IT talent with innovative companies across the United
            States and Globally.
          </p>
        </div>

        {/* Dynamic Sections */}
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>

            <ul className="space-y-3 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  {/* Contact Section */}
                  {section.title === "Contact" ? (
                    <div className="flex items-start gap-3">
                      <span className="text-secondary mt-1">
                        {link.type === "email" && <FaEnvelope />}
                        {link.type === "phone" && <FaPhoneAlt />}
                        {link.type === "address" && <FaMapMarkerAlt />}
                      </span>

                      <div className="hover:text-secondary transition cursor-pointer">
                        {link.type === "email" && (
                          <a href={`mailto:${link.value}`}>{link.value}</a>
                        )}

                        {link.type === "phone" && (
                          <a href={`tel:${link.value}`}>{link.value}</a>
                        )}

                        {link.type === "address" && link.value}
                      </div>
                    </div>
                  ) : (
                    /* Other Sections */
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <IoIosArrowForward className="text-gray-400 group-hover:text-secondary transition" />
                      <span className="group-hover:text-secondary transition">
                        {link}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h4 className="text-white mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <Icon icon={<FaFacebookF />} />
          <Icon icon={<FaXTwitter />} />
          <Icon icon={<FaLinkedinIn />} />
          <Icon icon={<FaInstagram />} />
          <Icon icon={<FaYoutube />} />
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-secondary mt-10 py-4">
        <div className="max-w-7xl mx-auto px-6 text-sm text-center text-white">
          © 2026 Yathininfotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Icon({ icon }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white hover:text-black cursor-pointer transition">
      {icon}
    </div>
  );
}
const footerLinks = [
  {
    title: "Services",
    links: [
      "Embedded Systems",
      "Cloud Computing",
      "AI / ML",
      "Application Development",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "services", "Blog", "contact"],
  },
  {
    title: "Contact",
    links: [
      { type: "email", value: "hr@yathininfotech.com" },
      { type: "phone", value: "+91 9281703075" },
      {
        type: "address",
        value:
          "303 Fortune Chambers, Silicon Valley, Madhapur, Hyderabad 500081",
      },
    ],
  },
];
