import ReactDOM from 'react-dom';

import { useState, useEffect } from 'react';

import myAvatar from "../../images/myAvatar.jpg";

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
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
    const [isLeftSideVisible, setLeftSideVisible] = useState(false);

    const toggleLeftSide = () => {
    setLeftSideVisible(!isLeftSideVisible);
    };
    // useEffect(() => {
    //     const leftSideElement = document.querySelector('.left-side');
    //     if (leftSideElement) {
    //       if (isLeftSideVisible) {
    //         leftSideElement.classList.remove('animate-slideOut');
    //         leftSideElement.classList.add('animate-slideIn');
    //       } else {
    //         leftSideElement.classList.remove('animate-slideIn');
    //         leftSideElement.classList.add('animate-slideOut');
    //       }
    //     }
    //   }, [isLeftSideVisible]);
    const toggleCloseIcon = () => {
        const leftSideElement = document.querySelector('.left-side');
        leftSideElement.classList.add('animate-slideOut');
    }
    return (
        <>
            <i
        id="iconMenu"
        className={`iconMenu xl:hidden lg:hidden ${isLeftSideVisible ? 'hidden' : ''}`}
        onClick={toggleLeftSide} 
      >
        <AiOutlineMenu/>
      </i>
      <i
        id="iconClose"
        className={`iconMenu xl:hidden lg:hidden ${!isLeftSideVisible ? 'hidden' :''}`}
        onClick={toggleLeftSide}
      >
        <AiOutlineClose />
      </i>
      <div className={`left-side ${!isLeftSideVisible ? `sm:hidden s:hidden md:hidden` : 'animate-slideIn'}`}>
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