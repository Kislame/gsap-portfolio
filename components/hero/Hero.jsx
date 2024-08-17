'use client';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hero = () => {
  const background = useRef(null);
  const introImage = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top',
        end: '+=500px',
      },
    });

    timeline.from(background?.current, { clipPath: `inset(15%)` });
  });

  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={background}
        className="  w-full h-[140vh] absolute brightness-50"
      >
        <Image
          src={'/images/img4.jpg'}
          alt="background image"
          fill={true}
          priority={true}
        />
      </div>

      <div className=" flex justify-center mt-[35vh] relative ">
        <h1
          className="text-white text-[7vw]  z-[3] text-center whitespace-nowrap"
          data-scroll
          data-scroll-speed="0.7"
        >
          Elegant Design
        </h1>
      </div>
    </div>
  );
};
