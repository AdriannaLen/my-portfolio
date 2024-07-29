import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe.jsx'
import styles from './style.js'

const App = () => {
  return (
    <>
    <div className="bg-slate-300 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
     <AboutMe />
     </>
  )
}

export default App
