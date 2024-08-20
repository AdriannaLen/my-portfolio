const Me = () => {
  return (
    <div id="me" className="bg-slate-100 pb-[2rem] relative min-h-[100vh] flex flex-col lg:flex-row lg:justify-start items-start">
      {/* Pionowa linia */}
      <div className="hidden sm:block absolute h-full w-[0.125rem] bg-slate-600 left-[1.5rem] sm:left-[12rem] lg:left-[15%] top-0"></div>

      {/* Sekcja tekstowa */}
      <div className="mt-[8rem] sm:ml-[14rem] lg:ml-[20%] flex flex-col lg:flex-col top-0 lg:items-start h-full w-full lg:w-auto">
        <h2 className="font-greatVibes text-slate-800 text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
          Hi !
        </h2>
        <p className="font-poppins mt-0 w-full lg:w-[40%] text-black text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-relaxed space-y-[1rem] p-[1.5rem] rounded-lg">
          I'm an experienced subcontracting buyer with 7 years of experience within international organization. This role honed my negotiation skills, relationship management, and precise planning abilities as well as attention to details. It helped me to understand IT environment and the role of developers. In pursuit of a career change, I began studying front-end development through Udemy and graduated Software Development Academy school. I began building small projects as a freelance. I am highly motivated, a quick learner, and excel at problem-solving. My superpower is combining attention to detail with creativity.
        </p>
        <ul className="font-poppins w-full lg:w-[40%] text-black text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-relaxed space-y-[1rem] p-[1.5rem] rounded-lg">
          <h2 className="font-poppins text-slate-800 text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]">
            Education
          </h2>
          <li>Software Development Academy 2023 - 2024</li>
          <li>Kazimierz Wielki University 2016 - 2018</li>
        </ul>
      </div>

      {/* Dolna pozioma linia */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full">
        <div className="h-[0.125rem] bg-black w-full"></div>
      </div>
    </div>
  );
};

export default Me;