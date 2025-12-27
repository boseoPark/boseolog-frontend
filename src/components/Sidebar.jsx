import "../assets/styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* 프로필 */}
      <div className="sidebar-profile">
        <img
          src="https://i.pravatar.cc/80"
          alt="profile"
          className="profile-img"
        />
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
        <div className="menu-item">
          <span className="icon">💻</span>
          <span>Dev Log</span>
        </div>
        <div className="menu-item">
          <span className="icon">✍️</span>
          <span>Diary</span>
        </div>
        <div className="menu-item">
          <span className="icon">🎀</span>
          <span>Favorites</span>
        </div>
        <div className="menu-item">
          <span className="icon">🌙</span>
          <span>Archive</span>
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
