import React from "react";

function Content({title, message}) {
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">
        {title}
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       {message}
      </p>
    </div>
  );
}

export default Content;
