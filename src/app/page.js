"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "../components/Preloader";
import { HomeSection } from "../components/sections/Home";
import { AboutSection } from "../components/sections/About";
import { TableOfContentSection } from "../components/sections/TableOfContent";
import { parseMarkdown } from '../utils/parseMarkdown';
import { Content } from "@/components/Content";
import { Testimonials } from "@/components/sections/Testimonials";
import { ScreenWarning } from "@/components/ScreenWarning";



export default function Home() {
  const [dayData, setDayData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPre, setIsPre] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Check if the device width is less than or equal to 768px
      const isMobileOrTabletDevice = window.innerWidth <= 768;
      if (isMobileOrTabletDevice) {
        setShowModal(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const fetchMarkdown = async () => {
      setIsLoading(true); // Set loading to true before fetch

      try {
        const response = await fetch('/contents.md');
        if (!response.ok) {
          throw new Error('Failed to fetch markdown');
        }
        const markdown = await response.text();
        const data = await parseMarkdown(markdown);

        setDayData(data); // Set the parsed day data
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch
      }
    };

    fetchMarkdown();
    const initializeScroll = async () => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll({
          el: mainElement, // Target the main container
          smooth: true,
          // Add other options here if needed
        });
      }
    };

    initializeScroll();

    setTimeout(() => {
      setIsPre(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 7000);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {showModal && <ScreenWarning onClose={() => setShowModal(false)} />}
    <AnimatePresence mode="wait">
        {isPre  && <Preloader />}
    </AnimatePresence>
    <div className="hidescroll items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 snap-y snap-mandatory overflow-y-scroll h-full">
      <div className="snap-start w-full h-full pt-28 pb-28">
        <HomeSection/>
      </div>
      <div className="snap-start w-full h-full pt-28 pb-28">
      <AboutSection/>
      </div>
      <div className="snap-start w-full h-full pt-28 pb-14">
      <TableOfContentSection/>
      </div>
      {!isLoading && dayData && <Content data={dayData}/>}
      <div className="snap-start w-full h-full pt-28 pb-14">
        <Testimonials/>
      </div>
    </div>
    </>
  );
}
