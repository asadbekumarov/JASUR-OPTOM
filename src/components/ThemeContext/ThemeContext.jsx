// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(true);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// function Header() {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <div
//       className={`py-3 border-b-2 ${darkMode ? "bg-[#121212] border-b-[#414141]" : "bg-white border-b-gray-300"}`}
//     >
//       <div className="max-w-[1800px] px-3 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div
//             className={`w-9 h-9 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"}`}
//           ></div>
//           <h1
//             className={`${darkMode ? "text-[#90caf9]" : "text-blue-700"} font-bold leading-10 text-2xl`}
//           >
//             JASUR SAVDO
//           </h1>
//         </div>
//         <button
//           onClick={toggleDarkMode}
//           className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={darkMode ? "bg-[#121212] text-white" : "bg-white text-black"}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
