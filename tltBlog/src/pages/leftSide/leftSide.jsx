import myAvatar from "../../images/myAvatar.jpg";

import NavBar from "./navigation/Navbar"

function LeftSide () { 
    return (
        <>
            <div className="leftSide s:hidden sm:hidden">
                <div id="myProfile" className="profile">
                    <img src={myAvatar} alt="" className="profileImage hover"/>
                    <h2 className="profileName">Vũ Thắng</h2>
                    <p className="">"Design Your Life"</p>
                </div>
                <ul className="navbar ">
                    <NavBar/>
                </ul>
                <div className="footerSb">
                    <p>© Copyright 2023 </p>
                    <br/>
                    <p>Design by <a className="footerAuther" href="HOME">TuilaThang</a></p>
                </div>
            </div>
        </>
    )
}
export default LeftSide ;