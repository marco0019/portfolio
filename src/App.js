import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import React, { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css"
import './App.css'
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { Grid } from './components/GridBG';
import NavBar from './components/NavBar';
import { AnimatePresence } from 'framer-motion';
import logo from './images/LOGO.svg'
import Logo from './components/Logo';

function App() {
    const [theme, setTheme] = useState(true)
    const containerRef = useRef(null);
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            smartphone: {
                smooth: false,
            },
            lerp: 0.1,
            getDirection: true
        });
        cursorLink()
        return () => {
            scroll.destroy();
        };
    }, []);
    const changeTheme = () => setTheme(!theme);
    return (
        <BrowserRouter>
            <div className={`${theme ? 'dark' : ''}`}>
                <Grid />
                <div ref={containerRef} className='w-screen overflow-x-hidden'>
                    <AnimatePresence mode='wait'>
                        <Routes>
                            <Route path="/" element={<Home theme={theme} changeTheme={changeTheme} />} />
                            <Route path="/works" element={<Work theme={theme} changeTheme={changeTheme} />} />
                            <Route path="/contact" element={<Contact theme={theme} changeTheme={changeTheme} />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
            <div className='fixed top-5 right-5'>
            <Logo width={80}/>
            </div>
            <NavBar theme={theme} changeTheme={changeTheme} />
        </BrowserRouter>
    );
}
export default App;

function cursorLink() {
    const links = document.querySelectorAll('.link');
    const cursor = document.querySelector('#cursor');
    const cursorText = document.querySelector('#cursor-text');
    const text = document.querySelector('#cursor-text p');
    links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active')
            text.innerText = link.getAttribute('data-text');
            cursorText.classList.add('enter')
            cursorText.classList.remove('leave');
        })
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active')
            cursorText.classList.add('leave')
            cursorText.classList.remove('enter')
        })
    })
}