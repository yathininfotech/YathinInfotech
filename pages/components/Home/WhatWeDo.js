import { FaBookOpen } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
export default function WhatWeDo() {
  return (
    <>
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-3 text-center ">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-primary mb-12 relative inline-block">
            WHAT WE DO
          </h2>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 items-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white p-5 rounded-full mb-4">
                <FaBookOpen size={28} />
              </div>
              <h3 className="font-semibold mb-2 text-gold">
                INDUSTRY-RELEVANT COURSES
              </h3>
              <p className="text-sm text-gray-600">
                Learn from expert mentors with practical, up-to-date curriculum.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-teal-500 text-white p-5 rounded-full mb-4">
                <FaLaptopCode size={28} />
              </div>
              <h3 className="font-semibold mb-2 text-gold">
                HANDS-ON TRAINING
              </h3>
              <p className="text-sm text-gray-600">
                Gain practical skills through real-world projects and workshops.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gold text-white p-5 rounded-full mb-4">
                <FaBriefcase size={28} />
              </div>
              <h3 className="font-semibold mb-2 text-gold">INTERNSHIPS</h3>
              <p className="text-sm text-gray-600">
                Get real industry exposure by working on live projects.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-secondary text-white p-5 rounded-full mb-4">
                <FaUserCheck size={28} />
              </div>
              <h3 className="font-semibold mb-2 text-gold">PLACEMENTS</h3>
              <p className="text-sm text-gray-600">
                We help you get placed in top companies and start your career.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1e3a5f] text-white rounded-2xl max-w-7xl mx-auto px-3 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Item 1 */}
          <div className="flex items-center gap-4 p-6">
            <FaUsers size={30} />
            <div>
              <h4 className="font-semibold">EXPERT MENTORS</h4>
              <p className="text-sm text-gray-200">
                Learn from industry professionals.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 p-6">
            <FaShieldAlt size={30} />
            <div>
              <h4 className="font-semibold">QUALITY TRAINING</h4>
              <p className="text-sm text-gray-200">
                Practical, hands-on and career-focused.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 p-6">
            <FaBuilding size={30} />
            <div>
              <h4 className="font-semibold">STRONG INDUSTRY CONNECTIONS</h4>
              <p className="text-sm text-gray-200">
                Bridging talent with opportunity.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 p-6">
            <FaRocket size={30} />
            <div>
              <h4 className="font-semibold">YOUR SUCCESS, OUR MISSION</h4>
              <p className="text-sm text-gray-200">We grow when you grow.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
