const Me = () => {
  return (
    <div id="me" className="bg-slate-100 relative h-[100vh] flex flex-col lg:flex-row lg:justify-start items-start">
      <div className="mt-32 flex flex-col lg:flex-col top-0 lg:items-start h-full lg:ml-32">
        <div className="hidden ml-32 sm:block absolute h-full w-0.5 bg-slate-600 left-4 lg:left-0 top-0"></div>
        <p className="font-poppins ml-8 text-slate-800 text-[32px] ">Get to know me</p>
        <p className="font-poppins ml-0 sm:ml-4 mt-0 w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg">
          Experienced subcontracting buyer with 7 years of experience within international organization. This role
          honed my negotiation skills, relationship management, and precise planning abilities as well as attention to
          details. It helped understand IT environment and the role of developers. In pursuit of a career change, I began studying front-end development through
          Udemy and graduated Software Development Academy school. I began building small projects as a freelance. I am highly motivated, a quick learner, and excel at problem-solving. My
          superpower is combining attention to detail with creativity. 
        </p>
        <ul className="font-poppins ml-0 sm:ml-4 w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg">
          <h2 className="font-poppins text-slate-800 text-[32px]">Education</h2>
          <li>Software Development Academy 2023-2024</li>
          <li>Kazimierz Wielki University</li>
        </ul>
      </div>
      <div className="hidden sm:block absolute bottom-0 left-0 w-full">
        <div className="h-0.5 bg-black w-full"></div>
      </div>
    </div>
  );
};

export default Me;