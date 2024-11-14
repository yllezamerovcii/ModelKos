import React, { useState, useEffect } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import './themeSwitcher.scss';

function ThemeSwitcher() {
    // Initialize mode state from localStorage or default to 'dark'
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem("mode");
        console.log("Initial saved mode:", savedMode); // Log the initial value
        return savedMode ? savedMode : "dark"; // Default to 'dark'
    });

    useEffect(() => {
        console.log("Mode changed to:", mode); // Log whenever mode changes
        document.body.className = mode === "dark" ? "dark-mode" : "light-mode";

        // Store the current mode in localStorage
        localStorage.setItem("mode", mode);
    }, [mode]);

    return (
        <button className="mode-switcher-container">
            <div className='mode-switch' onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
                <div className="icon icon1"><BsSunFill /></div>
                <div className="icon icon2"><BsMoonStarsFill /></div>
            </div>
        </button>
    );
}

export default ThemeSwitcher;
