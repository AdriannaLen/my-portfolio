import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import styles from './style.js'

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
    <div className=" w-full overflow-hidden">
     <AboutMe />
     </div>
     <Projects />
     </>
  )
}

export default App
