import { Link } from "react-router-dom";

const JoinCreatorTeam = ({join}) => {
  return (
    <div className="bg-icdark flex items-center bg-white p-6 shadow-md w-full lg:px-40 mx-auto">
      <div className="relative w-1/2">
        <img src={join} alt="Join InsightCreate" className="h-96 w-96" />
      </div>
      <div className="w-1/2 pl-6">
        <h2 className="lg:text-6xl text-4xl font-medium text-icwhite">
        <span className="">Join</span>
        <span className=""> Our</span>
        <span className=""> Creators</span>
        <span className=""> Team</span>
        </h2>
        <p className="text-icgrey mt-2 lg:text-2xl text-xl">
          Be a part of something big! Collaborate, innovate, and create with us.
        </p>
        <Link to={'join'}><button className="mt-4 bg-icblack text-icwhite px-4 py-2 rounded-lg transform hover:scale-110 transition-transform duration-500 cursor-pointer">
          Join Now
        </button></Link>
      </div>
    </div>
  );
};

export default JoinCreatorTeam;
