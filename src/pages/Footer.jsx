import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
const Footer = () => {
    const [text, setText] = useState("");
    const clickHandler = () => {
        toast.success('Subscribed Successfully');
        setText("");
    }
    const changeHandler = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="absolute overflow-hidden  w-full max-h-[553px] top-[8550px]">
            <img src="./images/planet51.png" className="w-full h-[1006px] opacity-100 relative overflow-hidden"></img>
            <img src="./images/planet29.png" className="absolute w-[93.75%] h-[114.82%] top-[14.91%] left-[-23px] z-10"></img>
            <img src="./images/planet30.png" className="absolute w-[93.68%] h-[165.03%] top-[-0.99%] left-[-25px] z-10"></img>
            <div className="w-[93.34%] h-[81.01%] mx-auto  absolute top-[12.29%] left-[3.28%] bg-[#1E1E1E] rounded-[40px]  z-50">
                <div className="w-[63.62%] h-[57.14%] flex flex-col gap-6  ">
                    <div className="w-[100%] h-[50%] flex flex-col gap-6  ml-60">
                        <p className="orbitron font-extrabold sm:text-[30px] md:text-[35px] lg:text-[50px] leading-[56px] w-[100%]  text-white mt-10 ml-6 ">Join The Education Comunity</p>
                        <p className="font-medium sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px] md:text-start lg:text-center text-white w-[100%]">Join the Education Community today and be part of a movement that's transforming minds and  <br /> tomorrows.</p>
                    </div>
                    <div className=" md:w-[50%] lg:w-[62.35%] h-[59.37%] rounded-[40px] bg-white mt-12 ml-96 z-100 relative ">
                        <input type="email" onChange={changeHandler} value={text} placeholder="Enter your email" className="text-[#000000]  font-medium z-100 absolute left-[10px] bg-transparent pt-4 outline-none border-none"></input>
                        <button onClick={clickHandler} className="w-[33.29%] h-[82.15%]  orbitron text-white font-extrabold rounded-[40px] md:text-start lg:text-center sm:text-[12px] md:text-[12px] lg:text-[16px] leading-[24px]
                   custom-gradient-button mt-8 absolute right-2 bottom-1 pb-2 mb-0">
                            <Link smooth to="#hero">Subscribe</Link>
                        <img smooth to="#hero" src="./images/east.png"  className="absolute top-[6%] left-[76%]  z-20 "></img>
                        </button>
                    </div>
                </div>
                <div className="absolute top-[75.89%] w-full right-20">
                    <Navbar></Navbar>
                </div>

            </div>

        </div>
    )
}
export default Footer;