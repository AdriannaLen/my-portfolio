import { navLinks } from '../constants'

const Footer = () => {
  return (
    <div className="bg-slate-200 text-center py-8 flex flex-col sm:flex-row justify-around">
      <div className="font-poppins">Powered by <a href="https://www.qubit.cm/">qubit.cm</a></div>
       <ul className="list-none sm:flex mx-8 justify-center items-center">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`transition-transform duration-300 hover:scale-105 font-poppins font-normal cursor-pointer text-[16px] text-black px-4`}
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
