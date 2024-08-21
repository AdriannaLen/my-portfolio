const Me = () => {
  return (
    <div
      id="me"
      className="bg-whitePeach pb-[2rem] relative min-h-[100vh] flex flex-col lg:flex-row lg:justify-start items-start"
    >
      {/* Pionowa linia */}
      <div className="hidden sm:block absolute h-full w-[0.125rem] bg-slate-600 left-[1.5rem] sm:left-[12rem] lg:left-[15%] top-0"></div>

      {/* Sekcja tekstowa */}
      <div className="mt-[8rem] sm:ml-[14rem] lg:ml-[20%] md:ml-0 flex flex-col lg:items-start h-full w-full lg:w-auto">
        <div className="flex-1">
          <h2 className="font-greatVibes text-text sm:items-start items-center text-[3rem] sm:text-[2.5rem] lg:text-[3rem] tracking-wider">
            Get to know me a little
          </h2>
          <p className="font-poppins mt-0 w-full sm:w-[70%] md:w-full lg:w-[60%] text-text text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-relaxed space-y-[1rem] p-[1.5rem] rounded-lg">
            I'm an experienced subcontracting buyer with 7 years of experience
            within international organization. This role honed my negotiation
            skills, relationship management, and precise planning abilities as
            well as attention to details. It helped me to understand IT
            environment and the role of developers. In pursuit of a career
            change, I began studying front-end development through Udemy and
            graduated Software Development Academy school. I began building
            small projects as a freelance. I am highly motivated, a quick
            learner, and excel at problem-solving. My superpower is combining
            attention to detail with creativity.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="font-poppins mt-0 w-full sm:w-[70%] md:w-full lg:w-[60%] text-text text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-relaxed space-y-[1rem] p-[1.5rem] rounded-lg">
            Graduated Kazimierz Wielki University and Software Development
            Academy as a Front-End Developer
          </h2>
        </div>
        <button
          type="submit"
          className="w-auto inline-block bg-lightCoral text-white p-4 rounded-2xl font-bold hover:bg-customBlue transition duration-300 mt-32 text-sm sm:text-base"
        >
          <a href="#contact">Want to get in touch? Click</a>
        </button>
      </div>

      {/* Dolna pozioma linia */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full">
        <div className="h-[0.125rem] bg-black w-full"></div>
      </div>
    </div>
  );
};

export default Me;
