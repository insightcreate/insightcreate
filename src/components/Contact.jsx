import { useState, useEffect } from "react";
import JoinCreatorTeam from "./JoinCreatorTeam";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = ({ join, arrow_right, logodark, logo, whatsapp, email, call, socialIcons, insightcreate, insight, create, copy }) => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);  // Added loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || errorData?.message || 'Failed to send message');
      }
  
      const result = await response.json();
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast(result.message || "Thank you for connecting with us!");
    } catch (error) {
      console.error("Error details:", error);
      toast(error.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const buttonStyle =
    "bg-icblack min-w-60 md:m-0 m-4 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden";

  return (
    <>
      <div className="relative flex flex-col items-center text-center lg:py-10 md:py-10 py-6 px-6 bg-iccardpink">
        <div className="w-full max-w-7xl mx-auto m-3">
          <p className="text-icblack text-sm text-left">
            <span className="bg-iclightdark p-2 rounded-xl">
              <Link to={'/'}>Home</Link> / <span className="font-bold">Contact Us</span>
            </span>
          </p>
        </div>

        <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold text-icblack">
          Elevate with <span className="text-iccardgreen">Excellence</span>
        </h1>

        <p className="text-icblack text-sm md:text-xl mt-4 max-w-2xl z-10 relative">
          Harnessing Innovation to Empower Success, we pave the way for Limitless Possibilities...
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-iclightdark md:p-10 pt-10 pb-10 w-full flex flex-col items-center text-center">
        <p className="text-icblack text-4xl font-medium mb-4">Get a Free Consultation</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-icblack placeholder-transparent"
              placeholder="Your Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-icblack placeholder-transparent"
              placeholder="Your Email"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer w-full md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-icblack placeholder-transparent"
              placeholder="Your Phone"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="peer w-full md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-icblack placeholder-transparent"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-icblack text-icwhite py-4 rounded-md text-lg font-semibold transform hover:scale-110 transition-transform duration-500 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-icblack font-medium text-2xl md:text-2xl mt-4 max-w-2xl z-10 relative">
          OR <br />
          simply want to connect.
        </p>
 
        <div className="md:flex md:space-x-4 mt-4 text-3xl text-icwhite z-10 relative">
          {/* Email Button */}
          <button className={buttonStyle} onClick={() => window.location.href = "mailto:contact@insightcreate.com"}>
            <img src={email} alt="Insight Create Email" className="h-4 w-4 mr-2" />
            contact@insightcreate.com
          </button>

          {/* Call Button */}
          <a href="tel:+917276626179" className={buttonStyle}>
            <img src={call} alt="Insight Create Call" className="h-4 w-4 mr-2" />
            +91 7276626179
          </a>

          {/* WhatsApp Button */}
          <a href="https://wa.me/917276626179" target="_blank" rel="noopener noreferrer" className={buttonStyle}>
            <img src={whatsapp} alt="Insight Create WhatsApp" className="h-4 w-4 mr-2" />
            WhatsApp us
          </a>
        </div>
      </div>

      <JoinCreatorTeam join={join} />
      <Footer logodark={logodark} logo={logo} socialIcons={socialIcons} whatsapp={whatsapp} email={email} call={call} arrow_right={arrow_right} insightcreate={insightcreate} insight={insight} create={create} copy={copy} />
    </>
  );
};

export default Contact;



