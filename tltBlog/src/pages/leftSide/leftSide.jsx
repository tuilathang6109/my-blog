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
function NavItems ({item}) {
    return (
        <li className="navbarItems hover "><a href={`#${item.label}`}>{item.label}</a><i className="font-bold pl-1.5">{item.icon}</i></li>
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
                    <NavBar/>
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