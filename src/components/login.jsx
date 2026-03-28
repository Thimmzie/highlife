import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/black-logoo.png';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { authentication } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(authentication, provider);

      console.log(result.user);

      navigate('/dashboard');
    } catch (error) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setErrorMessage('You closed login.');
          break;

        case 'auth/network-request-failed':
          setErrorMessage('Network error. Check your internet connection.');
          break;

        case 'auth/unauthorized-domain':
          setErrorMessage('App not configured correctly. Try again later.');
          break;

        case 'auth/account-exists-with-different-credential':
          setErrorMessage(
            'An account already exists with a different sign-in method.',
          );
          break;

        case 'auth/popup-blocked':
          setErrorMessage('Popup blocked. Please allow popups and try again.');
          break;

        default:
          setErrorMessage('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#ffff] min-h-screen pt-15 flex flex-col items-center gap-10 px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <img className="w-auto" src={Logo} />
          <h1 className="text-[#1f2937] text-[1.3rem] sm:text-[1.2rem] font-bold mt-1.3 lg:text-[1rem]">
            Login your Account
          </h1>
        </div>
        <div className="min-h-[330px] w-full max-w-sm mx-auto rounded-2xl border border-[#3b3b3b] px-3 outline-0 flex flex-col items-center justify-center">
          <button
            onClick={signInWithGoogle}
            disabled={loading}
            className="flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg bg-[#2f0474] text-[#ffff] cursor-pointer"
          >
            <FcGoogle size={25} />
            <p className="text-[1rem] lg:text-[0.8rem] font-dmsans">
              {loading ? 'Signing in...' : 'Continue with Google'}
            </p>
          </button>

          <p className="text-[0.8rem] mt-6 text-gray-700 lg:text-[0.7rem] whitespace-nowrap font-dmsans">
            Or continue with
          </p>

          <button
            // onClick={() => navigate('/dashboard')}
            className="mt-6 flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg lg:bg-[#ffffff] cursor-pointer"
          >
            <FaApple size={25} />
            <p className="text-[1rem] lg:text-[0.8rem] font-dmsans">
              Continue with Apple
            </p>
          </button>
          <p className="bg-[#2f0474] mt-2 text-[0.6rem] px-4 py-1.5 text-[#ffff] rounded-2xl font-dmsans">
            Coming soon
          </p>
          <div>
            {errorMessage && (
              <p className="text-white text-[0.7rem] md:text-[0.9rem] font-dmsans bg-red-600 rounded-2xl px-4 py-1.5 text-sm mt-3 text-center">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
