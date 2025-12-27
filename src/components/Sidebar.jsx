import { useState } from "react";
import "../assets/styles/sidebar.css";
import profileImg from "../assets/images/profile.jpg";

export default function Sidebar() {
  const [openDev, setOpenDev] = useState(false);
  const [openArchive, setOpenArchive] = useState(false);

  return (
    <aside className="sidebar">
      {/* 프로필 */}
      <div className="sidebar-profile">
        <img src={profileImg} alt="profile" className="profile-img" />
        <div className="profile-text">
          <div className="profile-name">보서</div>
          <div className="profile-desc">개발자로서의 여정 ☁️</div>
        </div>
      </div>

      {/* 메뉴 */}
      <nav className="sidebar-menu">
        <div className="menu-item active">
          <span className="icon">🏠</span>
          <span>Home</span>
        </div>

        {/* Dev Log */}
        <div className="menu-group">
          <div
            className={`menu-item expandable ${openDev ? "open" : ""}`}
            onClick={() => setOpenDev((v) => !v)}
          >
            <span className="icon">💻</span>
            <span>Dev Log</span>
          </div>

          {openDev && (
            <div className="submenu">
              <div className="submenu-item">BackEnd</div>
              <div className="submenu-item">FrontEnd</div>
              <div className="submenu-item">Infra</div>
            </div>
          )}
        </div>

        <div className="menu-item">
          <span className="icon">✍️</span>
          <span>Daily Log</span>
        </div>

        {/* Archive */}
        <div className="menu-group">
          <div
            className={`menu-item expandable ${openArchive ? "open" : ""}`}
            onClick={() => setOpenArchive((v) => !v)}
          >
            <span className="icon">🌙</span>
            <span>Archive</span>
          </div>

          {openArchive && (
            <div className="submenu">
              <div className="submenu-item">Certifications</div>
              <div className="submenu-item">Projects</div>
            </div>
          )}
        </div>
      </nav>

      {/* 하단 */}
      <div className="sidebar-footer">
        <span className="footer-dot" />
        <span className="footer-dot" />
        <span className="footer-dot" />
      </div>
    </aside>
  );
}