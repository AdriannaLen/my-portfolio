import { technologies } from "../constants";
const AboutMe = () => {
  return (
    <div className="h-[80vh] font-poppins relative flex-col w-full flex justify-center bg-slate-800">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="path_to_your_logo/logo.png" alt="AL Logo" className="w-40 h-40 rounded-full border-8 border-slate-200 bg-slate-500" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-4">
    <h1 className="text-[24px] sm:text-[42px] uppercase tracking-wide text-dimWhite transition-transform duration-500 hover:scale-105 animate-fadeIn">
      Adrianna Lenczewska
    </h1>
    <div className="hidden sm:block h-[24px] sm:h-[32px] border-r-4 border-dimWhite"></div>
    <h2 className="text-[24px] sm:text-[42px] uppercase tracking-wide text-dimWhite transition-transform duration-500 hover:scale-105 animate-fadeIn">
      Front End Developer
    </h2>
  </div>
  {/* <ul className="flex flex-wrap justify-center transition-transform duration-500 hover:scale-105 animate-fadeIn">
      {technologies.map((tech) => (
        <li key={tech.id} className="m-8">
          <img src={tech.img} alt={tech.name} className="w-16 h-16" />
        </li>
      ))}
    </ul> */}
     <div className="w-full overflow-x-auto mt-4">
        <ul className="flex justify-center sm:justify-center space-x-4 animate-fadeIn">
          {technologies.map((tech) => (
            <li key={tech.id} className="flex-shrink-0">
              <img src={tech.img} alt={tech.name} className="w-10 h-10 sm:w-16 sm:h-16" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;