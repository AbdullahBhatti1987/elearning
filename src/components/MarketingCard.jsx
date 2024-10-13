import React from "react";
import { PiWindowsLogoLight } from "react-icons/pi";
import { FcClock } from "react-icons/fc";

function MarketingCard({img}) {
  return (
    <div className="flex flex-col lg:flex-row md:flex-wrap w-1/4 p-6 bg-white rounded-2xl shadow-xl">
      <div className="w-full pb-2">
      <img className="rounded-2xl" src={img} alt="" />
      </div>
      <div className="flex gap-4 flex-col">       
        <div className="flex justify-between flex-row items-center">
          <div className="flex flex-row justify-center items-center gap-1">
            <PiWindowsLogoLight />
            <p> Design</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
          <FcClock />
            <p> Month</p>
          </div>
   
        </div>
        <h1 className="text-3xl text-black text-start">
          AWS Certified Solutions Architect
        </h1>
        <p className="text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
          officia. Enim maxime aspernatur?
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <img
              className="rounded-full w-12 h-12 bg-gray-200 object-top"
              src="https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlkQsWWXGBK7BUsQj5p-0rwTOwk7mkBEvAENJxtWEd1hXIYMbdJpp9HjO~g5J8Ce2eWsdJYSAWbaFrRmH9ce4nINfTshi~QTnWBMLTB6ZW9XwsHBoNCmAwJMb96D1hsUxnis4Ts13LdDso3wt-We5cO4mnwVQE0P-e6D7nUyz6COhiY-sx0f7gJnpNa0XLnjlDnhRrAdTyWxv1ebJCAFatBckz6GyEVMx~b-UyKEKZQ6haToxNpReznuvSJk8PYo1tAdzwQgVxcNkALrB02Zt00tUZe6TR6sMMKDYlhfo~aWIiW59dzSan5YcH-lIgibsrRG3cD03MurGxHOo~dlAQ__"
              alt=""
            />
            <span className="text-sm font-bold">Lina</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <span className="line-through font-bold text-gray-400">$100</span>
            <span className="darkText font-bold text-2xl">$80</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingCard;
