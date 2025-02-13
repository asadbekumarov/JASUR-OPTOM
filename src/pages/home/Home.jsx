import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
