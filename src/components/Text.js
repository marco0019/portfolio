import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function StringToArray(text) {
    var list = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            list.push(text[i]);
        } else {
            list.push(text[i].toString());
        }
    }
    console.log(list)
    return list;
}

function Text({ text, duration, theme }) {
    const [textArray, setTextArray] = useState([""])
    useEffect(() => {
        setTextArray(StringToArray(text))
    }, [text]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className='text-component'>
            <div style={{ display: 'flex', overflow: 'hidden', height: 'min-content', flexWrap: 'wrap' }}>
                {textArray.map((item, index) => {
                    return (
                        item == " " ?
                            <span key={index} style={{margin: 10}}></span> :
                            <span
                                key={index}
                                style={{
                                    transform: isInView ? "none" : "translateY(100px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                    transitionDelay: `${(index) * (duration / text.length)}ms`,
                                    overflow: 'hidden',
                                    color: theme ? '#fff' : '#000'

                                }}
                            >{item}
                            </span>
                    )
                })}
            </div>
        </div>
    );
}
export default Text;