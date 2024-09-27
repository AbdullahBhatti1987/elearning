import React from "react";

function Button({ className, title }) {
  return (
    <button className={` rounded-full w-24 px-3 py-2 text-nowrap ${className}`}>
      {title}
    </button>
  );
}

export default Button;
