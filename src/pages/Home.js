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
import logo from '../images/LOGO.svg'
import Parallax from "../components/Parallax";

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
    }, [Date.now()])
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={'animate'}>
            <div data-scroll-container className='bg-transition flex flex-col'>
                <Image img={theme ? HomeLight : HomeDark} />
                <div className="flex text-black dark:text-white thin mt-4 items-center justify-around">
                    <p className="text-lg">Manziana, Rome, Italy <br />Local time→{day.getHours()}:{day.getMinutes()}</p>
                    <p className="text-lg">{days[day.getDay()]}<br />{mounth[day.getMonth() - 1]} {day.getDate()}, {day.getFullYear()}</p>
                </div>
                <h1 className="text-black dark:text-white text-7xl mt-16 mb-72 max-w-5xl max-lg:text-3xl self-center text-center">
                    <Text duration={4000}>We design disruptive brands for organizations that aspire to have a positive social and environmental impact.</Text>
                </h1>
                <Table theme={theme}>
                    <p className="text-[#888] text-2xl thin col-33 mb-10">
                        <Text duration={1000}>Working worlwide for →</Text>
                    </p>
                    <p className="text-black dark:text-white thin text-2xl col-20 mb-10">
                        <Text duration={1000}>Arts & Culture</Text>
                        <Text duration={1000}>Industrial &</Text>
                        <Text duration={1000}>Agricolture</Text>
                    </p>
                    <p className="text-black dark:text-white thin text-2xl col-20 mb-10">
                        <Text duration={1000}>Civic & Public</Text>
                        <Text duration={1000}>Not-For-Profit</Text>
                    </p>
                    <p className="text-black dark:text-white thin text-2xl col-20">
                        <Text duration={1000}>Design & Archtecture</Text>
                        <Text duration={1000}>Professional Services</Text>
                        <Text duration={1000}>Fashion & Beaty</Text>
                    </p>
                </Table>
                <div className="mt-20">
                    <Slider duration={40} text={'Art & Culture'}>
                        <h1 className="text-[30rem]" data-scroll data-scroll-speed="10" data-scroll-direction="horizontal">Arts & Culture</h1>
                    </Slider>
                </div>
                <Parallax />
                <div id="fixed-elements">
                    <div>
                        <div>
                            <div data-scroll data-scroll-sticky
                                data-scroll-target="#fixed-elements">
                                <div data-scroll data-scroll-offset="200">
                                    <h3>
                                        04. <br />
                                        Fixed elements
                                    </h3>
                                    <div>
                                        <p>
                                            Create slides that stick and untick to the viewport while scrolling through.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div data-scroll
                                data-scroll-repeat>
                                <div id="fixed-target"></div>
                                <div data-scroll data-scroll-sticky data-scroll-target="#fixed-target"
                                    style={{ backgroundImage: "url('https://locomotivemtl.github.io/locomotive-scroll/dist/images/locomotive04.jpg')" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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