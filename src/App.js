import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
function App() {
    const [darkMode, setDarkMode] = useState(false)

    function changeDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <div className={`font-inter ${darkMode && 'dark'}`}>
            <Navbar toggleDarkMode={changeDarkMode} />
            <Main />
        </div>
    )
}

export default App;
