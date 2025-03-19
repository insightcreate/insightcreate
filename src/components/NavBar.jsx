import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({logodark, logo, whatsapp, arrow_right }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [showPopup, setShowPopup] = useState(false);
  

  return (
    <nav className="bg-iclightdark shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Link to={''}><img src={logo} alt="Insight Create" className="h-8" /></Link>
{/*             <span className="text-2xl font-normal text-icblack ml-2">Insight Create</span> */}
          </div>

          {/* Navigation Items for Large Screens */}
          <div className="hidden md:flex lg:space-x-10 md:space-x-1">
            <Link to={''} className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal hover:bg-iccardpurple">Home</Link>
            {/* <Link to={'services'} className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal hover:bg-iccardpurple">Services</Link> */}

            <div className="relative mt-2" onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
            <Link to={'/services'} className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal hover:bg-iccardpurple">Services</Link>
              {showPopup && (
                <div className="absolute text-center left-0 w-64 bg-icdark bg-opacity-95 mt-4 text-iclight text-lg font-medium z-40 p-4 rounded-lg shadow-lg">
                  <ul>
                    <li className="hover:text-iccardpurple m-2 p-1 border-b-2 border-b-iccardpurple"><Link to={'/servics/web_development'}>Web Development</Link></li>
                    <li className="hover:text-iccardpurple m-2 p-1 border-b-2 border-b-iccardpurple"><Link to={'/servics/mobile_development'}>Mobile Applications</Link></li>
                    <li className="hover:text-iccardpurple m-2 p-1 border-b-2 border-b-iccardpurple"><Link to={'/servics/erp_crm'}>ERP & CRM Solutions</Link></li>
                    <li className="hover:text-iccardpurple m-2 p-1 border-b-2 border-b-iccardpurple"><Link to={'/servics/branding_design'}>Branding & Design</Link></li>
                    <li className="hover:text-iccardpurple m-2 p-1 border-b-2 border-b-iccardpurple"><Link to={'/servics/packaging'}>Packaging Design</Link></li>
                    <li className="hover:text-iccardpurple m-2 p-1 border-b-2 border-b-iccardpurple"><Link to={'/servics/uiux'}>UI/UX Design</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link to={'/about'} className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal hover:bg-iccardpurple">About Us</Link>
            <Link to={'/contact'} className="text-icblack hover:animate-pulse px-3 py-2 rounded-md text-xl font-normal hover:bg-iccardpurple">Contact Us</Link>
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
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-icwhite px-4 py-2`}>
        <Link to={''} className="text-icblack block px-3 py-2 rounded-md text-xl font-normal hover:text-iccardpurple">Home</Link>
        <Link to={'/services'} className="text-icblack block px-3 py-2 rounded-md text-xl font-normal hover:text-iccardpurple">Services</Link>
        <Link to={'/about'} className="text-icblack block px-3 py-2 rounded-md text-xl font-normal hover:text-iccardpurple">About Us</Link>
        <Link to={'/contact'} className="text-icblack block px-3 py-2 rounded-md text-xl font-normal hover:text-iccardpurple">Contact Us</Link>
        <div className="flex flex-col space-y-2 mt-4">
          <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
            <img src={whatsapp} alt="Insight Create Whatsapp" className="h-4 w-4 mr-2" />
            WhatsApp Us
          </button>
          <Link to={'/contact'} className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
            <img src={arrow_right} alt="Insight Create Arrow Right" className="h-4 w-4 mr-2" />
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
