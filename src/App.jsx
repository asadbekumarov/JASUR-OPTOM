import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./components/notFound/NotFound";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Layout from "./pages/layout/Layout";
import About from "./pages/about/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
