import SectionHeading from "../common/SectionHeading";

const cards = [
  {
    title: "AI/ML",
    desc: "We design, build, and deploy Al and ML solutions that automate processes, surface insights, and create competitive advantages.",
    points: [
      "Machine learning model development & deployment",
      "Natural Language Processing (NLP) & LLM integration",
      "Computer vision & image recognition systems",
      "Predictive analytics & forecasting models",
      "Al-powered chatbots & conversational agents",
      "MLOps - model monitoring, retraining & scaling",
    ],
    img: "/images/our-services/AI.jpeg",
  },
  {
    title: "Cloud Computing",
    desc: "e architect, migrate, and manage cloud environments that grow with your business - secure, resilient, and cost-efficient.",
    points: [
      "Multi-cloud strategy & architecture (AWS, Azure, GCP)",
      "Cloud migration & lift-and-shift projects",
      "Kubernetes orchestration & containerization",
      "DevOps CI/CD pipeline implementation",
      "24/7 cloud infrastructure monitoring & optimization",
      "Cloud security, compliance & governance",
    ],
    img: "/images/our-services/cloud.jpeg",
  },
  {
    title: "SAP Services",
    desc: "From SAP S/4HANA implementations to custom ABAP development deliver end-to-end SAP solutions that streamline operations.",
    points: [
      "SAP S/4HANA implementation & migration",
      "SAP ECC to S/4HANA upgrade & transition",
      "Custom ABAP & Fiori development",
      "SAP BTP (Business Technology Platform)",
      "SAP integration with third-party systems",
      "SAP support, maintenance & training",
    ],
    img: "/images/our-services/sap.jpeg",
  },
  {
    title: "Embedded Systems",
    desc: "We design low-level firmware and embedded software that powers rea time systems, consumer electronics, and industrial devices.",
    points: [
      "Android Mobile Platform Development and RTOS",
      "Microcontroller & SoC firmware (ARM, RISC-V)",
      "BSP (Board Support Package) development",
      "Device driver development for Linux & bare metal",
      "Hardware-software co-design & prototyping",
      "Safety-critical systems (ISO 26262. IFC 61508)",
    ],
    img: "/images/our-services/ES.jpeg",
  },
  {
    title: "IoT Solutions",
    desc: "From sensor to dashboard, we build complete lot ecosystems that transform physical operations into intelligent, data-driven systems.",
    points: [
      "End-to-end lot architecture & platform design",
      "Providing Hardware solutions like PCs, Tablets and Printers and setting up Smart offices",
      "MQTT, COAP, LoRaWAN & 5G connectivity",
      "AWS IoT, Azure IoT Hub, Google Cloud lot",
      "Real-time telemetry dashboards & analytics",
      "Industrial IoT (lloT) & predictive maintenance",
    ],
    img: "/images/our-services/iot.jpeg",
  },

  {
    title: "Mobile Platform",
    desc: "We build native and cross-platform Android applications that deliver exceptional user experiences and integrate seamlessly with your systems",
    points: [
      "Native Android development (Kotlin, Java)",
      "Cross-platform apps (Flutter, React Native)",
      "Android TV, Wear OS & automotive platforms",
      "Enterprise mobility & MDM solutions",
      "App performance optimization & security hardening",
      "Google Play Store deployment & ongoing support",
    ],
    img: "/images/our-services/Android.jpeg",
  },
];

export default function Services() {
  return (
    <div className="bg-light py-20 px-6 md:px-20 " id="services">
      <SectionHeading title="Our" highlight="Services" />

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
        {cards.map((card, index) => (
          <div key={index} className="service-card ">
            {/* Image */}
            <div className="card-image">
              <img src={card.img} alt={card.title} />

              {/* Badge */}
              <span className="category-badge">{card.title}</span>
            </div>

            {/* Content */}
            <div className="card-content text-gray-700">
              <h3 className="card-title">The Future of {card.title}</h3>

              <p className="card-desc">{card.desc}</p>

              <ul className="mt-3 space-y-2">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-secondary"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
