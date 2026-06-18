import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Center } from './components/center.component'
import { Technologies } from './components/technologies.component'

function App() {

  return (
    <>

      <Center heroImg={heroImg} reactLogo={reactLogo} viteLogo={viteLogo} />

      <div className="ticks"></div>

      <Technologies />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
