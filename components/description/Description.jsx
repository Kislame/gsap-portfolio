import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

/*
a dedicated web developer, I specialize in developing responsive applications
 using the latest technologies, 
 including React, Next.js, and Node.js. 
 My approach combines a passion f
 or problem-solving with a keen eye for design, 
 resulting in intuitive and aesthetically pleasing user experiences.
  I aim to build solutions that not only meet but exceed client expectations.
*/

const phrases = [
  'A dedicated web developer, I specialize in developing responsive applications',
  'My approach combines a passion for problem-solving with a keen eye for design',
  'resulting in intuitive and aesthetically pleasing user experiences',
  'I aim to build solutions that not only meet but exceed client expectations',
];

export const Description = () => {
  return (
    <div className=" space-y-8  md:space-y-10 relative text-white  text-xl md:text-3xl lg:text-4xl uppercase  mt-[330px]  md:mt-[30vw]  mx-auto  max-w-[80%] lg:max-w-[90%]  ">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
};

function AnimatedText({ children }) {
  const text = useRef(null);

  useGSAP(() => {
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.Out',
    });
  }, []);

  return (
    <p className="m-0 relative leading-10" ref={text}>
      {children}
    </p>
  );
}
