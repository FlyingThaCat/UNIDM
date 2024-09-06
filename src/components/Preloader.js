"use client"
import { useEffect, useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const slideUp = {
    initial: {top:0},
    exit: {
        top:'-100vh', 
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    },
}

const opacity = { 
    initial: {opacity:0},
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 } 
    } 
};

const words = [
    "Dewangkara !!!",
    "Maetala !!!",
    "2024 !!!",
    "Choose Positivity ✅",
    "Break The Stigma 🤛",
    "Raising Excellence ✨"
];

export const Preloader = () => {
    const [state, setState] = useState({ index: 0, width: 0, height: 0 });

    useEffect(() => {
        setState(prev => ({ ...prev, width: window.innerWidth, height: window.innerHeight }));
    }, []);

    useEffect(() => {
        if (state.index >= words.length - 1) return;
    
        const delays = {
          "Dewangkara !!!": 700,
          "Maetala !!!": 500,
          "2024 !!!": 1000,
          "Choose Positivity ✅": 1500,
          "Break The Stigma 🤛": 1500,
          "Raising Excellence ✨": 1000,
        };
    
        const timeout = setTimeout(() => {
          setState(prev => ({ ...prev, index: prev.index + 1 }));
        }, delays[words[state.index]]);
    
        return () => clearTimeout(timeout);
      }, [state.index]);
    
      return (
        <LazyMotion features={domAnimation}>
          <m.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="h-full w-full bg-slate-500 fixed top-0 left-0 z-50 flex items-center justify-center"
          >
            {state.width > 0 && (
              <m.p variants={opacity} initial="initial" animate="enter" className="flex text-white text-5xl items-center absolute z-1">
                {words[state.index]}
              </m.p>
            )}
          </m.div>
        </LazyMotion>
      );
    }

