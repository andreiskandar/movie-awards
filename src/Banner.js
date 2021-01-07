import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      }}
    >
      <img src='/assets/banner.png' style={{ width: '80vw' }} alt='loading' />
    </div>
  );
};

export default Banner;
