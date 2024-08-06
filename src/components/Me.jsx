const Me = () => {
  return (
    <div id="me" className="bg-slate-100 relative h-[100vh] flex flex-col lg:flex-row lg:justify-start items-start">
      <div className="mt-32 flex flex-col lg:flex-col top-0 lg:items-start h-full lg:ml-32">
        <div className="hidden ml-32 sm:block absolute h-full w-0.5 bg-black left-4 lg:left-0 top-0"></div>
        <p className="font-poppins ml-4 mt-0 text-center w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg">
          I am an experienced subcontracting buyer with 7 years of experience within international organization. This role
          honed my negotiation skills, relationship management, and precise planning abilities as well as attention to
          details. It helped understand IT environment and get to know the role of developers as I’ve been contracting
          them in terms of their roles. In pursuit of a career change, I began studying front-end development through
          Udemy. I acquire knowledge from online courses, video tutorials, and my studies at Software Academy. I began
          building small projects as a freelance. I am highly motivated, a quick learner, and excel at problem-solving. My
          superpower is combining attention to detail with creativity, which is invaluable in front-end development.
        </p>
        <ul className="font-poppins ml-4 mt-4 text-center w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg">
          <h1 className="text-center text-[32px]">Education</h1>
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