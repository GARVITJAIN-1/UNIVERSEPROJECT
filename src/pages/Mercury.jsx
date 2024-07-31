import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useRef } from "react";
const Mercury = () => {
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
        <div className="w-full h-[766px] relative overflow-hidden" id="mercury">
            <img src="./images/planet23.png" className="w-[1584px] min-h-[137.85%] opacity-100 relative"></img>
            <img src="./images/planet24.png" className="absolute w-[44.57%] h-[92.16%] top-[3.91%] left-[-11.67%] z-10 " data-aos = "fade-right" alt="Planet 24"></img>
            <img src="./images/planet25.png" className="absolute w-[93.75%] h-[93.99%] top-[6.52%] left-[-1.45%]"></img>
            <img src="./images/planet26.png" className="absolute w-[88.38%] h-[104.52%] top-[-1.95%] left-[0.12%]"></img>
            <div className="absolute top-[10.44%] left-[38%] max-w-[740px] max-h-[608px]">
                <div>
                    <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px]">1.Mercury</h1>
                    <p className="text-white font-medium sm:text-[12px]   md:text-[12px] lg:text-[16px] leading-[24px] mt-6">Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system,
                        characterized by their solid, rocky composition.</p>
                </div>
                <div className="flex flex-wrap gap-9 mt-9">
                    <div className="flex justify-evenly items-center w-[47.56%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49]">
                        <img src="./images/planet21.png" className="w-[22.72%] h-[45.45%] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                            <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">3032 <br /> Miles</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center w-[47.56%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49]">
                        <img src="./images/planet22.png" className="w-[9.35%] h-[45.45%] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Day time Temperature</p>
                            <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">±430° <br /> Celsius</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center w-[47.56%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] border-[4px] border-[#430E49]">
                        <img src="./images/planet27.png" className="w-[9.35%] h-[45.45%] mt-4"></img>
                        <div className="flex flex-col">
                            <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Night time Temperature</p>
                            <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">-180° <br /> Celsius</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Mercury