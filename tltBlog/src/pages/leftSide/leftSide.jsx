import myAvatar from "../../images/myAvatar.jpg"; // di chuyển ra bên ngoài đường dẫn cùng cấp ../../..n/
import myLogo from "../../images/myLogo.png"

import PcCss from "./reponsiveLeftside/PcCss";
import MobileCss from "./reponsiveLeftside/MobileCss";
import NavBar from "./Navbar"
import '../../App.css'

function LeftSide () { 
    return (
        <>
            <div className={`xl:${PcCss.leftSide} lg:h-full`}>
                <div id="myProfile" className={`${PcCss.profile.profileMain}`}>
                    <img src={myAvatar} alt="" className={`${PcCss.profile.profileImg} ${PcCss.hover}`}/>
                    <h2 className={`${PcCss.profile.profileName}`}>Vũ Thắng</h2>
                    <p className={`${PcCss.profile.profileSologan}`}>"Design Your Life"</p>
                </div>
                <ul id="navBar" className={`${PcCss.navigation.navBar} `}>
                    <NavBar/>
                </ul>
                <div className={`${PcCss.footerSideBar.footerSb}`}>
                    <p>© Copyright 2023 </p>
                    <br />
                    <p>Design by <a className={`${PcCss.footerSideBar.auther}`} href="HOME">TuilaThang</a></p>
                </div>
            </div>
        </>
    )
}

export default LeftSide ;