import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Venus=()=>{
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
    return(
        <div className="w-full h-[785px] relative overflow-hidden" id="venus">
            <img src="./images/planet28.png" className="w-[1584px] h-[134.52%] opacity-100 relative "></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[85.35%] top-[15.41%] left-[-1.45%] z-10 "></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[116.26%] top-[-5.73%] left-[-1.57%] z-10 "></img>
            <img src="./images/planet31.png" className="absolute w-[78.40%] h-[158.21%] left-[38.95%] top-0 z-20 " data-aos = "fade-left" alt="Planet 31"></img>
            <div className="absolute max-w-[37.68%] max-h-[79.49%] top-[10.19%] left-[6.18%]">
                <div>
                <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px]">2.Venus</h1>
                    <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6">Venus is often referred to as Earth's "sister planet" due to its similar size and composition,
                         but it stands out with its extremely inhospitable environment</p>
                </div>
                <div className="flex flex-col max-w-[124.62%] max-h-[28.20%] gap-10 mt-20 z-20">
                    <div className="flex z-20 gap-6 items-center w-[48.88%] h-[176px] rounded-[16px] custom-radial-gradient-button  border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                    <img src="./images/planet21.png"  className="w-[22.72%] h-[80px] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                            <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">7,521 <br /> Miles</h1>
                        </div>
                    </div>
                    <div className="flex z-20 gap-6  items-center w-[48.88%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                    <img src="./images/planet22.png"  className="w-[9.35%] h-[80px] mt-4 ml-2 mr-2"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Temperature</p>
                            <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">±475° <br /> Celsius</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Venus;