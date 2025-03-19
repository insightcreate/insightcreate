import { motion } from "framer-motion";
import { useRef } from "react";

const Card = ({ title, description, image, bgColor }) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl shadow-lg ${bgColor} text-icblack min-w-80`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-xl mb-4">{description}</p>
      <div className="flex justify-center">
        <img src={image} alt={title} className="w-24 h-36" />
      </div>
    </motion.div>
  );
};

export default function Services({ arrow_right, sweb, serpcrm, suiux, smobile}) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const cards = [
    { title: "Web Development", description: "Build seamless, high-performance web applications.", image: sweb, bgColor: "bg-iccardpink" },
    { title: "Mobile Applications", description: "Develop innovative mobile apps.", image: smobile, bgColor: "bg-iccardyellow" },
    { title: "ERP & CRM Solutions", description: "Streamline operations and improve customer relations.", image: serpcrm, bgColor: "bg-iccardpurple" },
    { title: "Branding & Design", description: "Craft a unique and memorable identity.", image: suiux, bgColor: "bg-iccardgreen" },
    { title: "Packaging Design", description: "Create compelling and unique packaging.", image: "https://cdn.prod.website-files.com/66f80993567d675bb21536a3/673343441734f7d225ad7af3_Hands%20Show.png", bgColor: "bg-iccardpink" },
    { title: "UI/UX Design", description: "User-centric designs for intuitive experiences.", image: suiux, bgColor: "bg-iccardyellow" },
  ];

  return (
    <div className="bg-icdark text-icwhite py-16 px-6 relative">
      {/* Title & Description */}
      <div className="text-center mb-8 flex flex-col sm:flex-row justify-between items-center md:ml-10">
        <h2 className="text-5xl font-bold text-left max-w-xl falling-letter">
          <span className="text-iccardpurple">Unlock </span>
          Your
          <span className="text-iccardyellow"> Business </span>
          <span className="text-iccardpink"> Potential </span>
          with Our
          <span className="text-iccardgreen"> Capabilities</span>
        </h2>
        <p className="text-icgrey text-xl mt-2 text-left max-w-lg">
          Our services are like branches of a tree, each offering a unique set of solutions that grow and evolve with your business needs.
        </p>
      </div>

      {/* Scrollable Cards with Hidden Scrollbar */}
      <div className="relative bottom-10">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute md:-top-10 right-24 bg-icblack p-2 rounded-full shadow-md hover:bg-icgray"
        >
          <img src={arrow_right} alt="Arrow Left" className="h-8 w-8 rotate-180" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute md:-top-10 right-10 bg-icblack p-2 rounded-full shadow-md hover:bg-icgray"
        >
          <img src={arrow_right} alt="Arrow Right" className="h-8 w-8" />
        </button>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-6 md:ml-10 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="mt-10 md:ml-48">
        <h3 className="text-2xl font-bold max-w-xl">Industries we work with</h3>

        <div className="mt-10">
          <h2 className="text-4xl font-bold text-left max-w-xl">
            <span className="text-iccardpink">Construction</span>
          </h2>
          <p className="text-icgrey text-xl text-left max-w-lg">
            We provide digital solutions to enhance project management, streamline workflows, and improve communication in the construction industry. From AI-driven planning to real-time collaboration tools, we help companies build smarter.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-left max-w-xl">
            <span className="text-iccardyellow">Manufacturing</span>
          </h2>
          <p className="text-icgrey text-xl text-left max-w-lg">
            Our software solutions optimize production lines, improve quality control, and enhance supply chain efficiency. We help manufacturers embrace automation and data analytics to stay competitive.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-left max-w-xl">
            <span className="text-iccardpurple">Healthcare</span>
          </h2>
          <p className="text-icgrey text-xl text-left max-w-lg">
            From telemedicine platforms to electronic health records (EHR) systems, we develop secure and scalable solutions that enhance patient care, streamline operations, and ensure regulatory compliance.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-left max-w-xl">
            <span className="text-iccardgreen">Energy & Utilities</span>
          </h2>
          <p className="text-icgrey text-xl text-left max-w-lg">
            We build intelligent solutions for energy management, renewable energy tracking, and utility optimization. Our technology helps companies improve efficiency and reduce environmental impact.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-left max-w-xl">
            <span className="text-iccardpink">Logistics & Transportation</span>
          </h2>
          <p className="text-icgrey text-xl text-left max-w-lg">
            Our technology enhances fleet management, route optimization, and real-time tracking. We help logistics companies reduce costs, improve efficiency, and deliver seamless experiences.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-left max-w-xl">
            <span className="text-iccardyellow">IT & Software Development</span>
          </h2>
          <p className="text-icgrey text-xl text-left max-w-lg">
            We specialize in custom software development, cloud solutions, and AI-driven applications. Our team builds scalable, high-performance software to drive innovation in IT and digital transformation.
          </p>
        </div>
      </div>

    </div>
  );
}