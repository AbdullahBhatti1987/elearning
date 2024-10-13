import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerColor w-full">
      <div className="flex flex-row py-12">
        <div className="w-1/2 flex justify-end px-16">
          <Link to={"/"} className="flex items-center">
            <div className="absolute border-2 logoColor ms-1 rotate-45 -z-1 w-10 h-10 rounded-lg"></div>
            <span className="self-center text-xl font-bold text-white tracking-widest  z-10 ps-3">
              TOTC
            </span>
          </Link>
        </div>
        <div className="border-s-2 border-gray-600 w-1/2 flex justify-start px-16">
          <h1 className="text-3xl text-white w-48 text-start">
            Virtual Class for Zoom
          </h1>
        </div>
      </div>

      <div>
        <h1 className="text-gray-400 font-semibold text-center text-2xl">
          Subscribe to get our Newsletter
        </h1>
      </div>
      <div className="flex gap-4 justify-center items-center pt-8 pe-8">
        <input
          type="email"
          name=""
          id="email"
          placeholder="Your Email"
          className="rounded-full py-2 px-4 border-2 bg-transparent min-w-72"
        />
        <button className="darkColor text-white py-2 px-4 rounded-full min-w-36">
          Subscribe
        </button>
      </div>

      <div className="text-gray-400 flex gap-8 text-xl justify-center items-center py-4 pt-12">
        <span>Careers</span>
        <span className="text-gray-700">|</span>
        <span>Privacy Policy</span>
        <span className="text-gray-700">|</span>
        <span>Term & Conditions</span>
      </div>
      <div className="text-gray-400 flex text-xl justify-center items-center py-4">
        <span>© 2021 Class Technologies Inc. </span>
      </div>
    </div>
  );
}

export default Footer;
