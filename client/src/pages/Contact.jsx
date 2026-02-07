import { useState } from "react";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://${window.location.hostname}:5000/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    });

    setForm({ fullName: "", email: "", phone: "", message: "" });
    alert("Message sent successfully");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050B1E] via-[#07132D] to-[#050B1E] py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-blue-200 leading-relaxed">
            Have questions about printers, toner cartridges, or ink supplies?
            Reach out to us and our team will respond as quickly as possible.
          </p>

          <div className="mt-8 space-y-4 text-blue-300">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 7305419024</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>dhirubhaisairaj@gmail.com</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="text-sm text-blue-200 mb-1 block">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-4 h-4" />
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-blue-200 mb-1 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-blue-200 mb-1 block">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-4 h-4" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-blue-200 mb-1 block">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-blue-400 w-4 h-4" />
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
