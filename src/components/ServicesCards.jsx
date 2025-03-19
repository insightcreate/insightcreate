import { Link } from "react-router-dom";

const ServiceCard = ({ title, more, link, arrow_right }) => {
    const buttonStyle =
    "bg-icblack md:m-0 m-4 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden";
  return (
    <Link to={link} className="relative hover:scale-110 hover:z-50 transition-transform duration-500 cursor-pointer p-20 bg-icdark text-white border border-icblack hover:bg-icblack flex flex-col justify-between min-h-[200px]">
     
        <Link to={link} className="absolute top-4 right-4 text-iclightdark">
        <img src={arrow_right} alt="InsightCreate Arrow" className="h-4 w-4 ml-2" />
        </Link>
      <div>
          <span className="absolute top-12 left-10 text-iclightdark text-3xl flex items-center">
            {title} 
          </span>
        <h2 className="text-2xl text-iclightdark font-medium mt-12">{more}</h2>
      </div>
      {link && <span className="text-sm text-icdark mt-4"><span className={buttonStyle}>Explore<img src={arrow_right} alt="InsightCreate Arrow" className="h-4 w-4 ml-2" /></span></span>}
    </Link>
  );
};

export default function ServicesCards({arrow_right}) {
  const services = [
    { title: "Web Development", more: "Build seamless, high-performance web applications.", link: "web_development"},
    { title: "Mobile Applications", more: "Develop innovative mobile apps.", link: "mobile_development"},
    { title: "ERP & CRM Solutions", more: "Streamline operations and improve customer relations.", link: "erp_crm" },
    { title: "Branding & Design", more: "Craft a unique and memorable identity.", link: "branding_design" },
    { title: "Packaging Design", more: "Create compelling and unique packaging.", link: "packaging" },
    { title: "UI/UX Design", more: "User-centric designs for intuitive experiences", link: "uiux" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-20 md:p-12 p-4 bg-icdark ">

      {services.map((service, index) => (
        <ServiceCard key={index} {...service} arrow_right={arrow_right} />
      ))}
    </div>
  );
}
