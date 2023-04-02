import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

function Text({ children, duration }) {
    useEffect(() => {
    }, [children]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className='text-component'>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {children.toString().split(' ').map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                transform: isInView ? "none" : "translateY(100px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                transitionDelay: `${(index) * (duration / children.toString().length)}ms`,
                                overflow: 'hidden',
                                paddingTop: 5,
                                paddingBottom: 5
                            }}
                        >{item + ' '}
                        </span>
                    )
                })}
            </div>
        </div>
    );
}
export default Text;