import React from 'react';

const hero = () => {
  return (
    <div className="pt-10 hero-container">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[1.3rem] text-[#ffff] text-center font-extrabold font-unbounded leading-10">
          Understand Your Habits. <br />
          Transform Your Life.
        </h1>
        <p className="text-[0.9rem] text-[#ffff] text-center font-normal font-unbounded leading-10 mt-5 px-4 sm:px-20 md:px-50 ">
          Track your nutrition, sleep, and activity and see{' '}
          <br className="hidden lg:block" /> how they affect your energy and
          productivity in real time.
        </p>
        <button className="bg-[#2f0474] font-unbounded w-[50vw] h-[6vh] rounded-4xl text-[#ffff] mt-7 text-[0.9rem] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] hover:bg-[#ffff] hover:text-[#2f0474] transition-all duration-500">
          Try Demo
        </button>
      </div>
    </div>
  );
};

export default hero;
