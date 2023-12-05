"use client";
import React ,{useRef ,useEffect} from "react";
import Image from "next/image";
import one from "../../../public/Assets/ntvc.svg";
import two from "../../../public/Assets/lightblu.svg";
import three from "../../../public/Assets/black1.svg";
import styles from "./section3.module.css"; // Import the CSS module 

const Section3 = () => {
  const rightColumnRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = `translateY(-${window.scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <section className="h-[800px] bg-lightblue-2 relative rounded-t-[60px] ">
        <div className="absolute inset-0 bg-opacity-5 bg-white"></div>
        <div className="absolute flex items-center justify-center px-14">
          <div className="grid grid-cols-12 mt-28">
            <div className="col-span-6 sticky top-0">
              <div className="flex items-center text-black px-4 py-3 gap-14 rounded-md w-[500px]">
                <p className="text-blue-900">A BETTER WAY TO ANALYSE</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-[75px] text-black font-medium space-y-5 leading-tight">
                  Focus on what matters
                </h1>
                <p className="text-black text-lg w-[400px]">
                  Discover top stocks & mutual funds with forecast, analyst
                  ratings, scorecard & more
                </p>
                <button className="p-4 bg-black text-white rounded-md w-1/2">
                  Checkout Reliance
                </button>
              </div>
            </div>

            <div className="col-span-6 sticky top-0  h-[800px]">
            <div className={`relative max-h-[600px] overflow-y-scroll ${styles["transparent-scrollbar"]} rounded-3xl border-none`}>
                <div className="  mb-4 sticky h-full w-full top-[8%]  ">
                  <Image src={one} className="rounded-3xl" />
                </div>
                <div className=" mb-4 sticky h-full w-full top-[14%]   ">
                  <Image src={two} className="rounded-3xl " />
                </div>
                <div className=" mb-4 sticky h-full w-full top-[20%]  ">
                  <Image src={one} className="rounded-3xl " />
                </div>
                <div className=" mb-4 sticky h-full w-full top-[150px] mt-20   ">
                  <Image src={three} className="rounded-3xl top-[200px]" />
                </div>
              
                <div className=" mb-4  h-full w-full top-[100px]   ">
                  <Image src={three} className="rounded-3xl  " />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
