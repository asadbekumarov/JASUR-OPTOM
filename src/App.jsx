import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Hero from "../src/components/hero/Hero";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="hero" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
