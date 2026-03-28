import React, { useEffect, useState } from 'react';
import Login from '../components/login';

const login = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity transition-transform duration-500 ease-in-out ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <Login />
      </div>
    </>
  );
};

export default login;
