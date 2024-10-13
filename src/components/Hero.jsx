import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container p-6 mx-auto flex flex-col md:flex-row gap-12 ">
        <div className="relative lg:w-1/2 md:w-1/2 ">
          <div className="absolute top-2 left-0  rounded-full -ms-8 -z-10 w-16 h-16 lightGreenColor"></div>
          <div className="absolute bottom-28 right-0 -me-4 rounded-full w-8 h-8 -z-10  lightGreenColor"></div>
          <div className=" h-full flex justify-evenly items-start flex-col">
            <h3 className="text-2xl text-blue-900 text-start  font-semibold">
              Everything you can do in a physical classroom,{" "}
              <span className="lightText">you can do with TOTC</span>
            </h3>
            <p className="text-start text-lg">
              TOTC's school managment software help traditional and online
              schools manage scheduling, attendance, payments and vertical
              classrooms all in one secure cloud-base system.
            </p>
            <Link className="underline text-start">Learn more</Link>
          </div>
        </div>
        <div className="relative lg:w-1/2 md:w-1/2">
          <div className="absolute top-0 left-0 rounded-2xl -z-10 -m-4 w-36 h-36 lightBlueColor"></div>
          <div className="absolute bottom-0 right-0 rounded-2xl w-48 h-48 -z-10 -m-4 lightGreenColor"></div>
          <div className="w-full rounded-2xl overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://s3-alpha-sig.figma.com/img/7a80/a7af/42c44b95173f6bb18529bebd58808a65?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mj3lUsp6oQOeskqjJj08qjTdeeoJDR9XMXhn3yf0BOF5q9B8v2Wo3lc6aoqeqJkCGWeHeZfFkeKPmk6h4vr1lvALgNr1SbFqTTDu7M09PxrpBQ3z7DPpO91j9KWHn5OJwnOf92nZqGCtuh3sTTSfXtu9KLPp4c0WAuKLXZ3Qx9DrE2pK50954yewPHrd9CutdGBC5vbus~kiNHb4yFfQBqqyvTqu8Fj-ztYH3WYpEpXG4T8EexVufkUcE6x6MrjiRC6yJkloUY63ODe~HpVw8UIbFoJfzTDaml-VBkL~QWyMkzBaWLADOMbVeMWXM-zbczl1ljjU7SAFADuatEZaPg__"
              alt="stats"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
