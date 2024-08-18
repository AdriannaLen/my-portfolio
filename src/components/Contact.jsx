
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Contact = () => {
  return (
    <div id="contact" className="bg-white min-h-screen sm:min-h-[70vh] flex justify-center items-center relative py-16">
  <div className="flex flex-col sm:flex-row justify-between items-start w-full max-w-6xl p-4 sm:p-8">
    {/* Dane kontaktowe */}
    <div className="w-full sm:w-1/2 flex-shrink-0 text-start mt-8 sm:mt-0">
      <div className="p-8 font-poppins bg-white h-full">
        <p className="mb-2 text-[46px]">Kontakt</p>
        <p className="mb-2">Adrianna Lenczewska</p>
        <p className="mb-2">ul.Gdańska, Więcbork 89-410</p>
        <p className="mb-2">+48 669 961 266</p>
        <p className="mb-2">adriannalenn@gmail.com</p>
        <p>Jeżeli masz jakieś pytanie, możesz skontaktować się ze mną za pomocą formularza!</p>
        <span className="flex flex-row justify-center py-6">
        <a href="https://github.com/AdriannaLen" className="hide-on-mobile"><img src={github} alt="github" className="object-contain w-[44px]" /></a>
        <a href="https://www.linkedin.com/in/adrianna-lenczewska-276185287/" className="hide-on-mobile"><img src={linkedin} alt="linkedin" className="object-contain" /></a>
        </span>
      </div>
    </div>
    <div className="hidden sm:block absolute h-full w-0.5 bg-slate-600 ml-56 lg:left-0 top-0"></div>
    {/* Formularz kontaktowy */}
    <div className="w-full sm:w-1/2 flex-shrink-0 relative z-10 -mt-24 sm:-mt-48 sm-mr-8">
      <form className="bg-white p-8 border w-full h-auto relative">
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-sm font-medium">Imię</label>
          <input type="text" className="p-3 border rounded-lg" required />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2 text-sm font-medium">Email</label>
          <input type="email" className="p-3 border rounded-lg" required />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2 text-sm font-medium">Wiadomość</label>
          <textarea className="p-3 border rounded-lg" rows="4" required></textarea>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" required />
          <label className="text-sm">Zgadzam się na <a href="#" className="text-blue-500">politykę prywatności</a></label>
        </div>
        <button type="submit" className="w-full bg-slate-500 text-white p-3 rounded-lg font-bold hover:bg-slate-800 transition duration-300 mt-4">
          Wyślij
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default Contact;