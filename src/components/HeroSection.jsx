import React from "react";
import Button from "./Button";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import { FiBarChart2 } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Avatar } from "flowbite-react";

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
      style={{ maxWidth: "1920" }}
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
              className={"bg-white text-sky-400 min-h-10 text-center max-w-10"}
            />
            <span className="text-nowrap">Watch how it works</span>
          </div>
        </div>
      </div>
      <div className="picture relative flex w-[100%] lg:w-[50%] h-full justify-center items-center overflow-hidden order-1">
        <div className="absolute z-10 w-full h-[80%]">
          <div className="absolute lg:right-24 lg:bottom-80 md:right-12 md:bottom-72 right-16 bottom-42 lg:w-9 lg:h-9 w-7 h-7  z-20 rounded-md p-1 flex justify-center items-center bg-pink-500">
            <FiBarChart2 className="lg:w-7 lg:h-7 w-5 h-5 bg-gray-100 rounded-md text-pink-500 " />
          </div>
          <div className="absolute lg:bottom-56 left-4 bottom-40 z-20 rounded-md h-16 gap-2 flex justify-start p-2 items-center bg-gray-200 opacity-90">
            <div className="p-1 rounded-md bg-sky-500">
              <FaCalendarAlt className="lg:w-7 lg:h-7 w-5 h-5 bg-sky-500 rounded-md text-white " />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-semibold">250k</h3>
              <p className="text-xs text-nowrap">Assisted Student</p>
            </div>
          </div>
          <div className="absolute bottom-28 md:bottom-28 lg:right-8 lg:bottom-36 right-0 z-20 rounded-md gap-2 flex justify-start p-2 items-center bg-gray-200 opacity-90">
            <div className="p-1 rounded-md bg-orange-400">
              <MdEmail className="lg:w-7 lg:h-7 w-5 h-5  bg-orange-400 rounded-md text-white " />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-semibold">Congratulations</h3>
              <p className="text-xs text-nowrap">Your admission completed</p>
            </div>
          </div>
          <div className="absolute bottom-0 lg:bottom-12 left-0 lg:left- md:left-12 z-20 rounded-md gap-2 flex justify-start p-2 items-start bg-gray-200 opacity-90">
            <Avatar
              img="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727395200&semt=ais_hybrid"
              rounded
              status="away"
              statusPosition="bottom-right"
            />
            <div className="text-left flex gap-1 flex-col">
              <h3 className="text-sm font-semibold">User Experience Class</h3>
              <p className="text-xs text-nowrap">Today at 12:00 PM</p>
              <Button className={"bg-pink-500 py-1 px-3 text-sm text-white"} title={"Join Now"} />
            </div>
          </div>      
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
