import Image from "next/image";
import dynamic from 'next/dynamic';
dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });
import profilePic from '../../../public/me.jpg';

export const AboutSection = () => {
  return (
    <>
      <div id="aboutme" className="flex pt-20 h-screen flex-row-reverse">
        <div className="relative w-[500px] h-[500px]">
          <Image alt="notebook image" src={profilePic} layout="fill" objectFit="contain" />
        </div>
        <div className="flex flex-col gap-2 max-w-3xl">
          <h1 className="text-5xl font-bold min-w-[660px]">About Me</h1>
          <h2 className="text-2xl font-semibold pt-10 pr-10 text-justify">
            My Name Is John Tjandra Utomo From Informatics and from instigator 11 Marie Curie,
            I like to learn something new everyday,
            and i currently new student at Telkom University Surabaya 🎊.
            I like to coding to solve all of my problem and develop something to make it easier to use,
            Fun Fact i really love western songs and i always listen to music whenever its possible,
            and i dont like to play games usually i just coding or learning,
            my weakness is i have social anxiety mostly *I will tried to be more open **Hopefully**.
            Hope to be friends with you all 👋
        </h2>
        </div>
        <div className="pt-80 mx-auto">
        <lottie-player src="/lotties/down-arrow.json" background="transparent"  speed="1"  style={{ width: '400px', height: '400px' }} loop autoplay></lottie-player>
        </div>
      </div>
    </>
  );
};
