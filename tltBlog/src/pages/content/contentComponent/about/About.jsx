import { TfiPalette , TfiWorld , TfiSettings, TfiDesktop } from "react-icons/tfi";


const About = ()=>{
    return (
        <div id="about" className="p-9 font-Kanit bg-BgGrey">
            <div className="about-text text-left"> 
                <div className=" text-[15px] opacity-50 mb-[15px] uppercase tracking-6"> about me</div>

                <div className="text-[20px] font-bold font-PlayfairDisplay mb-[72px] tracking-6">WHO AM I ?</div>

                <div className="text-[16px] opacity-70 leading-10">
                    <p className="italic">
                        Hello there!
                    </p>
                    <p className="pb-2 text-justify">
                        <span className="font-bold">I'm Thang.</span> I come from Vietnam. I have nurtured a love for technology.  
                        Throughout my life, I've nurtured a deep love for technology and its transformative potential. 
                        With expertise in Graphic Design, Web Development, and IT hardware, 
                        I bring a versatile approach to my work, combining creativity and technical skills
                    </p>
                    <p className="pb-2 text-justify">
                        My mantra is <span className="italic font text-blue-500">" Design your life "</span> encapsulates my belief that our choice have the power to shape our experiences and the world around us. 
                        I am driven to inspire and empower others through my blog, where I share knowledge, insights, and creative endeavors. 
                        Together, let's embark on an exhilarating journey as we explore the boundless possibilities of technology, 
                        and design a life that is characterized by beauty, purpose, and innovation.
                    </p>
                    <p className="pb-2 text-justify">
                        Join me as we dive into the fascinating realms of technology, uncovering its wonders and pushing the boundaries of what is possible. 
                        Through our collective exploration, we can create a future where technology enhances our lives and brings about positive change
                    </p>
                    <p className="pb-2 text-justify">
                    Thank you for joining me on this thrilling adventure. Together, let's embrace the limitless potential of technology and design, as we strive to shape a world that is both inspiring and impactful.
                    </p>
                </div>
            <div className="about-shapes xl:flex xl:center mt-16 ">
                <div className="about-shapes-item1 cursor-pointer xl:w-[25%] xl:px-[5%] lg:w-full md:w-full sm:w-full s:w-full md:mb-[30px] sm:mb-[30px] s:mb-[30px] ">
                    <div className="px-5 border-b-2 rounded-lg  shadow-xl border-blue-500">
                        <i className="text-[26px] text-blue-500"><TfiPalette className="mt-[20px]"/></i>
                        <p className="mt-[60px] mb-[50px] w-[177px] opacity-80">Graphic Design</p>
                    </div>  
                </div>
                <div className="about-shapes-item2 cursor-pointer xl:w-[25%] xl:px-[5%] lg:w-full md:w-full sm:w-full s:w-full md:mb-[30px] sm:mb-[30px] s:mb-[30px]">
                    <div className="px-5 border-b-2 rounded-lg  shadow-xl border-red-500">
                        <i className="text-[26px] text-red-500"><TfiWorld className="mt-[20px]"/></i>
                        <p className="mt-[60px] mb-[50px] w-[177px] opacity-80 ">Web Design</p>
                    </div>  
                </div>
                <div className="about-shapes-item3 cursor-pointer xl:w-[25%] xl:px-[5%] lg:w-full md:w-full sm:w-full s:w-full md:mb-[30px] sm:mb-[30px] s:mb-[30px]">
                    <div className="px-5 border-b-2 rounded-lg  shadow-xl border-yellow-500">
                        <i className="text-[26px] text-yellow-500"><TfiDesktop className="mt-[20px]"/></i>
                        <p className="mt-[60px] mb-[50px] w-[177px] opacity-80">Software</p>
                    </div>  
                </div>
                <div className="about-shapes-item4 cursor-pointer xl:w-[25%] xl:px-[5%] lg:w-full md:w-full sm:w-full s:w-full md:mb-[30px] sm:mb-[30px] s:mb-[30px]">
                    <div className="px-5 border-b-2 rounded-lg  shadow-xl border-purple-500">
                        <i className="text-[26px] text-purple-500"><TfiSettings className="mt-[20px]"/></i>
                        <p className="mt-[60px] mb-[50px] w-[177px] opacity-80">Hardware</p>
                    </div>  
                </div>
                
            </div>
            </div>
         </div>
    )
    
    
    }
    
    export default About