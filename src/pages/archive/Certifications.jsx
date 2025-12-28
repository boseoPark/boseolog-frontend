import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "../../assets/styles/certifications.css";

/**
 * MOCK DATA
 * - 나중에 API로 대체 가능
 */
const MOCK_CERTIFICATIONS = [
  {
    id: 1,
    title: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2024.11",
    level: "National Certificate",
    icon: "🏆",
    category: "certifications",
  },
  {
    id: 2,
    title: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회",
    date: "2024.09",
    level: "Linux",
    icon: "🐧",
    category: "certifications",
  },
  {
    id: 3,
    title: "Excel",
    issuer: "Microsoft",
    date: "2023.06",
    level: "Office Skill",
    icon: "📊",
    category: "certifications",
  },
  {
    id: 4,
    title: "PowerPoint",
    issuer: "Microsoft",
    date: "2023.06",
    level: "Office Skill",
    icon: "📈",
    category: "certifications",
  },
];

export default function Certifications() {
  const { category } = useParams(); // 확장 대비 (지금은 certifications 고정)

  const certifications = category
    ? MOCK_CERTIFICATIONS.filter((c) => c.category === category)
    : MOCK_CERTIFICATIONS;

  return (
    <MainLayout>
      <main className="cert-root">
        {/* Header */}
        <header className="cert-header">
          <h1>Archive
            {category && <span> · {category.toUpperCase()}</span>}
          </h1>
          <p className="cert-desc">
            노력의 결과는 조용히 쌓이고, 결국 형태가 됩니다.
          </p>
        </header>

        {/* Trophy Grid */}
        <section className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="cert-card">
              {/* Icon */}
              <div className="cert-icon">{cert.icon}</div>

              {/* Body */}
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                <div className="cert-meta">
                  <span className="cert-level">{cert.level}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </MainLayout>
  );
}