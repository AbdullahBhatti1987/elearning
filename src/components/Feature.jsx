import React from "react";
import { IoNewspaper } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import HeadingWithParagraph from "./HeadingWithParagraph";

function Feature() {
  return (
    <section className="text-gray-600 body-font py-24">
      <HeadingWithParagraph
        title={"All-in-One "}
        subtitle={" Cloud Software"}
        message={
          " TOTC in powerful online software suite that combines all the toolsneed to learn a succesful school or office."
        }
      />
     <div className=" p-2 flex lg:flex-row md:flex-row justify-between items-start mx-auto flex-col w-[calc(100%-5%)] gap-6">
        <div className="p-4 lg:w-1/3 lg:h-full md:h-full md:w-1/3 flex flex-col items-center justify-center bg-white shadow-md lg:min-h-56">
          <div className="w-12 h-12 flex flex-col items-center justify-center -mt-10 rounded-full bg-indigo-400 text-indigo-100 mb-4 flex-shrink-0">
            <IoNewspaper className="text-3xl" />
          </div>
          <div className="flex-grow w-10/12 justify-center items-center">
            <h2 className="text-blue-800 text-xl title-font font-medium mb-2">
              Online Billing, Invoicing, and Contracts
            </h2>
            <p className="leading-relaxed text-base">
              Simple and secure control or your organization's financial and
              legal transactions. Send customizes invoices and contacts
            </p>
          </div>
        </div>
        <div className="p-4 lg:w-1/3 lg:h-full md:h-full md:w-1/3 flex flex-col items-center justify-center bg-white shadow-md lg:min-h-56">
          <div className="w-12 h-12 inline-flex items-center justify-center -mt-10 rounded-full text-indigo-100 bg-green-300 mb-4 flex-shrink-0">
            <FaCalendarAlt className="text-3xl" />
          </div>
          <div className="flex-grow w-10/12 justify-center items-center ">
            <h2 className="text-blue-800 text-xl title-font font-medium mb-2">
              Easy Scheduling and Attendance Trackings
            </h2>
            <p className="leading-relaxed text-base">
              Schedule and reserves classrooms at one campus or multiple
              campuses. Keep detail record of student attendance
            </p>
          </div>
        </div>
        <div className="p-4 lg:w-1/3 lg:h-full md:h-full md:w-1/3 flex flex-col items-center justify-center bg-white shadow-md lg:min-h-56">
          <div className="w-12 h-12 inline-flex items-center justify-center -mt-10 rounded-full bg-sky-400 text-indigo-100 mb-4 flex-shrink-0">
            <IoIosPeople className="text-3xl" />
          </div>
          <div className=" w-10/12 justify-center items-center flex flex-col">
            <h2 className="text-blue-800 text-xl title-font font-medium mb-2">
              Customer Tracking
            </h2>
            <p className="leading-relaxed text-center">
              Automate and track emails to individuals or groups. Skillin's
              build-in system help organize your organization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
