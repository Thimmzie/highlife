import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features from '../components/features';
import Loading from '../components/loading';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/full-logoo.png';
import One from '../assets/images/zeroone.jpg';
import Two from '../assets/images/zerotwo.jpg';
import Three from '../assets/images/zerothree.jpg';
import Four from '../assets/images/zerofour.jpg';

const landing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const goToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/login');
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const imgList = [One, Two, Three, Four, Logo];
    let loadedCount = 0;

    imgList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imgList.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Loading size={32} color="#2f0474" />
      </div>
    );
  }

  return (
    <>
      {loading && <Loading size={32} color="#2f0474" />}

      <div
        className={`transition-opacity duration-300 ${loading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
      >
        <Navbar goToLogin={goToLogin} />
        <Hero goToLogin={goToLogin} />
        <Features />
      </div>
    </>
  );
};

export default landing;
