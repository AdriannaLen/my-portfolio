import { navLinks } from '../constants'

const Footer = () => {
  return (
    <div className="bg-slate-200 text-center">
       <ul className="list-none sm:flex hidden mx-8 justify-center items-center">
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
        <div className="font-poppins pb-8">Powered by <a href="https://www.qubit.cm/">qubit.cm</a></div>
    </div>
  )
}

export default Footer
