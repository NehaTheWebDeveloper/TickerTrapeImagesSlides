import React from "react";
import Image from "next/image";
import tri from "../../../public/Assets/triangle.svg";
// import start from "../../../public/Assets/gs.svg";

const Section1 = () => {
  return (
    <div>
      <section
        className="h-[800px] bg-black relative rounded-[60px] "
        style={{
          backgroundImage: `https://img.freepik.com/premium-vector/dark-black-texture-background_162279-754.jpg?size=626&ext=jpg&uid=R113668729&ga=GA1.2.1843316234.1692686403&semt=ais')`, // Update with the actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-5 bg-white"></div>
        <div className="absolute  flex items-center justify-center  px-14">
          <div className="grid grid-cols-12 mt-28">
            <div className="col-span-6 ">
              <div className="flex items-center  text-white bg-slate-900 px-4 py-3 gap-12 rounded-md w-[500px]">
                <div className="flex items-center justify-between">
                  <Image src={tri} width={15} height={15} />
                  <p>50L+ Downloads</p>
                </div>
                <div className="flex items-center">
                  <Image src={tri} width={15} height={15} />
                  <p>4.5 rated on Google Play</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <h1 className="text-[75px] text-white font-medium space-y-5 leading-tight ">
                  Financial freedom begins here
                </h1>
                <p className="text-white text-xl">
                All the tools you need to make wise & effective investment decisions
                </p>
                <button className="p-4 bg-white rounded-md w-1/2">Login</button>
              </div>
            </div>
            <div className="col-span-6 ">
              <p className="text-white">hiiii</p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
