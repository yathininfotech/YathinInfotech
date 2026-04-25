import { useState } from "react";
import SectionHeading from "../common/SectionHeading";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

const [loading, setLoading] = useState(false);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Message sent successfully!");
//       setForm({ name: "", phone: "", email: "", message: "" });
//     } else {
//       alert("Failed to send message");
//     }
//   } catch (err) {
//     alert("Something went wrong");
//   }

//   setLoading(false);
// };
  return (
    <section className="py-20 bg-light" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <SectionHeading title="Contact" highlight="Us" align="left" />
          <p className="text-gray-500 mt-2 max-w-xl">
            If you have any questions, feel free to reach out via phone, email,
            or WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT - FORM */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4 text-black">GET IN TOUCH</h3>
            <form 
            // onSubmit={handleSubmit}
             className="space-y-4">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-3 w-full text-black"
                required
              />

              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border p-3 w-full text-black"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-3 w-full text-black"
                required
              />

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border p-3 w-full text-black"
                required
              />

              <button
  disabled={loading}
  className="bg-secondary text-white py-3 w-full rounded-lg"
>
  {loading ? "Sending..." : "Send Message"}
</button>
            </form>
          </div>

          {/* RIGHT - INFO */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4 text-black">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-4 text-gray-600">
                {/* Phone */}
                {/* <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="font-medium">+91 +91 9281703075</p>
                </div> */}

                {/* Call */}
                <div>
                  <p className="text-sm font-medium text-gray-500">Call</p>
                  <p className="font-medium">+91 9281703075</p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="font-medium">hr@yathininfotech.com</p>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                  <p className="font-medium">+91 9281703075</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4 text-black">BUSINESS HOURS</h3>

              <div className="grid grid-cols-3 text-sm text-gray-600 gap-4">
                <div>
                  <p className="font-medium">Mon - Fri</p>
                  <p>9:00 am - 7:00 pm</p>
                </div>

                <div>
                  <p className="font-medium">Saturday</p>
                  <p>Closed</p>
                </div>

                <div>
                  <p className="font-medium">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.185033913437!2d78.38551129999999!3d17.450855699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913427da3629%3A0x8cb8adcd42f386b!2sFortune%20Chambers!5e0!3m2!1sen!2sin!4v1777110384381!5m2!1sen!2sin"
            className="w-full h-[300px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
