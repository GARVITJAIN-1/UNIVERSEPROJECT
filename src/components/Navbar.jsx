
import { useState } from "react";
import { HashLink as Link   } from "react-router-hash-link";

const Navbar = ()=>{
    const [first,setFirst]=useState(true);
   
    const ClickHandler=(e)=>{
       
        e.preventDefault(); 
        setFirst(!first); 
    }
    return(
        <div className="absolute top-6 sm:left-20 lg:left-40 z-20 sm:w-[50%] md:w-[70%] lg:w-[100%]">

       
        <div className=" flex justify-evenly gap-32 w-[97%]  ">
            <div className="w-[30%]">
                <img src="./images/Frame 11.png" className="h-[150%] md:w-[50%] lg:w-[70%]"></img>
            </div>
            <div className="w-[70%] h-[50%] flex justify-between gap-4">
             {
                first ? (<div className="flex justify-between w-[70%]">
                     <a  href="#mercury" className="font-medium hover:font-bold text-[16px] leading-[24px] text-[#FFFFFF]  w-[50%] ml-10 ">Mercury</a>
                <a  href="#venus" className="font-medium hover:font-bold text-[16px] leading-[24px] text-[#FFFFFF] ml-10">Venus</a>
                <a  href="#earth" className="font-medium hover:font-bold text-[16px] leading-[24px] text-[#FFFFFF] ml-10">Earth</a>
                <a  href="#mars" className="font-medium hover:font-bold text-[16px] leading-[24px] text-[#FFFFFF] ml-10">Mars</a>
                <a  href="#hero" onClick={ClickHandler} className="font-medium hover:font-bold text-[16px] leading-[24px] text-[#FFFFFF] ml-10 cursor-pointer">...</a>
                </div>) :(<div>
                <a onClick={ClickHandler} href="#hero" className="font-medium hover:font-bold text-[16px] leading-[24px] text-[#FFFFFF] ml-10 cursor-pointer">...</a>
                    <a  href="#jupiter" className="font-medium text-[16px] hover:font-bold leading-[24px] text-[#FFFFFF] ml-10">Jupiter</a>
                <a  href="#saturn" className="font-medium text-[16px] hover:font-bold leading-[24px] text-[#FFFFFF] ml-10">Saturn</a>
                <a  href="#uranus" className="font-medium text-[16px] hover:font-bold leading-[24px] text-[#FFFFFF] ml-10">Uranus</a>
                <a  href="#neptune" className="font-medium text-[16px] hover:font-bold leading-[24px] text-[#FFFFFF] ml-10">Neptune</a>
                </div> )
             }
               
               
            </div>
            <div className="w-[85%]">
                <p className="font-medium text-[16px] leading-[24px] text-[#FFFFFF] z-10">©2023 Solarsystemdesign</p>
            </div>
        </div>
        </div>
    )
}
export default Navbar;