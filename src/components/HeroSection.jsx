import React from 'react'
import Button from "./Button";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";

function HeroSection() {
    // const [hovered, setHovered] = useState(false);
  // const handleHoverChange = (open) => {
  //   setHovered(open);
  //   setClicked(false);
  // };
  // const hoverContent = (
  //   <div className="absolute Top-48 w-96 bg-yellow-500">
  //     <div>This is hover content.</div>
  //   </div>
  // );
  return (
    <div
    className="roundShape darkColor w-full flex lg:flex-row md:flex-row flex-col justify-center items-center"
    style={{ width: "1920" }}
  >
    <div className="text w-[100%] lg:w-[50%] md:w-[50%] mx-auto px-[10%]  lg:min-h-96 md:min-h-96 flex flex-col justify-start items-start text-start gap-6">
      <h1 className="text-4xl font-bold">
        <span className="text-orange-400">Studing</span> Online is now much
        easier
      </h1>
      <p>
        TOTC is an interesting plateform that will teach you is more an
        interactive way
      </p>
      <div className="flex gap-3 items-center lg:flex-nowrap md:flex-nowrap flex-wrap">
        <Button
          title={"Join for free"}
          className={"lightColor min-w-36 text-white"}
        />
        <div className="flex gap-3 items-center">
          <Button
            title={<IoMdPlay />}
            className={
              "bg-white text-sky-400 min-h-10 text-center max-w-10"
            }
          />
          <span className="text-nowrap">Watch how it works</span>
        </div>
      </div>
    </div>

    <div className="picture flex  w-[100%] lg:w-[50%] h-full justify-center items-center overflow-hidden order-1"></div>
  </div>
  )
}

export default HeroSection