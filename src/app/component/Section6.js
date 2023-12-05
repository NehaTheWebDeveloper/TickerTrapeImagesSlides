"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import one from "../../../public/Assets/netWorthOne.svg";
import two from "../../../public/Assets/net-worth-2.svg";
import three from "../../../public/Assets/networth3.svg";

import styles from "./section3.module.css"; // Import the CSS module

const Section6 = () => {
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
    <>
      <div className=" w-full p-20 h-[900px]">
        <div className="sticky top-0  h-[800px]">
          <div
            className={`relative max-h-[600px] overflow-y-scroll ${styles["transparent-scrollbar"]}  border-none`}
          >
            <div className="  mb-4 sticky h-96 w-full top-0 flex flex-col items-center justify-center  mx-auto bg-white-200  ">
              <h1 className="  text-purple-900 font-semibold">
                INSIGHTS ON YOUR INVESTMENTS
              </h1>
              <h1 className="text-[50px] font-semibold pt-10">
                One portfolio to rule ‘em all
              </h1>
            </div>
            <div className=" mb-4 sticky h-full w-full top-10   mx-auto ">
              <div className="grid grid-cols-12 gap-5  bg-lb rounded-3xl mb-4  h-[400px] w-full   p-8 z-10 sticky items-center justify-between">
                <div className="col-span-6">
                  <h1 className="text-[35px] font-medium pb-10">Stay on top of returns</h1>
                  
                  <h1>
                  Keep tabs on your portfolio's performance with daily gainers
                  and losers, 1-year upside, and much more
                  </h1>
                </div>
                <div className="col-span-6">
                  <Image src={one} />
                </div>
              </div>
            </div>
            <div className=" mb-4 sticky h-full w-full top-10  ">
              <div className="grid grid-cols-12 gap-5  bg-lightPink rounded-3xl h-[400px] p-8  w-full  sticky items-center justify-between ">
                <div className="col-span-6">
                    <h1 className="text-[35px] font-medium pb-10">
                    Get analyst forecasts
                    </h1>
                    <h1>
                    Track your portfolio's future for the upcoming year based on forecasts of top market analysts
                    </h1>
                </div>
                <div className="col-span-6">
                  <Image src={two} />
                </div>
              </div>
            </div>
            <div className=" mb-4 sticky h-full w-full   ">
              <div className="grid grid-cols-12 gap-5  bg-darkBlack rounded-3xl mb-4 h-[400px] sticky w-full p-8 items-center justify-between">
                <div className="col-span-6">
                    <h1 className="text-[35px] font-medium pb-10 text-white">Build a diversified portfolio</h1>
                    <h1 className="text-white">
                        Balance your portfolioagainst th volatilemarket with diversification score
                    </h1>
                </div>
                <div className="col-span-6">
                  <Image src={three} />
                </div>
              </div>
            </div>
            {/* 
          <div className=" mb-4  h-full w-full top-[100px]   ">
            <Image src={three} className="rounded-3xl  " />
          </div> */}
          </div>
        </div>
      </div>

      {/* <div className="pt-40 sticky top-0 h-[800px]">
        <div
          className={`relative   h-[800px] max-h-[600px] overflow-y-scroll ${styles["transparent-scrollbar"]} rounded-3xl border-none`}
        >
          <div className="flex flex-col items-center justify-center  bg-white-200  mb-4 sticky h-96 w-full top-[8%] z-0">
            <h1 className="  text-purple-900 font-semibold">
              INSIGHTS ON YOUR INVESTMENTS
            </h1>
            <h1 className="text-[50px] font-semibold pt-10">
              One portfolio to rule ‘em all
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-5  bg-lb  mb-4  h-96 w-full top-[8%] z-10 sticky">
              <div className="col-span-6">Hiii</div>
              <div className="col-span-6"> 
              <Image src={one}/>

              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-5  bg-lightPink  mb-4  h-96 w-full top-[8%] sticky ">
              <div className="col-span-6"> hii</div>
              <div className="col-span-6">
                <Image src={two}/>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-5  bg-darkBlack  mb-4 sticky h-96 w-full top-[8%] ">
              <div className="col-span-6"></div>
              <div className="col-span-6">
              <Image src={three}/>

              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Section6;
