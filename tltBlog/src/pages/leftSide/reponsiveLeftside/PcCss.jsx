
const PcCss = {
    hover:"hover:border-b-2 hover:scale-x-125 hover:scale-y-125 transition-all duration-300 ease-in-out hover:font-extrabold ",
    lgNavbar :"active:border-b-2 active:scale-x-125 active:scale-y-125 transition-all duration-300 ease-in-out active:font-extrabold ",
    leftSide : "flex flex-col  h-screen items-center bg-BgGrey py-11",
    profile : {
        profileMain : "font-PlayfairDisplay text-center flex flex-col items-center border-b-2",
        profileImg : "drop-shadow-2xl w-36 h-36 rounded-full mx-16 mb-6 border-solid border-2 hover:border-blue-500 cursor-pointer  border-gray-300" ,
        profileName : "font-Kanit mb-3 text-xl font-bold",
        profileSologan :"mb-6 italic text-sm"
    },
    navigation : {
        navBar : "mt-6 font-Kanit font-bold text-sm text-textBlack text-center cursor-pointer font-medium transparent ",
        navBarItem :"py-3 flex justify-center"

    },
    footerSideBar : {
        footerSb : "font-PlayfairDisplay text-xs text-center mt-40 opacity-60",
        auther : "text-blue-700 underline"
    }
}

export default PcCss
