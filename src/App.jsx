import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe.jsx'
import styles from './style.js'

const App = () => {
  return (
    <>
    <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
    <div className=" w-full overflow-hidden">
     <AboutMe />
     </div>
     </>
  )
}

export default App
