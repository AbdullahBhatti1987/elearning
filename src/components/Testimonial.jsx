import React from "react";
import Button from "./Button";
import HeadingWithParagraph from "./HeadingWithParagraph";

function Testimonial() {
  return (
    <section className="text-gray-600 body-font py-24">
     
      <HeadingWithParagraph
        title={" What is "}
        subtitle={"TOTC?"}
        message={
          " TOTC is a platform that allow educators to create online classes whereby they can store the course material online, manage assisments, quizzes and exams, monitor due dates, grade results and provide students with feedback all in one place"
        } className={"w-10/12"}
      />
      <div className="flex flex-wrap flex-col lg:flex-row justify-between mx-auto gap-4">
        <div className="relative w-[calc(100%-0.5rem)] lg:w-[calc(50%-0.5rem)] h-full flex justify-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4JNRW4pHi5ZXabYFaoEiaKUDjzRKu4p8nyzA7hr~e3f-GJ2aiOAgAkOamElyYjw-pKJngQrOdyvHymPJwzm8-QL~16Ce3ySjYOY00i4ES0jw41kA1xObSbkTxlAPigtInIJIJ9u6Z~l4vYGRzDejG2MNi~ITHmN9ocNzgtva9fHSM62UfmJU~VHk7bLFQeVjtut3mxGm7SLlz7aqrAhyZWN148pxhTikvE~R42Dnzang9P0rn-PQpR18PhpSuILrhNlifAlA3hVKO67qLu3jpz0qsLAV8I5tIYCpwH-Rh-nlY~2dpAcWy83BXUZqWHr9iycER8nbKwaX8-If6qHMQ__"
            alt=""
            className="rounded-2xl"
          />
          <div className="absolute z-10 h-[80%] w-[80%] mx-auto bg-gray-100 bg-transparent flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white pb-6">
              FOR INSTRUCTORS
            </h1>
            <Button
              title={"Start a class today"}
              className={
                "bg-transparent border border-white p-8 w-auto text-white"
              }
            />
          </div>
        </div>
        <div className="relative w-[calc(100%-0.5rem)] lg:w-[calc(50%-0.5rem)] h-full flex justify-center items-center">
          <img
                     src="https://s3-alpha-sig.figma.com/img/9efe/4a4c/a2cd8b61986457572fa7c65fe425adc6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFc2vgE1VIL8OlyD4EzKQkskO4~G3FSQgGT2Gdbw7kIPQ1zmpQ8qLnyS0p8FGVftGkZpA8wiLGxVLxF5Onoommvq32e8JYQnu2LAzO7QMM6OWhGNJMmyW6yujR5LEWu8yjtBjLhmkGrXjPgOZS6VTht24ZBYsznjh1Wp7Jl8Y-6DmYvKnAo5jfzpxeDjBc79as~L8RrdwUuQx~3VXE1EbmDZzXHqg3RYKTRMm4bEkiKsbCNmqv5olVcfhWPZB6UTf5LgSLuEYOAbkgD1AEfSWEpiGSbQS41wxT9lrBE4TO4-2NFd1uUmDc67d914~n3l~7WK25jr09d8UomMcCgQYQ__"
            alt=""
            className="rounded-2xl"
          />
          <div className="absolute z-10 h-[80%] w-[80%] mx-auto bg-gray-100 bg-transparent flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white pb-6">FOR STUDENTS</h1>
            <Button
              title={"Enter access code"}
              className={
                "bg-sky-400 border border-sky-400 p-4 w-auto text-white"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
