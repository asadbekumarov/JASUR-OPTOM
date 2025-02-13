import React from "react";
import { FaPlus } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { useTheme } from "../ThemeContext/ThemeContext";

function Main() {
  const { darkMode } = useTheme();

  return (
    <div>
      <div className="flex justify-between w-[1610px] p-4">
        <div className="bg-gradient-to-r from-green-500 to-green-700 py-8 px-5 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-102 cursor-pointer w-[771px]">
          <FaPlus className="text-white text-4xl bg-white/20 p-2 rounded-full" />
          <p className="text-white text-3xl font-semibold">Firma qo‘shish</p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-teal-700  py-8 px-5 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-102 cursor-pointer w-[771px]">
          <CiViewList className="text-white text-4xl bg-white/20 p-2 rounded-full shadow-md" />
          <p className="text-white text-2xl font-semibold">Spiska yozish</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-8 px-5 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-10 cursor-pointer w-[1500px]">
          <FaPlus className="text-white text-4xl bg-white/20 p-2 rounded-full shadow-md" />
          <p className="text-white text-2xl font-semibold">Qarz yozish</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
