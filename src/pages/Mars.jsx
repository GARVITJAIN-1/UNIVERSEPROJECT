import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Mars = () => {
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
        <div className="relative overflow-hidden w-full h-[761px]" id="mars">
            <img src="./images/planet37.png" className="w-[1584px] h-[138.76%] opacity-100 relative"></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[83.44%] top-[19.71%] left-[-1.45%] z-10 animate__animated  animate__flash  duration"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[119.93%] top-[-1.31%] left-[-1.57%] z-10 animate__animated  animate__flash  duration"></img>
            <img src="./images/planet38.png" className="absolute w-[63.13%] h-[118.26%] top-[36.79%] left-[-27.77%] z-20 " data-aos = "flip-down" alt="Planet 38"></img>
            <img src="./images/planet39.png" className="absolute w-[5.77%] h-[9.04%] top-[44.80%] left-[30.93%] z-20 animate__animated  animate__pulse  duration"></img>
            <div className="absolute w-[41.47%] h-[23.12%] top-[10.51%] left-[6.18%] flex flex-col ">
                <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px]">4.Mars</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6">Mars, often referred to as the "Red Planet," is
                    the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.</p>
            </div>
            <div className="flex absolute top-[10.51%] left-[62.5%] items-center gap-6 w-[22.22%] h-[23.12%]   custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49] z-20">
                <img src="./images/planet21.png" className="w-[22.72%] h-[80px] mt-2 ml-4"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">4,212 <br /> Miles</h1>
                </div>
            </div>
            <div className="flex absolute top-[38.89%] left-[62.5%] justify-evenly items-center w-[22.22%] h-[23.12%] z-20  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49]">
                <img src="./images/planet22.png" className="w-[9.35%] h-[80px] mt-4"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Day time Temperature</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">±20° <br /> Celsius</h1>
                </div>
            </div>
            <div className="flex absolute top-[67.27%] left-[62.5%] justify-evenly items-center w-[22.22%] h-[23.12%] z-20  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49]">
                <img src="./images/planet27.png" className="w-[9.35%] h-[80px] mt-4"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Night time Temperature</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">-73° <br /> Celsius</h1>
                </div>
            </div>
            <div className="w-[22.22%] h-[18.92%] absolute flex flex-col top-[54.92%] left-[37.62%]">
                <h1 className="orbitron text-white font-extrabold sm:text-[20px] md:text-[25px] lg:text-[38px] leading-[48px] ">Martian Moons</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6  max-w-[352px]">Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.</p>
            </div>
        </div>
    )
}
export default Mars;