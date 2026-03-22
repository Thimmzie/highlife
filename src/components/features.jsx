import React, { useRef, useEffect } from 'react';
import One from '../assets/images/zeroone.jpg';
import Two from '../assets/images/zerotwo.jpg';
import Three from '../assets/images/zerothree.jpg';
import Four from '../assets/images/zerofour.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the text first
      gsap.from('.feature-text', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.utils
        .toArray('.card', containerRef.current)
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: 'back.out(1.1)',
              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.18,
            },
          );
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#777777]">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-[#cfcfcf] font-extrabold feature-text">
          Not just tracking your habits
        </h1>
        <h1 className="text-[#ffff] font-extrabold text-[1.5rem] feature-text">
          We explain them
        </h1>
      </div>
      <div className="card-container grid grid-cols-1 lg:grid-cols-2 place-items-center px-4 mt-8 gap-12 sm:px-12 md:px-16">
        <div className=" min-h-[420px] pb-1.5 bg-[#ffff] rounded-2xl w-full lg:w-[35vw] pt-1.5 card">
          <img className="rounded-2xl px-1.5  w-full object-cover" src={One} />
          <div className="px-4 pt-4">
            <h1 className="font-extrabold text-[1rem]">Smart Insights</h1>
            <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4">
              Get clear, personalized insights that reveal how your sleep,
              nutrition, and activity affect your energy and productivity.
            </p>
          </div>
        </div>
        <div className="min-h-[420px]  bg-[#ffff] rounded-2xl w-full pt-1.5 lg:w-[35vw] card">
          <img className="rounded-2xl px-1.5" src={Two} />
          <div className="px-4 pt-4">
            <h1 className="font-extrabold text-[1rem]">
              Interactive Health Dashboard
            </h1>
            <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4">
              See how your energy flows, how your habits connect, and where
              things need improvement.
            </p>
          </div>
        </div>
        <div className="min-h-[420px]  bg-[#ffff] rounded-2xl w-full pt-1.5 lg:w-[35vw]  card">
          <img className="rounded-2xl px-1.5" src={Three} />
          <div className="px-4 pt-4">
            <h1 className="font-extrabold text-[1rem]">Simulation Mode</h1>
            <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4">
              Adjust your habits and instantly see how your energy,
              productivity, and well-being could change.
            </p>
          </div>
        </div>
        <div className="min-h-[420px]  bg-[#ffff] rounded-2xl w-full pt-1.5 lg:w-[35vw]  card">
          <img className="rounded-2xl px-1.5" src={Four} />
          <div className="px-4 pt-4">
            <h1 className="font-extrabold text-[1rem]">Smart Health Scoring</h1>
            <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4">
              Get calculated scores for Energy, Productivity, Nutrition, and
              Burnout Risk — all powered by your inputs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
