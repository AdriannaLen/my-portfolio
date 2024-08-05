import { navLinks } from '../constants'

const Footer = () => {
  return (
    <div className="bg-slate-200">
       <ul className="list-none sm:flex hidden h-[20vh] mx-8 justify-center items-center flex-1">
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
    </div>
  )
}

export default Footer
