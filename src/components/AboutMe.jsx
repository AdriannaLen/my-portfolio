import { technologies } from "../constants";
const AboutMe = () => {
  return (
    <div className="h-[80vh] font-poppins flex-col w-full flex justify-center bg-slate-800">
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-4">
    <h1 className="text-[20px] sm:text-[32px] uppercase tracking-wide text-dimWhite transition-transform duration-500 hover:scale-105 animate-fadeIn">
      Adrianna Lenczewska
    </h1>
    <div className="hidden sm:block h-[24px] sm:h-[32px] border-r-4 border-dimWhite"></div>
    <h2 className="text-[20px] sm:text-[32px] uppercase tracking-wide text-dimWhite transition-transform duration-500 hover:scale-105 animate-fadeIn">
      Front End Developer
    </h2>
  </div>
  <ul className="flex flex-wrap justify-center transition-transform duration-500 hover:scale-105 animate-fadeIn">
      {technologies.map((tech) => (
        <li key={tech.id} className="m-8">
          <img src={tech.img} alt={tech.name} className="w-16 h-16" />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default AboutMe;