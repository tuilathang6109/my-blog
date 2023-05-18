import { useState } from 'react';

import {AiOutlineMenu} from 'react-icons/ai';

import myAvatar from "../../images/myAvatar.jpg";

import {AiOutlineExclamationCircle, AiOutlineHome, AiOutlineCustomerService, AiOutlineCheckCircle,AiOutlineHourglass, AiOutlineLaptop, AiOutlineContacts} from "react-icons/ai"
import {MdCastForEducation} from "react-icons/md"
import {TbBrandBlogger} from "react-icons/tb"
const items = [
    {label: "home",icon: <AiOutlineHome/>},
    {label: "about",icon:<AiOutlineExclamationCircle/>},
    {label: "services",icon:<AiOutlineCustomerService/>},
    {label: "skills",icon:<AiOutlineCheckCircle/>},
    {label: "education",icon:<MdCastForEducation/>},
    {label: "experience",icon:<AiOutlineHourglass/>},
    {label: "work",icon:<AiOutlineLaptop/>},
    {label: "blog",icon:<TbBrandBlogger/>},
    {label: "contact",icon:<AiOutlineContacts/>},
]
function NavItems ({item, toggleLeftSide}) {
    return (
        <li className="navbarItems hover "><a href={`#${item.label}`} onClick={toggleLeftSide}>{item.label}</a><i className="font-bold pl-1.5">{item.icon}</i></li>
    )
}
function NavBar ({ toggleLeftSide }) {
    return (
        (items.map((item, index) => <NavItems item={item} key={index} toggleLeftSide={toggleLeftSide}/>))
    )}


function LeftSide () { 
    const leftSide = document.querySelector('.left-side');

    const [isLeftSideVisible, setLeftSideVisible] = useState(false);

    const toggleLeftSide = () => {
    setLeftSideVisible(!isLeftSideVisible);

  };
    return (
        <>
            <i id='iconMenu' className='iconMenu xl:hidden lg:hidden'><AiOutlineMenu onClick={toggleLeftSide}/></i>
            <div className={`left-side ${!isLeftSideVisible ? 'sm:hidden s:hidden md:hidden' : ''}`} >
                <div id="myProfile" className="profile">
                    <img src={myAvatar} alt="" className="profileImage hover"/>
                    <h2 className="profileName">Vũ Thắng</h2>
                    <p className="">"Design Your Life"</p>
                </div>
                <ul className="navbar ">
                    <NavBar toggleLeftSide={toggleLeftSide}/>
                </ul>
                <div className="footerSb">
                    <p>© Copyright {new Date().getFullYear()}</p>
                    <br/>
                    <p>Design by <a className="footerAuther" href="HOME">TuilaThang</a></p>
                </div>
            </div>
        </>
    )
}
export default LeftSide ;