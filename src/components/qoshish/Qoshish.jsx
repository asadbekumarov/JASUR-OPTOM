import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext";

function Qoshish() {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-[1300px] mx-auto p-6  text-white rounded-lg">
      <h1
        className={`text-4xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Qarz qo'shish
      </h1>{" "}
      <div className="bg-blue-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Yangi qarz qo'shish</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="py-2 px-3 rounded-lg w-full bg-gray-200 text-black text-lg placeholder-gray-600 outline-none"
            placeholder="Ism kiriting"
            type="text"
          />
          <input
            className="py-2 px-3 rounded-lg w-full bg-gray-200 text-black text-lg placeholder-gray-600 outline-none"
            placeholder="Qanday taniysiz"
            type="text"
          />
          <input
            className="py-2 px-3 rounded-lg w-full bg-gray-200 text-black text-lg placeholder-gray-600 outline-none"
            placeholder="Telefon raqami"
            type="number"
          />
          <input
            className="py-2 px-3 rounded-lg w-full bg-gray-200 text-black text-lg placeholder-gray-600 outline-none"
            type="date"
          />
          <input
            className="py-2 px-3 rounded-lg w-full bg-gray-200 text-black text-lg placeholder-gray-600 outline-none col-span-2"
            placeholder="Qarz summasi"
            type="number"
          />
        </div>
        <div className="flex gap-4 mt-5">
          <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform duration-200 text-white font-semibold py-3 px-6 rounded-lg text-lg">
            Qarzni o'chirish
          </button>
          <button className="bg-green-500 hover:bg-green-600 active:scale-95 transition-transform duration-200 text-white font-semibold py-3 px-6 rounded-lg text-lg">
            Saqlash
          </button>
        </div>
      </div>
      <div className="bg-blue-700 p-6 mt-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tahrirlash</h2>
        <div className="flex gap-4">
          <input
            className="py-2 px-3 rounded-lg w-[300px] bg-gray-200 text-black text-lg placeholder-gray-600 outline-none"
            placeholder="Pul miqdorini kiriting"
            type="text"
          />
          <input
            className="py-2 px-3 rounded-lg w-[300px] bg-gray-200 text-black text-lg placeholder-gray-600 outline-none"
            type="date"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform duration-200 text-white font-semibold py-3 px-6 rounded-lg text-lg">
            Qarz ayirish
          </button>
          <button className="bg-green-500 hover:bg-green-600 active:scale-95 transition-transform duration-200 text-white font-semibold py-3 px-6 rounded-lg text-lg">
            Qarz qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qoshish;
