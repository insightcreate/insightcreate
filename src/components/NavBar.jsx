import { useState } from "react";

const NavBar = ({logodark, logo, whatsapp, arrow_right }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-iclightdark shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Name */}
          <div className="flex items-center">
            <img src={logo} alt="Insight Create" className="h-8" />
{/*             <span className="text-2xl font-normal text-icblack ml-2">Insight Create</span> */}
          </div>

          {/* Navigation Items for Large Screens */}
          <div className="hidden md:flex lg:space-x-10 md:space-x-1">
            <a href="#" className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal">Home</a>
            <a href="#" className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal">Services</a>
            <a href="#" className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal">About Us</a>
            <a href="#" className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal">Contact Us</a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-icblack focus:outline-none">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Right Buttons for Medium Screens and Above */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
              <img src={whatsapp} alt="Insight Create Whatsapp" className="h-4 w-4 mr-2" />
              WhatsApp Us
            </button>
            <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
              <img src={arrow_right} alt="Insight Create Arrow Right" className="h-4 w-4 mr-2" />
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View: Hamburger Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-iclightdark px-4 py-2`}>
        <a href="#" className="text-icblack block px-3 py-2 rounded-md text-xl font-normal">Home</a>
        <a href="#" className="text-icblack block px-3 py-2 rounded-md text-xl font-normal">Services</a>
        <a href="#" className="text-icblack block px-3 py-2 rounded-md text-xl font-normal">About Us</a>
        <a href="#" className="text-icblack block px-3 py-2 rounded-md text-xl font-normal">Contact Us</a>
        <div className="flex flex-col space-y-2 mt-4">
          <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
            <img src={whatsapp} alt="Insight Create Whatsapp" className="h-4 w-4 mr-2" />
            WhatsApp Us
          </button>
          <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
            <img src={arrow_right} alt="Insight Create Arrow Right" className="h-4 w-4 mr-2" />
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
