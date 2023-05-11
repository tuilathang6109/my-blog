import GruopClass from "./groupClass"

import {AiOutlineExclamationCircle} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"


const items = [
    {label: "HOME",icon: <AiOutlineHome/>},
    {label: "ABOUT",icon:<AiOutlineExclamationCircle/>},
    {label: "SERVICES"},
    {label: "SKILLLS"},
    {label: "EDUCATION"},
    {label: "EXPERIENCE"},
    {label: "WORK"},
    {label: "BLOG"},
    {label: "CONTACT"},
]
function NavItems ({item}) {
    return (
        <li className={`py-2.5 flex justify-center ${GruopClass.hover}}`} >{item.label} <i className="pl-1 text-sm">{item.icon}</i></li>
    )
}
function NavBar () {
    return (
        (items.map((item, index) => <NavItems item={item} key={index} />))
    )}

export default NavBar