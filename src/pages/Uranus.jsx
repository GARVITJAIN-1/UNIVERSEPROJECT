import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Uranus = () => {
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
        <div className="relative overflow-hidden w-full h-[819px]" id="uranus">
            <img src="./images/planet45.png" className="w-[1584px] h-[128.93%] opacity-100 relative"></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[77.53%] top-[18.31%] left-[-1.45%] z-10"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[111.43%] top-[-1.22%] left-[-1.57%] z-10"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[111.43%] top-[-1.22%] left-[-1.57%] z-10 "></img>
            <img src="./images/planet46.png" className="absolute w-[90.53%] h-[179.24%] top-[40.04%] left-[10.10%] z-10 " data-aos = "zoom-out" alt="Planet 34"></img>
            <div className="absolute w-[31.81%] h-[21.48%] top-[9.76%] left-[6.18%] flex flex-col ">
                <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px] ">7.Uranus</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6 w-[504px] ">Uranus, often referred to as the "Ice Giant," is a unique and <br></br>mysterious planet in our solar system.
                    It stands out due to its <br></br> distinct blue-green color and its unusual rotation axis.</p>
            </div>
            <div className="flex absolute top-[4.88%] left-[39.26%]  max-w-[45.45%] max-h-[21.48%] gap-4 mt-10 z-20">
                <div className="flex gap-6  items-center w-[48.88%] h-[176px] rounded-[16px] custom-radial-gradient-button pt-[40px] pb-[40px] pl-[24px] pr-[24px]  border-[4px] border-[#430E49]">
                    <img src="./images/planet21.png" className="w-[22.72%] h-[80px] mt-4"></img>
                    <div className="flex flex-col">
                        <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                        <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">31,518 <br /> Miles</h1>
                    </div>
                </div>
                <div className="flex gap-6 items-center w-[48.88%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] pt-[40px] pb-[40px] pl-[24px] pr-[24px] border-[4px] border-[#430E49]">
                    <img src="./images/planet27.png" className="w-[9.35%] h-[80px] mt-4"></img>
                    <div className="flex flex-col">
                        <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Temperature</p>
                        <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">-224° <br /> Celsius</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Uranus;