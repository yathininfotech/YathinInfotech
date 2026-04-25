import SectionHeading from "../common/SectionHeading";

export default function WhyUs() {
  return (
    <div className="bg-light text-white min-h-screen flex items-center px-6" id="whyus">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
        {/* LEFT CONTENT */}
        <div>
          <SectionHeading title="Why Choose " highlight="Us" align="left" />

          <h1 className="text-4xl font-bold leading-tight text-primary mb-6">
            Premium Technology Services Across the U.S.
          </h1>

          <p className="text-gray-500 mb-4 leading-relaxed">
            We deliver premium-grade technology services to businesses across
            the United States. From embedded systems to cloud-native platforms,
            our teams combine deep technical expertise with a relentless focus
            on quality and client success.
          </p>

          <div className="grid gap-4">
            {[
              "End-to-end delivery from architecture to deployment",
              "Senior-level engineers with US market expertise",
              "Agile methodology with transparent communication",
              "Proven track record across Embedded, Cloud, AI & App Dev",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-primary border border-gray-700 rounded-xl p-4 flex gap-3"
              >
                <span className="text-yellow-400">★</span>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="bg-secondary rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-white mt-2">Projects Delivered</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-secondary rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold">99%</h2>
            <p className="text-white mt-2">Client Satisfaction</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-secondary rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-white mt-2">Enterprise Clients</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-secondary rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="text-white mt-2">Years in the U.S Market</p>
          </div>
        </div>
      </div>
    </div>
  );
}
