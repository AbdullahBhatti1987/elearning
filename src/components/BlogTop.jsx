import React from 'react'

function BlogTop() {
  return (
    <div className="bg-blue-100 w-full flex flex-col lg:flex-row">
    <div className="text sm:w-2/2 md:w-2/2 lg:w-6/12 gap-6 flex flex-col items-start p-12 justify-evenly ">
      <p>
        By Themadbrains in{" "}
        <span className="font-bold darkText ">inspiration</span>
      </p>
      <h1 className="text-start text-4xl text-blue-800 font-semibold">
        Why Swift UI Should Be on the Radar of Every Mobile Developer
      </h1>
      <p className="text-start text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        dicta ipsum magni quasi blanditiis quisquam delectus temporibus esse
        quas accusamus, doloribus recusandae culpa cum odio numquam debitis
        facere maiores consequuntur!
      </p>
      <button className="darkColor p-3 rounded-lg text-white text-xs font-bold">Start learning now</button>
    </div>
    <div className="picture sm:w-2/2 md:w-2/2 lg:w-6/12 gap-6 flex flex-col items-start p-12 justify-evenly ">
    <img className="rounded-xl" src="https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0g7H3sqOTRJvdC-61Y7dhV2q8LsIc5rWccB~6adUv5-wjQpjlzwRyIkEcbTQiX57N6LL3a3RabyGIv62wvZ7bVfsIwSKQFdfUJUQB4mXogwe7YfwBx8PaHM66rcdw0GqORNHe64LXOhSDkvSgOXXMDhrCk-gOeSsknc7P7Ic1FLrkaTcu9PfxXOxPLi-VrSkqgAylLmItprqfnYBI9K1Y-dsqbQQCT8YCwn506k7K9X~j8-iDv49uCaHwJyptC3jkYdzaq8PLx0iYpgQjAqSVY59D8CeZCowqhiEwf7H6qYN8x1dePSaxAfpSuC-wVKsU55FrpmRv17t15UE9MErw__" alt="" />
    </div>
  </div>
  )
}

export default BlogTop