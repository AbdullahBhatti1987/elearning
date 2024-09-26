import React from 'react'

function Button({className, title}) {
  return (
    <button className={`bg-gray-400 rounded-full w-24 px-3 py-2 text-white text-nowrap ${className}`}>{title}</button>
  )
}

export default Button