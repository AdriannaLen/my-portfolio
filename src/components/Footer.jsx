import { navLinks } from '../constants'

const Footer = () => {
  return (
    <>
    <div className="bg-paleSky text-center py-8 flex flex-col sm:flex-row justify-around border-t border-black">
      <div className="font-poppins text-text">Powered by <a href="https://www.qubit.cm/">qubit.cm</a></div>
       <ul className="list-none sm:flex justify-center items-center">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`transition-transform duration-300 hover:scale-105 font-poppins font-normal cursor-pointer text-[16px] text-text px-4`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        </ul>
    </div>
    <div className="font-poppins pb-8 text-text bg-paleSky text-center flex flex-col sm:flex-row justify-around">
    <p>Copyright © 2022 <a href="https://www.adcode.it">adcode.it</a></p>
    <p>Polityka prywatności</p>
  </div>
  </>
  )
}

export default Footer
