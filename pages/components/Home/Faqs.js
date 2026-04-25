

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide software development services, industry-oriented internships, and placement support through structured assessments and training programs.",
  },
  {
    question: "How do placements work in your company?",
    answer:
      "We conduct skill-based assessments and technical evaluations. Based on performance, candidates are shortlisted and connected with partner companies for placement opportunities.",
  },
  {
    question: "Do you provide internships for students?",
    answer:
      "Yes, we offer internships in various domains such as web development, mobile apps, AI, and embedded systems with real-world project experience.",
  },
  {
    question: "Are internships paid or unpaid?",
    answer:
      "We offer both paid and unpaid internships depending on the program, duration, and candidate performance.",
  },
  {
    question: "Will I get a job after completing the internship?",
    answer:
      "High-performing interns are given placement assistance and may receive direct job opportunities based on their skills and project performance.",
  },
  {
    question: "What is the selection process for internships?",
    answer:
      "Candidates go through an initial screening test followed by a technical or aptitude assessment to evaluate their suitability for the program.",
  },
  {
    question: "What technologies will I work on?",
    answer:
      "You will work on modern technologies including React, Node.js, Python, cloud platforms, and other industry-relevant tools.",
  },
  {
    question: "Do you provide certificates after completion?",
    answer:
      "Yes, all candidates who successfully complete the internship receive a certificate along with project experience documentation.",
  },
  {
    question: "Do you provide training before placements?",
    answer:
      "Yes, we offer structured training programs to improve technical, problem-solving, and interview skills before placement opportunities.",
  },
  {
    question: "Who can apply for your programs?",
    answer:
      "Students, fresh graduates, and job seekers looking to gain practical experience and secure placements in the IT industry can apply.",
  },
];
export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 ">
        
        {/* LEFT IMAGE */}
        <div className="">
          <img
            src="/images/faqs/faqs.png" 
            alt="FAQ"
            className=""
            width={"700px"}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-blue-500 font-medium mb-2">FAQs</p>

          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mb-8">
            Find answers to common questions about our services and process.
          </p>

          {/* ACCORDION */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-primary">
                      {faq.question}
                    </span>

                    <span className="text-secondary">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`px-5 transition-all duration-300 ${
                      isOpen ? "max-h-40 pb-5" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-gray-500 text-sm">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}