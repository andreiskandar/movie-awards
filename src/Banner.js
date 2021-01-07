import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '80vw',
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      }}
    >
      <img src='/assets/banner.png' style={{ width: '80vw' }}></img>
    </div>
  );
};

export default Banner;
