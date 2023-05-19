

import Home from "./rightSideComponent/home/Home";
import About from "./rightSideComponent/about/About";
import Services from "./rightSideComponent/services/Services";
import Skill from "./rightSideComponent/skills/Skill";
import Education from "./rightSideComponent/education/Education";
import Experience from "./rightSideComponent/experience/Experience";
import Work from "./rightSideComponent/work/Work";
import Blog from "./rightSideComponent/blog/Blog";
import Contact from "./rightSideComponent/contact/Contact"

function RightSide () { 
    return (
        <>
            <div className="right-side w-4/5 md:w-full sm:w-full s:w-full text-center xl:ml-auto lg:ml-auto ">
                    <Home />
                    <About />
                    <Services />    
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