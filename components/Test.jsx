'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Creative } from './creative-hero/Creative';
import Image from 'next/image';
gsap.registerPlugin(useGSAP);

export const MyPortfolio = () => {
  const container = useRef();

  useGSAP(
    (context, contextSafe) => {
      let mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        gsap.utils.toArray('.panel').forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          });
        });
      });
    },

    { scope: container }
  );
  return (
    <div id="projects" ref={container} className="text-navy-black">
      <div className="panel lg:h-screen min-h-screen py-12   w-full flex justify-center items-center gap-20  bg-white">
        <section className="lg:w-[40%] space-y-6 w-[80%]">
          <div className="space-y-6">
            <h2 className="lg:text-6xl sm:text-4xl text-3xl ">
              Fishing Application
            </h2>
            <p className="text-lg">
              This project integrate advanced features Like user authentication,
              interactive maps with Leaflet, and an advanced search and filter
              system. The application includes functionalities like posting
              catches, following users, and a monthly leaderboard, all designed
              to enhance user engagement and community interaction.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="sm:text-3xl text-2xl">Skills and Expertise</h3>
            <ul className=" text-lg">
              <li>
                Frontend Development: React, Next.js, TypeScript, HTML5, CSS3
              </li>
              <li>Backend Development: Node.js, Next.js, Prisma, PostgreSQL</li>
              <li>
                UI/UX Design: Responsive Design, User-Centered Design,
                Prototyping
              </li>
              <li>
                Tools and Technologies: Git, Zod, React Hook Form, Leaflet
              </li>
              <li>
                Other Skills: Schema Validation, Form Management, Map Features
                Integration
              </li>
            </ul>
            <div className="flex gap-6">
              <a
                className="inline-block bg-navy-black text-white py-2 px-3"
                href="https://github.com/Kislame/Anglers-hub"
                target="_blank"
              >
                Source Code
              </a>
              <a
                className="inline-block bg-navy-black text-white py-2 px-3"
                href="https://anglers-hub.vercel.app"
                target="_blank"
              >
                Preview
              </a>
            </div>
          </div>
        </section>
        <div className="bg-sky-600 border w-[416px] h-[600px] example-img lg:block hidden rounded-lg " />
      </div>

      <div className="panel lg:h-screen min-h-screen w-full py-12 flex justify-center items-center gap-20   bg-white">
        <section className="lg:w-[40%] space-y-6 w-[80%]">
          <div className="space-y-6">
            <h2 className="lg:text-6xl sm:text-4xl text-3xl">
              Ecommerce Website
            </h2>
            <p className="text-lg">
              This project is a fully functional e-commerce website that allows
              users to browse and purchase products.
            </p>
          </div>
          <div className="space-y-6">
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
      </div>
      <div className="panel lg:h-screen min-h-screen w-full py-12 flex justify-center items-center gap-20   bg-white">
        <section className="lg:w-[40%] space-y-6 w-[80%]">
          <div className="space-y-6">
            <h2 className="lg:text-6xl sm:text-4xl text-3xl">Admin Panel</h2>
            <p className="text-lg">
              a central hub where administrators effortlessly update products
              and monitor user statistics. Leveraging the power of Firebase for
              image storage and JWT for robust authorization, this dashboard
              ensures seamless control and insights for an enhanced
              administrative experience.
            </p>
          </div>
          <h3 className="text-3xl">Skills and Expertise</h3>
          <ul className=" text-lg">
            <li>Frontend Development: React, HTML5, Daisy Ui</li>
            <li>
              Backend Development: Node.js, Express.js , mongoose, mongodb
            </li>
            <li>
              UI/UX Design: Responsive Design, User-Centered Design, Prototyping
            </li>
            <li>Tools and Technologies: Git, Stripe</li>
          </ul>

          <div className="flex gap-6">
            <a
              className="inline-block bg-navy-black text-white py-2 px-3"
              href="https://github.com/Kislame/ecommerce-admin"
              target="_blank"
            >
              Source Code
            </a>
            <a
              className="inline-block bg-navy-black text-white py-2 px-3"
              href="https://ecommerce-admin-xiw5.onrender.com"
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
            src="/images/dashboard-2.png"
          />
        </div>
      </div>
    </div>
  );
};
