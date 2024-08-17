import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Learn = () => {
  const container = useRef();

  useGSAP(
    (context, contextSafe) => {
      gsap.to('.view', {
        x: 500,
        rotation: 360,
        duration: 3,
        scrollTrigger: {
          markers: true,
          trigger: '.view',
          start: 'top center', //first : is the element, second: is the scroller(the viewport)
          //means its gonna start when top of trigger el hits the center of viewport
          /*if use percentage or pixels, its relativze to the top,
           ex: 20px 80% means 20px from the top of trigger el
           when that hits 80% down the viewport start , default is top top*/
          end: 'top 200px' /* default is bottom top*/,
          onUpdate: (self) => console.log('update', self.progress.toFixed(3)),
          scrub: 3,

          // toggleActions: 'restart pause reverse pause',
          /*four postions:
           *first is when enterting the screen/viewport from the bottom default is play the rest are none none none,
           *second when  forward past the endpoint/viewport,
           * third when returning to the the viewport or coming back to it like resume
           * fourth when moving all the way back past  the start pause is good
           */
        },
      });
      // gsap.from('.swip', {
      //   x: -300,
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: '.swip',
      //     toggleActions: 'restart pause reverse pause',
      //   },
      // });
      gsap.utils.toArray('.panel').forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });
    },

    { scope: container }
  );
  return (
    <div
      ref={container}
      className="
    flex flex-col relative bg-[#ADA2FF] text-black items-center  "
    >
      <h1 className="text-heading font-bold uppercase tracking-widest">gsap</h1>

      <div className="flex gap-8">
        <span className="a bg-black h-10 w-10 rounded-full"></span>
        <span className="a bg-black h-10 w-10 rounded-full"></span>
        <span className="a bg-black h-10 w-10 rounded-full"></span>
        <span className="a bg-black h-10 w-10 rounded-full"></span>
      </div>

      <div className=" min-h-[600px] flex items-center justify-center">
        <p className="w-1/2 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut
          tempora a nam perspiciatis hic nobis maiores ea veniam nihil neque eos
          cumque repellat non amet explicabo doloribus, voluptatum dolorum!
          Eaque optio fuga quia cupiditate adipisci. Voluptas numquam quod
          commodi recusandae exercitationem!s
        </p>
      </div>

      <div className=" h-screen w-full bg-black flex flex-col items-center justify-center">
        <span className="view bg-orange-500 h-24 w-24 rounded-md  block"></span>
      </div>
      <div className=" panel h-screen w-full bg-orange-500 flex flex-col items-center justify-center">
        <h2 className=" swip text-heading font-semibold tracking-widest">
          scene two
        </h2>
        <p className="w-1/2 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut
          tempora a nam perspiciatis hic nobis maiores ea veniam nihil neque eos
          cumque repellat non amet explicabo doloribus, voluptatum dolorum!
          Eaque optio fuga quia cupiditate adipisci. Voluptas numquam quod
          commodi recusandae exercitationem!s
        </p>
      </div>

      <div className="panel h-screen w-full bg-emerald-600 flex items-center justify-center">
        <h2 className="text-heading font-semibold tracking-widest">
          scene two
        </h2>
      </div>
      <div className="panel h-screen w-full bg-rose-500 flex items-center justify-center">
        <h2 className="text-heading font-semibold tracking-widest">
          scene two
        </h2>
      </div>
    </div>
  );
};
