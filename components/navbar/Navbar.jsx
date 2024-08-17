'use client';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRef } from 'react';
export const Navbar = () => {
  const btnRef = useRef();
  const lastEl = useRef();
  const slideRef = useRef();
  const menuRefBtn = useRef();

  const handleClick = () => {
    slideRef.current?.classList.add('visible', 'open');
    setTimeout(() => {
      btnRef.current?.focus();
    }, 1);
    menuRefBtn.current?.setAttribute('aria-hidden', 'true');
  };
  const closeNav = (e) => {
    if (e.type === 'keyup' && e.key !== 'Escape') {
      return;
    }
    slideRef.current?.classList.remove('open');
    menuRefBtn.current?.removeAttribute('aria-hidden');
    setTimeout(() => {
      menuRefBtn.current?.focus();
    }, 1);
    setTimeout(() => {
      slideRef.current?.classList.remove('visible');
    }, 500);
  };

  function moveFocusToTop(e) {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      btnRef.current?.focus();
    }
  }
  function moveFocusToBottom(e) {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      lastEl.current?.focus();
    }
  }
  return (
    <header className="shadow-md header container mx-auto px-[1rem]">
      <p className=" logo font-semibold tracking-widest text-lg">KMI</p>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light "
        role="navigation"
        aria-label="Main menu"
      >
        <button
          aria-label="open navigation"
          aria-controls="main-menu"
          aria-expanded="false"
          ref={menuRefBtn}
          className="nav__menu-bars"
          onClick={handleClick}
          tabIndex={'0'}
        >
          <GiHamburgerMenu fontSize={'24px'} />
        </button>
        <div id="main-menu" ref={slideRef} className="slide-nav">
          <button
            className="nav__menu-close"
            aria-label="close navigation"
            ref={btnRef}
            onClick={closeNav}
            onKeyDown={moveFocusToBottom}
          >
            <MdClose fontSize={'24px'} />
          </button>
          <ul className="">
            <li className="">
              <Link
                className=" text-3xl tracking-widest xs:text-lg "
                href="#home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" text-3xl tracking-widest xs:text-lg "
                href="#projects"
              >
                Projects
              </Link>
            </li>

            <li onKeyDown={moveFocusToTop} ref={lastEl}>
              <Link
                className=" text-3xl tracking-widest xs:text-lg  "
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
