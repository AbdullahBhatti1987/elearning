import React from "react";
import Button from "./Button";

function Testimonial() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-6 text-center">
          What is TOTC?
        </h1>
        <p className="mb-12">
          TOTC is a platform that allow educators to create online classes
          whereby they can store the course material online, manage assisments,
          quizzes and exams, monitor due dates, grade results and provide
          students with feedback all in one place
        </p>
        <div className="flex flex-wrap flex-row justify-between mx-auto gap-x-4">
          <div className="relative w-[calc(50%-0.5rem)] h-full flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2rfRtc0ZbaadrJwnd3vLzZF7-vli7~TGfNi7ua2xdZnF~ZfOPBdpHo-sEL1Z8yAVP2X144lb2cwi8-qZ2vKa7zkhSLfe7mQyk6qvDVfrz55EBZIs1LPjy-H9bFiLlSv0ZXCyZa9P~bR8xlBK2cze3zmOXgUcmwzKsBiu3MtYsUxbNyoL8voIp6L~Aq5DeDpo8DmjwMYqMQvvAWGfrB4vQBg4fZPPFEAehAQFVbrxYsDpP4u82dNhFCp1q-RVdn4JmWBt3GAh3zzWoB7ydViEwBx-5FzBoqDkNSiHZpWv~XeOctnEqA3y7qwz3I1~9LaFCF4Z57MvgiKExOJARRpVw__"
              alt=""
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
          <div className="relative w-[calc(50%-0.5rem)] h-full flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/9efe/4a4c/a2cd8b61986457572fa7c65fe425adc6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fuJ6nZ1i4vXzLRvIQNsdZLdFzf5fYqcBbCJrCE0-2xAgmRfiSn5lz~I-on7G~MAE6cS7haNXHxj6Jh9SagI4F6g8uJBh4aIJ-pj2UlOYsKvEpAMbpIK63pEyE9S3P21SvH3s5etx49dNRWTRaYbwWFPaHjxSN6jhpSnlxQgpsUBqQQDzyq1RepWum19aQK9E7NafVtKsWdRu-CcLX7DaprsUc7oPyZFNZX73JYONITmeVmZEOvYLz1e5WLekvEtRqdPRos-hNgBUXyWgPXkomDBQubK-QDyTwZeThhcHLd74cZUm7xEEVLmWf6kJlzdEyR2G3Uc4JsuQfviAgFkauw__"
              alt=""
            />
            <div className="absolute z-10 h-[80%] w-[80%] mx-auto bg-gray-100 bg-transparent flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-white pb-6">
                FOR STUDENTS
              </h1>
              <Button
                title={"Enter access code"}
                className={
                  "bg-sky-400 border border-sky-400 p-4 w-auto text-white"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
