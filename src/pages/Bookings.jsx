import React from "react";
import { FaUserAlt, FaSignOutAlt, FaWallet } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

import { signout } from "../firebase";

const Bookings = () => {
  const handlesignout = () => {
    signout();
    console.log("hi");
  };

  return (
    <>
      <div className="flex m-0 my-8">
        <div className="flex flex-col m-0 py-4 w-1/3  bg-gray-400 justify-evenly rounded-md ">
          <div className="flex my-5 align-center justify-center flex-wrap gap-2 text-xl hover:bg-gray-200">
            <FaUserAlt className="m-auto mx-0" /> ORDERS
          </div>
          <div className="flex my-5 align-center justify-center flex-wrap gap-2 text-xl hover:bg-gray-200">
            <AiFillSetting className="m-auto mx-0" /> SETTINGS
          </div>
          <div className="flex my-5 align-center justify-center flex-wrap gap-2 text-xl hover:bg-gray-200">
            <FaWallet className="m-auto mx-0" /> WALLET
          </div>
          <div
            onClick={handlesignout}
            className="flex my-5 align-center justify-center flex-wrap gap-2 text-xl  hover:bg-gray-200"
          >
            <FaSignOutAlt className="m-auto mx-0 " /> Logout
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
