import { useState } from 'react';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import NavBar from './leftSideComponent/navbar';
import Profile from './leftSideComponent/profile';
import  Footer from './leftSideComponent/footerLeft';


function LeftSide () { 
    const [isLeftSideVisible, setLeftSideVisible] = useState(false);

    const toggleLeftSide = () => {
    setLeftSideVisible(!isLeftSideVisible);
    };
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
            className={`iconClosse xl:hidden lg:hidden ${!isLeftSideVisible ? 'hidden' :''}`}
            onClick={toggleLeftSide}
        >
        <AiOutlineClose />
        </i>
        <div 
            className={`left-side ${!isLeftSideVisible ? `sm:hidden s:hidden md:hidden` : ''}`}
        >
                <Profile/>
                <ul className="navbar ">
                <NavBar toggleLeftSide={toggleLeftSide}/>
                </ul>
                <Footer/>
            </div>
        </>
    )
}
export default LeftSide ;