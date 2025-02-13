import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdListAlt } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="bg-[#121212]">
      <div className="max-w-[1800px] px-3">
        <div className="flex flex-col items-start gap-5 border-r-2 border-r-[#414141] max-w-[290px] h-screen">
          <div
            className="cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out 
                  hover:bg-white hover:text-black active:scale-95"
          >
            <IoIosHome className="text-white text-2xl group-hover:text-gray-900" />
            <p className="text-white text-base leading-6 group-hover:text-black w-[200px]">
              Bosh sahifa
            </p>
          </div>
          <div
            className="cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out 
                  hover:bg-white hover:text-black active:scale-95"
          >
            <FaUsers className="text-white text-2xl group-hover:text-gray-900" />
            <p className="text-white text-base leading-6 group-hover:text-black w-[200px]">
              Biz haqimizda
            </p>
          </div>
          <div
            className="cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out 
                  hover:bg-white hover:text-black active:scale-95"
          >
            <FaCreditCard className="text-white text-2xl group-hover:text-gray-900" />
            <p className="text-white text-base leading-6 group-hover:text-black w-[200px]">
              Mening kartalarim
            </p>
          </div>
          <div
            className="cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out 
                  hover:bg-white hover:text-black active:scale-95"
          >
            <FaBuildingColumns className="text-white text-2xl group-hover:text-gray-900" />
            <p className="text-white text-base leading-6 group-hover:text-black w-[200px]">
              Firmalar
            </p>
          </div>
          <div
            className="cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out 
                  hover:bg-white hover:text-black active:scale-95"
          >
            <MdListAlt className="text-white text-2xl group-hover:text-gray-900" />
            <p className="text-white text-base leading-6 group-hover:text-black w-[200px]">
              Spiskalar
            </p>
          </div>
          <div
            className="cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out 
                  hover:bg-white hover:text-black active:scale-95"
          >
            <BiMoneyWithdraw className="text-white text-2xl group-hover:text-gray-900" />
            <p className="text-white text-base leading-6 group-hover:text-black w-[200px]">
              Qarzlar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
