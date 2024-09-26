import React from "react";
import Content from "./Content";
import StaticNumber from "./StaticNumber";

function Static() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Content
          title={"Our Seccess"}
          message={
            "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.Adipiscing a quis ultrices eu ornare tristique vel nisl orci."
          }
        />
        <div className="flex flex-wrap -m-4 text-center"></div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <StaticNumber title={"15K+"} message={"Students"} />
              <StaticNumber title={"75%"} message={"Total success"} />
              <StaticNumber title={"35"} message={"Main questions"} />
              <StaticNumber title={"26"} message={"Chief experts"} />
              <StaticNumber title={"16"} message={"Years of experience"} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Static;
