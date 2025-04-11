// import React from "react";
// import { useTheme } from "../ThemeContext/ThemeContext";
// import { FiMoon } from "react-icons/fi";
// import { LuSun } from "react-icons/lu";
// import { IoIosHome } from "react-icons/io";
// import { BiMoneyWithdraw } from "react-icons/bi";
// import { FaUsers } from "react-icons/fa";
// import { FaCreditCard } from "react-icons/fa6";
// import { FaBuildingColumns } from "react-icons/fa6";
// import { MdListAlt } from "react-icons/md";
// import { Link } from "react-router-dom";

// function Header() {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <div className="max-w-[1300px] m-auto">
//       <div
//         className={`${darkMode ? "bg-[#121212] border-b-[#414141]" : "bg-white border-b-gray-300"} py-3 border-b-2`}
//       >
//         <div className="max-w-[1800px] px-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div
//                 className={`w-9 h-9 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"}`}
//               ></div>
//               <h1
//                 className={`${darkMode ? "text-[#90caf9]" : "text-blue-700"} font-bold leading-10 text-2xl`}
//               >
//                 JASUR SAVDO
//               </h1>
//             </div>
//             <div className="flex items-start py-4">
//               <div
//                 className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
//               ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
//               >
//                 <IoIosHome
//                   className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
//                 />
//                 <p className="text-base leading-6 w-[200px]">Bosh sahifa</p>
//               </div>
//               <Link to="/qarzlar" className="w-full">
//                 <div
//                   className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
//               ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
//                 >
//                   <BiMoneyWithdraw
//                     className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
//                   />
//                   <p className="text-base leading-6 w-[200px]">Qarzlar</p>
//                 </div>
//               </Link>
//               <div
//                 className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
//               ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
//               >
//                 <FaUsers
//                   className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
//                 />
//                 <p className="text-base leading-6 w-[200px]">Biz haqimizda</p>
//               </div>

//               <div
//                 className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
//               ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
//               >
//                 <FaCreditCard
//                   className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
//                 />
//                 <p className="text-base leading-6 w-[200px]">
//                   Mening kartalarim
//                 </p>
//               </div>

//               <div
//                 className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
//               ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
//               >
//                 <FaBuildingColumns
//                   className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
//                 />
//                 <p className="text-base leading-6 w-[200px]">Firmalar</p>
//               </div>

//               <div
//                 className={`cursor-pointer group flex items-center gap-3 p-2 rounded-lg transition duration-300 ease-in-out
//               ${darkMode ? "hover:bg-white hover:text-black text-white" : "hover:bg-gray-200 hover:text-gray-900 text-gray-900"}`}
//               >
//                 <MdListAlt
//                   className={`${darkMode ? "text-white group-hover:text-black" : "text-gray-900 group-hover:text-gray-700"} text-2xl`}
//                 />
//                 <p className="text-base leading-6 w-[200px]">Spiskalar</p>
//               </div>
//             </div>
//             <button
//               onClick={toggleDarkMode}
//               className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
//             >
//               {darkMode ? (
//                 <FiMoon className="text-xl" />
//               ) : (
//                 <LuSun className="text-xl" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { IoIosHome } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaUsers, FaCreditCard, FaBuildingColumns } from "react-icons/fa6";
import { MdListAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`${
        darkMode
          ? "bg-[#121212] border-b-[#414141]"
          : "bg-white border-b-gray-300"
      } border-b-2 py-3`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className={`w-9 h-9 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"}`}
          />
          <h1
            className={`${darkMode ? "text-[#90caf9]" : "text-blue-700"} font-bold text-2xl`}
          >
            JASUR SAVDO
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4">
          <NavItem
            to="/"
            icon={<IoIosHome />}
            text="Bosh sahifa"
            darkMode={darkMode}
          />
          <NavItem
            to="/qarzlar"
            icon={<BiMoneyWithdraw />}
            text="Qarzlar"
            darkMode={darkMode}
          />
          <NavItem
            to="/biz-haqimizda"
            icon={<FaUsers />}
            text="Biz haqimizda"
            darkMode={darkMode}
          />
          <NavItem
            to="/kartalar"
            icon={<FaCreditCard />}
            text="Mening kartalarim"
            darkMode={darkMode}
          />
          <NavItem
            to="/firmalar"
            icon={<FaBuildingColumns />}
            text="Firmalar"
            darkMode={darkMode}
          />
          <NavItem
            to="/spiskalar"
            icon={<MdListAlt />}
            text="Spiskalar"
            darkMode={darkMode}
          />
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition flex items-center"
        >
          {darkMode ? (
            <FiMoon className="text-xl" />
          ) : (
            <LuSun className="text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ to, icon, text, darkMode }) => (
  <Link
    to={to}
    className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 ${
      darkMode
        ? "text-white hover:bg-blue-700 hover:text-white"
        : "text-gray-900 hover:bg-blue-700 hover:text-white"
    }`}
  >
    <span className="text-2xl">{icon}</span>
    <p className="text-base leading-6">{text}</p>
  </Link>
);

export default Header;
