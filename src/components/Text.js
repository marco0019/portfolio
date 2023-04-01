import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function Text({ text, duration, theme }) {
    useEffect(() => {
    }, [text]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className='text-component'>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {text.split(' ').map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                transform: isInView ? "none" : "translateY(100px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                transitionDelay: `${(index) * (duration / text.length)}ms`,
                                overflow: 'hidden',
                                color: theme ? '#fff' : '#000',
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