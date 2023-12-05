"use client";
import React, { useState } from "react";
import Image from "next/image";
import round from "../../../public/Assets/round.svg";
import coin from "../../../public/Assets/coin.svg";
import bulb from "../../../public/Assets/bulb.svg";
import { AiOutlineArrowDown } from "react-icons/ai";

const Section2 = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const handleMouseEnter = () => {
    setShowLearnMore(true);
  };

  const handleMouseLeave = () => {
    setShowLearnMore(false);
  };
  return (
    <>
      <div className="mb-60">
        <div className="pb-16">
          <h1 className="text-center pt-36">WHAT IS TICKERTAPE?</h1>
          <h1 className="text-center text-[55px] font-medium">
            Start your investing journey
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="h-60 w-[80%] bg-lightblue relative"
            style={{ borderRadius: "8rem" }}
          >
            <div className="h-80 flex items-start justify-between gap-8  w-full">
              <div className="h-80 bg-white rounded-lg  w-[250px] mx-2 absolute top-20 left-[80px] p-5">
                <Image src={round} height={50} />
                <h1 className="text-[40px] h-20 font-medium">Analyse</h1>
                <p className="h-20">Screen,compare & evaluate your results</p>
                <div
                   className={`text-${showLearnMore ? 'white' : 'black'} py-2 border bg-${
                    showLearnMore ? 'black' : 'white'
                  } rounded-3xl flex items-center justify-center transition-all ${
                    showLearnMore ? 'w-[200px]' : 'w-[60px]'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >

                  {showLearnMore && (
                    <p className="text-gray-600 mt-2">Learn more</p>
                  )}
                  <AiOutlineArrowDown />

                </div>
                <button></button>
              </div>
              <div className="h-80 bg-white  rounded-lg w-[250px] mx-2 absolute top-20 left-[400px] p-5">
                <Image src={coin} height={50} />
                <h1 className="text-[40px] font-medium h-20">Invest</h1>
                <p className="h-20">Screen,compare & evaluate your results</p>
                <div
                   className={`text-${showLearnMore ? 'white' : 'black'} py-2 border bg-${
                    showLearnMore ? 'black' : 'white'
                  } rounded-3xl flex items-center justify-center transition-all ${
                    showLearnMore ? 'w-[200px]' : 'w-[60px]'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >

                  {showLearnMore && (
                    <p className="text-gray-600 mt-2">Learn more</p>
                  )}
                  <AiOutlineArrowDown />

                </div>
              </div>
              <div className="h-80 bg-white  rounded-lg  w-[250px] mx-2 absolute top-20 left-[700px] p-5">
                <Image src={bulb} height={50} />
                <h1 className="text-[40px] font-medium py-2 h-20">Learn</h1>
                <p className="h-20">Screen,compare & evaluate your results</p>
                <div
                   className={`text-${showLearnMore ? 'white' : 'black'} py-2 border bg-${
                    showLearnMore ? 'black' : 'white'
                  } rounded-3xl flex items-center justify-center transition-all ${
                    showLearnMore ? 'w-[200px]' : 'w-[60px]'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >

                  {showLearnMore && (
                    <p className="text-gray-600 mt-2">Learn more</p>
                  )}
                  <AiOutlineArrowDown />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
