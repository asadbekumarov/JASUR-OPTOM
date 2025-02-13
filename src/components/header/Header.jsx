import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`${darkMode ? "bg-[#121212] border-b-[#414141]" : "bg-white border-b-gray-300"} py-3 border-b-2`}
    >
      <div className="max-w-[1800px] px-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"}`}
            ></div>
            <h1
              className={`${darkMode ? "text-[#90caf9]" : "text-blue-700"} font-bold leading-10 text-2xl`}
            >
              JASUR SAVDO
            </h1>
          </div>

          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {darkMode ? <FiMoon className="text-xl"/> : <LuSun className="text-xl"/>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
