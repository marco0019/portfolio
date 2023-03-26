import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css"
import './App.css'
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [theme, setTheme] = useState(true)
    const containerRef = useRef(null);
    const handleMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY - window.scrollY })
    }
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            smartphone: {
                smooth: true,
            },
            lerp: 0.1,
            getDirection: true
        });
        CursorStyle()
        return () => {
            scroll.destroy();
        };
    }, []);
    if (theme) {
        document.addEventListener('mousemove', handleMove)
        document.getElementById('cursor').style.left = mousePosition.x + 'px'
        document.getElementById('cursor').style.top = mousePosition.y + 'px'
    }
    else document.getElementById('cursor').style.display = 'none'
    return (
        <div className={theme ? 'dark' : ''}>
            <div className="grid-underlay bg-white dark:bg-black">
                <div className="row">
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                    <div className="xxlarge-1">
                        <div className="dashed"></div>
                    </div>
                </div>
            </div>
            <div ref={containerRef}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home theme={theme} changeTheme={() => setTheme(!theme)} />} />
                        <Route path="/works" element={<Work theme={theme} changeTheme={() => setTheme(!theme)} />} />
                        <Route path="/contact" element={<Contact theme={theme} changeTheme={() => setTheme(!theme)} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
export default App;

function CursorStyle() {
    const cursor = document.querySelector('#cursor');
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('active'))
        link.addEventListener('mouseleave', () => cursor.classList.remove('active'))
    })
}