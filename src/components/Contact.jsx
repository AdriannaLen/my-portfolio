import React, { useState, useEffect } from 'react';
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const contactRect = contactSection.getBoundingClientRect();
      const formRect = contactSection.querySelector('form').getBoundingClientRect();

      if (contactRect.top < window.innerHeight * 0.75) {
        setIsContactVisible(true);
      }
      if (formRect.top < window.innerHeight * 0.75) {
        setIsFormVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="contact"
      className="bg-white min-h-screen sm:min-h-[70vh] flex justify-center items-center relative py-16"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start w-full max-w-6xl p-4 sm:p-8">
        {/* Dane kontaktowe */}
        <div
          className={`w-full sm:w-1/2 flex-shrink-0 text-start mt-8 sm:mt-0 relative transition-transform duration-700 ease-out ${
            isContactVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <div className="p-8 font-cormorantGaramond bg-white h-full text-lg relative z-10 sm:-translate-y-[15%]">
            <p className="mb-5 text-[3rem]">Contact</p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">Adrianna Lenczewska</p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">ul.Gdańska, Więcbork 89-410</p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">+48 669 961 266</p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">ada.lenczewska@adcode.it</p>
            <p className="sm:text-[1.5rem] text-[1rem]">
              Anything you'd like to ask about? Please contact me using the form!
            </p>
            <span className="flex flex-row justify-start py-6">
              <a href="https://github.com/AdriannaLen" className="hide-on-mobile">
                <img src={github} alt="github" className="object-contain w-[2.75rem]" />
              </a>
              <a href="https://www.linkedin.com/in/adrianna-lenczewska-276185287/" className="hide-on-mobile">
                <img src={linkedin} alt="linkedin" className="object-contain" />
              </a>
            </span>
          </div>
        </div>

        <div className="hidden sm:block absolute h-full w-0.5 bg-slate-600 left-[15%] sm:left-[15%] lg:left-[15%] top-0"></div>

        {/* Formularz kontaktowy */}
        <div
          className={`w-full sm:w-1/2 mt-[20vh] sm:mt-0 flex-shrink-0 relative z-10 transition-transform duration-700 ease-out ${
            isFormVisible ? 'transform translate-x-0' : 'transform translate-x-full'
          } sm:mr-8 lg:mr-[25%]`}
        >
          <form className="bg-lightPeach p-8 border w-full h-auto relative">
            <div className="flex flex-col mt-6">
              <label className="mb-2 text-sm font-medium">Name</label>
              <input type="text" className="p-3 border rounded-lg" required />
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2 text-sm font-medium">Email</label>
              <input type="email" className="p-3 border rounded-lg" required />
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2 text-sm font-medium">Message</label>
              <textarea className="p-3 border rounded-lg" rows="4" required></textarea>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" required />
              <label className="text-sm">
                Zgadzam się na{" "}
                <a href="#" className="text-text">
                  politykę prywatności
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-lightCoral text-white p-3 rounded-lg font-bold hover:text-brown hover:bg-primary transition duration-300 mt-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
