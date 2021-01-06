import React from 'react';
import './Banner.css';

const Banner = () => {
  let hide = true;
  function closeBanner() {
    hide = 'hidden';
  }

  return (
    <div
      style={{
        width: '80vw',
        height: '10vh',
        color: 'red',
        position: 'absolute',
        top: '30vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <img src='/assets/banner.png' style={{ width: '50vw', height: 'auto', visibility: hide }}></img>
      <button onClick={closeBanner} style={{ position: 'absolute', top: '-70px', right: '228px', visibility: hide }}>
        x
      </button>
    </div>
  );
};

export default Banner;
