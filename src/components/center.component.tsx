import { useState } from 'react'

export function Center({heroImg, reactLogo, viteLogo}: {heroImg: string, reactLogo: string, viteLogo: string}) {
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
        </>
    );
};