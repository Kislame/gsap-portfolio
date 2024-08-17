import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Slider = () => {
  //Events for touch and mouse
  let events = {
    mouse: {
      down: 'mousedown',
      move: 'mousemove',
      up: 'mouseup',
    },
    touch: {
      down: 'touchstart',
      move: 'touchmove',
      up: 'touchend',
    },
    pointer: {
      down: 'pointerdown',
      move: 'pointermove',
      up: 'pointerup',
    },
  };

  let mouseX,
    initialX = 0;
  let mouseY,
    initialY = 0;
  let isSwiped;
  let direction;
  let sectionIndex = 0;
  let moving = false;
  const [deviceType, setDeviceType] = useState('');

  const sliderRef = useRef();
  const leftBtn = useRef();
  const rightBtn = useRef();
  const controlsRef = useRef();

  const slideRight = () => {
    sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
    checkRight();

    document.querySelector('.controls .selected').classList.remove('selected');
    controlsRef.current.children[sectionIndex].classList.add('selected');
    sliderRef.current.style.transform = `translate(${sectionIndex * -25}%)`;
  };
  const slideLeft = () => {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    checkRight();

    document.querySelector('.controls .selected').classList.remove('selected');
    controlsRef.current.children[sectionIndex].classList.add('selected');
    sliderRef.current.style.transform = `translate(${sectionIndex * -25}%)`;
  };

  const checkRight = () => {
    if (sectionIndex === 0) {
      leftBtn.current.classList.add('hide');
    } else {
      leftBtn.current.classList.remove('hide');
    }
    if (sectionIndex === 3) {
      rightBtn.current.classList.add('hide');
    } else {
      rightBtn.current.classList.remove('hide');
    }
  };

  useEffect(() => {
    const isTouchDevice = () => {
      try {
        //We try to create TouchEvent (it would fail for desktops and throw error)
        document.createEvent('TouchEvent');
        setDeviceType('touch');
        return true;
      } catch (e) {
        setDeviceType('mouse');
        return false;
      }
    };
    isTouchDevice();
    if (sectionIndex === 0) {
      leftBtn.current.classList.add('hide');
    }
  }, []);

  useEffect(() => {
    const setEventForCircles = () => {
      console.log('efect');
      document.querySelectorAll('.controls li').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          sectionIndex = index;
          checkRight();
          document
            .querySelector('.controls .selected')
            .classList.remove('selected');
          indicator.classList.add('selected');
          sliderRef.current.style.transform = `translate(${
            sectionIndex * -25
          }%)`;
        });
      });
    };
    setEventForCircles();
    return () => {
      document.querySelectorAll('.controls li').forEach((indicator, index) => {
        indicator.removeEventListener('click', () => {
          sectionIndex = index;
          //checkRight();

          document
            .querySelector('.controls .selected')
            .classList.remove('selected');
          indicator.classList.add('selected');
          sliderRef.current.style.transform = `translate(${
            sectionIndex * -25
          }%)`;
        });
      });
    };
  }, []);
  return (
    <>
      <section className="h-[100dvh]  flex flex-col justify-center border border-white ">
        <div className=" carousel-wrapper w-[340px] md:w-[800px] mx-auto bg-slate-400">
          <div className="carousel h-[600px] relative overflow-hidden ">
            <div
              ref={sliderRef}
              className="slider flex h-full w-[400%] transition duration-300 ease-out border border-red-400"
            >
              <section className=" bg-orange-200 basis-full  p-4"></section>
              <section className=" bg-sky-500 basis-full flex flex-col justify-center items-center p-4">
                <p>CONTENT 2</p>
              </section>
              <section className="bg-rose-300 basis-full flex flex-col justify-center items-center p-4">
                <p>CONTENT 3</p>
              </section>
              <section className="bg-rose-300 basis-full flex flex-col justify-center items-center p-4">
                <p>CONTENT 3</p>
              </section>
            </div>
            <div className="controls ">
              <span
                className="arrow absolute cursor-pointer top-1/2 -translate-x-1/2 text-4xl left-4  left"
                ref={leftBtn}
                onClick={slideLeft}
              >
                &lsaquo;
              </span>
              <span
                className=" absolute cursor-pointer top-1/2 -translate-x-1/2  text-4xl right-4 arrow right"
                ref={rightBtn}
                onClick={slideRight}
              >
                &rsaquo;
              </span>
              <ul
                ref={controlsRef}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 "
              >
                <li className="selected w-4 h-4 rounded-full cursor-pointer bg-[#101720]"></li>
                <li className="w-4 h-4 rounded-full cursor-pointer bg-[#101720]"></li>
                <li className="w-4 h-4 rounded-full cursor-pointer bg-[#101720]"></li>
                <li className="w-4 h-4 rounded-full cursor-pointer bg-[#101720]"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
