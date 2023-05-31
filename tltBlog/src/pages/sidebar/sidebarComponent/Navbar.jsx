import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineExclamationCircle, AiOutlineCheckCircle, AiOutlineHourglass, AiOutlineLaptop, AiOutlineContacts } from 'react-icons/ai';
import { MdCastForEducation } from 'react-icons/md';
import { TbBrandBlogger } from 'react-icons/tb';

const items = [
  { label: 'home', icon: <AiOutlineHome /> },
  { label: 'about', icon: <AiOutlineExclamationCircle /> },
  { label: 'skills', icon: <AiOutlineCheckCircle /> },
  { label: 'education', icon: <MdCastForEducation /> },
  { label: 'experience', icon: <AiOutlineHourglass /> },
  { label: 'work', icon: <AiOutlineLaptop /> },
  { label: 'blog', icon: <TbBrandBlogger /> },
  { label: 'contact', icon: <AiOutlineContacts /> },
];

function NavItems({ item, toggleSidebar, activeItem, setActiveItem }) {
  const handleClick = () => {
    setActiveItem(item.label);
    toggleSidebar();
  };

  const isActive = activeItem === item.label;

  return (
    <li
      className={`navbarItems flex flex-col hover ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <a
        href={`#${item.label}`}
        className={`flex items-center relative ${isActive ? 'text-blue-500 scale-125 ' : ''}`}
      >
          {item.label}
          <i className={`ml-1 ${isActive ? 'text-blue-500 scale-125' : ''}`}>{item.icon}</i>
      </a>
      <span className='h-[2px] w-0 overflow-hidden hover:bg-gray-400 transition-all duration-500 hover:w-[100%]'> </span>
    </li>
  );
}

function NavBar({ toggleSidebar }) {
  const [activeItem, setActiveItem] = useState('');

  return (
    <ul className="navbar flex flex-col ">
      {items.map((item, index) => (
        <NavItems
          item={item}
          key={index}
          toggleSidebar={toggleSidebar}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </ul>
  );
}
export default NavBar;
