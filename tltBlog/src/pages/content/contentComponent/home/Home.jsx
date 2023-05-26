import vnLocation from "../../../../images/vietnamLocation.png"
import checkIcon from "../../../../images/iconCheck.png"
const Home = ()=>{

  

    return (
    <div id="home" className="homepage ">
      <div className="slider">
        <div className="slider-item-1 responsive-item-1 slider-item"> 
          <p 
            className="text-[37px] xl:text-[67px] font-extrabold"
          >
            Hi ! 
            <br />
            I'm Thang
          </p>
          <div 
              className=" inline-block italic first-letter:italic text-blue-500"
            > 
              Wellcome 
            <img 
              className="pl-1 mb-1 h-4 inline-block" src={checkIcon} alt="" 
            />
          </div>
        </div>

        <div className="slider-item-2 responsive-item-2 slider-item"> 
          <p 
            className="text-[37px] xl:text-[67px] font-extrabold"
          >
            I am a
            <br />
            Web Devoloper
          </p>
          <div 
            className=" inline-block italic first-letter:italic text-red-500"
          >
              From VietNam 
            <img className="pl-1 h-5 inline-block" src={vnLocation} alt="" />
          </div>
        </div>
      </div>
    </div>

    )
    
    }
    export default Home