import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Bookings = () => {
  return (
    <>
      <div className="flex m-8">
        <div className="flex flex-col m-4 p-4 w-1/3 bg-gray-400 ">
          <div className="flex m-5 align-center justify-center flex-wrap gap-2 hover:bg-gray-200">
            <FaUserAlt /> ORDERS
          </div>
          <div className="flex m-5 align-center justify-center flex-wrap gap-2  hover:bg-gray-200">
            <FaUserAlt /> SETTINGS
          </div>
          <div className="flex m-5 align-center justify-center flex-wrap gap-2  hover:bg-gray-200">
            <FaUserAlt /> WALLET
          </div>
          <div className="flex m-5 align-center justify-center flex-wrap gap-2  hover:bg-gray-200">
            <FaUserAlt /> ADDRESS
          </div>
        </div>
        <div className="flex flex-col m-4 p-4 w-2/3">
          <h3 className="font-semibold tracking-normal text-lg">
            PAST BOOKINGS
          </h3>
          <div className="flex border border-black p-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-full h-full drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
            </div>
          </div>
          <div className="flex border border-black p-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-full h-full drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
            </div>
          </div>
          <div className="flex border border-black p-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-full h-full drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
            </div>
          </div>
          <div className="flex border border-black p-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-full h-full drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
            </div>
          </div>
          <div className="flex border border-black p-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-full h-full drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
