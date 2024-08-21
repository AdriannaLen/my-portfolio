import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Apps.jsx'
// import Carieer from './components/Carieer.jsx'
import styles from './style.js'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Me from './components/Me.jsx'
import Banner from './components/Banner.jsx'

const App = () => {
  return (
    <>
    <div className=" bg-lightPeach w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
     <AboutMe />
     <Me />
     <Projects />
     {/* <Carieer /> */}
     <Banner />
     <Contact />
     <Footer />
     </>
  )
}

export default App
