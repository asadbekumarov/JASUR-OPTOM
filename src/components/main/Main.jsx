import React from "react";
import { CiViewList } from "react-icons/ci";
import { useTheme } from "../ThemeContext/ThemeContext";
// import { Calendar, theme } from "antd";
import { LuNotebookPen } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { theme } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
function Main() {
  const { darkMode } = useTheme();
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex justify-between p-4">
            <Link to="/qarzlar" className="w-full">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-8 px-5 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-10 cursor-pointer w-[771px]">
                <LuNotebookPen className="text-white text-4xl bg-white/20 p-2 rounded-full shadow-md" />
                <p className="text-white text-2xl tracking-wider font-bold">
                  Qarzlar
                </p>
              </div>
            </Link>
          </div>
          <div className="flex justify-between gap-96 p-4">
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 py-8 px-5 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-102 cursor-pointer w-[771px]">
              <FaUsers className="text-white text-4xl bg-white/20 p-2 rounded-full" />
              <p className="text-white text-3xl leading-10 tracking-wider font-bold">
                Firmalar
              </p>
            </div>
          </div>

          <div className="flex justify-between p-4">
            <div className=" bg-gradient-to-r from-green-500 to-green-700 py-8 px-5 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-102 cursor-pointer w-[771px]">
              <CiViewList className="text-white text-4xl bg-white/20 p-2 rounded-full shadow-md" />
              <p className="text-white text-2xl tracking-wider font-bold">
                Spiska yozish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
