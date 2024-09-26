import React from "react";

function StaticNumber({title, message}) {
  return (
    <div className="p-4 sm:w-1/5 w-1/2">
      <h2 className="title-font font-medium sm:text-4xl text-5xl text-gray-900">
        {title}
      </h2>
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}

export default StaticNumber;
