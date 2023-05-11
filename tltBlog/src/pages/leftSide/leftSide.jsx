import myAvatar from "../../images/myAvatar.jpg"; // di chuyển ra bên ngoài đường dẫn cùng cấp ../../..n/

import GruopClass from "./groupClass";
import NavBar from "./Navbar"

function LeftSife () { 
    return (
        <>
            <div className="h-screen flex flex-col items-center bg-BgGrey py-11  relative">
                <div id="myProfile" className="font-PlayfairDisplay text-center flex flex-col items-center border-b-2">
                    <img src={myAvatar} alt="" className={`w-36 h-36 rounded-full mx-16 mb-10 ${GruopClass.hover}`}/>
                    <h2 className="myProfile-name mb-3">TuilaThang</h2>
                    <p className="myProfile-slogan mb-6 italic text-xs">"Design Your Life"</p>
                </div>
                <ul id="navBar" className="font-Qicksand text-xs text-textBlack text-center cursor-pointer">
                    <NavBar/>
                </ul>
                <div id="cpyWrite" className="text-center my-6 opacity-50 absolute bottom-0">
                    <p className="font-PlayfairDisplay text-xs font-bold">© Copyright ©2023 All rights reserved </p>
                    <p className="font-PlayfairDisplay text-xs font-bold">Design by <span className="italic font-normal underline cursor-pointer">TuilaThang</span> </p>
                </div>
            </div>
        </>
    )
}

export default LeftSife ;