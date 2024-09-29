import React from "react";
import Button from "./Button";
import { IoMdPlay } from "react-icons/io";
import Component from "./Popover";

function HeroSection() {
  
  return (
    <div
      className="roundShape darkColor w-full flex lg:flex-row md:flex-row flex-col justify-center items-center"
      style={{ maxWidth: "1920" }}
    >
      <div className="text w-[100%] lg:w-[50%] md:w-[50%] sm:w-[50%]  lg:px-[7%] md:px-[7%] px-[10%] flex flex-col justify-center items-start text-start lg:gap-6 gap-4">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-400">Studing</span> Online is now much
          easier
        </h1>
        <p>
          TOTC is an interesting plateform that will teach you is more an
          interactive way
        </p>
        <div className="flex  lg:flex-row gap-3 items-center lg:flex-nowrap md:flex-nowrap ">
          <Button
            title={"Join for free"}
            className={"lightColor min-w-36 text-white"}
          />
          <div className="flex gap-3 items-center">
            <Button 
              title={<IoMdPlay />}
              className={"bg-white  text-black min-h-10 text-center max-w-10"}
            />
            <span className="text-nowrap">Watch how it works</span>
          </div>
        </div>
      </div>
      <div className="picture relative flex w-[100%] lg:w-[50%] h-full justify-center items-center overflow-hidden order-1">
        <Component/>
      </div>
    </div>
  );
}

export default HeroSection;
