import React from 'react';
import Logo from '../assets/images/black-logoo.png';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const login = () => {
  return (
    <>
      <div className="bg-[#ffff] h-[100vh] flex flex-col items-center justify-center gap-10 px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={Logo} />
          <h1 className="text-[#1f2937] text-[1.3rem] font-bold mt-1.3 lg:text-[1.4rem]">
            Login your Account
          </h1>
        </div>
        <div className="min-h-[300px] w-full rounded-2xl border border-[#3b3b3b] px-3 outline-0 flex flex-col items-center justify-center">
          <button className="flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg bg-[#2f0474] text-[#ffff] cursor-pointer">
            <FcGoogle size={25} />
            <p className="text-[0.9rem] lg:text-[0.8rem]">
              Continue with Google
            </p>
          </button>
          <div className="flex items-center gap-3 w-full">
            <span className="flex-1 h-px bg-gray-300"></span>

            <p className="text-[0.8rem] mt-6 text-gray-700 lg:text-[0.7rem] whitespace-nowrap">
              Or continue with
            </p>

            <span className="flex-1 h-px bg-gray-300"></span>
          </div>

          <button className="mt-6 flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg lg:bg-[#ffffff] cursor-pointer">
            <FaApple size={25} />
            <p className="text-[0.9rem] lg:text-[0.8rem]">
              Continue with Apple
            </p>
          </button>
          <p className="bg-[#2f0474] mt-2 text-[0.6rem] px-4 py-1.5 text-[#ffff] rounded-2xl">
            Coming soon
          </p>
          <p className="mt-6 text-[0.7rem]">
            Already have an account?
            <a href="#">
              <span className="pl-1.5 text-[#2f0474]">Sign in</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default login;
