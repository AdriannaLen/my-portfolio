import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import slideUp from "../assets/slide-up.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);
  const handleLinkClick = () => setToggle(false);

  // Funkcja sprawdzająca pozycję przewijania
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Nasłuchuj zdarzenia przewijania
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Umożliwia płynne przewijanie
    });
  };

  return (
    <nav
      id="navigation"
      className="w-full flex py-6 justify-between items-center navbar bg-lightPeach"
    >
      <a href="https://github.com/AdriannaLen" className="hidden md:block p-7">
        <img src={github} alt="github" className="w-10 h-10 object-contain" />
      </a>
      <a
        href="https://www.linkedin.com/in/adrianna-lenczewska-276185287/"
        className="hidden md:block"
      >
        <img
          src={linkedin}
          alt="linkedin"
          className="w-15 h-15 object-contain"
        />
      </a>
      <ul className="list-none md:flex hidden justify-end items-center flex-1  text-text">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`transition-transform duration-300 hover:scale-105 font-font-cormorantGaramond font-normal cursor-pointer text-[1rem] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-text`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center relative">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-50"
          onClick={handleToggle}
        />
        <div
          className={`fixed top-0 left-0 w-full h-auto bg-lightPeach p-6 transition-transform duration-300 ${
            toggle ? "translate-y-0" : "-translate-y-full"
          } z-40`}
        >
          <ul className="list-none flex flex-col justify-start flex-1 h-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-cormorantGaramond cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } w-full text-text`}
              >
                <a href={`#${nav.id}`} onClick={handleLinkClick}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full transition-colors duration-300 z-[100]"
          aria-label="Scroll to Top"
        >
          <img
            src={slideUp}
            alt="Scroll to Top"
            className="object-contain w-12 h-12"
          />
        </button>
      )}
    </nav>
  );
};

export default Navbar;