import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Text from "./Text";
import '../App.css'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

export default function NavBar({ theme, changeTheme }) {
    const [open, setOpen] = useState(false);
    useEffect(()=>{}, [theme])
    return (
        <div className="header">
            <nav className="link text-xl dark:text-white text-black" data-text="prova"><Link to={'/'}><Text text={'Home'} duration={500} theme={theme} /></Link></nav>
            <nav className="link text-xl dark:text-white text-black" data-text="prova"><Link to={'/works'}><Text text={'Work'} duration={500} theme={theme} /></Link></nav>
            <nav className="link text-xl dark:text-white text-black" data-text="prova"><Link to={'/contact'}><Text text={'Contact'} duration={500} theme={theme} /></Link></nav>
            <nav className="link">
                <button onClick={changeTheme} className='tex text-gray-500'>{theme ? <FaMoon /> : <FiSun />}</button>
            <p className="tx">prova</p>
            </nav>
        </div>
    )
}