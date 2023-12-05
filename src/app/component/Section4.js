"use client";
import React from "react";
import Image from "next/image";
import flower from "../../../public/Assets/flower.svg";
import goldenStar from "../../../public/Assets/goldenStartDiv.svg";
import Blueflower from "../../../public/Assets/blueFlower.svg";
import Bar from "../../../public/Assets/bar.svg";
import Square from "../../../public/Assets/square.svg";
import BlackArrow from "../../../public/Assets/blackArrow.svg";

import { AiOutlineArrowRight } from "react-icons/ai";

const threeDivs = [
  {
    icon: flower,
    heading: "Top Tax Savers",
    content: "Fund that help you save tax & build wealth at the same time.",
    mutualFund: "Mutual Fund",
    rightArrowIcon: "",
  },
  {
    icon: flower,
    heading: "Top Tax Savers",
    content: "Fund that help you save tax & build wealth at the same time.",
    mutualFund: "Mutual Fund",
    rightArrowIcon: "",
  },
  {
    icon: flower,
    heading: "Top Tax Savers",
    content: "Fund that help you save tax & build wealth at the same time.",
    mutualFund: "Mutual Fund",
    rightArrowIcon: "",
  },
  {
    icon: flower,
    heading: "Top Tax Savers",
    content: "Fund that help you save tax & build wealth at the same time.",
    mutualFund: "Mutual Fund",
    rightArrowIcon: "",
  },
    {
    icon: flower,
    heading: "Top Tax Savers",
    content: "Fund that help you save tax & build wealth at the same time.",
    mutualFund: "Mutual Fund",
    rightArrowIcon: "",
  },
  //   {
  //     icon: goldenStar,
  //     heading: "Consistent out performers",
  //     content: "Fund with long term outperformance and  low volatality.",
  //     mutualFund: "Mutual Fund",
  //     rightArrowIcon: "",
  //   },
  {
    icon: Blueflower,
    heading: "The Unstoppables",
    content: "Stocks which are facing a long term price momentum.",
    mutualFund: "STOCK",
    rightArrowIcon: "",
  },
];
const threeDivsDown = [
    {
      icon: Bar,
      heading: "Screen stocks & MFs",
      content: "Scan, analyze & pick stocks & mutual funds confidently with 150+ readymade filters.",
  
    },
    {
      icon: Square,
      heading: "Pre-built screens",
      content: "Fund that help you save tax & build wealth at the same time.",
    
    },
    {
      icon: BlackArrow,
      heading: "Create screens & filters",
      content: "Fund that help you save tax & build wealth at the same time.",
     
    },
 
  ];
  

const Section4 = () => {
  return (
    <>
      <div className="px-10 pt-40 pb-64 bg-lightblue-2 h-[1500px] border border-b-slate-500 ">
        <div>
          <h1 className=" py-3 text-blue-700 font-semibold">
            SCREEN STOCKS & MUTUAL FUNDS
          </h1>
          <h1 className=" py-4 text-[45px] font-bold">
            Find the next best investment
          </h1>
        </div>
        <div className="pt-20">
          <div className=" grid grid-cols-12 items-center justify-between gap-9 w-full h-[150px]">
            {threeDivs.map((d) => {
              return (
                <div className="p-10 bg-white rounded-2xl  col-span-4 transition-transform transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-between gap-6">
                    <Image src={d.icon} height={30} width={30} className="" />
                    <p className="text-[25px] grow">{d.heading}</p>
                  </div>
                  <div>
                    <p className="py-5">{d.content}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="bg-gray-200 rounded-3xl flex items-center justify-center p-3 text-sm text-purple-700 font-medium w-[150px]">
                        {d.mutualFund}
                      </div>
                      <div className="px-5 py-2 border border-gray-300 rounded-xl  hover:bg-black hover:text-white">
                        {<AiOutlineArrowRight />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-12 items-center justify-between gap-9 w-full h-[150px] mt-[450px]  p-10">
            {threeDivsDown.map((d) => {
              return (
                <div className="bg-transparent rounded-2xl  col-span-4 ">
                  <div className="flex flex-col  justify-start gap-6">
                    <div>
                      
                      <Image src= {d.icon}   />
                    </div>
                    <p className="text-[25px] grow">{d.heading}</p>
                  </div>
                  <div>
                    <p className="py-5">{d.content}</p>
                  </div>
                  <div>
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
