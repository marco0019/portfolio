import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import { FaTimes, FaMoon } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import { FiSun } from 'react-icons/fi'
import logo from '../images/LOGO.svg'

export default function NavBar({ theme, changeTheme }) {
    const [open, setOpen] = useState(false);
    const head = useRef(null)
    useEffect(() => {
        if (open & !head.current.classList.contains('active')) head.current.classList.add('active');
        else if (head.current.classList.contains('active')) head.current.classList.remove('active');
    }, [theme, open]);
    const HeaderLink = ({ path, text }) => {
        const handleClick = (el) => {
            const links = document.querySelectorAll('.header-link');
            links.forEach(link => {
                link.classList.remove('active');
            })
            el.classList.add('active');
        }
        const el = useRef(null);
        return <a className="header-link" ref={el} onClick={() => handleClick(el.current)}><Link to={`${path}`}>{text}</Link></a>
    }
    return (
        <div className="header" ref={head}>
            <header style={{
                display: open ? "flex" : 'none',
                opacity: Number(open),
                background: theme ? '#222' : '#ddd',
                color: theme ? '#fff' : '#000',
                width: open ? '100%' : 0
            }}>
                <nav className={`item-one-${theme ? 'light' : 'dark'}`}>
                    <p>home</p>
                    <HeaderLink path={'works'} text={'start'} />
                    <HeaderLink path={''} text={'about'} />
                    <p>title</p>
                    <HeaderLink path={''} text={'description'} />
                    <HeaderLink path={'#about'} text={'end'} />
                </nav>
                <nav className={`item-two-${theme ? 'light' : 'dark'}`}>
                    <p>about</p>
                    <HeaderLink path={''} text={'Hi, I\'m marco'} />
                    <HeaderLink path={''} text={'job'} />
                    <HeaderLink path={''} text={'life'} />
                    <HeaderLink path={''} text={'hobbies'} />
                    <HeaderLink path={''} text={'contact'} />

                </nav>
                <nav className={`item-three-${theme ? 'light' : 'dark'}`}>
                    <p>works</p>
                    <HeaderLink path={''} text={'BeUS'} />
                    <HeaderLink path={''} text={'Striker'} />
                    <HeaderLink path={''} text={'chat app'} />
                    <HeaderLink path={''} text={'other...'} />

                </nav>
            </header>
            <div className="menu">
                <img src={logo} alt="logo menu" width={50} style={{ marginRight: 6, marginLeft: 6 }} />
                <div className="header_btn" style={{ background: theme ? '#222' : '#ddd', color: theme ? '#fff' : '#000' }}>
                    <p className="flex">home<p style={{ color: `var(--clr-menu-${theme ? 'light' : 'dark'}-two)` }}>{window.location.pathname.replace('/', '.')}</p></p>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes /> : <CgMenu />}
                    </button>
                </div>
                {
                    open ? null :
                        <button onClick={() => changeTheme()} style={{ color: theme ? '#fff' : '#000' }} className={`btn-theme item-one-${theme ? 'dark' : 'light'}`}>
                            {theme ? <FiSun /> : <FaMoon />}
                        </button>
                }
            </div>
        </div>
    )
}