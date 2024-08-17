'use client';
import Image from 'next/image';
import { Hero } from '../hero/Hero';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import SocialMediaIcons from '../social-media/Social';

export const Creative = () => {
  const container = useRef(null);
  //const background = useRef(null);
  //const introImage = useRef(null);
  useGSAP(
    () => {
      let tl = gsap.timeline();

      tl.from('.title', {
        y: '100%',
        stagger: 0.2,
        duration: 1.5,
        ease: 'back',
      });
    },
    { scope: container }
  );

  return (
    <section
      id="home"
      ref={container}
      className=" min-h-[calc(100vh-74px)]  grid lg:grid-cols-2 grid-cols-1 lg:place-items-center place-content-center  container mx-auto lg:px-0 xs:pt-0  xs:px-4  pt-8 px-6 lg:gap-4 gap-8 text-white  "
    >
      <div className=" w-fit   flex flex-col   text-white text-left">
        <div className=" overflow-hidden">
          <p className="title text-[clamp(3.5rem,8vw+1rem,12rem)] bg-hero-pattern bg-clip-text leading-none bg-[left_center]  ">
            Elegant
          </p>
        </div>
        <div className="   overflow-hidden">
          <p className="title text-[clamp(3.5rem,8vw+1rem,12rem)] bg-hero-pattern bg-clip-text bg-cover leading-none">
            Creative,
          </p>
        </div>
        <div className="    overflow-hidden">
          <p className=" title text-[clamp(3.5rem,8vw+1rem,12rem)] bg-hero-pattern bg-clip-text bg-bottom leading-none">
            Design
          </p>
        </div>
      </div>

      <div className=" space-y-6  mt-0 lg:mt-6 lg:block    overflow-hidden  lg:text-left   ">
        <h1 className="sm:text-3xl text-2xl">
          Hello and welcome to my portfolio
        </h1>
        <p className="text-xl my-test text-slate-400 w-[80%]">
          I am a dedicated Web Developer and Designer, passionate about creating
          responsive and visually compelling websites. With a strong focus on
          user experience and modern design, I bring ideas to life through
          elegant code and innovative solutions.
        </p>
        <SocialMediaIcons />
      </div>
    </section>
  );
};
