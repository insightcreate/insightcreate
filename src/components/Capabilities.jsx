import { useEffect } from "react";
import JoinCreatorTeam from "./JoinCreatorTeam";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ServicesCards from "./ServicesCards";

const Capabilities = ({ join, arrow_right, logodark, logo, whatsapp, email, call, socialIcons, insightcreate, insight, create, copy }) => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
      

    const buttonStyle =
        "bg-icblack min-w-60 lg:m-0 m-4 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden";

    return (
        <>
            <div className="relative flex flex-col items-center text-center lg:py-10 md:py-10 py-6 px-6 bg-iccardpurple">
                {/* Breadcrumb (Aligned Left) */}
                <div className="w-full max-w-7xl mx-auto m-3">
                    <p className="text-icblack text-sm text-left"><span className="bg-iclightdark p-2 rounded-xl"><Link to={'/'}>Home</Link> / <span className="font-bold">Services</span></span></p>
                </div>

                {/* Title */}
                <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold text-icblack">
                    Unlock Your Business Potential with Our Capabilities
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                    Our services are like branches of a tree, each offering a unique set of solutions that grow and evolve with your business needs.
                </p>
            </div>

<ServicesCards arrow_right={arrow_right} />


            {/* Contact Form */}
            <div className="bg-iclightdark md:p-10 pt-10 pb-10 w-full flex flex-col items-center text-center">

                <p className="text-icblack font-medium text-2xl md:text-2xl mt-4 max-w-2xl z-10 relative">
                    Let's connect
                </p>

                <div className="lg:flex lg:space-x-4 mt-4 text-3xl text-icwhite z-10 relative">
                    
                    <Link to={'/contact'} className={buttonStyle} >
                        <img src={arrow_right} alt="Insight Create Contact" className="h-4 w-4 mr-2" />
                        Contact Us
                    </Link>

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

export default Capabilities;
