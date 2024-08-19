const Me = () => {
  return (
    <div id="me" className="bg-slate-100 relative h-[100vh] flex flex-col lg:flex-row lg:justify-start items-start">
      <div className="hidden sm:block absolute h-full w-0.5 bg-slate-600 ml-52 lg:left-0 top-0"></div>
      <div className="mt-32 sm:ml-72 flex flex-col lg:flex-col top-0 lg:items-start h-full">
        <h2 className="font-poppins text-slate-800 text-[32px] ml-6">Hi !</h2>
        <p className="font-poppins mt-0 w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg">
          I'm an experienced subcontracting buyer with 7 years of experience within international organization. This role
          honed my negotiation skills, relationship management, and precise planning abilities as well as attention to
          details. It helped me to understand IT environment and the role of developers. In pursuit of a career change, I began studying front-end development through
          Udemy and graduated Software Development Academy school. I began building small projects as a freelance. I am highly motivated, a quick learner, and excel at problem-solving. My
          superpower is combining attention to detail with creativity. 
        </p>
        <ul className="font-poppins w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg">
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