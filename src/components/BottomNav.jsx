import "../assets/styles/bottom-nav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-item active">🏠</button>
      <button className="nav-item">💻</button>
      <button className="nav-item">✍️</button>
      <button className="nav-item">🎀</button>
      <button className="nav-item">🌙</button>
    </nav>
  );
}