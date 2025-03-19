import { Link } from "react-router-dom";

const Footer = ({logodark, logo, whatsapp, arrow_right, email, call, insightcreate, insight, create, copy, socialIcons}) => {
    return (
      <footer className="bg-icdark text-icwhite py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
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
              <h3 className="font-semibold mb-2 text-xl">Our Capabilities</h3>
              <ul className="space-y-2">
                {/* <li>Product Development</li> */}
                <li><Link to={'/servics/web_development'}>Web Development</Link></li>
                <li><Link to={'/servics/mobile_development'}>Mobile Applications</Link></li>
                <li><Link to={'/servics/web_development'}>Software Development</Link></li>
                <li><Link to={'/servics/erp_crm'}>ERP & CRM Solutions</Link></li>
                <li><Link to={'/servics/branding_design'}>Branding & Design</Link></li>
                <li><Link to={'/servics/packaging'}>Packaging Design</Link></li>
                <li><Link to={'/servics/uiux'}>UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl">Company</h3>
              <ul className="space-y-2">
                <li><Link to={'/about'}>About us</Link></li>
                {/* <li>Our mission</li> */}
                <li><Link to={'/contact'}>Contact us</Link></li>
                <li><Link to={'/contact'}>Hire us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-icthemeblue mt-6 grid grid-cols-1 md:grid-cols-3 justify-between text-xs text-icblack">

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

            <div className="p-4 md:ml-6">
                <div className="flex text-center">
                    <img src={copy} alt="Copy right insightcreate" className="h-4 w-4 mr-2" /> 
                    {/* <img src={logodark} alt="InsightCreate" className="h-5" /> */}
                    <span className="lg:text-sm sm:text-x font-normal text-icgrey mr-1">Copyright 2025 | InsightCreate Pvt. Ltd.</span>
                </div>
            </div>

            <div className="text-center p-4">
              <Link to={'/policy'}><span className="text-icgrey lg:text-sm sm:text-xs font-normal">Privacy Policy</span></Link>
            </div>

          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;  
