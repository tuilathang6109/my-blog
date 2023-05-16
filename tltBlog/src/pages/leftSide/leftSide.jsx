import { useState } from 'react';

import {AiOutlineMenu} from 'react-icons/ai';

import myAvatar from "../../images/myAvatar.jpg";

import {AiOutlineExclamationCircle, AiOutlineHome, AiOutlineCustomerService, AiOutlineCheckCircle,AiOutlineHourglass, AiOutlineLaptop, AiOutlineContacts} from "react-icons/ai"
import {MdCastForEducation} from "react-icons/md"
import {TbBrandBlogger} from "react-icons/tb"
const items = [
    {label: "HOME",icon: <AiOutlineHome/>},
    {label: "ABOUT",icon:<AiOutlineExclamationCircle/>},
    {label: "SERVICES",icon:<AiOutlineCustomerService/>},
    {label: "SKILLS",icon:<AiOutlineCheckCircle/>},
    {label: "EDUCATION",icon:<MdCastForEducation/>},
    {label: "EXPERIENCE",icon:<AiOutlineHourglass/>},
    {label: "WORK",icon:<AiOutlineLaptop/>},
    {label: "BLOG",icon:<TbBrandBlogger/>},
    {label: "CONTACT",icon:<AiOutlineContacts/>},
]
function NavItems ({item}) {
    return (
        <li className="navbarItems hover ">{item.label} <i className="font-bold pl-1.5">{item.icon}</i></li>
    )
}
function NavBar () {
    return (
        (items.map((item, index) => <NavItems item={item} key={index} />))
    )}


function LeftSide () { 
    const [isLeftSideVisible, setLeftSideVisible] = useState(false);

    const toggleLeftSide = () => {
    setLeftSideVisible(!isLeftSideVisible);

    // const handleNavItemClicked = () => {
    //     setLeftSideVisible(false);
    //   };
  };
    return (
        <>
            <i id='iconMenu' className='iconMenu xl:hidden lg:hidden'><AiOutlineMenu onClick={toggleLeftSide}/></i>
            <div className={`left-side ${!isLeftSideVisible ? 'sm:hidden s:hidden md:hidden' : ''}`}>
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