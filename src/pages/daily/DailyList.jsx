import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "../../assets/styles/daily.css";

const MOCK_POSTS = [
  {
    id: 1,
    title: "Spring WebFlux 도입기",
    desc: "기존 MVC 구조에서 WebFlux를 도입하며 겪은 시행착오 정리",
    date: "2025.01.10",
    like: 32,
    view: 210,
    category: "backend",
    thumb: "https://picsum.photos/320/200?random=backend1",
  },
  {
    id: 2,
    title: "JPA 성능 튜닝 정리",
    desc: "N+1 문제와 fetch 전략에 대한 개인적인 기준",
    date: "2025.01.08",
    like: 45,
    view: 388,
    category: "backend",
    thumb: "https://picsum.photos/320/200?random=backend2",
  },
  {
    id: 3,
    title: "Docker로 개발 환경 통일하기",
    desc: "로컬 환경 지옥 탈출기",
    date: "2025.01.05",
    like: 27,
    view: 164,
    category: "infra",
    thumb: "https://picsum.photos/320/200?random=infra1",
  },
];

export default function DevLogList() {
  const { category } = useParams();

  const posts = category
    ? MOCK_POSTS.filter((p) => p.category === category)
    : MOCK_POSTS;

  return (
    <MainLayout>
      <main className="devlog-root">
        {/* Header */}
        <header className="devlog-header">
          <h1>
            Daily Log
            {category && <span> · {category.toUpperCase()}</span>}
          </h1>
          <p className="devlog-desc">
            기록은 조용히, 성장은 분명하게.
          </p>
        </header>

        {/* List */}
        <section className="devlog-list">
          {posts.map((post) => (
            <article key={post.id} className="devlog-card">
              {/* Thumbnail */}
              <div className="devlog-thumb">
                <img src={post.thumb} alt={post.title} />
              </div>

              {/* Body */}
              <div className="devlog-body">
                <h3 className="devlog-title">{post.title}</h3>
                <p className="devlog-excerpt">{post.desc}</p>

                <div className="devlog-meta">
                  <div className="meta-left">
                    <span>❤️ {post.like}</span>
                    <span>👀 {post.view}</span>
                  </div>
                  <span className="devlog-date">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </MainLayout>
  );
}