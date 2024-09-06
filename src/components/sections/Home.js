import Image from "next/image";
dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });
import Typewriter from 'typewriter-effect';
import dynamic from 'next/dynamic';

export const HomeSection = () => {
  return (
    <>
      <div id="home" className="flex pt-20 flex-col h-screen lg:flex-row">
      <Image
      src="/notebook.png"
      width={470}
      height={470}
      alt="notebook image"
      className="relative w-[470px] h-[470px] mx-auto"
    />
        <div className="flex flex-col gap-2 md:items-center">
          <h1 className="text-5xl font-bold min-w-[660px]">
            <Typewriter
              options={{
                strings: ['Tugas Rangkuman'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 className="text-5xl font-bold min-w-[660px]">
            <Typewriter
              options={{
                strings: ['Dewangkara Maetala 2024'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2 className="text-2xl pt-64 font-semibold min-w-[660px]">Rangkuman PKKMB Day 1 - Day 3</h2>
          <h3 className="min-w-[660px]">Created by John Tjandra Utomo - Informatika - Instigator 11</h3>
        </div>
        <div className="pt-80 mx-auto">
        <lottie-player src="/lotties/down-arrow.json" background="transparent"  speed="1"  style={{ width: '400px', height: '400px' }} loop autoplay></lottie-player>
        </div>
      </div>
    </>
  );
};
