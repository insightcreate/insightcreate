const TreeLikeDesign = () => {
  return (
    <section className="bg-gradient-to-r from-icwhite to-icwhite text-white py-10">
      {/* Title Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-medium tracking-tight text-icblack mb-6">
          Unlock Your Business Potential with Our Expertise
        </h1>
        <p className="text-xl sm:text-2xl font-medium opacity-75 max-w-3xl mx-auto text-icblack">
          Our services are like branches of a tree, each offering a unique set of solutions that grow and evolve with your business needs.
        </p>
      </div>

      {/* Tree Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center px-6">
        {/** Service Cards */}
        {[
          {
            title: "Web Development",
            description: "Build seamless, high-performance web applications that delight users and deliver results.",
            shadow: "shadow-icthemepink",
          },
          {
            title: "Mobile Applications",
            description: "Develop innovative mobile apps that create unforgettable experiences on all devices.",
            shadow: "shadow-icthemeblue",
          },
          {
            title: "ERP & CRM Solutions",
            description: "Streamline operations and improve customer relations with our custom-tailored solutions.",
            shadow: "shadow-icthemepink",
          },
          {
            title: "Branding & Design",
            description: "Crafting a unique and memorable identity for your business through creative design.",
            shadow: "shadow-icthemeblue",
          },
          {
            title: "Packaging Design",
            description: "Create compelling and unique packaging that not only attracts attention but communicates your brand story effectively.",
            shadow: "shadow-icthemepink",
          },
          {
            title: "UI/UX Design",
            description: "User-centric designs that deliver intuitive experiences while ensuring a flawless journey across web and mobile.",
            shadow: "shadow-icthemeblue",
          },
        ].map((service, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className={`w-full max-w-[300px] rounded-lg p-8 shadow-2xl ${service.shadow} mb-4 transform transition-transform duration-500 ease-in-out group-hover:scale-105`}>
              <h3 className="text-xl font-semibold text-icblack text-center">{service.title}</h3>
            </div>
            <p className="text-center text-icblack opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-[280px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreeLikeDesign;
