import React, { useState, useEffect } from 'react';
import One from '../assets/images/zeroone.jpg';
import Two from '../assets/images/zerotwo.jpg';
import Three from '../assets/images/zerothree.jpg';
import Four from '../assets/images/zerofour.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, FreeMode, Mousewheel } from 'swiper/modules';

const features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-[#d3d3d3] px-3 pt-6 md:px-20 lg:px-30">
      <div className="card-bg min-h-[80vh] w-full rounded-2xl pt-8 px-3">
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
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Scrollbar, FreeMode, Mousewheel]}
            mousewheel={true}
            slidesPerView={1.4}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 3.3 },
            }}
            spaceBetween={30}
            loop={true}
            loopedSlides={4}
            speed={600}
            grabCursor={true}
            resistanceRatio={0.5}
          >
            <SwiperSlide>
              <div className="min-h-[400px] sm:min-h-[440px] lg:min-h-[400px] bg-[#ffff] rounded-2xl w-full pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={One} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] lg:text-[0.9rem] line-clamp-2 min-h-[2.5rem]">
                    Smart Insights
                  </h1>
                  <p className="text-[0.8rem] lg:text-[0.7rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    Get clear, personalized insights that reveal how your sleep,
                    nutrition, and activity affect your energy and productivity.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[400px] sm:min-h-[440px] lg:min-h-[400px] bg-[#ffff] rounded-2xl w-full pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={Two} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] lg:text-[0.9rem] line-clamp-2 min-h-[2.5rem] ">
                    Interactive Health Dashboard
                  </h1>
                  <p className="text-[0.8rem] lg:text-[0.7rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    See how your energy flows, how your habits connect, and
                    where things need improvement.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[400px] sm:min-h-[440px] lg:min-h-[400px] bg-[#ffff] rounded-2xl w-full pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={Three} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] lg:text-[0.9rem] line-clamp-2 min-h-[2.5rem]">
                    Simulation Mode
                  </h1>
                  <p className="text-[0.8rem] lg:text-[0.7rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    Adjust your habits and instantly see how your energy,
                    productivity, and well-being could change.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[400px] sm:min-h-[440px] lg:min-h-[400px] bg-[#ffff] rounded-2xl w-full pt-1.5 card flex flex-col">
                <img className="rounded-2xl px-1.5" src={Four} />
                <div className="px-4 pt-4">
                  <h1 className="font-extrabold text-[1rem] lg:text-[0.9rem] line-clamp-2 min-h-[2.5rem]">
                    Smart Health Scoring
                  </h1>
                  <p className="text-[0.8rem] lg:text-[0.7rem] text-[#4e4e4e] leading-7 pt-4 line-clamp-5">
                    Get calculated scores for Energy, Productivity, Nutrition,
                    and Burnout Risk — all powered by your inputs.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center gap-3 mt-4">
            {[0, 1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`w-10 h-1 mt-5 rounded ${index === activeIndex ? 'bg-[#3e1b78]' : 'bg-gray-400'}`}
              ></div>
            ))}
          </div>
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
