import CommonButton from "../common/CommonButton";
import SectionHeading from "../common/SectionHeading";
import WhatWeDo from "./WhatWeDo";
import { FaArrowRight } from "react-icons/fa";
export default function AboutUs() {
  return (
    <>
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <SectionHeading title="About" highlight="Us" align="left" />

              <p className="text-gray-600 mb-4 leading-relaxed">
                We are a full-spectrum technology services company committed to
                helping businesses leverage the power of modern technology. From
                cloud migrations and SAP implementations to AI-driven insights
                and IoT ecosystems, we deliver solutions that drive measurable
                outcomes.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our multidisciplinary team of engineers, architects, and
                consultants brings deep domain expertise across six core service
                pillars — ensuring your digital transformation journey is
                seamless, scalable, and future-ready.
              </p>
              {/* <CommonButton
                text="Learn More"
                variant="outline"
                icon={<FaArrowRight />}
              /> */}
            </div>

            {/* Right Images */}
            <div className="">
              {/* Back Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/AboutUs/about-us.jpeg"
                  alt="about"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4  mt-16 text-left">
            <div>
              <h3 className="text-3xl font-bold text-primary">
                100<span className="text-secondary">+</span>
              </h3>
              <p className="text-gray-500 mt-2">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">
                20<span className="text-secondary">+</span>
              </h3>
              <p className="text-gray-500 mt-2">Global Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">
                15<span className="text-secondary">+</span>
              </h3>
              <p className="text-gray-500 mt-2">Years oF Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
