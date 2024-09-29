import React from "react";
import Content from "./Content";
import StaticNumber from "./StaticNumber";
import HeadingWithParagraph from "./HeadingWithParagraph";

function Static() {
  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container px-5  mx-auto">
        <HeadingWithParagraph
     
          title={"Our Seccess"}
          message={
            "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.Adipiscing a quis ultrices eu ornare tristique vel nisl orci."
          }    className={"w-10/12"}
        />
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <StaticNumber title={"15K+"} message={"Students"} />
              <StaticNumber title={"75%"} message={"Total success"} />
              <StaticNumber title={"35"} message={"Main questions"} />
              <StaticNumber title={"26"} message={"Chief experts"} />
              <StaticNumber title={"16"} message={"Years of experience"} />
            </div>
          </div>
      </div>
    </section>
  );
}

export default Static;
