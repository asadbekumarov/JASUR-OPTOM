import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdListAlt } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useTheme } from "../ThemeContext/ThemeContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode
          ? "bg-[#121212] border-r-[#414141]"
          : "bg-white border-r-gray-300"
      } border-r-2 h-screen`}
    >
      <div className="max-w-[290px] px-3">
        <div className="flex flex-col items-start gap-5 h-full py-4">
          <div
            className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
              ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
          >
            <IoIosHome
              className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
            />
            <p className="text-base leading-6 w-[200px]">Bosh sahifa</p>
          </div>
          <Link to="/qarzlar" className="w-full">
            <div
              className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
              ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
            >
              <BiMoneyWithdraw
                className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
              />
              <p className="text-base leading-6 w-[200px]">Qarzlar</p>
            </div>
          </Link>
          <div
            className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
              ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
          >
            <FaUsers
              className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
            />
            <p className="text-base leading-6 w-[200px]">Biz haqimizda</p>
          </div>

          <div
            className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
              ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
          >
            <FaCreditCard
              className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
            />
            <p className="text-base leading-6 w-[200px]">Mening kartalarim</p>
          </div>

          <div
            className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
              ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
          >
            <FaBuildingColumns
              className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
            />
            <p className="text-base leading-6 w-[200px]">Firmalar</p>
          </div>

          <div
            className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
              ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
          >
            <MdListAlt
              className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
            />
            <p className="text-base leading-6 w-[200px]">Spiskalar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
