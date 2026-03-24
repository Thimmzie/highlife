import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/black-logoo.png';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { authentication } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(authentication, provider);

      console.log(result.user);

      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(authentication, (currentUser) => {
  //     setUser(currentUser);
  //     console.log(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#ffff] h-[100vh] pt-15 flex flex-col items-center gap-10 px-12 sm:px-30 md:px-50 lg:px-[30rem]">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={Logo} />
          <h1 className="text-[#1f2937] text-[1.3rem] sm:text-[1.2rem] font-bold mt-1.3 lg:text-[1rem]">
            Login your Account
          </h1>
        </div>
        <div className="min-h-[330px] w-full rounded-2xl border border-[#3b3b3b] px-3 outline-0 flex flex-col items-center justify-center lg:px-12">
          <button
            onClick={signInWithGoogle}
            className="flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg bg-[#2f0474] text-[#ffff] cursor-pointer"
          >
            <FcGoogle size={25} />
            <p className="text-[1rem] lg:text-[0.8rem] font-dmsans">
              Continue with Google
            </p>
          </button>

          <p className="text-[0.8rem] mt-6 text-gray-700 lg:text-[0.7rem] whitespace-nowrap font-dmsans">
            Or continue with
          </p>

          <button
            onClick={() => navigate('/dashboard')}
            className="mt-6 flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg lg:bg-[#ffffff] cursor-pointer"
          >
            <FaApple size={25} />
            <p className="text-[1rem] lg:text-[0.8rem] font-dmsans">
              Continue with Apple
            </p>
          </button>
          <p className="bg-[#2f0474] mt-2 text-[0.6rem] px-4 py-1.5 text-[#ffff] rounded-2xl font-inter">
            Coming soon
          </p>
          <p className="mt-6 text-[0.9rem] font-dmsans">
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
