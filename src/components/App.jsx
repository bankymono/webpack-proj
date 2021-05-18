import "../styles/index.scss";

import React from 'react'
import Recipes from '../components/Recipes'

const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>Oh hi, React</h1>
                    </section>
                </main>
            </section>  
            <Recipes />
        </>
    )
}

export default App
