import { useRef } from 'react';
import { useInView } from 'framer-motion';
import '../App.css'
const Image = ({ img }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className='image' ref={ref}>
            <img src={img} alt='prova logo' style={{transform: isInView ? "translateY(00%)" : "translateY(100%)"}}/>
        </div>
    )
}
export default Image;