import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Saturn = () => {
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
        <div className="relative overflow-hidden w-full h-[808px]" id="saturn">
            <img src="./images/planet43.png" className="w-[1584px] h-[130.69%] opacity-100 relative"></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[78.58%] top-[18.56%] left-[-1.45%] z-10"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[112.95%] top-[-1.23%] left-[-1.57%] z-10"></img>
            <img src="./images/planet44.png" className="absolute w-[73.73%] h-[121.77%] top-[-7.42%] left-[-18.30%] z-10 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"></img>
            <div className="absolute w-[44.69%] h-[21.78%] top-[9.90%] left-[40.02%] flex flex-col ">
                <h1 className="orbitron text-white font-extrabold md:text-[50px] lg:text-[67px] leading-[80px] text-end">6.Saturn</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6  text-end">Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually
                    distinctive objects in our solar system, with more than 80 known satellites.</p>
            </div>
            <div className="flex z-20 gap-6 absolute top-[41.58%] left-[62.5%] items-center w-[22.22%] h-[21.78%] rounded-[16px] custom-radial-gradient-button  border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                <img src="./images/planet21.png" className="w-[22.72%] h-[80px] mt-4"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">74,898 <br /> Miles</h1>
                </div>
            </div>
            <div className="flex z-20 gap-6 absolute top-[68.31%] left-[62.5%]  items-center w-[22.22%] h-[21.78%]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                <img src="./images/planet27.png" className="w-[9.35%] h-[80px] mt-4 ml-2 mr-2"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Temperature</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">-139° <br /> Celsius</h1>
                </div>
            </div>
        </div>
    )
}
export default Saturn;