import myAvatar from "../../images/myAvatar.jpg"; // di chuyển ra bên ngoài đường dẫn cùng cấp ../../..n/

import GruopClass from "./groupClass";

function LeftSife () { 
    return (
        <>
            <div className="w-1/5 flex flex-col items-center bg-BgGrey py-11">
                <div id="myProfile" className="font-PlayfairDisplay text-center flex flex-col items-center border-b-2">
                    <img src={myAvatar} alt="" className="w-36 h-36 rounded-full mx-16 mb-10"/>
                    <h2 className="myProfile-name mb-3">TuilaThang</h2>
                    <p className="myProfile-slogan mb-6 italic text-xs">"Design Your Life"</p>
                </div>
                <ul id="navBar" className="font-Qicksand300 text-xs text-textBlack text-center cursor-pointer">
                    <li id="home" className={`py-2.5 ${GruopClass.active} ${GruopClass.hover}`}><a>HOME</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>ABOUT</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>SERVICES</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>SKILLLS</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>EDUCATION</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>EXPERIENCE</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>WORK</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>BLOG</a></li>
                    <li className={`py-2.5 ${GruopClass.hover}`}><a>CONTACT</a></li>
                </ul>
            </div>
        </>
    )
}

export default LeftSife ;