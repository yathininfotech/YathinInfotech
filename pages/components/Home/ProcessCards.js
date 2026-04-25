import SectionHeading from "../common/SectionHeading";
import {
  FaDraftingCompass,
  FaMicrochip,
  FaCogs,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Concept",
    desc: "Define product vision, technical feasibility, and hardware requirements through research and ideation.",
    icon: FaDraftingCompass,
  },
  {
    id: "02",
    title: "Design",
    desc: "Create detailed schematics, PCB layouts, and system architecture for scalable and efficient solutions.",
    icon: FaMicrochip,
  },
  {
    id: "03",
    title: "Fabrication",
    desc: "Manufacture components using advanced fabrication techniques ensuring precision and quality.",
    icon: FaCogs,
  },
  {
    id: "04",
    title: "Assembly & Testing",
    desc: "Assemble hardware modules and perform rigorous testing for performance, safety, and reliability.",
    icon: FaTools,
  },
  {
    id: "05",
    title: "Delivery & Support",
    desc: "Deploy final product with ongoing support, optimization, and lifecycle maintenance.",
    icon: FaCheckCircle,
  },
];

export default function ProcessCards() {
  return (
    <section className="process-section py-20 bg-light">
      <div className="mb-4 pb-5">
        <SectionHeading
          title=" Our Proven "
          highlight="Work Process"
          align="center"
        />
      </div>

      <div className="process-wrapper max-w-7xl mx-auto px-6 ">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div key={i} className="process-step">
              {/* Circle */}
              <div className="circle bg-white">
                <Icon size={26} className="text-secondary"/>

                {/* Step badge */}
                <span className="badge">{step.id}</span>
              </div>

              {/* Text */}
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
