import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Text from "./Text";
import '../App.css'
import './NavBar.css'
import { FaSun, FaMoon } from 'react-icons/fa'

const Item = () => {
    const [hover, useHover] = useState(false)
    return (
        <div lassName='navbar-item'>

        </div>
    )
}

export default function NavBar({ theme, changeTheme }) {
    return (
        <div className="header">
            <nav className="link text-xl dark:text-white text-black"><Link to={'/'}><Text text={'Home'} duration={500} theme={theme} /></Link></nav>
            <nav className="link text-xl dark:text-white text-black"><Link to={'/works'}><Text text={'Work'} duration={500} theme={theme} /></Link></nav>
            <nav className="link text-xl dark:text-white text-black"><Link to={'/contact'}><Text text={'Contact'} duration={500} theme={theme} /></Link></nav>
            <nav><button onClick={changeTheme} className='text-black dark:text-white'>{theme ? <FaMoon /> : <FaSun />}</button></nav>
        </div>)
}