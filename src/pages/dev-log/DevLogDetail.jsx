import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "../../assets/styles/devlog-detail.css";

export default function DevLogDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <MainLayout>
      <div className="detail-canvas">
        <div className="detail-layout">
          {/* MAIN */}
          <main className="detail-main">
            <button className="detail-back" onClick={() => navigate(-1)}>
              ← Back
            </button>

            <header className="detail-header">
              <h1 className="detail-title">Spring WebFlux 도입기</h1>
              <div className="detail-meta">
                <span>2025.01.10</span>
                <span>❤️ 32</span>
                <span>👀 210</span>
              </div>
            </header>

            <article className="detail-article">
              <p>
                기존 MVC 구조에서 WebFlux를 도입하며 어떤 문제가 있었고,
                왜 선택했는지 정리합니다.
              </p>
              <ul>
                <li>Blocking I/O 문제</li>
                <li>Thread 사용량</li>
                <li>적용 후 체감 성능</li>
              </ul>
            </article>

            <div className="detail-reaction">
              ❤️ <span>32명이 이 글에 공감했어요</span>
            </div>

            <section className="detail-comments">
              <h3>조용히 남긴 기록</h3>

              <textarea placeholder="이 글을 읽고 느낀 점을 남겨주세요." />
              <button className="comment-submit">남기기</button>

              <div className="comment-item">
                <strong>보서</strong>
                <p>이 글 도움 많이 됐어요.</p>

                <div className="reply">
                  <strong>작성자</strong>
                  <p>감사합니다 😊</p>
                </div>
              </div>
            </section>
          </main>

          {/* ASIDE */}
          <aside className="detail-aside">
            <div className="aside-box">
              <span className="aside-label">읽는 중</span>
              <strong>32%</strong>
              <div className="aside-progress">
                <div style={{ height: "32%" }} />
              </div>
            </div>

          </aside>
        </div>
      </div>
    </MainLayout>
  );
}