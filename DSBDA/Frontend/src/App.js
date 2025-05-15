import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar"; 
import "./App.css";
import Home from "./Home";
import About from "./About";
import Detector from "./Detector";

function App() {
  return (
    <div className="app">
      <Sidebar /> {/* ✅ Sidebar is always there */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detector" element={<Detector />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
