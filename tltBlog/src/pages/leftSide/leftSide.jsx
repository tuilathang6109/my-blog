import myAvatar from "../../images/myAvatar.jpg"; // di chuyển ra bên ngoài đường dẫn cùng cấp ../../..n/
import myLogo from "../../images/myLogo.png"

import PcCss from "./reponsiveLeftside/PcCss";
import MobileCss from "./reponsiveLeftside/MobileCss";
import NavBar from "./Navbar"

import {AiOutlineMenuUnfold} from "react-icons/ai"

import React, { useState } from 'react';

function LeftSife () { 
    return (
        <>
            <div className={`xl:${PcCss.leftSide} s:${MobileCss.leftSideMobile} lg:h-full md:h-full`}>
                <div id="myProfile" className={`${PcCss.profile.profileMain}`}>
                    <img src={myAvatar} alt="" className={`${PcCss.profile.profileImg} ${PcCss.hover}`}/>
                    <h2 className={`${PcCss.profile.profileName}`}>Vũ Thắng</h2>
                    <p className={`${PcCss.profile.profileSologan}`}>"Design Your Life"</p>
                </div>
                <ul id="navBar" className={`${PcCss.navigation.navBar}`}>
                    <NavBar/>
                </ul>
                <div className=" font-PlayfairDisplay text-xs text-center mt-40 opacity-60">
                    <p>© Copyright ©2023 All rights reserved</p>
                    <br />
                    <p>Design by <a className="text-blue-700 underline" href="HOME">TuilaThang</a></p>
                </div>
            </div>
        </>
    )
}

export default LeftSife ;