import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Hero from "../src/components/hero/Hero";
import NotFound from "./components/notFound/NotFound";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="login" element={<Login />} />
          <Route path="hero" element={<Hero />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
