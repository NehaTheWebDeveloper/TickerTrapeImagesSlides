"use client";
import React  from "react";
import Image from "next/image";
import pie from "../../../public/Assets/pie6.jpg";


const Section5 = () => {
  

  return (
    <div className="">
      <section className="h-[800px] bg-lightblue-2 relative rounded-b-[60px] ">
        <div className="absolute inset-0 bg-opacity-5 bg-white"></div>
        <div className="absolute flex items-center justify-center px-14">
          <div className="grid grid-cols-12 mt-28">
            <div className="col-span-6 sticky top-0">
              <div className="flex items-center text-black px-1 py-3 gap-14 rounded-md w-[500px]">
                <p className="text-blue-900">MARKET MOOD INDEX</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-[75px] text-black font-medium space-y-5 leading-tight">
                Check how‘s the market feeling
                </h1>
                <p className="text-black text-lg w-[400px] pb-8">
                Investors are in a Fearful mood today. Look if it‘s the right time to enter the market!
                </p>
                <button className="p-4 bg-black text-white rounded-md w-1/2">
                  Checkout MMI
                </button>
              </div>
            </div>

            <div className="col-span-6 sticky top-0  h-[800px]">
                <div className="flex items-center justify-center">
          <Image src={pie} height={400} width={400}/>

                </div>

            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
