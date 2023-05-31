import React, { useState } from 'react';
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';

const dataItems = [
    {
        key: 1,
        name: 'Title-1' , 
        description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        key: 2,
        name: 'Title-2' , 
        description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        key: 3,
        name: 'Title-3' , 
        description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
]
    
 function EduItems({item}) {
    const [isExpanded, setIsExpanded] = useState([false, false]);
    const togglePanel = (index) => {
        const expanded = [...isExpanded];
        expanded[index] = !expanded[index];
        setIsExpanded(expanded);
      };
    return (
    <li className=" text-left ">
        <div
            className={`panel-header shadow-lg flex justify-between w-full px-[20px] 
             ${isExpanded[0] ? "bg-blue-400 transition-all overflow-hidden text-white" : "bg-gray-200 transition overflow"}`}
            onClick={() => togglePanel(0)}
        >
            <h3 className="panel-titlepx-[25px] py-[20px] ">{item.name}</h3>
            <button className="panel-toggle] text-[20px]">
                {isExpanded[0] ? <BsDashCircle /> : <BsPlusCircle />}
            </button>
        </div>
            <div className={`transition-all bg-[#fff] overflow-hidden duration-500 px-[25px] cursor-text text-justify ${isExpanded[0] ? `py-[20px] h-36 border-2` : `py-0 border-0 h-0`}`}>
                {item.description}
         </div>
    </li>
    )
 }

function EduList() {

    return (
        <ul className='education-box font-Kanit cursor-pointer mx-[5%]'>
            {dataItems.map((dataItem)=> (
                <EduItems
                    item ={dataItem}
                />
            ))}
        </ul>
    )
}
const Education = () => {
  return (
    <div id="education" className="p-9 bg-BgGrey">
        <div className="education-text text-left">
            <div className="text-[15px] opacity-50 mb-[15px] uppercase tracking-6"> EDUCATION</div>
            <div className="text-[20px] font-bold font-PlayfairDisplay mb-[72px] tracking-6">EDUCATION</div>
        </div> 
        <EduList/>
    </div>
  )
}

export default Education;
