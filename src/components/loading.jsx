import React from 'react';

const Loading = ({ size = 24, color = '#2f0474' }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}`,
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      ></div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
export default Loading;
