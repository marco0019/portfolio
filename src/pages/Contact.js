import Image from "../components/Image";
import "locomotive-scroll/dist/locomotive-scroll.css"
import '../App.css'
import NavBar from "../components/NavBar";
const Contact = ({ theme, changeTheme }) => {
    return (
        <div data-scroll-container className='flex flex-col bg-[#fefefe] dark:bg-black'>
            <NavBar theme={theme} changeTheme={changeTheme}/>
            <Image theme={theme} title='Homework' />
            <section data-scroll data-scroll-speed="-10" data-scroll-direction="horizontal">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
            <section data-scroll data-scroll-speed="3">
                <h2>Projects</h2>
                <ul>
                    <li data-scroll data-scroll-speed="1.5">Project 1</li>
                    <li data-scroll data-scroll-speed="2">Project 2</li>
                    <li data-scroll data-scroll-speed="2.5">Project 3</li>
                </ul>
            </section>
            <section data-scroll data-scroll-speed="2" data-scroll-offset="50">
                <h2>Contact</h2>
                <p data-scroll data-scroll-speed="3" data-scroll-delay="0.10">Email: info@mywebsite.com</p>
            </section>
        </div>
    )
}
export default Contact;