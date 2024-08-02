
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
        <p className="font-poppins mt-20 text-center w-[50%] text-gray-800 text-lg sm:text-xl leading-relaxed space-y-4 p-6 rounded-lg transition-transform duration-500 hover:scale-105">
        With 7 years of experience as a subcontracting buyer in an international organization, I have honed my negotiation skills, relationship management, and precise planning abilities. My role required a high level of attention to detail and strategic thinking, allowing me to manage complex projects and secure favorable terms. Additionally, my strong communication skills and fluency in English have enabled me to build effective working relationships within multicultural organizations. I am confident that my background and skills make me an excellent fit for the buyer position you are seeking to fill. I am eager to contribute to your team and help achieve your organization’s goals.

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