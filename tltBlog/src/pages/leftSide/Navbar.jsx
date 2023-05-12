import PcCss from "./reponsiveLeftside/PcCss"

import {AiOutlineExclamationCircle, AiOutlineHome, AiOutlineCustomerService, AiOutlineCheckCircle,AiOutlineHourglass, AiOutlineLaptop, AiOutlineContacts} from "react-icons/ai"
import {MdCastForEducation} from "react-icons/md"
import {TbBrandBlogger} from "react-icons/tb"
const items = [
    {label: "HOME",icon: <AiOutlineHome/>},
    {label: "ABOUT",icon:<AiOutlineExclamationCircle/>},
    {label: "SERVICES",icon:<AiOutlineCustomerService/>},
    {label: "SKILLLS",icon:<AiOutlineCheckCircle/>},
    {label: "EDUCATION",icon:<MdCastForEducation/>},
    {label: "EXPERIENCE",icon:<AiOutlineHourglass/>},
    {label: "WORK",icon:<AiOutlineLaptop/>},
    {label: "BLOG",icon:<TbBrandBlogger/>},
    {label: "CONTACT",icon:<AiOutlineContacts/>},
]
function NavItems ({item}) {
    return (
        <li className={`py-3 flex justify-center ${PcCss.hover}}`} >{item.label} <i className="pl-1 text-sm">{item.icon}</i></li>
    )
}
function NavBar () {
    return (
        (items.map((item, index) => <NavItems item={item} key={index} />))
    )}

export default NavBar