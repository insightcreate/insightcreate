const Footer = ({logodark, logo, whatsapp, arrow_right, email, call, insightcreate, insight, create, copy, socialIcons}) => {
    return (
      <footer className="bg-icdark text-icwhite py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
                <div className="flex items-center">
                    {/* <img src={insightcreate} alt="InsightCreate" className="" /> */}
                    <img src={logodark} alt="InsightCreate" className="w-60" />
                </div>
              <div className="flex space-x-4 text-xl mt-4">
                {/* <img src={socialIcons.WhatsApp} alt="Insight Create WhatsApp" className="h-6 w-6" /> */}
                <img src={socialIcons.Instagram} alt="Insight Create Instagram" className="h-6 w-6" />
                <img src={socialIcons.Facebook} alt="Insight Create Facebook" className="h-6 w-6 mr-2" />
                <img src={socialIcons.Linkedin} alt="Insight Create Linkedin" className="h-6 w-6 mr-2" />
                <img src={socialIcons.X} alt="Insight Create X" className="h-6 w-6 mr-2" />
                <img src={socialIcons.GitHub} alt="Insight Create GitHub" className="h-6 w-6 mr-2" />
                <img src={socialIcons.Medium} alt="Insight Create Medium" className="h-6 w-6 mr-2" />
                {/* <img src={socialIcons.Dev} alt="Insight Create Dev.io" className="h-6 w-6 mr-2" /> */}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl">Our Solutions</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>Mobile Applications</li>
                <li>Software Development</li>
                <li>ERP & CRM Solutions</li>
                <li>Branding & Design</li>
                <li>Packaging Design</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl">Company</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Our mission</li>
                <li>Contact us</li>
                <li>Hire us</li>
                <li>Join us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl">Terms and Policies</h3>
              <ul className="space-y-2">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Developer Policies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-icthemeblue mt-6 pt-4 flex flex-col md:flex-row justify-between text-xs text-icblack">
            <div className="lg:flex text-center">
                <div className="flex text-center">
                    <img src={copy} alt="Copy right insightcreate" className="h-4 w-4 mr-2" /> 
                    <span className="lg:text-sm sm:text-xs font-normal text-icgrey mr-1">Copyright 2025 |</span>
{/*                     <img src={insight} alt="Insight" className="h-3 w-2" />
                    <span className="lg:text-sm sm:text-xs font-normal text-icblack mr-2">nsight</span>
                    <img src={create} alt="Create" className="h-3 w-3" />
                    <span className="lg:text-sm sm:text-x font-normal text-icblack">reate Pvt. Ltd.</span> */}
                    <img src={logodark} alt="InsightCreate" className="h-5" />
                    <span className="lg:text-sm sm:text-x font-normal text-icgrey mr-1"> Pvt. Ltd.</span>
                </div>
                <div className="text-center">
                <span className="lg:text-sm sm:text-x font-normal text-icgrey ml-1 ">All rights reserved.</span>
                </div>
            </div>


            <div className="lg:flex lg:space-x-4">
                <button className="bg-icblack mt-2 min-w-60 text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
                <img src={call} alt="Insight Create Call" className="h-4 w-4 mr-2" />
                +91 7276626179
                </button>
                <button className="bg-icblack mt-2 min-w-60 text-icwhite px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center">
                <img src={email} alt="Insight Create Email" className="h-4 w-4 mr-2" />
                contact@insightcreate.com
                </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;  
