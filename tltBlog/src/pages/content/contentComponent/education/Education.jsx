import React, { useState } from 'react';
const Education = ()=>{
    const [isExpanded, setIsExpanded] = useState(false);

    const togglePanel = () => {
      setIsExpanded(!isExpanded);
    };

    return (
        <div id="education" className="">
            


             <div className="panel">
                <div className="panel-header" onClick={togglePanel}>
                    <h3 className="panel-title px-[25px] py-[20px] bg-BgGrey">Tiêu đề</h3>
                    <button className="panel-toggle">
                    {isExpanded ? 'Thu gọn' : 'Mở rộng'}
                    </button>
                </div>
                {isExpanded && (
                    <div className="panel-body">
                        Nội 
                        dung
                    </div>
                )}
                </div>
       </div>         

    )
    
    }
    export default Education