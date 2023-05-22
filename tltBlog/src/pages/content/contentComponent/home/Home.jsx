import vnLocation from "../../../../images/vietnamLocation.png"

const Home = ()=>{

    setTimeout(function() {
        document.getElementById('slider-1').classList.add('hidden');
        document.getElementById('slider-2').classList.remove('hidden');
      }, 5000);
    return (
        <div id="home" className="font-Kanit">
        <div id="slider-1" className="xl:h-screen xl:w-auto lg:h-screen lg:w-auto md:hidden sm:hidden s:hidden bg-center bg-no-repeat bg-bgHome-1 xl:relative lg:relative">
          <div className="flex flex-col xl:absolute lg:absolute text-left xl:top-[150px] xl:left-[150px] lg:top-[150px] lg:left-[150px]">
            <p className="text-[37px] font-extrabold">Hi ! <br />
              I'm Thang
            </p>
            <p className="flex italic first-letter:italic text-red-500">I come from VietNam <img className="pl-1 h-5" src={vnLocation} alt="" /></p>
          </div>
        </div>
        <div id="slider-2" className="hidden xl:h-screen xl:w-auto lg:h-screen lg:w-auto md:hidden sm:hidden s:hidden bg-center bg-no-repeat bg-bgHome-2 xl:relative lg:relative">
          <div className="flex flex-col xl:absolute lg:absolute text-left xl:bottom-[450px] xl:right-[80px] lg:bottom-[450px] lg:right-[80px]">
            <p className="text-[37px] font-extrabold">I'm <br />
              a Web Developer
            </p>
            <p className="flex italic first-letter:italic text-red-500">I come from VietNam <img className="pl-1 h-5" src={vnLocation} alt="" /></p>
          </div>
        </div>
      </div>
      

    )
    
    }
    export default Home