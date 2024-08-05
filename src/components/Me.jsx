const Me = () => {
  
  return (
    <div id="me" className="bg-slate-100 relative h-[100vh] flex flex-col lg:flex-row lg:justify-start">
  <div className="flex flex-col lg:flex-row lg:items-center h-full lg:ml-32">
    <div className="h-full w-0.5 bg-black"></div>
    <p
      className="font-poppins ml-4 mt-20 text-center w-full lg:w-[45%] text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 p-6 rounded-lg"
    >
      I am an experienced subcontracting buyer with 7 years of experience within international organization. This role
      honed my negotiation skills, relationship management, and precise planning abilities as well as attention to
      details. It helped understand IT environment and get to know the role of developers as I’ve been contracting
      them in terms of their roles. In pursuit of a career change, I began studying front-end development through
      Udemy. I acquire knowledge from online courses, video tutorials, and my studies at Software Academy. I began
      building small projects as a freelance. I am highly motivated, a quick learner, and excel at problem-solving. My
      superpower is combining attention to detail with creativity, which is invaluable in front-end development.
    </p>
  </div>
  <div className="absolute bottom-0 left-0 w-full">
    <div className="h-0.5 bg-black w-full"></div>
  </div>
</div>
  );
};

export default Me;