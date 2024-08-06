const Contact = () => {
  return (
    <div id="contact" className="bg-white min-h-screen sm:h-[80vh] flex justify-center items-center relative py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start w-full max-w-6xl p-4 sm:p-8">
        {/* Formularz kontaktowy */}
        <div className="w-full sm:w-1/2 max-w-lg flex-shrink-0 relative z-10">
          <form className="bg-white p-8 border w-full h-auto relative sm:-top-16">
            <h1 className="text-2xl font-bold text-center">Kontakt</h1>
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

        {/* Dane kontaktowe */}
        <div className="w-full sm:w-1/2 max-w-lg flex-shrink-0 text-center">
          <div className="p-8 font-poppins bg-white border h-full">
            <p className="mb-2 text-[32px]"><strong>Kontakt</strong></p>
            <p className="mb-2"><strong>Adrianna Lenczewska</strong></p>
            <p className="mb-2"><strong>ul.Gdańska, Więcbork 89-410</strong></p>
            <p className="mb-2"><strong>+48 669 961 266</strong></p>
            <p className="mb-2"><strong>info@example.com</strong></p>
            <p>Jeżeli masz jakieś pytanie, możesz skontaktować się ze mną za pomocą formularza!</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;