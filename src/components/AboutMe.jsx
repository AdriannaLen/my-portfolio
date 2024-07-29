
const AboutMe = () => {
  return (
    <div id="aboutme" className="font-poppins flex-col w-full flex justify-center py-12 h-auto bg-green-100">
      <div className="flex justify-center items-center space-x-4">
    <h1 className="text-[24px] sm:text-[32px] uppercase tracking-wide text-gray-800 transform transition-transform duration-500 hover:scale-105">
      Adrianna Lenczewska
    </h1>
    <div className="h-[24px] sm:h-[32px] border-r-4 border-gray-800"></div>
    <h2 className="text-[20px] sm:text-[32px] uppercase tracking-wide text-gray-700 transform transition-transform duration-500 hover:scale-105">
      Front End Developer
    </h2>
  </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <p className="font-poppins mt-20 text-center text-gray-800 text-lg sm:text-xl leading-relaxed space-y-4 p-6 rounded-lg transition-transform duration-500 hover:scale-105">
          I am an experienced subcontracting buyer with 7 years of experience.<br className="hidden sm:block" />
          This role honed my negotiation skills,<br className="hidden sm:block" />
          relationship management, and precise planning abilities.<br className="hidden sm:block" />
          In the meantime, I began studying front-end development<br className="hidden sm:block" />
          through Udemy. I acquire knowledge from online courses,<br className="hidden sm:block" />
          video tutorials, and my studies at Software Academy.<br className="hidden sm:block" />
          I am highly motivated, a quick learner, and excel at problem-solving.<br className="hidden sm:block" />
          My superpower is combining attention to detail with creativity.
        </p>
        {/* Dodaj zdjęcie lub grafikę */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="About Me" 
          className="mt-8 rounded-full shadow-lg border-4 border-white transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutMe;