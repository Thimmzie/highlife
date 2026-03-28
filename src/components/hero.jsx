import React, { useEffect } from 'react';
import gsap from 'gsap';
import Heroimg from '../assets/images/hero-img.png';
// import Heroimg from '../assets/images/white-dashh.jpg';

const hero = ({ goToLogin }) => {
  useEffect(() => {
    gsap.fromTo(
      '.head',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 },
    );

    gsap.fromTo(
      '.body',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.6 },
    );

    gsap.fromTo(
      '.hero-btn',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.7 },
    );
  }, []);

  return (
    <div className="pt-10 lg:pt-5 hero-container relative ">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" head text-[1.3rem] text-[#ffff] text-center font-extrabold font-unbounded leading-10">
          Understand Your Habits. <br />
          Transform Your Life.
        </h1>
        <p className="body text-[0.9rem] text-[#ffff] text-center font-normal font-unbounded leading-10 mt-4 lg:mt-2 px-4 sm:px-20 md:px-50 ">
          Track your nutrition, sleep, and activity and see{' '}
          <br className="hidden lg:block" /> how they affect your energy and
          productivity in real time.
        </p>
        <div className="hero-btn">
          <button
            onClick={goToLogin}
            className=" bg-[#2f0474] font-unbounded w-[50vw] h-[7vh] rounded-4xl text-[#ffff] mt-7 text-[0.9rem] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] hover:bg-[#ffff] hover:text-[#2f0474] transition-all duration-500"
          >
            Try Demo
          </button>
        </div>
        <div className="absolute bottom-0 px-2">
          <img
            className="w-[90vw] lg:w-[55vw] rounded-tr-2xl rounded-tl-2xl border-2  border-[#c5c5c5]"
            src={Heroimg}
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
