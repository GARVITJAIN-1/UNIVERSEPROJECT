
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HashLink as Link } from "react-router-hash-link";
const Hero=()=>{
    
    return(
        <div className="w-full max-h-[952px] relative overflow-hidden " id="hero" >
          <img src="./images/planet12.png" className="w-[100vw] h-[952px] opacity-100"></img>
          <div className="w-[30%]">
          <Navbar></Navbar>

          </div>
            <img src="./images/planet55.png" className="absolute w-[18.59%] h-[25.96%] top-[7.14%] left-[-6%] animate__animated animate__fadeInLeft duration1"></img>
            <img src="./images/planet56.png" className="absolute w-[10.47%] h-[17.84%] top-[85.18%] left-[-1.5%] z-20 animate__animated animate__fadeInBottomLeft duration1"></img>
            <img src="./images/planet57.png" className="absolute w-[14.26%] h-[23.26%] top-[84.13%] left-[37.5%] z-20 animate__animated animate__fadeInUp duration1"></img>
            <img src="./images/planet3.png" className="absolute w-[42.64%] h-[57.46%] top-[31.51%] left-[-22.44%] z-20 animate__animated animate__fadeInLeft duration1"></img>
            <img src="./images/planet4.png" className="absolute w-[31.55%] h-[54.30%] top-[61.97%] left-[75.60%] animate__animated animate__fadeInBottomRight duration1"></img>
            <img src="./images/planet5.png" className="absolute w-[30.67%] h-[45.77%] top-[12.60%] left-[83.17%] z-20 animate__animated animate__fadeInRight duration1"></img>
            <img src="./images/planet6.png" className="absolute w-[8.25%] h-[15.21%] top-[14.07%] left-[46.27%] z-20 animate__animated animate__pulse duration"></img>
            <img src="./images/planet7.png" className="absolute w-[3.95%] h-[6.58%] top-[49.05%] left-[16.62%] animate__animated animate__pulse duration"></img>
            <img src="./images/planet8.png" className="absolute top-[48.73%] left-[41.03%]"></img>
            <img src="./images/planet9.png" className="absolute top-0 left-[78.91%]"></img>
            <img src="./images/planet10.png" className="absolute top-[55.04%] left-[-4.10%] opacity-50"></img>
            <img src="./images/planet11.png" className="absolute top-0 left-[48.61%] opacity-40"></img>
            <img src="./images/planet13.png" className="absolute top-[1.78%] left-[-1.45%] "></img>
            <img src="./images/planet14.png" className="absolute top-[-0.94%] left-[-0.82%] "></img>

            <div className="max-w-[65.66%] h-[62.39%] absolute bg-transparent top-[22.58%] left-[15.02%] z-30">
                <h1 className="text-white text-center leading-[126px] font-extrabold sm:text-[45px] md:text-[55px] lg:text-[90px] orbitron  ">Let's Get To Know Our Solar System Galaxy</h1>
                <p className="text-white text-center leading-[24px] font-medium sm:text-[8px]  md:text-[10px] lg:text-[16px] mt-2 ">Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos 
                    and the planets weaving stories of their timeless existence.
                </p>
                <div className="text-center w-[56.81%] h-[31.64%] mx-auto  ">
                   
                   <button className="w-[100%] h-[50%] text-center relative ">
                   <Link
            smooth
            to="#sun"
            className="inline-block w-[50%] h-[88%]    orbitron text-white font-extrabold rounded-[8px] text-center sm:text-[12px] md:text-[15px] lg:text-[21px] leading-[60px] custom-gradient-button mt-8"
          >
            Learn More
          </Link>
          <img src="./images/south.png" className="absolute top-[62%] left-[66%] z-20 "></img>
                   </button >
                   
                </div>

            </div>

         
        </div>
    )
}
export default Hero;