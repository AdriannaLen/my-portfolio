import { navLinks } from "../constants";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-lightPeach text-text text-[1rem] sm:text-[1.5rem] border-t border-black py-8 flex flex-col sm:flex-row justify-around items-center">
      
      {/* Lewa kolumna - Powered by oraz Copyright */}
      <div className="flex flex-col items-center sm:items-start font-cormorantGaramond text-center sm:text-left">
        <div>
          Powered by <a href="https://www.qubit.cm/">qubit.cm</a>
        </div>
        <div className="mt-4">
          Copyright © 2022 <a href="https://www.adcode.it">adcode.it</a>
        </div>
      </div>
      
      {/* Środkowa kolumna - Logo */}
      <div className="flex justify-center items-center my-8 sm:my-0">
        <div className="relative w-[8rem] h-[8rem] sm:w-[16rem] sm:h-[16rem] rounded-full border-[0.5rem] border-lightPeach bg-lightPeach flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      
      {/* Prawa kolumna - Menu nawigacyjne */}
      <ul className="list-none flex flex-col justify-center items-center font-cormorantGaramond">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="transition-transform duration-300 hover:scale-105 font-normal cursor-pointer text-text px-4"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Footer;