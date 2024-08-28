import { useState, useEffect } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import Alert from "../components/Alert";

const Contact = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3e5a83b-3af3-4fe3-a185-1751dfb0e416");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setAlertMessage("Your message was sent successfully!");
    } else {
      setAlertMessage("There was an error sending your message.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const contactRect = contactSection.getBoundingClientRect();
      const formRect = contactSection
        .querySelector("form")
        .getBoundingClientRect();

      if (
        contactRect.top < window.innerHeight * 0.75 &&
        contactRect.bottom > 0
      ) {
        setIsContactVisible(true);
      } else {
        setIsContactVisible(false);
      }

      if (formRect.top < window.innerHeight * 0.75 && formRect.bottom > 0) {
        setIsFormVisible(true);
      } else {
        setIsFormVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <div
      id="contact"
      className="bg-white min-h-screen sm:min-h-[70vh] flex justify-center items-center relative py-16 overflow-x-hidden"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start w-full max-w-6xl p-4 sm:p-8">
        <div
          className={`w-full sm:w-1/2 flex-shrink-0 text-start mt-8 sm:mt-0 relative transition-transform duration-700 ease-out ${
            isContactVisible ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="p-8 font-cormorantGaramond bg-white h-full text-lg relative z-10 sm:-translate-y-[15%]">
            <p className="mb-5 text-[3rem]">Contact</p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">
              Adrianna Lenczewska
            </p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">
              ul.Gdańska, Więcbork 89-410
            </p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">+48 669 961 266</p>
            <p className="mb-2 sm:text-[1.5rem] text-[1rem]">
              ada.lenczewska@adcode.it
            </p>
            <p className="sm:text-[1.5rem] text-[1rem]">
              Anything you would like to ask about? Please contact me using the
              form!
            </p>
            <span className="flex flex-row justify-start py-6">
              <a
                href="https://github.com/AdriannaLen"
                className="hide-on-mobile"
              >
                <img
                  src={github}
                  alt="github"
                  className="object-contain w-[2.75rem]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/adrianna-lenczewska-276185287/"
                className="hide-on-mobile"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="object-contain"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="hidden sm:block absolute h-full w-0.5 bg-slate-600 left-[15%] sm:left-[15%] lg:left-[15%] top-0"></div>

        <div
          className={`w-full sm:w-1/2 mt-[20vh] sm:mt-0 flex-shrink-0 relative z-10 transition-transform duration-700 ease-out ${
            isFormVisible ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
          } sm:mr-8 lg:mr-[25%]`}
        >
          <form onSubmit={onSubmit} className="bg-lightPeach p-8 border w-full h-auto relative">
            <div className="flex flex-col mt-6">
              <label className="mb-2 text-sm font-medium">Name</label>
              <input type="text" name="name" className="p-3 border rounded-lg" required />
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2 text-sm font-medium">Email</label>
              <input type="email" name="email" className="p-3 border rounded-lg" required />
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2 text-sm font-medium">Message</label>
              <textarea
                className="p-3 border rounded-lg"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lightCoral text-white p-3 rounded-lg font-bold hover:text-brown hover:bg-primary transition duration-300 mt-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default Contact;