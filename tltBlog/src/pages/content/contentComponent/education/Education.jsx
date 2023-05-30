import React, { useState } from 'react';
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs'

const Education = () => {
  const [isExpanded, setIsExpanded] = useState([false, false]);

  const togglePanel = (index) => {
    const expanded = [...isExpanded];
    expanded[index] = !expanded[index];
    setIsExpanded(expanded);
  };

  return (
    <div id="education" className="p-9">
        <div className="education-text text-left">
            <div className="text-[15px] opacity-50 mb-[15px] uppercase tracking-6"> EDUCATION</div>
            <div className="text-[20px] font-bold font-PlayfairDisplay mb-[72px] tracking-6">EDUCATION</div>
        </div>

        <div className='education-box font-Kanit cursor-pointer'>
             {/*PANEL - 1*/}
            <div className="px-[5%] text-left">
                <div
                    className={`panel-header flex justify-between w-full px-[20px] ${isExpanded[0] ? "bg-blue-400 transition-all overflow-hidden text-white" : "bg-BgGrey transition overflow"}`}
                    onClick={() => togglePanel(0)}
                >
                    <h3 className="panel-titlepx-[25px] py-[20px] ">Title 1</h3>
                    <button className="panel-toggle] text-[20px]">
                        {isExpanded[0] ? <BsDashCircle /> : <BsPlusCircle />}
                    </button>
                </div>
                    <div className={`transition-all bg-[#fff] overflow-hidden duration-500 px-[25px] cursor-text text-justify ${isExpanded[0] ? `py-[20px] h-36 border-2` : `py-0 border-0 h-0`}`}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                 </div>
            </div>

            {/*PANEL - 2*/}
            <div className="px-[5%] text-left">
                <div
                    className={`panel-header flex justify-between w-full px-[20px] ${isExpanded[1] ? "bg-blue-400 transition-all overflow-hidden text-white" : "bg-BgGrey transition overflow"}`}
                    onClick={() => togglePanel(1)}
                >
                    <h3 className="panel-titlepx-[25px] py-[20px] ">Title 2</h3>
                    <button className="panel-toggle] text-[20px]">
                        {isExpanded[1] ? <BsDashCircle /> : <BsPlusCircle />}
                    </button>
                </div>
                    <div className={`transition-all bg-[#fff] overflow-hidden duration-500 px-[25px] cursor-text text-justify ${isExpanded[1] ? `py-[20px] h-36 border-2` : `py-0 border-0 h-0`}`}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                 </div>
            </div>


            {/*PANEL - 3*/}
            <div className="px-[5%] text-left">
                <div
                    className={`panel-header flex justify-between w-full px-[20px] ${isExpanded[2] ? "bg-blue-400 transition-all overflow-hidden text-white" : "bg-BgGrey transition overflow"}`}
                    onClick={() => togglePanel(2)}
                >
                    <h3 className="panel-titlepx-[25px] py-[20px] ">Title 3</h3>
                    <button className="panel-toggle] text-[20px]">
                        {isExpanded[2] ? <BsDashCircle /> : <BsPlusCircle />}
                    </button>
                </div>
                    <div className={`transition-all bg-[#fff] overflow-hidden duration-500 px-[25px] cursor-text text-justify ${isExpanded[2] ? `py-[20px] h-36 border-2` : `py-0 border-0 h-0`}`}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                 </div>
            </div>


            {/*PANEL - 4*/}
            <div className="px-[5%] text-left">
                <div
                    className={`panel-header flex justify-between w-full px-[20px] ${isExpanded[3] ? "bg-blue-400 transition-all overflow-hidden text-white" : "bg-BgGrey transition overflow"}`}
                    onClick={() => togglePanel(3)}
                >
                    <h3 className="panel-titlepx-[25px] py-[20px] ">Title 4</h3>
                    <button className="panel-toggle] text-[20px]">
                        {isExpanded[3] ? <BsDashCircle /> : <BsPlusCircle />}
                    </button>
                </div>
                    <div className={`transition-all bg-[#fff] overflow-hidden duration-500 px-[25px] cursor-text text-justify ${isExpanded[3] ? `py-[20px] h-36 border-2` : `py-0 border-0 h-0`}`}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                 </div>
            </div>


            {/*PANEL - 5*/}
            <div className="px-[5%] text-left">
                <div
                    className={`panel-header flex justify-between w-full px-[20px] ${isExpanded[4] ? "bg-blue-400 transition-all overflow-hidden text-white" : "bg-BgGrey transition overflow"}`}
                    onClick={() => togglePanel(4)}
                >
                    <h3 className="panel-titlepx-[25px] py-[20px] ">Title 5</h3>
                    <button className="panel-toggle] text-[20px]">
                        {isExpanded[4] ? <BsDashCircle /> : <BsPlusCircle />}
                    </button>
                </div>
                    <div className={`transition-all bg-[#fff] overflow-hidden duration-500 px-[25px] cursor-text text-justify ${isExpanded[4] ? `py-[20px] h-36 border-2` : `py-0 border-0 h-0`}`}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Education;
