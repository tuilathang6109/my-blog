import { useState } from 'react';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import NavBar from './sidebarComponent/Navbar';
import Profile from './sidebarComponent/Profile';
import Footer from './sidebarComponent/Footer';


function Sidebar () { 
    const [isSidebarVisible, setLeftSideVisible] = useState(false);

    const toggleSidebar = () => {
        setLeftSideVisible(!isSidebarVisible);
    };
    return (
        <>
            {/* Menu Icon------------- */}
            <i
                id="iconMenu"
                className={`iconMenu xl:hidden lg:hidden ${isSidebarVisible ? 'hidden' : ''}`}
                onClick={toggleSidebar} 
            >
                <AiOutlineMenu/>
            </i>
            {/* Close Icon------------ */}
            <i
                id="iconClose"
                className={`iconClosse xl:hidden lg:hidden ${!isSidebarVisible ? 'hidden' :''}`}
                onClick={toggleSidebar}
            >
                <AiOutlineClose />
            </i>

            {/* Sidebar---------------- */}
            <div 
            className={`sidebar ${!isSidebarVisible ? `sm:hidden s:hidden md:hidden` : ''}`}
            >
                <Profile/>

            <ul className="navbar ">
                <NavBar toggleSidebar={toggleSidebar}/>
            </ul>
                
                <Footer/>
            </div>
        </>
    )
}
export default Sidebar ;