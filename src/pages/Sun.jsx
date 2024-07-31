import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Sun = () => {
    useEffect(()=>{
        Aos.init({ duration: 2000, easing: 'ease-in-out', once:true});
    
    },[])
    return (
        <div className="relative overflow-hidden" id="sun">
            <img src="./images/planet15.png" className="w-[1584px] h-[1056px] opacity-100 relative"></img>
            <img src="./images/planet16.png" className="absolute top-[11.45%] left-[-1.45%]"></img>
            <img src="./images/planet17.png" className="absolute w-[106.31%] h-[106.31%] top-[-14.67%] left-[-5.36%] "></img>
            <img src="./images/planet18.png" className="absolute w-[116.16%] h-[153.88%] top-[-103.12%] left-[-6.38%] z-20  " data-aos = "fade-down" alt="Planet 18"></img>
            <img src="./images/planet19.png" width={62.62} height={62.63} className="absolute  top-[61.55%] left-[81.81%] "></img>
            <img src="./images/planet20.png" width={1412} height={1112} className="absolute  top-[-66.28%] left-[0.12%] z-10 animate__animated animate__zoomIn duration"></img>
            <div className="max-w-[52.14%] max-h-[37.12%] absolute top-[50.75%] left-[6.18%] flex flex-col">
                <div className="max-w-[100%] max-h-[44.89%] flex flex-col gap-16">


                    <h1 className="orbitron font-extrabold text-[67px] leading-[20px] text-[#FFFFFF]">. Sun</h1>
                    <p className="text-white font-medium leading-[24px] text-[16px]">The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth.
                        This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.</p>
                </div>
                <div className="flex max-w-[90.07%] max-h-[44.89%] gap-10 mt-10">
                    <div className="flex justify-evenly items-center w-[47.31%] h-[176px] rounded-[16px] custom-radial-gradient-button  border-[4px] border-[#430E49]">
                    <img src="./images/planet21.png"  className="w-[22.72%] h-[45.45%] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                            <h1 className="orbitron font-extrabold md:text-[18px] lg:text-[38px] leading-[48px] text-white w-[100%]">870,000 <br /> Miles</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center w-[47.31%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49]">
                    <img src="./images/planet22.png"  className="w-[9.35%] h-[45.45%] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Temperature</p>
                            <h1 className="orbitron font-extrabold md:text-[18px] lg:text-[38px] leading-[48px] text-white">±5,500° <br /> Celsius</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sun;