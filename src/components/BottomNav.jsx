import { useNavigate, useLocation } from "react-router-dom";
import "../assets/styles/bottom-nav.css";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isHome = pathname === "/";
  const isActive = (path) => pathname.startsWith(path);

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${isHome ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        🏠
      </button>

      <button
        className={`nav-item ${isActive("/dev-log") ? "active" : ""}`}
        onClick={() => navigate("/dev-log")}
      >
        💻
      </button>

      <button
        className={`nav-item ${isActive("/daily") ? "active" : ""}`}
        onClick={() => navigate("/daily")}
      >
        ✍️
      </button>

      <button
        className={`nav-item ${isActive("/archive/certifications") ? "active" : ""}`}
        onClick={() => navigate("/archive/certifications")}
      >
        🏆
      </button>

      <button
        className={`nav-item ${isActive("/archive/projects") ? "active" : ""}`}
        onClick={() => navigate("/archive/projects")}
      >
        📦
      </button>
    </nav>
  );
}