// import React from "react";
// import Header from "../../components/header/Header";
// import { Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default Layout;
import React from "react";
import Header from "../../components/header/Header";
// import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
