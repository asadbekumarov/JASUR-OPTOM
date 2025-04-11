import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import NotFound from "./components/notFound/NotFound";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Layout from "./pages/layout/Layout";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import Qarzlar from "./components/qarzlar/Qarzlar";
import Qoshish from "./components/qoshish/Qoshish";
// import { Sidebar } from "lucide-react";
// import Qoshish from "./components/qoshish/Qoshish";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="sidebar" element={<Sidebar />} /> */}
          <Route path="header" element={<Header />} />
          <Route path="login" element={<Login />} />
          <Route path="qarzlar" element={<Qarzlar />} />
          <Route path="qoshish" element={<Qoshish />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
