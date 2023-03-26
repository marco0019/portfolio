import Image from "../components/Image";
import "locomotive-scroll/dist/locomotive-scroll.css"
import '../App.css'
import HomeDark from '../images/Home-dark.svg'
import HomeLight from '../images/Home-light.svg'
import NavBar from "../components/NavBar";
import Text from "../components/Text";
import { useState } from "react";
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
const mounth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const Home = ({ theme, changeTheme }) => {
    const [day, setDay] = useState(new Date())
    return (
        <div data-scroll-container className='bg-transition flex flex-col '>
            <NavBar theme={theme} changeTheme={changeTheme} />
            <Image img={theme ? HomeLight : HomeDark} />
            <div className="flex flex-wrap text-black dark:text-white thin mt-52">
                <h3>Manziana, Rome, Italy <br />Local time→{day.getHours()}:{day.getMinutes()}</h3>
                <h3 className="ml-10 mr-16">{days[day.getDay()]}<br/>{mounth[day.getMonth() - 1]} {day.getDate()}, {day.getFullYear()}</h3>
                <h1 className="ml-16"><Text text={'Prova della mia escrizione'} theme={theme} duration={300}/></h1>
            </div>
            <section data-scroll data-scroll-speed="-10" data-scroll-direction="horizontal">
                <h2 className="mt-20">About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
            <section data-scroll data-scroll-speed="3">
                <h2>Projects</h2>
                <ul>
                    <li data-scroll>Project 1</li>
                    <li data-scroll>Project 2</li>
                    <li data-scroll>Project 3</li>
                </ul>
            </section>
            <section data-scroll data-scroll-speed="2" data-scroll-offset="50">
                <h2>Contact</h2>
                <p data-scroll data-scroll-speed="3" data-scroll-delay="0.10">Email: info@mywebsite.com</p>
            </section>
        </div>
    )
}
export default Home;