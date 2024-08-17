import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Children, useRef, useState } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const FadeInParagraph = () => {
  const parentRef = useRef();
  const wordsRef = useRef();
  useGSAP(
    (context, contextSafe) => {
      // gsap.from('.target', {
      //   opacity: 0,
      //   scrollTrigger: {
      //     markers: true,
      //     trigger: '.target',
      //     start: 'top 50%',
      //     end: '+=300px',

      //     onUpdate: (self) => {
      //       //console.log('update', self.progress.toFixed(3));
      //       gsap.to('.target', { opacity: self.progress.toFixed(3) });
      //     },
      //   },
      // });

      gsap.to('.word', {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: wordsRef.current,
          scrub: true,
          start: 'top 100px',
          end: `+=${window.innerHeight / 1.5}`,
        },
      });
    },

    { scope: parentRef }
  );

  return (
    <section id="skills" className="text-white pt-[300px] " ref={parentRef}>
      <h2 className="text-center text-4xl md:text-7xl tracking-widest ">
        My Skills
      </h2>
      <div
        ref={wordsRef}
        className="h-screen flex justify-center items-center  text-slate-300 "
      >
        <Words />
      </div>
    </section>
  );
};

const Words = () => {
  const words =
    ` Frontend Development: React, Next.js, JavasScript, HTML5, CSS3, Tailwind Css, Responsive Web Design Backend Development: Express.js, Next.js, Sql`.split(
      ' '
    );
  return (
    <p className="flex flex-wrap p-10 text-2xl md:text-5xl max-w-[1000px] mx-auto justify-center   ">
      {words.map((word, i) => (
        <Word key={i}>{word}</Word>
      ))}
    </p>
  );
};

const Word = ({ children }) => {
  return <span className=" word mr-3 mt-3 opacity-20 ">{children}</span>;
};
