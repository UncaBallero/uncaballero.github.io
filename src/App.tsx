import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>uncaballero.github.io</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Tecnologías</h2>
          <p>Aquí es donde sucede la magia.</p>
          <ul>
            <li>
              <a href="https://react.dev/" target="_blank">
                <i className="fa-brands fa-react fa-lg" style={{ color: "#61DAFB" }}></i>
                React
              </a>
            </li>
            <li>
              <a href="https://angular.dev/" target="_blank">
                <i className="fa-brands fa-angular fa-lg" style={{ color: "#C3002F" }}></i>
                Angular
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/" target="_blank">
                <i className="fa-brands fa-node fa-lg" style={{ color: "#339933" }}></i>
                Node.js
              </a>
            </li>
            <li>
              <a href="https://python.org/" target="_blank">
                <i className="fa-brands fa-python fa-lg" style={{ color: "#78a0c1" }}></i>
                Python
              </a>
            </li>
            <li>
              <a href="https://java.com/" target="_blank">
                <i className="fa-brands fa-java fa-lg" style={{ color: "#962300" }}></i>
                Java
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Nos vemos en internet ;)</h2>
          <p>Links personales.</p>
          <ul>
            <li>
              <a href="https://github.com/UncaBallero" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                UncaBallero
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                unca_ballero
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
