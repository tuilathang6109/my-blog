import React from 'react';
import ReactDOM from 'react-dom';
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
                
                className={`iconMenu xl:hidden lg:hidden ${isSidebarVisible ? 'hidden' :''}`}
                onClick={toggleSidebar} 
            >
                <AiOutlineMenu/>
            </i>
            {/* Close Icon------------ */}
            <i
                
                className={`iconClosse xl:hidden lg:hidden ${!isSidebarVisible ? 'hidden' :''}`}
                onClick={toggleSidebar}
            >
                <AiOutlineClose />
            </i>

            {/* Sidebar---------------- */}
            <div 
                className={`sidebar shrink ${!isSidebarVisible ? `md:w-0 sm:w-0 s:w-0 transition-all overflow-hidden ` : 'md:w-full sm:w-full s:w-full transition-all sm:overflow-hidden s:overflow-hidden md:overflow-hidden'}`}
            >

                <Profile/>

                <NavBar toggleSidebar={toggleSidebar}/>
           
                <Footer/>
            </div>
        </>
    )
}
export default Sidebar ;