import React from 'react';
import loader from './loader.gif';

const Spinner = () => {

  return (
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  )
}

export default Spinner;
