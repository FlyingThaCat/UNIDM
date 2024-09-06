"use client"
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DaySection = ({ day, date }) => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll(`.${date.toString().replace(/ /g, "").replace(/,/g, "")}`);
    splitTypes.forEach((char) => {
      const text = new SplitType(char, {
        types: "chars, words",
      });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    // Refresh ScrollTrigger after setting up the animations
    ScrollTrigger.refresh();
  }, [date]);

  return (
    <div id={`${day.toString().replace(/ /g, "").replace(/,/g, "").toLowerCase()}`} className="flex min-h-screen p-24 pb-10 items-center justify-center">
      <p className={`text-4xl ${date.toString().replace(/ /g, "").replace(/,/g, "")}`}>{day}<br />{date}</p>
    </div>
  );
};