import { useState } from'react'
import { navLinks } from '../constants'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Navbar = () => {
  const [toggle, setToggle ] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <h1 className="justify-start text-grey-500 text-[24px] mr-20"><b>my</b>PORTFOLIO</h1>
    <a href="https://github.com/AdriannaLen" className="p-7"><img src={github} alt="github" className="w-10 h-10 object-contain" /></a>
    <a href="https://www.linkedin.com/in/adrianna-lenczewska-276185287/"><img src={linkedin} alt="linkedin" className="w-15 h-15 object-contain" /></a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`transition-transform duration-300 hover:scale-105 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
        src={toggle ? close : menu }
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)}
        />
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
