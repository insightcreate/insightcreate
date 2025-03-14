import { useState, useEffect } from "react";

const Contact = ({ arrow_right, logo, whatsapp, email, call }) => {
  useEffect(() => {
    const letters = document.querySelectorAll(".falling-letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div className="relative flex flex-col items-center text-center lg:py-34 md:py-28 py-12 px-6 bg-iccardpink">
      {/* Title */}
      <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold text-icblack">
        Elevate with <span className="text-iccardgreen">Excellence</span>
      </h1>

      {/* Subtitle */}
      <p className="text-icblack text-sm md:text-xl mt-4 max-w-2xl z-10 relative">
        Harnessing Innovation to Empower Success, we pave the way for Limitless
        Possibilities. At InsightCreate, we cultivate an ecosystem where
        creativity & technology, unite. Together, we build, evolve,
        and redefine the future.
      </p>


    </div>

    {/* Contact Form */}
    <div className="mt-8 w-full flex flex-col items-center text-center">
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="peer w-full lg:max-w-96 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iccardpurple placeholder-transparent"
          placeholder="Your Name"
          required
        />
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="peer w-full p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iccardpurple placeholder-transparent"
          placeholder="Your Email"
        />
      </div>

       {/* Phone Field */}
       <div className="relative">
        <input
          type="phone"
          name="phone"
          value={formData.phpne}
          onChange={handleChange}
          className="peer w-full p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iccardpurple placeholder-transparent"
          placeholder="Your phone"
          required
        />
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="peer w-full p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iccardpurple placeholder-transparent"
          placeholder="Your Message"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-icblack text-icwhite py-4 rounded-md text-lg font-semibold transform hover:scale-110 transition-transform duration-500 cursor-pointer"
      >
        Send Message
      </button>
    </form>
  </div>


  <p className="text-icblack font-bold text-xl md:text-xl mt-4 max-w-2xl z-10 relative">
    OR <br />
     simply want to connect.
  </p>
  

  Buttons
  <div className="md:flex md:space-x-6 mt-6 text-3xl text-icwhite z-10 relative">
    <button className="bg-icblack min-w-60 m-5 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden">
    <img src={email} alt="Insight Create Email" className="h-4 w-4 mr-2" />
      Email us
    </button>
    <button className="bg-icblack min-w-60 m-5 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden">
    <img src={call} alt="Insight Create Call" className="h-4 w-4 mr-2" />
      Call us
    </button>
    <button className="bg-icblack min-w-60 m-5 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden">
    <img src={whatsapp} alt="Insight Create Whatsapp" className="h-4 w-4 mr-2" />
        WhatsApp us
    </button>
  </div>
  </>
  );
};

export default Contact;
