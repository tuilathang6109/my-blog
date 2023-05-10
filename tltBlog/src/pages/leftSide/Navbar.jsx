import GruopClass from "./groupClass"
const items = [
    {label: "HOME", active: true},
    {label: "ABOUT"},
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
        <li className={`py-2.5 ${GruopClass.hover}}`} >{item.label}</li>
    )
}
function NavBar () {
    return (
        (items.map((item) => <NavItems item={item} key={item.label} />))
    )}

export default NavBar