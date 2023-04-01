import './Slider.css'
import Table from './Table'
export default function Slider({ children, duration }) {
    return (
        <div className="reverse__marquee__inner flex w-min text-black dark:text-white" aria-hidden="true" style={{ animationDuration: `${duration}s` }}>
            <span class="text-8xl  lg:text-[17rem] xl:text-[19rem] inline-block mr-20 w-max ">{children}</span>
            <span class="text-8xl  lg:text-[17rem] xl:text-[19rem] inline-block mr-20 w-max ">{children}</span>
            <span class="text-8xl  lg:text-[17rem] xl:text-[19rem] inline-block mr-20 w-max ">{children}</span>
            <span class="text-8xl  lg:text-[17rem] xl:text-[19rem] inline-block mr-20 w-max ">{children}</span>
        </div>
    )
}
