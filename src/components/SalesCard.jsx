const SalesCard = ({whatsapp, arrow_right, email, call}) => {
  return (
    
    <div className="bg-iccardpurple mx-auto m-10 rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl">
      {/* Left Content */}
      <div className="text-left">
        <h2 className="lg:text-5xl text-3xl font-normal text-icblack">Ready to Elevate Your Business?</h2>
        <p className="text-icblack mt-2 lg:text-2xl text-xl">
        Discover how our expertise can take your business to the next level.<br/>
        Contact us today and let’s make it happen!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col space-y-2 mt-6 lg:mt-0">
        <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
              <img src={arrow_right} alt="Insight Create contact" className="h-4 w-4 mr-2" />
              Contact us
        </button>
        <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
              <img src={email} alt="Insight Create Email" className="h-4 w-4 mr-2" />
              Email us
        </button>
        <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
              <img src={whatsapp} alt="Insight Create Whatsapp" className="h-4 w-4 mr-2" />
              WhatsApp us
        </button>
        <button className="bg-icblack text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
              <img src={call} alt="Insight Create Call" className="h-4 w-4 mr-2" />
              Call us
        </button>
      </div>
    </div>
  );
};

export default SalesCard;
