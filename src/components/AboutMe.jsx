
const AboutMe = () => {
  return (
    <div id="aboutme" className="font-poppins flex-col w-full flex justify-center py-12 h-auto bg-slate-800">
      <div className="flex justify-center items-center space-x-4">
    <h1 className="text-[24px] sm:text-[32px] uppercase tracking-wide text-dimWhite transform transition-transform duration-500 hover:scale-105">
      Adrianna Lenczewska
    </h1>
    <div className="h-[24px] sm:h-[32px] border-r-4 border-dimWhite"></div>
    <h2 className="text-[20px] sm:text-[32px] uppercase tracking-wide text-dimWhite transform transition-transform duration-500 hover:scale-105">
      Front End Developer
    </h2>
  </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <p className="font-poppins mt-20 text-center w-[45%] text-dimWhite text-lg sm:text-xl leading-relaxed space-y-4 p-6 rounded-lg transition-transform duration-500 hover:scale-105">
        I am an experienced subcontracting buyer with 7 years of experience within international organization. This role
 honed my negotiation skills, relationship management, and precise planning abilities as well as attention to
 details. It helped understand IT environment and get to know the role of developers as I’ve been contracring
 them in terms of their roles. In pursuit of a career change, I began studying front-end development through
 Udemy. I acquire knowledge from online courses, video tutorials, and my studies at Software Academy. I began
 building small projects as a freelance. I am highly motivated, a quick learner, and excel at problem-solving. My
 superpower is combining attention to detail with creativity, which is invaluable in front-end development.

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