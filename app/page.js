'use client';

import { FadeInParagraph } from '@/components/text-animation/Fade-in-text';

import { Creative } from '@/components/creative-hero/Creative';

import { MyPortfolio } from '@/components/Test';

const Home = () => {
  return (
    <main className="app  bg-navy-black    ">
      <Creative />
      <FadeInParagraph />
      <MyPortfolio />
      <div className="lg:block lg:h-screen hidden"></div>
    </main>
  );
};

export default Home;
