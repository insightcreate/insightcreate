

const Technologies = ({techIcons}) => {
    const technologies = Object.entries(techIcons).map(([name, logo]) => ({
        name,
        logo,
      }));

  return (
    <div className="w-full overflow-hidden bg-icdark py-6">
        <div className="text-center mb-10 px-4">
        <h3 className="lg:text-4xl md:text-2xl text-xl font-medium tracking-tight text-icwhite mb-6">
        Tech That Makes It Happen
        </h3>
      </div>
      <div className="relative flex whitespace-nowrap">
        {/* Duplicated content for smooth infinite scrolling */}
        <div className="flex animate-marquee space-x-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-16 w-16 object-contain"
              />
              <p className="text-icwhite mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Duplicate the same list for seamless looping */}
        <div className="flex animate-marquee space-x-8" aria-hidden="true">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-16 w-16 object-contain"
              />
              <p className="text-icwhite mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
