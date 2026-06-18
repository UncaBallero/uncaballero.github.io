import heroImg from './assets/terminal.webp'
import './App.css'
import { Center } from './components/center.component'
import { Technologies } from './components/technologies.component'
import { CatDownScreen } from './components/random-components/cat-down-screen.component'

function App() {

  return (
    <>

      <Center heroImg={heroImg} />

      <div className="ticks"></div>

      <Technologies />

      <div className="ticks"></div>
      <section id="spacer">
        <CatDownScreen />
      </section>
    </>
  )
}

export default App
