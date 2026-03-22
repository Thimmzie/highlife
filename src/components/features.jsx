import React, { useRef, useEffect } from 'react';
import One from '../assets/images/zeroone.jpg';
import Two from '../assets/images/zerotwo.jpg';
import Three from '../assets/images/zerothree.jpg';
import Four from '../assets/images/zerofour.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';

gsap.registerPlugin(ScrollTrigger);

const features = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  return (
    <div className="bg-[#d3d3d3] px-3 pt-6 lg:px-40">
      <div className="card-bg min-h-[80vh] w-full rounded-lg pt-8 px-3">
        <div className="flex flex-col items-center">
          <h1 className="text-[#cfcfcf] font-extrabold feature-text">
            Not just tracking your habits
          </h1>
          <h1 className="text-[#ffff] font-extrabold text-[1.7rem] feature-text">
            We explain them
          </h1>
        </div>
        <div className="mt-25 pb-8">
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3.5 },
            }}
            spaceBetween={16}
            loop={true}
          >
            <SwiperSlide>
              <div className="min-h-[400px] bg-[#ffff] rounded-2xl w-[60vw] pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={One} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] line-clamp-2 min-h-[2.5rem]">
                    Smart Insights
                  </h1>
                  <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    Get clear, personalized insights that reveal how your sleep,
                    nutrition, and activity affect your energy and productivity.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[400px] bg-[#ffff] rounded-2xl w-[60vw] pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={Two} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] line-clamp-2 min-h-[2.5rem] ">
                    Interactive Health Dashboard
                  </h1>
                  <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    See how your energy flows, how your habits connect, and
                    where things need improvement.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[400px] bg-[#ffff] rounded-2xl w-[60vw] pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={Three} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] line-clamp-2 min-h-[2.5rem]">
                    Simulation Mode
                  </h1>
                  <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    Adjust your habits and instantly see how your energy,
                    productivity, and well-being could change.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[400px] bg-[#ffff] rounded-2xl w-[60vw] pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={Four} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] line-clamp-2 min-h-[2.5rem]">
                    Smart Health Scoring
                  </h1>
                  <p className="text-[0.8rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    Get calculated scores for Energy, Productivity, Nutrition,
                    and Burnout Risk — all powered by your inputs.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <div className="flex flex-col items-center pt-10 bg-[#777777]">
        <h1 className="text-[#cfcfcf] font-extrabold feature-text">
          Not just tracking your habits
        </h1>
        <h1 className="text-[#ffff] font-extrabold text-[1.5rem] feature-text">
          We explain them
        </h1>
      </div> */}
      <div className="card-container grid grid-cols-1 lg:grid-cols-2 place-items-center px-4 mt-8 gap-12 sm:px-12 md:px-16"></div>
    </div>
  );
};

export default features;
