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
        <li className="navbarItems hover"><a href={`/${item.label}`} onClick={toggleLeftSide}>{item.label}</a><i className="font-bold pl-1.5">{item.icon}</i></li>
    )
}
function NavBar ({ toggleLeftSide }) {
    return (
        (items.map((item, index) => <NavItems item={item} key={index} toggleLeftSide={toggleLeftSide}/>))
    )}

export default NavBar