import React, { useState, useEffect } from 'react';

import vnLocation from '../../../../images/vietnamLocation.png';
import checkIcon from '../../../../images/iconCheck.png';

const Silider1 = () => {
  return (
    <div className="inline-block text-left font-extrabold">
      <p className="text-[37px] xl:text-[67px] font-extrabold">
        Hi ! <br />
        I'm Thang
      </p>
      <div className="inline-block italic first-letter:italic text-blue-500">
        Wellcome
        <img className="pl-1 mb-1 h-4 inline-block" src={checkIcon} alt="" />
      </div>
    </div>
  );
};

const Silider2 = () => {
  return (
    <div className="inline-block text-left font-extrabold">
      <p className="text-[37px] xl:text-[67px] font-extrabold">
        I am <br />
        a Web Devoloper
      </p>
      <div className="inline-block italic first-letter:italic text-red-500">
        From VietNam
        <img className="pl-1 h-5 inline-block" src={vnLocation} alt="" />
      </div>
    </div>
  );
};

const Home = () => {
  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSlider((prevShowSlider) => !prevShowSlider);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="home" className="homepage font-Kanit">
      <div className="h-screen flex items-center justify-center">
        <div className="h-56 w-80 md:h-96 md:w-96 relative flex items-center justify-center">
          <div className={`mx-auto transition-all duration-500 absolute ${showSlider ? "opacity-100 visible" : "opacity-0 visible" }`}>
            <Silider1/> 
          </div> 
          <div className={`mx-auto transition-all duration-500 absolute ${!showSlider ? "opacity-100 visible" : "opacity-0 visible" }`}>
            <Silider2/> 
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Home;
