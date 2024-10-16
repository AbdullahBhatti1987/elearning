import React from "react";

function HeadingWithParagraph({ title, subtitle, message, className }) {
  return (
    <div className="container px-5 mx-auto ">
      <h1 className={"sm:text-3xl text-2xl font-medium title-font text-center text-blue-800 mb-6 "}>
        {title}
        <span className="lightGreenText"> {subtitle}</span>
      </h1>
      <p className={`mb-12 text-xl w-6/12 mx-auto ${className}`}>{message}</p>
    </div>
  );
}

export default HeadingWithParagraph;
