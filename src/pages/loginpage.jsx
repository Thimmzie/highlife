import React from 'react';
import Login from '../components/login';

const login = () => {
  return (
    <>
      <Login />
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log(credentialResponse);
        }}
        onError={() => console.log('Login Failed')}
      /> */}
    </>
  );
};

export default login;
