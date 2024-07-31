const Neptune = () => {
    return (
        <div className="relative  w-full h-[1500px] overflow-hidden" id="neptune">
            <img src="./images/planet47.png" className="w-full h-[70.4%] opacity-100 relative overflow-hidden"></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[42.33%] top-[10%] left-[-1.45%] z-10 animate__animated  animate__flash  duration"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[60.84%] top-[-0.66%] left-[-1.57%] z-10 animate__animated  animate__flash  duration"></img>
            <img src="./images/planet48.png" className="absolute w-[350%] max-h-[93.33%] scale-x-150 scale-y-150 items-stretch top-[28%] left-[-25.25%] z-40 overflow-hidden "></img>
            <img src="./images/planet49.png" className="absolute w-[7.66%] h-[8.03%] top-[38.66%] left-[57.07%] z-10 animate__animated  animate__flash  duration"></img>
            <img src="./images/planet50.png" className="absolute w-[14.10%] h-[14.91%] top-[27.23%] left-[72.73%] z-10 animate__animated  animate__flash  duration"></img>
            <div className="absolute w-[67.86%] h-[10.13%] top-[5.33%] left-[11.55%] flex flex-col z-20">
                <h1 className="orbitron text-white font-extrabold  md:text-[50px] lg:text-[67px] leading-[80px] text-center">8.Neptune</h1>
                <p className="text-white font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] mt-6  text-center">Neptune, often called the
                    "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.</p>
            </div>
            <div className="flex absolute top-[19.33%] left-[21.96%]  w-[45.45%] max-h-[11.73%] gap-10  z-20">
                <div className="flex  gap-6 justify-evenly  items-center w-[48.88%] h-[176px] rounded-[16px] custom-radial-gradient-button pt-[40px] pb-[40px] pl-[24px] pr-[24px]  border-[4px] border-[#430E49]">
                    <img src="./images/planet21.png" className="w-[22.72%] h-[80px] mt-4 mb-4"></img>
                    <div className="flex flex-col flex-wrap ">
                        <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white">Diameter</p>
                        <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">30,775 <br /> Miles</h1>
                    </div>
                </div>
                <div className="flex gap-6 items-center w-[48.88%] h-[176px]  custom-radial-gradient-button custom-gradient-border-button rounded-[16px] pt-[40px] pb-[40px] pl-[24px] pr-[24px] border-[4px] border-[#430E49]">
                    <img src="./images/planet27.png" className="w-[9.35%] h-[80px] mt-4 mb-4 ml-4"></img>
                    <div className="flex flex-wrap flex-col w-[81.57%]">
                        <p className="orbitron font-extrabold sm:text-[8px]  md:text-[10px] lg:text-[16px] leading-[24px] text-white w-[81.57%]">Temperature</p>
                        <h1 className="orbitron font-extrabold sm:text-[12px] md:text-[18px] lg:text-[38px] leading-[48px] text-white">-218° <br /> Celsius</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Neptune;