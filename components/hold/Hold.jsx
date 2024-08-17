'use client';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Description } from '../description/Description';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hold = () => {
  const background = useRef(null);
  const introImage = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top',
        end: '+=500px',
        markers: true,
      },
    });

    timeline.from(background?.current, { clipPath: `inset(15%)` });
    ScrollTrigger.create({
      trigger: '.first',
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
      markers: true,
    });

    gsap.utils.toArray('.panel').forEach((panel, i) => {
      gsap.set(panel, { yPercent: 100 });
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });
  });

  return (
    <>
      <div className="w-full h-full">
        <section className="first h-full w-full flex  justify-center items-center relative">
          <div
            ref={background}
            className="w-full h-[140vh] flex items-center justify-center brightness-50"
          >
            <Image
              src={'/images/img4.jpg'}
              alt="background image"
              fill={true}
              priority={true}
            />
          </div>
          <div className=" flex justify-center mt-[35vh] absolute  ">
            <h1
              className="text-white text-7xl  z-[3] text-center whitespace-nowrap"
              data-scroll
              data-scroll-speed="0.7"
            >
              Elegant Design
            </h1>
          </div>
        </section>
        <Description />
        <section className="h-screen w-full panel bg-orange-600"></section>
        <section className="h-screen w-full  panel bg-rose-300"></section>
      </div>
    </>
  );
};
