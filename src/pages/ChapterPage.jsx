import { useParams, Link } from "react-router-dom";
import { CHAPTERS } from "../data/chapters";

export default function ChapterPage({ styles }) {
  const { slug } = useParams();
  const chapter = CHAPTERS.find(c => c.slug === slug);

  if (!chapter) {
    return (
      <div style={{ padding: 40 }}>
        Capítulo no encontrado
      </div>
    );
  }

  return (
    <section style={styles.section}>
      <div style={{ ...styles.container, maxWidth: 800 }}>
        
        <Link to="/#libro" style={styles.navLink}>
          ← Volver
        </Link>

        <h1 style={{ ...styles.h2, marginTop: 10 }}>
          {chapter.title}
        </h1>

        <div
          style={{
            marginTop: 20,
            fontFamily: "'Merriweather', serif",
            fontSize: 18,
            lineHeight: 1.8,
            textAlign: "justify",
            color: "#374151"
          }}
        >
          <div
  style={{
    marginTop: 20,
    fontFamily: "'Merriweather', serif",
    fontSize: 18,
    lineHeight: 1.8,
    textAlign: "justify",
    color: "#374151"
  }}
  dangerouslySetInnerHTML={{ __html: chapter.content }}
/>
        </div>

      </div>
    </section>
  );
}