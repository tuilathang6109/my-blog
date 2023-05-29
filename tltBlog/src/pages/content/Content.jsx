

import Home from "./contentComponent/home/Home";
import About from "./contentComponent/about/About";
import Skill from "./contentComponent/skills/Skill";
import Education from "./contentComponent/education/Education";
import Experience from "./contentComponent/experience/Experience";
import Work from "./contentComponent/work/Work";
import Blog from "./contentComponent/blog/Blog";
import Contact from "./contentComponent/contact/Contact"

function RightSide () { 
    return (
        <>
            <div className="flex flex-col right-side w-4/5 md:w-full sm:w-full s:w-full text-center xl:ml-auto lg:ml-auto ">
                <Home />
                <About />   
                <Skill />
                <Education />
                <Experience />
                <Work />
                <Blog />
                <Contact/>
            </div>
        </>
    )
}
export default RightSide ;