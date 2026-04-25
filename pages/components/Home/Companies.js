import SectionHeading from "../common/SectionHeading";

export default function Companies() {
  const logos = [
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
    "/images/companies-Logos/image.jpg",
  ];

  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="flex items-center justify-center gap-3 mb-6">
        <SectionHeading title="Our Global" highlight="Clients" />
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-infinite gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company"
              className="h-50 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
