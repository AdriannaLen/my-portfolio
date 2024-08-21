import { technologies } from "../constants";
const AboutMe = () => {
  return (
    <div className="h-[80vh] font-poppins relative flex-col w-full flex justify-center bg-paleSky">
     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="relative w-[8rem] h-[8rem] sm:w-[16rem] sm:h-[16rem] rounded-full border-[0.5rem] border-slate-200 bg-paleSky flex justify-center items-center">
    {/* Kontener na litery A i D oraz napis code */}
    <div className="relative flex flex-col justify-center items-center h-full">
      {/* Litera A */}
      <span className="text-white opacity-70 text-[4rem] sm:text-[6rem] font-bold relative z-20">A</span>
      {/* Litera D, lekko przesunięta w lewo */}
      <span className="text-lightPeach text-[4rem] sm:text-[6rem] font-bold absolute left-1/2 transform -translate-x-1/3 -translate-y-1/3 z-10">D</span>
      {/* Napis "code" */}
      <span className="block text-slate-900 text-[0.75rem] sm:text-[1rem] font-semibold">CODE</span>
    </div>
  </div>
</div>
<div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-[1rem]">
  <h1 className="text-[1.5rem] sm:text-[2.625rem] uppercase tracking-wide text-deemBlue transition-transform duration-500 animate-fadeIn">
    Adrianna Lenczewska
  </h1>
  <div className="hidden sm:block h-[1.5rem] sm:h-[2rem] border-r-[0.25rem] border-deemBlue"></div>
  <h2 className="text-[1.5rem] sm:text-[2.625rem] uppercase tracking-wide text-deemBlue transition-transform duration-500 animate-fadeIn">
    Front End Developer
  </h2>
</div>

<div className="w-full overflow-x-auto mt-[1rem]">
  <ul className="flex justify-center sm:justify-center pt-[1.5rem] sm:space-x-[2rem] animate-fadeIn">
    {technologies.map((tech) => (
      <li key={tech.id} className="flex-shrink-0">
        <img src={tech.img} alt={tech.name} className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem]" />
      </li>
    ))}
  </ul>
</div>
    </div>
  );
};

export default AboutMe;