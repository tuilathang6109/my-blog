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
        I am a <br />
        Web <br />
        Devoloper
      </p>
      <div className="inline-block italic first-letter:italic text-red-500">
        From VietNam
        <img className="pl-1 h-5 inline-block" src={vnLocation} alt="" />
      </div>
    </div>
  );
};

const Home = () => {
  const [showSlider1, setShowSlider1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSlider1((prevShowSlider1) => !prevShowSlider1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="home" className="homepage font-Kanit">
      <div className="h-screen flex items-center justify-center">
        <div className="h-56 w-80 md:h-96 md:w-96 relative">
          {showSlider1 ? <Silider1/> : <Silider2 />}
        </div>
      </div>
    </div>
  );
};

export default Home;
