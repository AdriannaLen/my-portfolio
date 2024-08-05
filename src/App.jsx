import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Apps.jsx'
// import Carieer from './components/Carieer.jsx'
import styles from './style.js'
import Technologies from './components/Technologies.jsx'

const App = () => {
  return (
    <>
    <div className=" bg-slate-200 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
    <div className="w-full h-full md:h-[70vh] bg-slate-800 overflow-hidden">
     <AboutMe />
     </div>
     <Projects />
     {/* <Carieer /> */}
     <Technologies />
     </>
  )
}

export default App
