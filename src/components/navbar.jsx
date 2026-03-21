import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import Logo from '../assets/images/full-logoo.png';

const navbar = () => {
  const [sidemenu, setSidemenu] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  const handleClick = () => {
    if (!sidemenu) {
      setMenuVisible(true);
      setSidemenu(true);
    } else {
      setSidemenu(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = sidemenu ? 'hidden' : 'auto';
  }, [sidemenu]);

  useEffect(() => {
    if (!menuVisible) return;

    const menuNodes = menuItemsRef.current.filter(Boolean);

    if (sidemenu) {
      const tl = gsap.timeline();
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
      );
      tl.fromTo(
        menuNodes,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power3.out' },
        '-=0.2',
      );
      tl.fromTo(
        buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.3',
      );
    } else {
      const tl = gsap.timeline({
        onComplete: () => setMenuVisible(false),
      });
      tl.to(menuNodes, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.1,
        ease: 'power3.inOut',
      });
      tl.to(
        buttonRef.current,
        { y: 40, opacity: 0, duration: 0.4, ease: 'power3.inOut' },
        '-=0.3',
      );
      tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, '-=0.3');
    }
  }, [sidemenu, menuVisible]);

  useEffect(() => {
    if (sidemenu && !menuVisible) {
      setMenuVisible(true);
    }
  }, [sidemenu, menuVisible]);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 -mt-3 md:px-6">
        <div className="logo">
          <img className="h-auto w-28 md:w-34" src={Logo} />
        </div>
        <div className="menu hidden lg:block">
          <ul className="text-[#ffff] font-unbounded text-[0.9rem] flex gap-14 ">
            <li>
              <a
                className="hover:text-[#c8c8c9] hover:cursor-pointer transition-all duration-300"
                href="#"
              >
                How highlife works
              </a>
            </li>
            <li>
              <a
                className="group hover:text-[#c8c8c9] hover:cursor-pointer transition-all duration-300"
                href="#"
              >
                Pricing{' '}
                <span className="bg-[#2f0474]  py-1.5 px-2 rounded-3xl text-[0.5rem] group-hover:text-[#ffff]">
                  Coming Soon
                </span>
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#c8c8c9] hover:cursor-pointer transition-all duration-300"
                href="#"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button className="bg-[#2f0474] font-unbounded w-[11vw] h-[7vh] rounded-4xl text-[#ffffff] text-[0.8rem] cursor-pointer hover:bg-[#220550] transition-all duration-500">
            Try Demo
          </button>
        </div>

        <div className="burger lg:hidden">
          <button
            onClick={handleClick}
            aria-expanded={sidemenu}
            className={`hamburger ${sidemenu ? 'active' : ''}`}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>
      {menuVisible && (
        <div
          className={`fixed z-[999] inset-0 transition-opacity duration-300 ${menuVisible ? 'opacity-100' : 'opacity-0'} bg-black`}
        >
          <div>
            <div>
              <ul className="text-[#ffff] font-unbounded text-[1.1rem] mt-30 px-4 flex flex-col gap-10 tracking-wide md:px-8 md:mt-40">
                <li ref={(el) => (menuItemsRef.current[0] = el)}>
                  <a href="#">How highlife works</a>
                </li>
                <li ref={(el) => (menuItemsRef.current[1] = el)}>
                  <a href="#">
                    Pricing{' '}
                    <span className="bg-[#2f0474]  py-1.5 px-2 rounded-3xl text-[0.5rem]">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li ref={(el) => (menuItemsRef.current[2] = el)}>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="mt-70 mx-8 md:mx-25">
              <button
                ref={buttonRef}
                className="bg-[#2f0474] font-unbounded w-full h-[7vh] rounded-4xl text-[#ffffff]"
              >
                Try Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default navbar;
