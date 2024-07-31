import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Jupiter = () => {
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
        <div className="relative overflow-hidden w-full h-[761px]" id="jupiter">
            <img src="./images/planet40.png" className="w-[1584px] h-[138.76%] opacity-100 relative"></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[83.44%] top-[19.71%] left-[-1.45%] z-10"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[119.93%] top-[-1.31%] left-[-1.57%] z-10"></img>
            <img src="./images/planet41.png" className="absolute w-[72.66%] h-[151.11%] top-[-43.47%] left-[42.65%] z-10" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" alt="Planet 41"></img>
            <img src="./images/planet42.png" className="absolute w-[49.33%] h-[102.69%] top-[-16.87%] left-[54.43%] " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" alt="Planet 42"></img>
            <div className="absolute w-[38.51%] h-[19.97%] top-[10.51%] left-[6.18%] flex flex-col ">
                <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px]">5.Jupiter</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6 w-[610px]">Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms,
                    and numerous moons.</p>
            </div>
            <div className="flex z-20 gap-6 absolute top-[40.99%] left-[6.18%] items-center w-[22.22%] h-[23.12%] rounded-[16px] custom-radial-gradient-button  border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                <img src="./images/planet21.png" className="w-[22.72%] h-[80px] mt-4"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">86,881 <br /> Miles</h1>
                </div>
            </div>
            <div className="flex z-20 gap-6 absolute top-[67.41%] left-[6.18%]  items-center w-[22.22%] h-[23.12%]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49] pt-[40px] pb-[40px] pl-[24px] pr-[24px]">
                <img src="./images/planet27.png" className="w-[9.35%] h-[80px] mt-4 ml-2 mr-2"></img>
                <div className="flex flex-col">
                    <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Temperature</p>
                    <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">-108° <br /> Celsius</h1>
                </div>
            </div>
        </div>
    )
}
export default Jupiter;