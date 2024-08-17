'use client';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hscroll = () => {
  const wrapper = useRef(null);
  const slides = useRef(null);

  useGSAP(
    () => {
      let slideContainer = document.querySelector('.slide-container');
      let slides = gsap.utils.toArray('.slide-container section');
      let scrollTriggerTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.slide-container',
          pin: true,
          scrub: 1,
          end: '+=3000',
          markers: true,
        },
      });

      slides.forEach((slide) => {
        let text = slide.querySelectorAll('.anim');
        if (text.length === 0) return;

        gsap.from(text, {
          y: -130,
          opacity: 0,
          duration: 2,

          stagger: 0.1,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: scrollTriggerTween,
            start: 'left center',
            markers: true,
          },
        });
      });
    },
    { scope: wrapper }
  );

  return (
    <>
      <div className="h-[50vh]"></div>
      <div ref={wrapper} className="relative overflow-x-hidden ">
        <div className="w-[300vw] flex slide-container">
          <section className="w-[100vw] py-[10vw] h-screen flex justify-center items-center gap-20  bg-white">
            <section className="w-[40%] space-y-6">
              <h2 className="text-6xl">Ecommerce Website</h2>
              <p className="text-lg">
                This project is a fully functional e-commerce website that
                allows users to browse and purchase products.
              </p>
              <h3 className="text-3xl">Skills and Expertise</h3>
              <ul className=" text-lg">
                <li>Frontend Development: React, HTML5, Tailwind Css</li>
                <li>
                  Backend Development: Node.js, Express.js , mongoose, mongodb
                </li>
                <li>
                  UI/UX Design: Responsive Design, User-Centered Design,
                  Prototyping
                </li>
                <li>Tools and Technologies: Git, Stripe</li>
              </ul>

              <div className="flex gap-6">
                <a
                  className="inline-block bg-navy-black text-white py-2 px-3"
                  href="https://github.com/Kislame/ecommerce-app"
                  target="_blank"
                >
                  Source Code
                </a>
                <a
                  className="inline-block bg-navy-black text-white py-2 px-3"
                  href="https://ecommerce-app-bmlr.onrender.com"
                  target="_blank"
                >
                  Preview
                </a>
              </div>
            </section>
            <div className="lg:block hidden">
              <Image
                width={400}
                height={600}
                alt="Porject Two"
                src="/images/ecommerce-app.png"
              />
            </div>
          </section>
          <section className="w-[100vw] py-[10vw] h-screen grid grid-cols-2 place-items-center bg-white">
            <div className="w-1/2 ">
              <h2 className="text-6xl anim">Porject:1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                quasi. Quae cumque in tempore repellat eum consequatur corrupti
                vel unde, aspernatur, corporis iste! Earum numquam est, vitae
                hic ut voluptate!
              </p>
            </div>
            <div className="w-[420px] h-full bg-sky-600 lg:block hidden"></div>
          </section>
          <section className="w-[100vw] py-[10vw] h-screen grid grid-cols-2 place-items-center bg-white">
            <div className="w-1/2 ">
              <h2 className="text-6xl anim">Porject:1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                quasi. Quae cumque in tempore repellat eum consequatur corrupti
                vel unde, aspernatur, corporis iste! Earum numquam est, vitae
                hic ut voluptate!
              </p>
            </div>
            <div className="w-[420px] h-full bg-sky-600 lg:block hidden"></div>
          </section>
        </div>
      </div>
      <div className=" h-[100vh]"></div>
    </>
  );
};
