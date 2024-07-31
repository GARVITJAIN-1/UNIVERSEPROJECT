import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Earth=()=>{
    const sectionRef = useRef(null);

    useEffect(() => {
        
        Aos.init({
            duration: 2000,
            easing: 'ease-in-out',
            once: false
        });

        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const { top, bottom } = section.getBoundingClientRect();
               
                if (top < window.innerHeight && bottom >= 0) {
                    Aos.refresh();
                }
            }
        };

        
        window.addEventListener('scroll', handleScroll);

       
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="w-full h-[893px] relative overflow-hidden" id="earth">
             <img src="./images/planet32.png" className="w-[1584px] h-[118.25%] opacity-100 relative"></img>
             <img src="./images/planet29.png" className="absolute w-[93.75%] h-[75.02%] top-[16.79%] left-[-1.45%] z-10"></img>
             <img src="./images/planet30.png" className="absolute w-[93.68%] h-[102.20%] top-[-1.11%] left-[-1.57%] z-10"></img>
             <img src="./images/planet33.png" className="absolute w-[11.48%] h-[20.92%] top-[47.59%] left-[-0.75%] z-10 " data-aos = "fade-up-right" alt="Planet 33"></img>
             <img src="./images/planet34.png" className="absolute w-[79.73%] h-[156.76%] top-[39.75%] left-[8.20%] z-10 " data-aos = "zoom-out" alt="Planet 34"></img>
             <img src="./images/planet35.png" className="absolute w-[87.18%] h-[154.64%] top-[49.49%] left-[3.97%] z-10 "></img>
             <img src="./images/planet36.png" className="absolute w-[11.10%] h-[16.72%] top-[33.14%] left-[62.82%] z-10"></img>
            <div className="absolute w-[42.73%] h-[19.70%] top-[7.16%] left-[6.18%] flex flex-col ">
            <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px]">3.Earth</h1>
                    <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6">Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. 
                        It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.</p>
            </div>
            <div className=" absolute top-[7.16%] left-[62.5%] flex z-20 gap-6 items-center w-[22.22%] h-[19.70%] rounded-[16px] custom-radial-gradient-button  border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                    <img src="./images/planet21.png"  className="w-[22.72%] h-[80px] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                            <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">7,918 <br /> Miles</h1>
                        </div>
                    </div>
            <div className="absolute flex flex-col max-w-[42.73%] h-[13.43%] top-[33.14%] left-[18.68%]">
                <h1 className="orbitron text-white font-extrabold sm:text-[20px] md:text-[25px] lg:text-[38px] leading-[48px] text-right">Moon Planet</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6 text-end max-w-[677px]">Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. 
                    The Moon's gravitational pull causes ocean tides to rise and fall.</p>

            </div>

        </div>
    )
}
export default Earth;