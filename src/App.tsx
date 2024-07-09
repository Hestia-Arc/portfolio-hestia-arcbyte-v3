import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import bg from "./assets/chalkboard_screen.jpg";

function App() {
  return (
    <div
    className="body"
      style={{
        backgroundColor: "rgba(36,37,56,1.00)",
        background: `url(${bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ------------------------------ */}
      {/* ROUTES*/}
      {/* ------------------------------ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
