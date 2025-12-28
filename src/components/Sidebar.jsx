import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/styles/sidebar.css";
import profileImg from "../assets/images/profile.jpg";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openDev, setOpenDev] = useState(
    location.pathname.startsWith("/dev-log")
  );
  const [openArchive, setOpenArchive] = useState(
    location.pathname.startsWith("/archive")
  );

  const isActive = (path) => location.pathname === path;
  const isSubActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="sidebar">
      {/* ===== Profile ===== */}
      <div className="sidebar-profile">
        <img src={profileImg} alt="profile" className="profile-img" />
        <div>
          <div className="profile-name">보서</div>
          <div className="profile-desc">개발자로서의 여정 ☁️</div>
        </div>
      </div>

      {/* ===== Menu ===== */}
      <nav className="sidebar-menu">
        <div
          className={`menu-item ${isActive("/") ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <span className="icon">🏠</span>
          Home
        </div>

        {/* Dev Log */}
        <div className="menu-group">
          <div
            className={`menu-item expandable ${openDev ? "open" : ""}`}
            onClick={() => setOpenDev((v) => !v)}
          >
            <span className="icon">💻</span>
            Dev Log
          </div>

          {openDev && (
            <div className="submenu">
              <div
                className={`submenu-item ${
                  isSubActive("/dev-log/backend") ? "active" : ""
                }`}
                onClick={() => navigate("/dev-log/backend")}
              >
                BackEnd
              </div>
              <div
                className={`submenu-item ${
                  isSubActive("/dev-log/frontend") ? "active" : ""
                }`}
                onClick={() => navigate("/dev-log/frontend")}
              >
                FrontEnd
              </div>
              <div
                className={`submenu-item ${
                  isSubActive("/dev-log/infra") ? "active" : ""
                }`}
                onClick={() => navigate("/dev-log/infra")}
              >
                Infra
              </div>
            </div>
          )}
        </div>

        <div
          className={`menu-item ${isSubActive("/daily") ? "active" : ""}`}
          onClick={() => navigate("/daily")}
        >
          <span className="icon">✍️</span>
          Daily Log
        </div>

        {/* Archive */}
        <div className="menu-group">
          <div
            className={`menu-item expandable ${openArchive ? "open" : ""}`}
            onClick={() => setOpenArchive((v) => !v)}
          >
            <span className="icon">🌙</span>
            Archive
          </div>

          {openArchive && (
            <div className="submenu">
              <div
                className={`submenu-item ${
                  isSubActive("/archive/certifications") ? "active" : ""
                }`}
                onClick={() => navigate("/archive/certifications")}
              >
                Certifications
              </div>
              <div
                className={`submenu-item ${
                  isSubActive("/archive/projects") ? "active" : ""
                }`}
                onClick={() => navigate("/archive/projects")}
              >
                Projects
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ===== Footer ===== */}
      <div className="sidebar-footer">
        <span className="footer-dot" />
        <span className="footer-dot" />
        <span className="footer-dot" />
      </div>
    </aside>
  );
}