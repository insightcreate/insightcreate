import { useEffect } from "react";

const Header = ({ arrow_right, headerimage }) => {

  useEffect(() => {
    // Select all letters and add animation class
    const letters = document.querySelectorAll('.falling-letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.3}s`; // Delay each character slightly
    });
  }, []);

  const splitText = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="word">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="falling-letter">{char}</span>
        ))}
        <span>&nbsp;</span> {/* Add space between words */}
      </span>
    ));
  };

  return (
    <div className="relative flex flex-col items-center text-center lg:py-34 md:py-28 py-4 px-4 bg-iclightdark">
      {/* //  <div className="relative flex flex-col items-center text-center lg:py-48 py-32 px-4 bg-gradient-to-br from-icthemepink via-50% via-icthemeblue to-icyellow"> */}
      {/* Text with Animation */}
      <h1 className="lg:text-8xl md:text-5xl text-5xl font-bold text-icblack falling-letter">
        {/* {splitText("Empowering Your Vision")} */}
        Empowering Your <span className="text-iccardpink">Vision</span>
      </h1>

      <p className="text-icblack text-2xl mt-4 max-w-2xl z-10 relative">
        Through digital innovation, InsightCreate transforms ideas into impactful solutions with creativity, strategy, and technology.
      </p>

      {/* Icons */}
      <div className="md:flex md:space-x-6 mt-6 text-3xl text-icwhite z-10 relative">
        <button className="bg-icblack min-w-60 m-5 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden">
          <img src={arrow_right} alt="Insight Create Arrow Right" className="h-4 w-4 mr-2" />
          Hire us
          <span className="absolute top-0 left-0 w-1 h-1 bg-icwhite rounded-full animate-meteor"></span>
        </button>
        <button className="bg-icblack min-w-60 m-5 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden">
          <img src={arrow_right} alt="Insight Create Arrow Right" className="h-4 w-4 mr-2" />
          Schedule a call
          <span className="absolute top-0 left-0 w-1 h-1 bg-icwhite rounded-full animate-meteor"></span>
        </button>
      </div>
    </div>
    
  );
};

export default Header;
