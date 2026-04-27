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
        {/* Logo Section */}
        <div>
          <img src="/logo.jpeg" alt="logo" width={200} className="mb-3" />

          <p className="text-sm leading-relaxed">
            Connecting top IT talent with innovative companies across the United
            States and globally.
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

                      <div>
                        {link.type === "email" && (
                          <a
                            href={`mailto:${link.value}`}
                            className="hover:text-secondary"
                          >
                            {link.value}
                          </a>
                        )}

                        {link.type === "phone" && (
                          <a
                            href={`tel:${link.value}`}
                            className="hover:text-secondary"
                          >
                            {link.value}
                          </a>
                        )}

                        {link.type === "address" && link.value}
                      </div>
                    </div>
                  ) : (
                    /* Scroll Links */
                    <div className="flex items-center gap-2">
                      <IoIosArrowForward className="text-gray-400" />

                      <a
                        href={`#${link.id}`}
                        className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-200"
                      >
                        {link.name}
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h4 className="text-white mb-4">Follow Us</h4>

        <div className="flex gap-4">
          <Icon icon={<FaFacebookF />} link="" />
          <Icon icon={<FaXTwitter />} link="" />
          <Icon icon={<FaLinkedinIn />} link="" />
          <Icon
            icon={<FaInstagram />}
            link="https://www.instagram.com/yathininfotech/m"
          />
          <Icon icon={<FaYoutube />} link="" />
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-secondary mt-10 py-4">
        <div className="text-center text-white text-sm">
          © 2026 Yathin Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* Social Icon */
function Icon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white hover:text-black transition"
    >
      {icon}
    </a>
  );
}

/* Footer Data */
const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Embedded Systems", id: "services" },
      { name: "Cloud Computing", id: "services" },
      { name: "AI / ML", id: "services" },
      { name: "Application Development", id: "services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Blog", id: "blog" },
      { name: "Contact", id: "contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { type: "email", value: "hr@yathininfotech.com" },
      { type: "phone", value: "+91 9281703075" },
      {
        type: "address",
        value: "303 Fortune Chambers, Madhapur, Hyderabad 500081",
      },
    ],
  },
];
