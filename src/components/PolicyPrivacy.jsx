import { useEffect } from "react";
import JoinCreatorTeam from "./JoinCreatorTeam";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Policy = ({ join, arrow_right, logodark, logo, whatsapp, email, call, socialIcons, insightcreate, insight, create, copy }) => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
      

    const buttonStyle =
        "bg-icblack min-w-60 md:m-0 m-4 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden";

    return (
        <>
            <div className="relative flex flex-col items-center text-center lg:py-10 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Breadcrumb (Aligned Left) */}
                <div className="w-full max-w-7xl mx-auto">
                    <p className="text-icblack text-sm text-left">Home / <span className="font-bold">Privacy Policy</span></p>
                </div>

                {/* Title */}
                <h1 className="lg:text-8xl md:text-5xl text-4xl font-medium text-icblack">
                Privacy Policy
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-2xl mt-4 max-w-8xl z-10 relative">
                Last modified: March 18, 2025
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                Privacy Notice
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                This Privacy Notice explains how InsightCreate collects, uses, and protects your personal information. By using our website and services, you agree to the terms of this Privacy Policy.
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                About InsightCreate
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                InsightCreate is an Indian company committed to providing digital solutions while ensuring data privacy and security.
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                Information We Collect and Use
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                We may collect and use the following personal information for providing services, recruitment, customer management, security, and marketing:

                Name
                Contact details (email, phone number, address)
                Date of birth
                Account information
                Purchase history
                Website usage data
                Employment and education details
                Location data
                Security-related information
                </p>
            </div>


            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                How We Collect Personal Information
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                We collect information directly from users, as well as from third-party sources when necessary.
                </p>
            </div>
           
            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                Data Retention
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                We retain personal data as long as required for business, legal, or regulatory purposes.
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                Sharing Personal Information
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                We may share data with:

                Service providers, vendors, and partners
                Third-party analytics and marketing platforms
                Legal authorities, if required by law
                We ensure that data shared outside India follows proper security protocols.
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                Your Rights
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                Depending on your location, you may have rights regarding your personal data, including access, correction, or deletion. To exercise these rights, contact us at <span className="font-bold">contact@insightcreate.com</span>
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Title */}
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-icblack">
                Third-Party Links
                </h1>

                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                </p>
            </div>

            <div className="relative flex flex-col text-left md:px-28 lg:py-16 md:py-10 py-6 px-6 bg-iclightdark">
                {/* Subtitle */}
                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                If you have any questions about this Privacy Policy, please contact us at <span className="font-bold">contact@insightcreate.com</span>
                </p>
            </div>


            {/* Contact Form */}
            <div className="bg-iclightdark md:p-10 pt-10 pb-10 w-full flex flex-col items-center text-center">


                <p className="text-icblack font-medium text-2xl md:text-2xl mt-4 max-w-2xl z-10 relative">
                    Let's connect
                </p>

                <div className="md:flex md:space-x-4 mt-4 text-3xl text-icwhite z-10 relative">
                    
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

export default Policy;
