import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Icons
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // ✅ Sidebar starts open

  return (
    <div>
      {/* ☰ Toggle Button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>🔍 Menu</h2>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
          <li><Link to="/detector" onClick={() => setIsOpen(false)}>📊 Detector</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ℹ️ About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
