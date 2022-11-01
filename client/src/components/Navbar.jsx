import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Navbar_main() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-20 w-full   absolute z-10 text-#0f172a px-8 ">
      <div>{nav ? <></> : <h1>Logo</h1>}</div>
      <ul className="hidden md:flex ">
        <li className="px-2">Home</li>
        <li className="px-2">About </li>
        <li className="px-2">Contact</li>
      </ul>
      <div></div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 text-black top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
        }
      >
        <ul className="">
          <h1>Logo</h1>
          <li className="border-b p-3 ">Home</li>
          <li className="border-b p-3 ">About </li>
          <li className="border-b p-3 ">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar_main;
