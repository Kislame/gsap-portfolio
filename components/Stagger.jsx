'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Stagger = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from('.orb', { opacity: 0, stagger: 0.1 });
    },
    { scope: container }
  ); // <-- scope
  return (
    <div ref={container} className="flex gap-8">
      <div className="orb bg-slate-600 h-14 w-14 rounded-full"></div>
      <div className="orb bg-slate-600 h-14 w-14 rounded-full"></div>
      <div className="orb bg-slate-600 h-14 w-14 rounded-full"></div>
    </div>
  );
};
