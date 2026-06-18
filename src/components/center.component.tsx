import { useState } from 'react'

export function Center({ heroImg }: { heroImg: string }) {
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center"  className="mt-20">
                <div className="hero">
                    <img src={heroImg} className="w-lg" alt="" />
                </div>
                <div>
                    <h1>uncaballero.github.io</h1>
                    <p>This is my personal website.</p>
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