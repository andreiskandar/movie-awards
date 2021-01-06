import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div
      style={{
        width: '80vw',
        height: '10vh',
        color: 'red',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <h3>NOMINATION COMPLETED</h3>
    </div>
  );
};

export default Banner;
