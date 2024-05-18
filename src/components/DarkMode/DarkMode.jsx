import React from "react";
import "./DarkMode.css";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = e => {
        if(e.target.checked) setDarkMode();
        else setLightMode()
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <FaSun className="sun"/>
                <MdDarkMode className="moon"/>
            </label>
        </div>
    );
};

export default DarkMode;
