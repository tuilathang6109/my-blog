

const dataItems = [
    {   
        key : 1,
        name: 'Full Stack Developer', 
        startYear : 2017 , endYear : 2018 , 
        color : 'blue',
        description : "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."
    },
    {   
        key : 2,
        name: 'Full Stack Developer', 
        startYear : 2017 , endYear : 2018 ,
        color : 'red',
        description : "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."  
    },
    {   
        key : 3,
        name: 'Full Stack Developer', 
        startYear : 2017 , endYear : 2018 , 
        color : 'orange',
        description : "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."  
    },
    {   
        key : 4,
        name: 'Full Stack Developer', 
        startYear : 2017 , endYear : 2018 , 
        color : 'purple',
        description : "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."  
    },
    {   
        key : 5,
        name: 'Full Stack Developer', 
        startYear : 2017 , endYear : 2018 , 
        color : 'green',
        description : "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."  
    },
  ];

function ExItems({item}) {
    return (
        <li className="flex cursor-pointer">
                <div className="h-[200px] w-[50px]">
                    <div className="flex justify-center ">
                        <div className={`h-[40px] w-[40px] bg-${item.color}-500 rounded-full border-4 border-gray-200 hover:border-[6px] hover:opacity-80 shadow-lg`}></div>
                    </div>

                    <div className="h-[164px] flex justify-center">
                        <div className="bg-gray-100 w-[5px] "></div>
                    </div>
                </div>

                <div className="h-[200px] w-full flex relative">
                    <div class="w-0 h-0 absolute top-3
                        border-t-[10px] border-t-transparent
                        border-r-[15px] border-r-BgGrey
                        border-b-[10px] border-b-transparent
                        ">
                    </div>
                    <div className=" ml-[15px] text-center w-full mb-[10px] bg-BgGrey rounded-xl shadow-md">
                        <div className="px-[22.5px] pt-[22.5px] pb-[20px] ">
                            <div className="flex mb-[20px] font-Kanit ">
                                <div className="text-xl font-medium ">{item.name}</div>
                                <div className="ml-[15px] mt-[2px] opacity-80">{item.startYear} {"-"} {item.endYear} </div>
                            </div>
                            <div className="text-justify font-light font-Kanit text-[15px]">
                                {item.description}
                            </div>
                        </div>
                    </div>
                </div>
        </li> 
    )
}
function ExList() {
    return (
        <ul className="experience-shapes">
            {dataItems.map((dataItem, index) => (
            <ExItems
                item={dataItem}
                key={index}
            />
            ))}
             <li className="flex">
                <div className="h-[200px] w-[50px]">
                    <div className="flex justify-center">
                        <div className={`h-[26px] w-[26px] rounded-full border-[8px] border-gray-100`}></div>
                    </div>
                </div>

                <div className="h-[200px] w-full flex relative">
            </div>
            </li> 
        </ul>
    )
}
const Experience = ()=>{
    return (
        <div id="experience" className="p-9">
            <div className="experience-text text-left">
                <div className="text-[15px] opacity-50 mb-[15px] uppercase tracking-6"> EXPERIENCE</div>
                <div className="text-[20px] font-bold font-PlayfairDisplay mb-[72px] tracking-6">WORK EXPERIENCE</div>
            </div>
            <ExList/>
        </div>        
    )
    
    }
    export default Experience