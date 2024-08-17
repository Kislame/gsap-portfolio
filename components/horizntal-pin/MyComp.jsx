'use client';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const HorizntalScroll = () => {
  const wrapper = useRef(null);
  const slides = useRef(null);

  useGSAP(
    () => {
      let slidesEl = document.querySelector('.races');
      let slidesWidth = slidesEl.offsetWidth;

      let amountToScroll = slidesWidth - window.innerWidth;
      const tween = gsap.to('.races', {
        x: -amountToScroll,
        duration: 3,
        ease: 'none',
      });
      ScrollTrigger.create({
        trigger: wrapper.current,
        start: 'top 20%',
        end: '+=' + amountToScroll,
        pin: true,
        animation: tween,
        invalidateOnRefresh: true,
        scrub: 1,
        markers: true,
      });
    },
    { scope: wrapper }
  );

  return (
    <>
      <div className="bg-sky-300 h-[60vh] wrapper "></div>
      <div
        ref={wrapper}
        className="relative w-full flex justify-center overflow-hidden "
      >
        <section
          ref={slides}
          className="races flex  w-fit bg-white flex-nowrap "
        >
          <div className="text-9xl p--[0.2em] w-[800px] h-screen flex-shrink-0 border border-orange-500">
            Lorem
          </div>
          <div className="text-9xl p--[0.2em] w-[800px] h-screen flex-shrink-0">
            Lorem
          </div>
          <div className="text-9xl p--[0.2em] w-[800px] h-screen flex-shrink-0">
            Lorem
          </div>
          <div className="text-9xl p--[0.2em] w-[800px] h-screen flex-shrink-0">
            Lorem
          </div>
          <div className="text-9xl p--[0.2em] w-[800px] h-screen flex-shrink-0">
            Lorem
          </div>
        </section>
      </div>
      <div className="bg-rose-300 h-[100vh]"></div>
    </>
  );
};
