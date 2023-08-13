import React from 'react';
import './Banner.css';
import MyImage from './Icon.png';

const Banner = ({ text }) => {
  return (
    <div className="banner">
        <div className='inner-box-left'>
            <h1>Stay Curious.</h1>
            <h3>Discover New Stories, Start Reading Now, Write It Down Now, Before You Forget!!! </h3>
            
        </div>
        <div className='inner-box-right'>
            
            <img src={MyImage} alt="My Image" />
        </div>
        
      
    </div>
  );
};

export default Banner;
