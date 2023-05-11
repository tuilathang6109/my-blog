import myAvatar from "../../images/myAvatar.jpg"; // di chuyển ra bên ngoài đường dẫn cùng cấp ../../..n/
import myLogo from "../../images/myLogo.png"

import PcCss from "./reponsive/PcCss";
import MobileCss from "./reponsive/MobileCss";
import NavBar from "./Navbar"
import './reponsive/keyframe.css'

import {AiOutlineMenuUnfold} from "react-icons/ai"

import React, { useState } from 'react';

function LeftSife () { 
    return (
        <>
            <div className={`xl:${PcCss.leftSide} s:${MobileCss.leftSideMobile}` }>
                <div id="myProfile" className="font-PlayfairDisplay text-center flex flex-col items-center border-b-2">
                    <img src={myAvatar} alt="" className={`drop-shadow-2xl w-36 h-36 rounded-full mx-16 mb-6 border-solid border-2 border-blue-500 cursor-pointer ${PcCss.hover}`}/>
                    <h2 className="font-Kanit mb-3 text-xl font-bold ">Vũ Thắng</h2>
                    <p className="mb-6 italic text-sm">"Design Your Life"</p>
                </div>
                <ul id="navBar" className="mt-6 font-Kanit font-bold text-sm text-textBlack text-center cursor-pointer">
                    <NavBar/>
                </ul>
            </div>
        </>
    )
}

export default LeftSife ;