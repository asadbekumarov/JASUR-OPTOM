import React from "react";

function Header() {
  return (
    <div className="bg-[#121212] py-3 border-b-2 border-b-[#414141]">
      <div className="max-w-[1800px] px-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-9 h-9 rounded-full"></div>
            <h1 className="text-[#90caf9] font-bold leading-10 text-2xl">
              JASUR SAVDO{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
