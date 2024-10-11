import { useState } from "react";
import { navLinks } from "../constants";
import logo from '../assets/logo.png';

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePrivacyPolicyClick = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="bg-lightPeach text-text text-[1rem] border-t border-black py-8 flex flex-col sm:flex-row justify-around items-center">
      
      {/* Lewa kolumna - Powered by oraz Copyright */}
      <div className="flex flex-col items-center sm:items-start font-cormorantGaramond text-center sm:text-left">
        <div>
          Powered by <a href="https://www.qubit.cm/">qubit.cm</a> | <a href="https://www.qubity.pl/">qubity.pl</a>
        </div>
        <div className="mt-4">
          <a href="#" onClick={handlePrivacyPolicyClick}>Polityka Prywatności</a>
        </div>
        <div className="mt-4">
          Copyright © 2022 <a href="https://www.adcode.it">adcode.it</a>
        </div>
      </div>
      
      {/* Środkowa kolumna - Logo */}
      <div className="flex justify-center items-center my-8 sm:my-0">
        <div className="relative w-[8rem] h-[8rem] sm:w-[12rem] sm:h-[12rem] rounded-full border-[0.5rem] border-lightPeach bg-lightPeach flex justify-center items-center">
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

      {/* Modal Polityki Prywatności */}
      {isModalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-full w-full sm:max-w-lg sm:p-8 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl mb-4">Polityka Prywatności</h2>
            <p className="mb-4">
              I. Postanowienia ogólne
              <br />
              Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników korzystających z formularza kontaktowego dostępnego na stronie www.adcode.it
            </p>
            <p className="mb-4">
              II. Administrator danych
              <br />
              Administratorem danych osobowych jest Adrianna Lenczewska z siedzibą pod adresem ul. Gdańska, Więcbork. Można się z nami skontaktować pod adresem e-mail: adalenczewska@adcode.it
            </p>
            <p className="mb-4">
              III. Cel zbierania danych osobowych
              <br />
              Dane osobowe, takie jak imię i adres e-mail, są zbierane wyłącznie w celu kontaktu z użytkownikiem na podstawie przesłanego formularza.
            </p>
            <p className="mb-4">
              IV. Rodzaj przetwarzanych danych osobowych
              <br />
              Przetwarzane dane to imię oraz adres e-mail podany przez użytkownika w formularzu kontaktowym.
            </p>
            <p className="mb-4">
              V. Okres przetwarzania danych osobowych
              <br />
              Dane osobowe będą przetwarzane przez okres niezbędny do realizacji celu, w jakim zostały zebrane, lub do momentu wycofania zgody przez użytkownika.
            </p>
            <p className="mb-4">
              VI. Prawa użytkowników
              <br />
              Użytkownicy mają prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych. Mogą również w każdej chwili wycofać zgodę na przetwarzanie danych, co nie wpłynie na zgodność z prawem przetwarzania przed jej wycofaniem. Wszelkie zgłoszenia należy kierować na adres e-mail: adalenczewska@adcode.it
            </p>
            <p className="mb-4">
              VII. Postanowienia końcowe
              <br />
              Administrator zastrzega sobie prawo do wprowadzenia zmian w niniejszej Polityce Prywatności. Wszelkie zmiany będą publikowane na tej stronie.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-lightCoral text-white p-3 rounded-lg font-bold hover:text-brown hover:bg-primary transition duration-300 mt-4"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
