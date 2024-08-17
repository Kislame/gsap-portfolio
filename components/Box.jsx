'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
gsap.registerPlugin(useGSAP);

export const Box = () => {
  const container = useRef();
  const circleRef = useRef();
  const [endX, setX] = useState(0);
  useGSAP(
    (context, contextSafe) => {
      gsap.to('.box', { x: endX });
      const handleCircle = contextSafe(() => {
        gsap.to(circleRef?.current, { x: 360 });
        console.log(context.data.length);
      });

      circleRef?.current.addEventListener('click', handleCircle);
      return () => {
        circleRef?.current.removeEventListener('click', handleCircle);
      };
    },

    { scope: container, dependencies: [endX] }
  );
  return (
    <div
      ref={container}
      className="
    border border-black rounded-md p-2 w-60 "
    >
      <button onClick={() => setX(Math.floor(Math.random() * 300))}>
        {' '}
        click me
      </button>
      <div
        ref={circleRef}
        className="w-[80px] h-[80px] bg-rose-400 rounded-full border"
      ></div>
      <div className=" box bg-cyan-600 w-20 h-20 text-black font-bold text-center my-4">
        BOX
      </div>
      <div className=" box bg-cyan-600 w-20 h-20 text-black font-bold text-center ">
        BOX
      </div>
    </div>
  );
};
