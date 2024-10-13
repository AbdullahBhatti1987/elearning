import React from "react";
import PriceCard from "../components/PriceCard";
import { FaUser } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import OnlineChoaching from "../components/OnlineChoaching";
import Component from "../components/Accordion";

function MemberShip() {
  return (
    <div>
      <div className="affordable flex flex-col gap-8">
        <div>
          <h1 className="darkText text-5xl text-center font-bold">
            Affordable pricing
          </h1>
        </div>
        <div className="flex justify-center gap-8 py-12">
          <PriceCard
            price={"Free"}
            duration={"Forever"}
            iconColor={"text-gray-400"}
          />
          <PriceCard
            packageIcon={<FaUser/>}
            packageText={"Individual"}
            topButton={"BEST!"}
            topBtnClass={"border-2"}
            price={"24"}
            duration={"Month"}
            iconColor={"text-yellow-400"}
            className={"shadow-2xl"}
            buttonText="text-white"
            buttonColor="darkColor"
          />
          <PriceCard  packageIcon={<FaUsers/>}
            packageText={"Corporate"} price={"12"} duration={"Editor"} iconColor={"darkText"} />
        </div>
      </div>
      <OnlineChoaching />
      <Component/>

    </div>
  );
}

export default MemberShip;
