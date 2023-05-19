import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineExclamationCircle, AiOutlineCustomerService, AiOutlineCheckCircle, AiOutlineHourglass, AiOutlineLaptop, AiOutlineContacts } from 'react-icons/ai';
import { MdCastForEducation } from 'react-icons/md';
import { TbBrandBlogger } from 'react-icons/tb';

const items = [
  { label: 'home', icon: <AiOutlineHome /> },
  { label: 'about', icon: <AiOutlineExclamationCircle /> },
  { label: 'services', icon: <AiOutlineCustomerService /> },
  { label: 'skills', icon: <AiOutlineCheckCircle /> },
  { label: 'education', icon: <MdCastForEducation /> },
  { label: 'experience', icon: <AiOutlineHourglass /> },
  { label: 'work', icon: <AiOutlineLaptop /> },
  { label: 'blog', icon: <TbBrandBlogger /> },
  { label: 'contact', icon: <AiOutlineContacts /> },
];

function NavItems({ item, toggleLeftSide, activeItem, setActiveItem }) {
  const handleClick = () => {
    setActiveItem(item.label);
    toggleLeftSide();
  };

  const isActive = activeItem === item.label;

  return (
    <li
      className={`navbarItems hover ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <a
        href={`#${item.label}`}
        className={`flex items-center relative ${isActive ? 'text-blue-500 scale-125 ' : ''}`}
      >
          {item.label}
          <i className={`ml-1 ${isActive ? 'text-blue-500 scale-125' : ''}`}>{item.icon}</i>
      </a>
    </li>
  );
}

function NavBar({ toggleLeftSide }) {
  const [activeItem, setActiveItem] = useState('');

  return (
    <ul className="flex flex-col">
      {items.map((item, index) => (
        <NavItems
          item={item}
          key={index}
          toggleLeftSide={toggleLeftSide}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </ul>
  );
}
export default NavBar;
