import React from "react";

function StaticNumber({ title, message }) {
  return (
    <div className="p-4 sm:w-1/5 w-1/2">
      <h2
        className="title-font font-medium sm:text-4xl text-5xl bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2563eb 40%, #06b6d4 60%)",
        }}
      >
        {title}
      </h2>
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}

export default StaticNumber;
