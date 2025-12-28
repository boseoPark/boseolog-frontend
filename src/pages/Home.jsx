import "../assets/styles/home.css";

import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="home-main">
        {/* 1. Quote */}
        <section className="section about-section">
          <div className="quote-hero">
            <p className="quote-text">
              “Progress, quietly — but consistently.”
            </p>
            <span className="quote-sub">— Boseo Park</span>
          </div>
        </section>

        {/* 2. Portfolio */}
        <section className="section">
          <h2>💼 Portfolio</h2>
          <div className="glass-grid">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="glass-card">
                <div className="card-thumb">
                  <img
                    src={`https://picsum.photos/400/250?random=portfolio${i}`}
                    alt="thumbnail"
                  />
                </div>

                <div className="card-body">
                  <h3 className="card-title">Project {i + 1}</h3>

                  <div className="card-meta">
                    <div className="meta-left">
                      <span>❤️ 42</span>
                      <span>👀 128</span>
                    </div>
                    <span className="card-date">2025.01.12</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 최근 공부하는 건요 */}
        <section className="section">
          <h2>📚 최근 공부하는 건요...</h2>
          <div className="glass-grid">
            {["WebFlux", "Redis", "Docker", "JPA", "Gateway"].map((t, i) => (
              <div key={t} className="glass-card">
                <div className="card-thumb">
                  <img
                    src={`https://picsum.photos/400/250?random=study${i}`}
                    alt="thumbnail"
                  />
                </div>

                <div className="card-body">
                  <h3 className="card-title">{t}</h3>
                  <div className="card-meta">
                    <div className="meta-left">
                      <span>❤️ 42</span>
                      <span>👀 128</span>
                    </div>
                    <span className="card-date">2025.01.12</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 개발 말고, 이런 하루들 */}
        <section className="section">
          <h2>📓 개발 말고, 이런 하루들…</h2>
          <div className="glass-grid">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="glass-card">
                <div className="card-thumb">
                  <img
                    src={`https://picsum.photos/400/250?random=diary${i}`}
                    alt="thumbnail"
                  />
                </div>

                <div className="card-body">
                  <h3 className="card-title">Diary #{i + 1}</h3>

                  <div className="card-meta">
                    <div className="meta-left">
                      <span>❤️ 42</span>
                      <span>👀 128</span>
                    </div>
                    <span className="card-date">2025.01.12</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}