import myAvatar from "../../images/myAvatar.jpg"; // di chuyển ra bên ngoài đường dẫn cùng cấp ../../..n/
function LeftSife () { 
    return (
        <>
            <div className="w-1/5 flex flex-col items-center bg-BgGrey py-11">
                <div id="myProfile" className="font-PlayfairDisplay text-center flex flex-col items-center">
                    <img src={myAvatar} alt="" className="w-44 h-44 rounded-full mx-16 mb-10"/>
                    <h2 className="myProfile-name mb-3">TuiLaThang</h2>
                    <p className="myProfile-slogan mb-6">Design Your Life</p>
                </div>
                <ul id="navBar" className="font-Qicksand text-xs text-textBlack text-center">
                    <li className="py-2.5">HOME</li>
                    <li className="py-2.5">ABOUT</li>
                    <li className="py-2.5">SERVICES</li>
                    <li className="py-2.5">SKILLLS</li>
                    <li className="py-2.5">EDUCATION</li>
                    <li className="py-2.5">EXPERIENCE</li>
                    <li className="py-2.5">WORK</li>
                    <li className="py-2.5">BLOG</li>
                    <li className="py-2.5">CONTACT</li>
                </ul>
            </div>
        </>
    )
}

export default LeftSife ;