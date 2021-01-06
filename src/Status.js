import React from 'react';

const Status = ({ message }) => {
  return (
    <main className='status'>
      <div className='spinner'></div>
      <h3 className='status-text'>{message || ''}</h3>
    </main>
  );
};

export default Status;
