import { technologies } from "../constants";
import logo from '../assets/logo.png';  // Poprawiony import logo

const AboutMe = () => {
  return (
    <div className="h-[80vh] font-cormorantGaramond serif relative flex-col w-full flex justify-center bg-paleSky">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[8rem] h-[8rem] sm:w-[16rem] sm:h-[16rem] rounded-full border-[0.5rem] border-lightPeach bg-paleSky flex justify-center items-center">
          {/* Dodaj logo jako obraz */}
          <img
            src={logo}
            alt="Logo"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col sd:flex-col sm:flex-col justify-center items-center sm:space-x-[1rem]">
        <h1 className="text-[1.5rem] sm:text-[2.625rem] mb-4 uppercase tracking-wide text-brown transition-transform duration-500 animate-fadeIn">
          Adrianna Lenczewska
        </h1>
        <div className="sm:block h-[1.5rem] sm:h-[2rem] mb-4 border-r-[0.2rem] sm:border-r-[0.25rem] border-text"></div>
        <h2 className="text-[1.5rem] sm:text-[2.625rem] mb-4 uppercase tracking-wide text-brown transition-transform duration-500 animate-fadeIn">
          Front End Developer
        </h2>
      </div>

      <div className="w-full overflow-x-auto mt-[1rem]">
        <ul className="flex justify-center sm:justify-center pt-[1.5rem] sm:space-x-[2rem] animate-fadeIn">
          {technologies.map((tech) => (
            <li key={tech.id} className="flex-shrink-0">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;