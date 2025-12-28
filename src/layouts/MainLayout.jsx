import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import TwinkleBackground from "../components/TwinkleBackground";
import TrailCursor from "../components/TrailCursor";

export default function MainLayout({ children }) {
  return (
    <div className="home-root">
      {/* 전역 이펙트 */}
      <TrailCursor />
      <TwinkleBackground />

      {/* PC 사이드바 */}
      <Sidebar />

      {/* 메인 콘텐츠 */}
      <main className="home-main">
        {children}
      </main>

      {/* 모바일 하단 네비 */}
      <div className="mobile-only">
        <BottomNav />
      </div>
    </div>
  );
}