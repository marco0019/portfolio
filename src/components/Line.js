import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import './Line.css'

export default function Line({ theme, delay, type }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} style={{ height: 1, border: `.1px ${type} ${theme ? '#aaa' : '#666'}`, width: isInView ? '100%' : 0, transition: 'all 1s cubic-bezier(.215, .61, .355, 1)', transitionDelay: `${delay}ms`, marginTop: 20, marginBottom: 20 }}></div>
    )
};
const styles = {
    backgroundImage: 'linear-gradient(to bottom, #7a7a7a 0 10%, rgba(255, 255, 255, 0) 10%)',
    backgroundPosition: 'left top',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '1px 8px'
}
//background: theme ? '#aaa' : '#666'