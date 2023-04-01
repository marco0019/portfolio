import Image from "../components/Image";
import "locomotive-scroll/dist/locomotive-scroll.css"
import '../App.css'
import HomeDark from '../images/Home-dark.svg'
import HomeLight from '../images/Home-light.svg'
import Text from "../components/Text";
import { useState } from "react";
import { motion } from "framer-motion";
import Table from "../components/Table";
import Slider from "../components/Slider";

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
    useState(() => {
        setDay(new Date())
    }, [new Date().getMinutes()])
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={'animate'}>
            <div data-scroll-container className='bg-transition flex flex-col'>
                <Image img={theme ? HomeLight : HomeDark} />
                <Slider duration={5}>
                    SITE of the DAY -
                </Slider>
                <h1 className="text-black dark:text-white text-5xl mt-24 max-w-4xl max-lg:text-3xl self-center text-center">
                    <Text text={'We design disruptive brands for organizations that aspire to have a positive social and environmental impact.'} duration={2000} theme={theme} />
                </h1>
                <div className="flex flex-wrap text-black dark:text-white thin mt-24 mb-24 items-center justify-around">
                    <h3>Manziana, Rome, Italy <br />Local time→{day.getHours()}:{day.getMinutes()}</h3>
                    <h3 className="ml-10 mr-16">{days[day.getDay()]}<br />{mounth[day.getMonth() - 1]} {day.getDate()}, {day.getFullYear()}</h3>
                </div>
                <Table>
                    <h1 className="text-white col">title</h1>
                    <p className="text-white col">sdfvdfvdfvvsf</p>
                    <p className="text-white col">sdfsvfvsfv</p>
                    <p className="text-white col">sdfvsfvsfdv</p>
                </Table>
                <section data-scroll data-scroll-speed="-10" data-scroll-direction="horizontal" id="about">
                    <h2 className="mt-20">About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>
                <section data-scroll data-scroll-speed="3" id="projects">
                    <h2>Projects</h2>
                    <ul>
                        <li data-scroll>Project 1</li>
                        <li data-scroll>Project 2</li>
                        <li data-scroll>Project 3</li>
                    </ul>
                </section>
                <section data-scroll data-scroll-speed="2" id="contact">
                    <h2>Contact</h2>
                    <p data-scroll data-scroll-speed="3">Email: info@mywebsite.com</p>
                </section>
            </div>
        </motion.div>
    )
}
export default Home;
/*<Slider duration={10}>
                    Play Digital & Beyond
                </Slider>
                */