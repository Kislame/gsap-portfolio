import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import Image from 'next/image';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Project = () => {
  const container = useRef();

  useGSAP(
    (context, contextSafe) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          markers: true,
          start: 'top center',
          end: '+=350px',
        },
      });
      tl
        //.from('.photo', {clipPath: `inset(0 25%)`, ease: 'back' , duration: 1, })
        .from('.title', { y: '96px', stagger: 0.1, duration: 1.5 });
    },

    { scope: container }
  );
  return (
    <div
      ref={container}
      className="
    relative bg-[white] text-black  h-screen"
    >
      <div className=" h-full flex justify-between items-center max-w-[1200px] mx-auto  ">
        <div className=" w-fit  flex flex-col">
          <div className="    overflow-hidden">
            <p className="title text-8xl">DIGITAL</p>
          </div>
          <div className="    overflow-hidden">
            <p className="title text-8xl">DESIGN</p>
          </div>
          <div className="   overflow-hidden">
            <p className="title text-8xl">CREATIVITY</p>
          </div>
        </div>

        <section className="">
          <div className=" photo h-[400px] w-[380px]">
            <img
              src="https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              alt="photto"
              className="  object-cover w-full h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
